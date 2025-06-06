import type { Config } from "release-it";

import {
	commitGroupsSort,
	commitPartial,
	mainTemplate,
	transform,
} from "./scripts/release-it/conventional-changelog-writer-options.js";

export default {
	hooks: { "before:init": ["pnpm lint"] },
	git: {
		requireBranch: "main",
		requireCommits: true,
		requireCleanWorkingDir: false,
		commitMessage: "🚀 Release v${version}",
		commitArgs: ["--no-verify", "-S"],
		tagArgs: ["-s"],
	},
	github: {
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
					"%B%n-hash-%n%H%n-shortHash-%n%h%n-gitTags-%n%d%n-committerDate-%n%ci%n-authorName-%n%an%n-authorEmail-%n%ae%n",
			},
			writerOpts: {
				mainTemplate,
				commitPartial,
				transform,
				commitGroupsSort,
			},
		},
	},
} satisfies Config;
