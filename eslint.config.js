import angularParser from "@angular-eslint/template-parser";
import js from "@eslint/js";
import gitignore from "eslint-config-flat-gitignore";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPromise from "eslint-plugin-promise";
import eslintPluginTailwind from "eslint-plugin-tailwindcss";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";

const FLAT_RECOMMENDED = "flat/recommended";

const templateParser = {
	meta: angularParser.meta,
	parseForESLint: angularParser.parseForESLint,
};

export default [
	gitignore(),
	js.configs.recommended,
	eslintConfigPrettier,
	eslintPluginUnicorn.configs[FLAT_RECOMMENDED],
	eslintPluginPromise.configs[FLAT_RECOMMENDED],
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
		ignores: ["**/package.json"],
		languageOptions: {
			globals: {
				...globals.browser,
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
