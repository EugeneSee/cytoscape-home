# Contributing to Cytoscape Home

Thank you for your interest in contributing to Cytoscape Home! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Branching Strategy](#branching-strategy)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Style](#code-style)
- [Testing](#testing)
- [Versioning](#versioning)

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please be respectful and professional in all interactions.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher)
- Git

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/cytoscape-home.git
   cd cytoscape-home
   ```

3. **Add the upstream remote**:

   ```bash
   git remote add upstream https://github.com/cytoscape/cytoscape-home.git
   ```

4. **Install dependencies**:

   ```bash
   npm install
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Development Workflow

1. **Sync with upstream** before starting new work:

   ```bash
   git checkout main
   git pull upstream main
   git push origin main
   ```

2. **Create a feature branch** from `main`:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** and commit them following our [commit guidelines](#commit-message-guidelines)

4. **Keep your branch updated** with main:

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

5. **Push your changes** to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

## Branching Strategy

We follow a simplified Git workflow:

- **`main`**: Production-ready code. Protected branch requiring PR reviews.
- **`feature/*`**: New features and enhancements
  - Example: `feature/add-protein-search`
- **`bugfix/*`**: Bug fixes
  - Example: `bugfix/fix-network-layout`
- **`refactor/*`**: Code refactoring without changing functionality
  - Example: `refactor/optimize-search-performance`
- **`docs/*`**: Documentation updates
  - Example: `docs/update-api-documentation`

### Branch Naming Conventions

- Use lowercase letters
- Separate words with hyphens
- Be descriptive but concise
- Include the type prefix (feature/, bugfix/, etc.)

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (whitespace, formatting)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvement
- **test**: Adding or updating tests
- **chore**: Changes to build process or auxiliary tools

### Examples

```
feat: add protein interaction network visualization

fix: resolve memory leak in cytoscape rendering

docs: update installation instructions in README

refactor: simplify search query builder logic

style: format code according to ESLint rules

perf: optimize network layout algorithm

test: add unit tests for gene search component

chore: update dependencies to latest versions
```

### Scope (Optional)

The scope provides additional context:

```
feat(search): add autocomplete for gene names
fix(network): correct edge rendering issue
docs(api): document new endpoint parameters
```

### Rules

- Use imperative, present tense: "add" not "added" or "adds"
- Don't capitalize the first letter
- No period (.) at the end
- Keep the first line under 72 characters
- Use the body to explain what and why, not how

## Pull Request Process

### Before Submitting

1. **Run the linter** and fix any issues:

   ```bash
   npm run lint
   ```

2. **Test your changes** thoroughly:

   ```bash
   npm run build
   npm run preview
   ```

3. **Update documentation** if needed

4. **Ensure your branch is up to date** with main

### PR Description Template

```markdown
## Description

Brief description of the changes

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## How Has This Been Tested?

Describe the tests you ran to verify your changes

## Screenshots (if applicable)

Add screenshots to demonstrate visual changes

## Checklist

- [ ] My code follows the project's style guidelines
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have checked my code and corrected any misspellings
```

### Review Process

1. At least one maintainer must approve the PR
2. All CI checks must pass
3. No merge conflicts with the main branch
4. Code must follow project conventions and style

### Merging

- PRs are typically merged using "Squash and merge"
- The commit message should follow conventional commit format
- Delete your branch after merging

## Code Style

### JavaScript/JSX

- **2 spaces** for indentation
- **Single quotes** for strings (enforced by ESLint)
- **Semicolons** required
- **Arrow functions** preferred for anonymous functions
- **Destructuring** when appropriate
- **Meaningful variable names**

### React Conventions

- **Functional components** with hooks
- **PascalCase** for component names
- **camelCase** for function and variable names
- **Props destructuring** in component parameters
- **PropTypes or TypeScript** for type checking (when applicable)

### CSS/Tailwind

- Use **Tailwind utility classes** when possible
- Custom CSS should be minimal and well-documented
- Follow **mobile-first** responsive design
- Use **semantic color names** from theme

### File Organization

```
src/
├── app/              # Route pages and layouts
├── components/       # Reusable UI components
│   ├── base/        # Base/primitive components
│   └── wizards/     # Complex wizard components
├── images/          # Image assets
└── styles/          # Global styles
```

## Testing

Currently, the project uses manual testing. We welcome contributions to add automated testing!

### Manual Testing Checklist

- [ ] Test on Chrome, Firefox, and Safari
- [ ] Test on desktop and mobile viewports
- [ ] Verify no console errors or warnings
- [ ] Test all interactive elements
- [ ] Verify accessibility (keyboard navigation, screen readers)

### Future Testing Goals

- Unit tests with Vitest
- Component tests with React Testing Library
- E2E tests with Playwright
- Visual regression tests

## Versioning

This project follows [Semantic Versioning](https://semver.org/):

- **MAJOR** version for incompatible API changes
- **MINOR** version for backwards-compatible functionality additions
- **PATCH** version for backwards-compatible bug fixes

Version updates are managed through:

1. Update version in `package.json`
2. Document changes in `CHANGELOG.md`
3. Create a Git tag for the release
4. Deploy to production

## Questions?

If you have questions or need help:

1. Check existing [Issues](https://github.com/cytoscape/cytoscape-home/issues)
2. Open a new issue with the "question" label
3. Reach out to the maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Cytoscape Home! 🎉
