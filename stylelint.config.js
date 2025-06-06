/** @type {import('stylelint').Config} */
export default {
	allowEmptyInput: true,
	extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,

	// Add your own rules here
	rules: {
		// For Tailwind CSS
		"import-notation": "string",

		// Add your own rules here
		// tailwindcss
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"config",
					"plugin",
					"layer",
					"theme",
					"source",
					"utility",
					"variant",
					"custom-variant",
					"apply",
					"reference",
				],
			},
		],
	},
};
