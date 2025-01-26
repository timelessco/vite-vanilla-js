import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{html,css,js}"],
	plugins: [
		plugin(({ addBase }) => {
			addBase({
				"*": {
					"text-wrap": "pretty",
				},
				"h1, h2, h3, h4, h5, h6": {
					"text-wrap": "balance",
				},
			});
		}),
		plugin(({ addUtilities }) => {
			addUtilities({
				".optimizeLegibility": {
					"text-rendering": "optimizeLegibility",
				},
			});
		}),
	],
};
