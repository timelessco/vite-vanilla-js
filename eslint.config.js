import angularParser from "@angular-eslint/template-parser";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginTailwind from "eslint-plugin-tailwindcss";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

const FLAT_RECOMMENDED = "flat/recommended";
const compat = new FlatCompat();

const templateParser = {
	meta: angularParser.meta,
	parseForESLint: angularParser.parseForESLint,
};

export default [
	gitignore(),
	js.configs.recommended,
	eslintConfigPrettier,
	eslintPluginUnicorn.configs[FLAT_RECOMMENDED],
	...compat.extends("plugin:promise/recommended"),
	{
		files: ["**/*.html"],
		languageOptions: {
			parser: templateParser,
		},

		plugins: {
			tailwindcss: eslintPluginTailwind,
		},

		rules: {
			...eslintPluginTailwind.configs[FLAT_RECOMMENDED][1].rules,
		},
	},
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
		},

		plugins: {},

		rules: {},
	},
];
