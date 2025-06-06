/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair */

import comments from "@eslint-community/eslint-plugin-eslint-comments/configs";
import js from "@eslint/js";
import importPlugin from "eslint-plugin-import-x";
import jsdoc from "eslint-plugin-jsdoc";
import jsonc from "eslint-plugin-jsonc";
import node from "eslint-plugin-n";
import packageJson from "eslint-plugin-package-json";
import perfectionist from "eslint-plugin-perfectionist";
import * as regexp from "eslint-plugin-regexp";
import unicorn from "eslint-plugin-unicorn";
import yml from "eslint-plugin-yml";
import { defineConfig } from "eslint/config";

export default defineConfig(
	{
		ignores: [
			// Package Manager
			"node_modules",
			"pnpm-lock.yaml",
			// Extras(if any)
			".turbo/**/*",
			"public/**/*",
			"dist/**/*",
			"CHANGELOG.md",
			"scripts/release-it/**/*",
		],
	},
	{ linterOptions: { reportUnusedDisableDirectives: "error" } },
	comments.recommended,
	perfectionist.configs["recommended-natural"],
	{
		rules: {
			"perfectionist/sort-imports": "off",
			"perfectionist/sort-modules": "off",
			"perfectionist/sort-named-imports": "off",
		},
		settings: {
			perfectionist: { partitionByComment: true, type: "natural" },
		},
	},
	regexp.configs["flat/recommended"],
	{
		extends: [node.configs["flat/recommended-script"]],
		ignores: ["src/**/*"],
		rules: {
			"n/no-missing-import": "off",
		},
	},
	js.configs.recommended,
	{
		rules: {
			"no-undef": "off",
		},
	},
	{
		// eslint-disable-next-line import-x/no-named-as-default-member
		extends: [importPlugin.flatConfigs.recommended],
		files: ["**/*.{js,cjs}"],
		ignores: ["**/*.md/*.{js,cjs}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		rules: {
			"import-x/no-dynamic-require": "warn",
			"no-unused-vars": "off",
		},
	},
	unicorn.configs.recommended,
	{
		rules: {
			"unicorn/filename-case": "off",
			"unicorn/no-null": "off",
			"unicorn/prevent-abbreviations": "off",
		},
	},
	jsdoc.configs["flat/recommended"],
	{
		rules: {
			"jsdoc/check-tag-names": ["warn", { typed: false }],
			"jsdoc/require-jsdoc": [
				"warn",
				{ require: { FunctionDeclaration: false } },
			],
		},
	},
	// eslint-disable-next-line import-x/no-named-as-default-member
	packageJson.configs.recommended,
	{
		extends: [
			jsonc.configs["flat/recommended-with-json"],
			jsonc.configs["flat/recommended-with-jsonc"],
			jsonc.configs["flat/prettier"],
		],
		rules: {
			"jsonc/no-comments": "off",
		},
	},
	{
		extends: [yml.configs["flat/recommended"], yml.configs["flat/prettier"]],
		files: ["**/*.{yml,yaml}"],
		rules: {
			"yml/file-extension": "off",
			"yml/sort-keys": [
				"error",
				{ order: { type: "asc" }, pathPattern: "^.*$" },
			],
			"yml/sort-sequence-values": [
				"error",
				{ order: { type: "asc" }, pathPattern: "^.*$" },
			],
		},
	},
);
