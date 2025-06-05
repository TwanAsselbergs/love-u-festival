# Love U Festival


## Table of Contents

  - [Overview](#overview)
  - [Installation](#installation)
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


## Installation

Scan the QR Code below to head over to the app installation page:

![frame](https://github.com/user-attachments/assets/d3eaccb5-0437-4689-8053-88b38ba24bec)

Install button not working?

1. Tap the menu icon (share icon on iOS).

2. Choose "Add to Home Screen" from the dropdown options.

3. A prompt will appear asking if you’d like to install the app — select the "Install" button to install the app to your phone.

Or get started with this project locally. Follow these steps:

### Prerequisites

Requirements for running the website locally (in your browser).

- [Bun](https://bun.sh/) (or NPM)

### Installation Steps

1. Clone the repository:

   ```
   git clone https://github.com/TwanAsselbergs/love-u-festival.git
   ```

2. Navigate to the project folder:

   ```
   cd svelte
   ```

4. Inside /svelte, install dependencies:

   ```bash
   bun i
   ```

5. Inside /svelte, run the development server:

   ```bash
   bun run dev
   ```
   
6. Your project should be up and running!

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
- Faster alternative to npm/yarn.
- Handles dependencies, scripts, and server-side code efficiently.
- Simplifies the toolchain with built-in TypeScript, bundler, and test runner.


## Author(s)

- **Twan Asselbergs** - [TwanAsselbergs](https://github.com/TwanAsselbergs)


## License

This project is licensed under the [MIT](LICENSE) License - see the [LICENSE](LICENSE) file for details.
