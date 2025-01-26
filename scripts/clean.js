#!/usr/bin/env node
import { parseArgs } from "node:util";
import { select } from "@inquirer/prompts";
import { $ } from "execa";

const DIST = "dist";
const NODE_MODULES = "node_modules";

const options = [
	{
		name: `${DIST} - Remove dist directory`,
		value: DIST,
		description: "Removes ./dist directory",
	},
	{
		name: `${NODE_MODULES} - Remove all node_modules`,
		value: NODE_MODULES,
		description: "Removes all node_modules directories",
	},
	{
		name: "all - Clean everything",
		value: "all",
		description: "Runs all clean commands",
	},
];

const args = parseArgs({
	options: {
		"all": { type: "boolean", short: "a" },
		"dist": { type: "boolean", short: "d" },
		"node-modules": { type: "boolean", short: "n" },
	},
	allowPositionals: false,
}).values;

// Run with args if provided, otherwise show prompt
let value;
if (Object.keys(args).length > 0) {
	if (args.all)
		value = "all";
	else if (args.dist)
		value = DIST;
	else if (args["node-modules"])
		value = NODE_MODULES;
}
else {
	value = await select({
		message: "Select what to clean",
		choices: options,
	});
}

const $$ = $({ stdio: "inherit" });

switch (value) {
	case "all": {
		await Promise.all([
			$$`rimraf ./dist`,
			$$`rimraf --glob **/node_modules`,
		]);
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
