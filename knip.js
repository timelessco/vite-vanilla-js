/** @type {import('knip').KnipConfig} */
export default {
	entry: ["src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}!"],
	exclude: ["types"],
	ignoreBinaries: ["lint-staged"],
	include: ["nsExports"],
	project: [
		"src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}!",
		"**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}",
	],
};
