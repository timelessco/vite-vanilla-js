import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getGithubCommits } from "./get-commits-since-last-release.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let remoteCommits = [];

// Cache for remote commits to avoid multiple API calls
async function getRemoteCommits() {
	if (remoteCommits.length === 0) {
		remoteCommits = await getGithubCommits();
	}

	return remoteCommits;
}

const owner
	= "{{#if this.owner}}{{~this.owner}}{{else}}{{~@root.owner}}{{/if}}";
const host = "{{~@root.host}}";
const repository
	= "{{#if this.repository}}{{~this.repository}}{{else}}{{~@root.repository}}{{/if}}";
const issuePrefixes = ["#"];

const types = [
	{ type: "feat", section: "⭐ New Features" },
	{ type: "fix", section: "🐞 Bug Fixes" },
	{
		type: "refactor",
		section: "♻️  Code Refactoring",
	},
	{
		type: "perf",
		section: "⚡️  Performance Improvements",
	},
	{
		type: "docs",
		section: "📔 Documentation Changes",
	},
	{ type: "test", section: "🧪 Test Updates" },
	{ type: "build", section: "🛠️ Build Updates" },
	{ type: "ci", section: "💚 CI Changes" },
	{ type: "revert", section: "⏪️ Reverted Changes" },
	{
		type: "chore",
		section: "🔨 Maintenance Updates",
	},
	{ type: "style", section: "🎨 Code Style Changes" },
];

function findTypeEntry(typesArgument, commitArgument) {
	const typeKey = (
		commitArgument.revert ? "revert" : commitArgument.type || ""
	).toLowerCase();

	return typesArgument.find((entry) => {
		return (
			entry.type === typeKey
			&& (!entry.scope || entry.scope === commitArgument.scope)
		);
	});
}

// expand on the simple mustache-style templates supported in
// configuration (we may eventually want to use handlebars for this).
function expandTemplate(templateArgument, context) {
	let expanded = templateArgument;

	for (const key of Object.keys(context)) {
		expanded = expanded.replace(
			// Need to disable the rule here because of the runtime error - SyntaxError: Invalid regular expression: /{{host}}/: Lone quantifier brackets
			new RegExp(`{{${key}}}`, "g"),
			context[key],
		);
	}

	return expanded;
}

const commitUrlFormat = expandTemplate(
	"{{host}}/{{owner}}/{{repository}}/commit/{{hash}}",
	{
		host,
		owner,
		repository,
	},
);

/**
 * Generates a URL for a commit hash based on the provided context.
 * @param {object} context - The context object containing host, owner, and repository information.
 * @param {string} commitHash - The commit hash for which to generate the URL.
 * @returns {string} The URL for the specified commit hash.
 */
function generateCommitUrl(context, commitHash) {
	return `${context.host}/${context.owner}/${context.repository}/commit/${commitHash}`;
}

/**
 * Returns the title-cased scope of a commit, if it exists.
 * @param {object} commit - The commit object to extract the scope from.
 * @returns {string|null} The title-cased scope of the commit, or null if it does not exist.
 */
function getTitleCasedScope(commit) {
	const scope = commit?.scope?.toUpperCase();
	return scope ?? undefined;
}

export async function transform(commit, context) {
	const patch = {};
	const issues = [];

	// Set new values in patch instead of modifying commit
	if (commit.authorName === "renovate[bot]") {
		patch.body = "";
	}

	const entry = findTypeEntry(types, commit);
	if (entry) {
		patch.type = entry.section;
	}

	// Handle breaking changes
	const breakingHeaderPatternRegex = /^\w*(?:\(.*\))?!: (.*)$/u;
	const match = breakingHeaderPatternRegex.exec(commit.header);
	if (match) {
		patch.notes = [{
			title: "🧨 BREAKING CHANGE",
			text: undefined,
			scope: getTitleCasedScope(commit),
			body: commit?.body,
			subject: commit?.subject,
			header: match[1],
			shortHash: commit.shortHash,
			hashUrl: generateCommitUrl(context, commit.hash),
		}];
		patch.body = undefined;
	}

	// Handle notable changes
	if (/^(?:feat|fix)\(.+:\s.*$/u.test(commit.header) && commit?.body) {
		context.notableChanges = context.notableChanges || [];
		context.notableChanges.push({
			scope: getTitleCasedScope(commit),
			body: commit.body,
			subject: commit?.subject,
			shortHash: commit.shortHash,
			hashUrl: generateCommitUrl(context, commit.hash),
		});
	}

	// Handle other notable changes
	if (/^(?:refactor|perf|docs)\(.+:\s.*$/u.test(commit.header) && commit?.body) {
		context.otherNotableChanges = context.otherNotableChanges || [];
		context.otherNotableChanges.push({
			scope: getTitleCasedScope(commit),
			body: commit.body,
			subject: commit?.subject,
			shortHash: commit.shortHash,
			hashUrl: generateCommitUrl(context, commit.hash),
		});
	}

	// Update context flags
	context.hasNotableChanges = (context.notableChanges || []).length > 0;
	context.hasOtherNotableChanges = (context.otherNotableChanges || []).length > 0;
	context.notableChangesTitle = "👀 Notable Changes";
	context.otherNotableChangesTitle = "📌 Other Notable Changes";

	if (commit.scope === "*") {
		patch.scope = "";
	}

	if (typeof commit.hash === "string") {
		patch.shortHash = commit.hash.slice(0, 7);
	}

	// Handle issue links
	if (typeof commit.subject === "string") {
		// Issue URLs.
		const issueRegEx = `(${issuePrefixes.join("|")})(\\d+)`;
		const re = new RegExp(issueRegEx, "gu");

		patch.subject = commit.subject.replace(re, (_, prefix, issue) => {
			issues.push(prefix + issue);

			const url = expandTemplate("{{host}}/{{owner}}/{{repository}}/issues/{{id}}", {
				host: context.host,
				owner: context.owner,
				repository: context.repository,
				id: issue,
			});

			return `[${prefix}${issue}](${url})`;
		});

		// Handle user links
		patch.subject = patch.subject.replace(
			/\B@([a-z\d](?:-?[a-z\d/]){0,38})/gu,
			(_, user) => {
				if (user.includes("/")) {
					return `@${user}`;
				}

				const usernameUrl = expandTemplate("{{host}}/{{user}}", {
					host: context.host,
					user,
				});

				return `[@${user}](${usernameUrl})`;
			},
		);
	}

	// Remove references that already appear in the subject
	patch.references = commit.references.filter(reference =>
		!issues.includes(reference.prefix + reference.issue),
	);

	// Add GitHub user info
	const commits = await getRemoteCommits();
	const matchedRemoteCommit = commits.find(
		remoteCommit => remoteCommit.shortHash === commit.shortHash,
	);
	if (matchedRemoteCommit?.login) {
		patch.userLogin = matchedRemoteCommit.login;
	}

	return patch;
}

export const mainTemplate = readFileSync(
	path.resolve(__dirname, "./templates/template.hbs"),
	"utf8",
);

const commitTemplate = readFileSync(
	path.resolve(__dirname, "./templates/commit.hbs"),
	"utf8",
);

const issueUrlFormat = expandTemplate(
	"{{host}}/{{owner}}/{{repository}}/issues/{{id}}",
	{
		host,
		owner,
		repository,
		id: "{{this.issue}}",
	},
);

export const commitPartial = commitTemplate
	.replaceAll("{{commitUrlFormat}}", commitUrlFormat)
	.replaceAll("{{issueUrlFormat}}", issueUrlFormat);

export function commitGroupsSort(a, b) {
	const commitGroupOrder = [
		"🎨 Code Style Changes",
		"💚 CI Changes",
		"🔨 Maintenance Updates",
		"🧪 Test Updates",
		"🛠️ Build Updates",
		"⏪️ Reverted Changes",
		"📔 Documentation Changes",
		"⚡️  Performance Improvements",
		"♻️  Code Refactoring",
		"🐞 Bug Fixes",
		"⭐ New Features",
	];
	const gRankA = commitGroupOrder.indexOf(a.title);
	const gRankB = commitGroupOrder.indexOf(b.title);

	return gRankA >= gRankB ? -1 : 1;
}
