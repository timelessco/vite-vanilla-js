import {
	commitGroupsSort,
	commitPartial,
	mainTemplate,
	transform,
} from "./scripts/release-it/conventional-changelog-writer-options.js";

/** @type {import('release-it').Config} */
export default {
	hooks: {
		"before:init": ["pnpm lint"],
	},
	git: {
		requireBranch: "main",
		requireCommits: true,
		// eslint-disable-next-line no-template-curly-in-string
		commitMessage: "🚀 Release v${version}",
		commitArgs: ["--no-verify", "-S"],
		tagArgs: ["-s"],
	},
	github: {
		// eslint-disable-next-line no-template-curly-in-string
		releaseName: "Release v${version}",
		release: true,
		comments: { submit: true },
	},
	npm: { publish: false },
	plugins: {
		"@release-it/conventional-changelog": {
			preset: { name: "conventionalcommits" },
			infile: "CHANGELOG.md",
			// ignoreRecommendedBump: true,
			gitRawCommitsOpts: {
				format:
					"%B%n-hash-%n%H%n-shortHash-%n%h%n-gitTags-%n%d%n-committerDate-%n%ci%n-authorName-%n%an%n-authorEmail-%n%ae%n-gpgStatus-%n%G?%n-gpgSigner-%n%GS",
			},
			writerOpts: {
				mainTemplate,
				commitPartial,
				transform,
				commitGroupsSort,
			},
		},
	},
};
