# Development

## Table of Contents

- [Development](#development)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Configuration](#configuration)
  - [Installing the dependencies](#installing-the-dependencies)
  - [Running the project locally](#running-the-project-locally)
  - [Building the project](#building-the-project)
  - [More DX scripts](#more-dx-scripts)
    - [Prettier](#prettier)
    - [Eslint](#eslint)
    - [Check unused dependencies, exports \& types](#check-unused-dependencies-exports--types)
    - [Stylelint](#stylelint)
    - [Markdown](#markdown)
    - [Cspell](#cspell)
    - [PNPM Dedupe](#pnpm-dedupe)

## Prerequisites

Before you get started, you will need to have the following tools installed on your machine:

- **[Git](https://git-scm.com/)** (recommended for version control)
- **[Node.js](https://nodejs.org/en/)** (see [.nvmrc](../.nvmrc) for the version)
- **[pnpm](https://pnpm.io/)** (latest version)

> This repository includes a list of suggested VS Code extensions.
> It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

## Getting Started

## Configuration

The project uses environmental variables for configuration. You can set the
environmental variables in a **`.env`** file in the root directory of the
project.

- `GITHUB_TOKEN`(**required**: The GitHub token for releasing the project).

## Installing the dependencies

After you have set the environmental variables in the **`.env`** file, you can run the project locally by

```shell
git clone https://github.com/timelessco/vite-vanilla-js
```

```shell
cd vite-vanilla-js
```

```shell
pnpm install
```

This will download and install all the required dependencies for the project.

## Running the project locally

```bash
pnpm dev
```

Open <http://localhost:3000> with your browser to see the result.

You can start editing the home page by modifying `index.html`.
The page auto-updates as you edit the file.

## Building the project

To build the project to a production environment, you can use the

```bash
pnpm build
```

to build the production-ready version of the project.
This will create a **`build`** directory with the compiled code and static assets.

Run the above built application locally using

```bash
pnpm preview
```

## More DX scripts

> Check for all the below errors in one command using [Turbo Repo](https://turbo.build/repo)

`pnpm lint`

> AutoFix all the linting errors in one command using [Turbo Repo](https://turbo.build/repo)

`pnpm fix`

### Prettier

[Prettier](https://prettier.io) is used to format code.
It should be applied automatically when you save files in VS Code or make a Git commit.

> Check the formatting errors

`pnpm lint:prettier`

> AutoFix the formatting errors

`pnpm fix:prettier`

> This package includes several forms of linting to enforce consistent code quality and styling.
> Each should be shown in VS Code, and can be run manually on the command-line.

### Eslint

**[ESLint](https://eslint.org)**: Lints JavaScript/TypeScript source files and other files

> Check for the linting errors

`pnpm lint:eslint`

> AutoFix the linting errors

`pnpm fix:eslint`

### Check unused dependencies, exports & types

**[knip](https://github.com/webpro-nl/knip)**: Checks all unused dependencies, exports & types

> Check the spelling errors

`pnpm lint:knip`

### Stylelint

**[Stylelint](https://stylelint.io/)**: Checks all css files

> Check the css linting errors

`pnpm lint:css`

> AutoFix the css linting errors

`pnpm fix:css`

### Markdown

**[Markdownlint](https://github.com/DavidAnson/markdownlint)**: Checks all Markdown files

> Check the markdown linting errors

`pnpm lint:md`

> AutoFix the markdown linting errors

`pnpm fix:md`

### Cspell

**[cspell](https://cspell.org)**: Spell checks across all source files

> Check the spelling errors

`pnpm lint:spelling`

> AutoFix the spelling errors

`pnpm fix:spelling`

### PNPM Dedupe

**[pnpm dedupe --check](https://pnpm.io/cli/dedupe)**: Lints the `pnpm-lock.yml` file

> Check for unnecessarily duplicated packages

- `pnpm check:packages`
