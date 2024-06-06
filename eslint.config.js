import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginSonarjs from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

const compat = new FlatCompat();

export default [
	gitignore(),
	js.configs.recommended,
	eslintConfigPrettier,
	eslintPluginUnicorn.configs["flat/recommended"],
	eslintPluginSonarjs.configs.recommended,
	...compat.extends("plugin:promise/recommended"),
	{
		ignores: ["**/.vercel", "**/package.json"],
		languageOptions: {
			globals: {
				...globals.browser,
				EmblaCarousel: "readonly",
				EmblaCarouselClassNames: "readonly",
				gsap: "readonly",
				ScrollToPlugin: "readonly",
				ScrollTrigger: "readonly",
			},

			ecmaVersion: "latest",
			sourceType: "module",
		},

		settings: {
			"import/resolver": {
				node: {
					extensions: [".js"],
					moduleDirectory: ["node_modules", "src/"],
				},
			},
			tailwindcss: {
				callees: ["class"],
			},
		},

		plugins: {},

		rules: {},
	},
];
