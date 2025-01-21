import path from "node:path";

import legacy from "@vitejs/plugin-legacy";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default {
	server: {
		host: "localhost",
		port: 3000,
	},
	plugins: [
		// https://github.com/vitejs/vite/tree/main/packages/plugin-legacy
		legacy(),
		// https://github.com/zhuweiyou/vite-plugin-minify
		ViteMinifyPlugin(),
	],
	build: {
		rollupOptions: {
			// https://vite.dev/guide/build.html#multi-page-app
			input: {
				main: path.resolve(import.meta.dirname, "index.html"),
			},
		},
	},
};
