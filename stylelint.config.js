/** @type {import('stylelint').Config} */
export default {
	extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
	reportNeedlessDisables: true,
	reportInvalidScopeDisables: true,
	allowEmptyInput: true,
	rules: {
		// Add your own rules here
		// Need vendor prefix in preflight css
		"property-no-vendor-prefix": undefined,

		"property-no-unknown": [
			true,
			{
				ignoreProperties: ["font-named-instance"],
			},
		],
		"selector-id-pattern":
			"^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^__[a-z]([a-z0-9-]+)$",

		// For Tailwind CSS
		"import-notation": "string",
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"layer",
					"config",
					// tailwindcss v1, v2
					"variants",
					"responsive",
					"screen",
					"theme",
				],
			},
		],

		"function-no-unknown": [
			true,
			{
				ignoreFunctions: ["theme"],
			},
		],
	},
};
