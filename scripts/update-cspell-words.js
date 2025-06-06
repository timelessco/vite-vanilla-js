import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { $ } from "execa";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function readCspellConfig(filePath) {
	return JSON.parse(await fs.readFile(filePath, "utf8"));
}

async function writeCspellConfig(filePath, config) {
	await fs.writeFile(filePath, `${JSON.stringify(config, undefined, "\t")}\n`);
}

async function updateWordsInConfig(filePath, words) {
	const config = await readCspellConfig(filePath);
	config.words = words;
	await writeCspellConfig(filePath, config);
}

async function updateCspellWords() {
	const cspellPath = path.join(__dirname, "..", "cspell.json");

	// Clear existing words
	await updateWordsInConfig(cspellPath, []);

	// Run cspell command and get output
	const { stdout } = await $({
		reject: false,
	})`cspell --words-only --unique --gitignore --cache --dot **/*`;

	const newWords = stdout
		.trim()
		.split("\n")
		.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

	// Update with new words
	await updateWordsInConfig(cspellPath, newWords);
}

await updateCspellWords();
