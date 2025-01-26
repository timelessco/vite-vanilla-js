/** @type {import('knip').KnipConfig} */
export default {
	entry: ["src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}!"],
	project: [
		"src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}!",
		"**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}",
	],
	include: ["nsExports"],
	exclude: ["types"],
	ignoreBinaries: ["lint-staged"],
};
