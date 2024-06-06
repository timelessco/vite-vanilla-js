import path from "node:path";

import legacy from "@vitejs/plugin-legacy";
import { splitVendorChunkPlugin } from "vite";

export default {
	server: {
		host: "localhost",
		port: 3000,
	},
	plugins: [legacy(), splitVendorChunkPlugin()],
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(import.meta.dirname, "index.html"),
			},
		},
	},
};
