import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{html,css,js}"],
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".optimizeLegibility": {
					"text-rendering": "optimizeLegibility",
				},
			});
		}),
	],
};
