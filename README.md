# Cytoscape Home

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/cytoscape/cytoscape-home)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://cytoscape-home.pages.dev/)

A modern web application for exploring biological networks and pathways using Cytoscape.js, built with React and Vite.

## Preview

A live preview of the `main` branch can be found at [cytoscape-home.pages.dev](https://cytoscape-home.pages.dev/).

## Features

- 🧬 **Gene Search**: Explore gene interactions and biological pathways
- 🔬 **Network Visualization**: Interactive network rendering with Cytoscape.js
- 📊 **Enrichment Analysis**: Analyze and visualize enrichment results
- 📚 **Tutorial Wizards**: Step-by-step guides for common workflows
- 🎨 **Modern UI**: Beautiful, responsive interface built with Tailwind CSS
- ⚡ **Fast Performance**: Optimized build with Vite and React 18

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

First, ensure you've installed the dependencies:

```
npm install
```

### Development

Run the local development server with hot module replacement:

```
npm run dev
```

Or use the watch mode:

```
npm run watch
```

The application will be available at `http://localhost:5173`

## Build Targets

```
npm run <target>
```

Available commands:

- **`dev`** or **`watch`**: Run a local dev server with automatic builds when you change the source
- **`lint`**: Run the linter (ESLint) to check code quality
- **`build`**: Build the application for production
- **`preview`**: Preview the production build locally
- **`format`**: Format code using Prettier
- **`format:check`**: Check code formatting without making changes

## Project Structure

```
cytoscape-home/
├── public/           # Static assets
│   ├── fonts/       # Font files
│   ├── images/      # Images and icons
│   └── tutorials/   # Tutorial resources
├── src/
│   ├── app/         # Application routes and pages
│   ├── components/  # Reusable React components
│   ├── images/      # Image assets
│   └── styles/      # Global styles and Tailwind config
├── .editorconfig    # Editor configuration
├── .gitattributes   # Git attributes for file handling
├── .gitignore       # Git ignore patterns
├── CHANGELOG.md     # Version history
├── CONTRIBUTING.md  # Contribution guidelines
└── package.json     # Project dependencies and scripts
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Code of conduct
- Development workflow
- Branching strategy
- Commit message conventions
- Pull request process

## Versioning

This project follows [Semantic Versioning](https://semver.org/). See [CHANGELOG.md](CHANGELOG.md) for a detailed version history.

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Cytoscape.js** - Network visualization
- **TanStack Query** - Data fetching and caching
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Headless UI** - Unstyled accessible UI components

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright © 2023-2024 The Cytoscape Consortium

## Links

- [Live Demo](https://cytoscape-home.pages.dev/)
- [Cytoscape.js Documentation](https://js.cytoscape.org/)
- [Issue Tracker](https://github.com/cytoscape/cytoscape-home/issues)
- [Changelog](CHANGELOG.md)

## Acknowledgments

Developed and maintained by The Cytoscape Consortium.
