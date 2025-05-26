# Love U Festival


## Table of Contents

  - [Overview](#overview)
  - [Installation Guide](#installation-guide)
  - [Architecture](#architecture)
  - [Author(s)](#authors)
  - [License](#license)


## Overview

Love U Festival is an individual school project for a fictional company named Love U. For this project, we were tasked to build a Progressive Web Application (PWA) for their festival-goers.

1. Front-end (`/svelte`)

   - Serves as the front-end folder that uses Svelte as its framework.
   - Utilizes Tailwind CSS and the Vite PWA Plugin.

2. Documents (`/docs`)

   - Contains all the documents of this project.


## Installation Guide

To get started with this project locally, follow these steps:

### Prerequisites

Requirements for running the website locally (in your browser).

- [Bun](https://bun.sh/) (or NPM)

### Installation Steps

1. Clone the repository and navigate to the project folder:

   ```
   git clone https://github.com/TwanAsselbergs/love-u-festival.git
   cd svelte
   ```

2. Inside /svelte, install dependencies:

   ```bash
   bun i
   ```

3. Inside /svelte, run the development server:

   ```bash
   bun run dev
   ```


## Architecture

### Framework: Svelte
- Chosen for its **reactivity**, **simplicity**, and **performance**.
- Compiles to vanilla JavaScript at build time, resulting in fast runtime performance.
- Excellent for building highly interactive, reactive user interfaces.

### Styling: Tailwind CSS
- Utility-first CSS framework that enables rapid UI development.
- Helps maintain **clean**, **consistent**, and **responsive** design.
- Reduces the need for custom CSS files.

### Bundler: Vite
- Modern frontend build tool optimized for speed and developer experience.
- Native support for Svelte via plugins.
- **Instant HMR**, fast cold starts, and optimized production builds.

### PWA Support: Vite PWA Plugin
- Adds service worker and manifest generation.
- Enables **offline access**, **installable app** support, and caching strategies.

### Package Manager & Runtime: Bun
- Blazing fast alternative to npm/yarn.
- Handles dependencies, scripts, and server-side code efficiently.
- Simplifies the toolchain with built-in TypeScript, bundler, and test runner.


## Author(s)

- **Twan Asselbergs** - [TwanAsselbergs](https://github.com/TwanAsselbergs)


## License

This project is licensed under the [MIT](LICENSE) License - see the [LICENSE](LICENSE) file for details.
