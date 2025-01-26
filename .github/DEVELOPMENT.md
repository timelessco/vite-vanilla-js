# Development

## Table of Contents

- [Development](#development)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installing the dependencies](#installing-the-dependencies)
  - [Configuration](#configuration)
  - [Running the project locally](#running-the-project-locally)
  - [Building the project](#building-the-project)
  - [More DX scripts](#more-dx-scripts)
    - [Eslint](#eslint)
    - [Stylelint](#stylelint)
    - [Knip](#knip)
    - [Cspell](#cspell)
    - [PNPM Dedupe](#pnpm-dedupe)

## Prerequisites

Before you get started, you will need to have the following tools installed on
your machine:

- **[Git](https://git-scm.com/)** (recommended for version control)
- **[Node.js](https://nodejs.org/en/)** (see [.nvmrc](../.nvmrc) for the version)
- **[pnpm](https://pnpm.io/)** (latest version)

> This repository includes a list of suggested VS Code extensions. It's a good idea to use [VS Code](https://code.visualstudio.com) and accept its suggestion to install them, as they'll help with development.

## Installing the dependencies

After you have set the environmental variables in the **`.env`** file, you can
run the project locally by

```shell
git clone https://github.com/timelessco/vite-vanilla-js
cd vite-vanilla-js
pnpm install
```

This will download and install all the required dependencies for the project.

## Configuration

The project uses environmental variables for configuration. You can set the
environmental variables in a **`.env`** file in the root directory of the
project.

- `GITHUB_TOKEN`(**required**: The GitHub token for releasing the project).

## Running the project locally

```bash
pnpm dev
```

## Building the project

To build the project to a production environment, you can use the

```bash
pnpm build
```

Run the above built application locally using

```bash
pnpm preview
```

## More DX scripts

> Check for all the below errors in one command

`pnpm lint`

> AutoFix all the linting errors in one command

`pnpm fix`

### Eslint

**[ESLint](https://eslint.org)**: Checks and formats all the files

> Check for the linting errors

`pnpm lint:eslint`

> AutoFix the linting errors

`pnpm fix:eslint`

### Stylelint

**[Stylelint](https://stylelint.io/)**: Checks all css files

> Check the css linting errors

`pnpm lint:css`

> AutoFix the css linting errors

`pnpm fix:css`

### Knip

**[knip](https://github.com/webpro/knip)**: Checks all unused dependencies,
exports & types

> Check the spelling errors

`pnpm lint:knip`

### Cspell

**[cspell](https://cspell.org)**: Spell checks across all source files

> Check the spelling errors

`pnpm lint:spelling`

### PNPM Dedupe

**[pnpm dedupe --check](https://pnpm.io/cli/dedupe)**: Lints the `pnpm-lock.yml` file

> Check for unnecessarily duplicated packages

- `pnpm lint:packages`
