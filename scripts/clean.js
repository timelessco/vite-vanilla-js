import { parseArgs } from "node:util";

import { select } from "@inquirer/prompts";
import { $ } from "execa";

const DIST = "dist";
const NODE_MODULES = "node_modules";

const options = [
	{
		description: "Removes ./dist directory",
		name: `${DIST} - Remove dist directory`,
		value: DIST,
	},
	{
		description: "Removes all node_modules directories",
		name: `${NODE_MODULES} - Remove all node_modules`,
		value: NODE_MODULES,
	},
	{
		description: "Runs all clean commands",
		name: "all - Clean everything",
		value: "all",
	},
];

const args = parseArgs({
	allowPositionals: false,
	options: {
		all: { short: "a", type: "boolean" },
		dist: { short: "d", type: "boolean" },
		"node-modules": { short: "n", type: "boolean" },
	},
}).values;

// Run with args if provided, otherwise show prompt
let value;
if (Object.keys(args).length > 0) {
	if (args.all) {
		value = "all";
	} else if (args.dist) {
		value = DIST;
	} else if (args["node-modules"]) {
		value = NODE_MODULES;
	}
} else {
	value = await select({
		choices: options,
		message: "Select what to clean",
	});
}

const $$ = $({ stdio: "inherit" });

switch (value) {
	case "all": {
		await Promise.all([$$`rimraf ./dist`, $$`rimraf --glob **/node_modules`]);
		console.log("✓ Cleaned dist and node_modules");
		break;
	}
	case DIST: {
		await $$`rimraf ./dist`;
		console.log("✓ Cleaned dist directory");
		break;
	}
	case NODE_MODULES: {
		await $$`rimraf --glob **/node_modules`;
		console.log("✓ Cleaned all node_modules");
		break;
	}
}
