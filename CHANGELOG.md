# Changelog

## <small>2.0.1 (2025-08-29)</small>

### 🗃️ Commits


#### 🐞 Bug Fixes

- **`eslint:`** update YAML configuration to extend standard rules - [cf447a4](https://github.com/timelessco/vite-vanilla-js/commit/cf447a4ea0c5e56a448aeac61032e3e2bc4dd3d7) by @navin-moorthy



#### 🔨 Maintenance Updates

- **`deps:`** 🧹 update dependencies to latest versions - [ed6053b](https://github.com/timelessco/vite-vanilla-js/commit/ed6053b8cb88564aa959b745ab1c55adc65f5e05) by @navin-moorthy

- **`deps:`** 🧹 update Node.js engine requirements - [5df081c](https://github.com/timelessco/vite-vanilla-js/commit/5df081c1b9dc7d1d191825d4a157651cb5054f36) by @navin-moorthy

- **`deps:`** add oxc-resolver to dependencies - [4a7b5a3](https://github.com/timelessco/vite-vanilla-js/commit/4a7b5a3673aa61653bf38b6a7e50c5d8d9f1036e) by @navin-moorthy

- **`deps:`** update all dependencies ([#8](https://github.com/timelessco/vite-vanilla-js/issues/8)) - [4d6445d](https://github.com/timelessco/vite-vanilla-js/commit/4d6445db97db38b13cad9dc9b106211ecdb957f3) by @renovate[bot]

- **`deps:`** update all dependencies ([#9](https://github.com/timelessco/vite-vanilla-js/issues/9)) - [5e9a626](https://github.com/timelessco/vite-vanilla-js/commit/5e9a626bd1c0e6f2601709aaa8caba3b3b3a9c47) by @renovate[bot]

- **`deps:`** update eslint and tailwindcss dependencies, improve eslint commands - [cecf3d8](https://github.com/timelessco/vite-vanilla-js/commit/cecf3d83608b138f1a7644118e0dce4cfe0eb0d2) by @navin-moorthy

## 2.0.0 (2025-06-06)

### 🧨 BREAKING CHANGE


#### `tooling`- updated to latest standards followed in other repos 

- Added .editorconfig for consistent coding styles.
- Created .env.example for environment variable setup.
- Introduced .gitattributes to manage line endings and file types.
- Added .markdownlint-cli2.jsonc for markdown linting configuration.
- Created .npmrc for PNPM settings.
- Added .prettierignore to specify files to ignore for Prettier.
- Updated cspell.json with new terms.
- Modified package.json to include additional built dependencies.
- Added prettier.config.cjs for Prettier configuration.
- Introduced turbo.json for task management.
- Created .github/labels.yml for issue labeling.
- Added workflows for cleaning up PR caches and syncing labels.
- Introduced commit-msg hook for commit message linting.


Introduced in: [`4f71fb5`](https://github.com/timelessco/vite-vanilla-js/commit/4f71fb51cb0dc340aa2fa71b9b9a42386cc31ddd)





### 🗃️ Commits


#### ⭐ New Features

- **`tooling:`** updated to latest standards followed in other repos - [4f71fb5](https://github.com/timelessco/vite-vanilla-js/commit/4f71fb51cb0dc340aa2fa71b9b9a42386cc31ddd) by @navin-moorthy

## <small>1.0.1 (2025-06-06)</small>

### 🗃️ Commits


#### 🛠️ Build Updates

- **`deps:`** 🛠️ update TailwindCSS to v4 - [013836a](https://github.com/timelessco/vite-vanilla-js/commit/013836a5cf3d54af175dfbb6683c1c68c5bb94ff) by @navin-moorthy



#### 🔨 Maintenance Updates

- **`deps:`** 🧹 update dependencies and VSCode settings - [ac26a4a](https://github.com/timelessco/vite-vanilla-js/commit/ac26a4ac6708ba1251188ef4d344755d2c24bd39) by @navin-moorthy

- **`deps:`** update all dependencies - [09aad5a](https://github.com/timelessco/vite-vanilla-js/commit/09aad5a631b2a92d20409a6ffbae4c0e9bf63f5d) by @renovate[bot]

- **`deps:`** update all dependencies - [ab2d97b](https://github.com/timelessco/vite-vanilla-js/commit/ab2d97bd0cd9b81b8d9799f6c3d58e1db6a8a528) by @renovate[bot]

- **`deps:`** update all dependencies - [69fb74e](https://github.com/timelessco/vite-vanilla-js/commit/69fb74e5d947fca4e88c8e77f377a82dd53fce42) by @renovate[bot]

- **`deps:`** update all dependencies ([#6](https://github.com/timelessco/vite-vanilla-js/issues/6)) - [ec72b07](https://github.com/timelessco/vite-vanilla-js/commit/ec72b07faf0a992eaa6b1c31f72a0451271cf219) by @renovate[bot]

- **`deps:`** update all dependencies ([#7](https://github.com/timelessco/vite-vanilla-js/issues/7)) - [d0c533e](https://github.com/timelessco/vite-vanilla-js/commit/d0c533ee29f783fbe51ddc79b8c00cd18ab38f89) by @renovate[bot]




- 🚀 chore(release-it): update release commit message with emoji - [49717b0](https://github.com/timelessco/vite-vanilla-js/commit/49717b02360045a10fcbbb09b42946ad9ecf386f)

## [1.0.0](https://github.com/timelessco/vite-vanilla-js/compare/0.0.0...1.0.0) (2025-01-26)


### 🧨 BREAKING CHANGE


#### `REPO`- ✨ add and update toolings 

- ✨ add and update toolings


Introduced in: [`958d786`](https://github.com/timelessco/vite-vanilla-js/commit/958d786e3715fe70def1f3cfbf38c11d4f219b00)




### 👀 Notable Changes



#### `RELEASE-IT`- 🧹 update to modern writer logic 

- Remove commitlint from Husky hooks and package.json
- Update release-it hooks format for consistency


Introduced in: [`3489703`](https://github.com/timelessco/vite-vanilla-js/commit/348970375781294c61834493c2ece27cc159a4fd)





### 📌 Other Notable Changes


#### `CHANGELOG`- ♻️ cache remote commits to reduce API calls 

- Implement a caching mechanism to avoid multiple calls to get remote commits
- Improves performance by reducing API requests


Introduced in: [`398ec3f`](https://github.com/timelessco/vite-vanilla-js/commit/398ec3fc848288c72f4e03e3af802f16c0368a72)





### 🗃️ Commits


#### ⭐ New Features

- **`release-it:`** 🧹 update to modern writer logic - [3489703](https://github.com/timelessco/vite-vanilla-js/commit/348970375781294c61834493c2ece27cc159a4fd) by @navin-moorthy

- **`repo:`** ✨ add and update toolings - [958d786](https://github.com/timelessco/vite-vanilla-js/commit/958d786e3715fe70def1f3cfbf38c11d4f219b00) by @navin-moorthy



#### ♻️  Code Refactoring

- **`changelog:`** ♻️ cache remote commits to reduce API calls - [398ec3f](https://github.com/timelessco/vite-vanilla-js/commit/398ec3fc848288c72f4e03e3af802f16c0368a72) by @navin-moorthy



#### 🔨 Maintenance Updates

- **`deps:`** 🧹 remove unused eslint dependency - [9907bd0](https://github.com/timelessco/vite-vanilla-js/commit/9907bd0c124ff0047ec71b321a9ec42876bcbf56) by @navin-moorthy

- **`deps:`** 🧹 switch dependency updater to npm-check-updates - [94dc2fe](https://github.com/timelessco/vite-vanilla-js/commit/94dc2fe3074182f5c4d0cd7b307ffa2a2ee59891) by @navin-moorthy

- **`release:`** 🧹 update release process and improve commit message - [26b90fd](https://github.com/timelessco/vite-vanilla-js/commit/26b90fd65e5739b50318d029a98b5af08d469ac6) by @navin-moorthy

- **`vscode:`** 🧹 update VS Code settings and extensions - [b6da874](https://github.com/timelessco/vite-vanilla-js/commit/b6da8748ff7ab1892798b907e92a8d32c393606d) by @navin-moorthy




- Monthly Maintenance Jan 2025 - [720b5e0](https://github.com/timelessco/vite-vanilla-js/commit/720b5e0f717a7f9e17cb29b787c4ba584129d80f) by @navin-moorthy

- Remove unwanted eslint deps - [9f4b9c4](https://github.com/timelessco/vite-vanilla-js/commit/9f4b9c4f9b3fed3d4e5a9a0df868847550a51850) by @navin-moorthy

- Update Eslint - [27976e3](https://github.com/timelessco/vite-vanilla-js/commit/27976e3fa087e2b5fcda2b3987ddfee38b9325d5) by @navin-moorthy

- Monthly Maintenance June 2024 - [2b22a75](https://github.com/timelessco/vite-vanilla-js/commit/2b22a75f822f37b4b95a2b6f4c89b9e151d10850) by @navin-moorthy
