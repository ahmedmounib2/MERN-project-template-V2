#MERN Fullstack Enterprise Starter Template

A production-ready boilerplate for modern web apps with **MongoDB, Express, React, Node.js**
featuring enterprise-grade code quality, security, and tooling.

## 🚀 Quick Start

### Clone & Initialize

```bash
git clone <repo-url>
cd <template-folder>
npm ci



---
🛠️ Enhanced Tech Stack
Core Architecture
Component	Technology
Database	MongoDB Atlas (with URI support)
Backend	Express.js + Node.js (ESM/TS)
Frontend	React (Vite + TypeScript Optional)
API Design	REST Best Practices
Code Quality Enforcement


📂 Professional Project Structure

project-root/
.
|-- .env
|-- .gitignore
|-- .prettierrc
|-- backend
|   |-- SRC
|   |   `-- index.js
|   |-- package-lock.json
|   `-- package.json
|-- eslint.config.js
|-- frontend

|   |-- index.html
|   |-- package-lock.json
|   |-- package.json
|   |-- public
|   |   `-- vite.svg
|   |-- src
|   |   |-- App.css
|   |   |-- App.jsx
|   |   |-- assets
|   |   |   `-- react.svg
|   |   |-- index.css
|   |   `-- main.jsx
|   `-- vite.config.js
|-- lintstagedrc
|-- package-lock.json
`-- package.json



Project Setup Guide
This project template uses a shared ESLint configuration for both the frontend and backend. Husky and lint-staged are configured at the root to ensure consistent code formatting and linting across the entire project.

1. Initial Setup
Make sure you have Node.js and npm installed. Then, clone this repository and install dependencies as needed.

Clone the repository:

git clone <repository-url>
cd <project-directory>
Install dependencies at the root:
At the root directory, install Husky, lint-staged, ESLint, and all necessary dev dependencies for both frontend and backend:


npm install husky lint-staged --save-dev
npm install --save-dev \
  eslint \
  @eslint/js \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-jsx-a11y \
  eslint-plugin-import \
  eslint-plugin-security \
  eslint-plugin-react-refresh \
  eslint-config-prettier \
  globals
Install dependencies in frontend and backend:
Navigate to both frontend and backend directories and run npm install to install the necessary dependencies for each.


cd frontend
npm install
cd ../backend
npm install
2. Husky Setup
Husky helps manage Git hooks for linting and formatting before commits.

Initialize Husky in the root directory:

cd ..
npx husky install
npm set-script prepare "husky install"
npm run prepare
This will set up the pre-commit hooks to ensure that lint-staged runs before commits, automatically fixing any linting issues.

Initialize Git hooks using Husky:

npx husky add .husky/pre-commit "npx lint-staged"
3. Linting & Formatting
To keep the code consistent and clean, we use ESLint and Prettier. The shared ESLint configuration is located in the root, and it handles linting for both the frontend and backend.

Run Linting:
Run linting across the entire project with the following command:


npm run lint
Run Linting with Auto-Fix:
You can run linting with the auto-fix option to automatically fix fixable issues:


npm run lint:fix
Format Code with Prettier:
To format the entire codebase with Prettier, use the following command:


npm run format
4. Project Structure
Root Directory:

Contains shared configurations for ESLint, Husky, and lint-staged.

The eslint.config.js file is shared for both frontend and backend.

Husky hooks are set up at the root level to ensure that linting and formatting occur before commits.

Frontend:

Contains all the React-related code and Vite configurations.

eslint.config.js is inherited from the root configuration, ensuring consistency with the backend.

Backend:

Contains the Express and Node.js related code.

Inherits the root ESLint configuration for consistent code quality.

5. Husky & lint-staged Workflow
Pre-commit Hook:
Before each commit, Husky will run lint-staged, which will:

Lint JavaScript, TypeScript, and other code files (JSX/TSX).

Auto-fix linting errors and format code using Prettier.

This ensures that only clean and properly formatted code gets committed to the repository.

6. Customization
Frontend Linting/Formatting:

The frontend package.json can include additional configuration if necessary (e.g., eslint-plugin-react for React-specific linting).

Customizations to the frontend linting rules should be done in the root eslint.config.js.

Backend Linting/Formatting:

The backend package.json can include additional configurations (e.g., eslint-plugin-import for import/export rules).

Backend-specific rules are also managed in the root eslint.config.js.

7. Running the Application
Frontend:
To start the frontend (Vite app):


npm run dev
Backend:
To start the backend (Node.js with Express):


npm run dev
Make sure both are running to have the full stack functional.

Summary of Commands
Install dependencies:


npm install husky lint-staged --save-dev
npm install --save-dev eslint @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-security eslint-plugin-react-refresh eslint-config-prettier globals
Husky setup:


npx husky install
npm set-script prepare "husky install"
npm run prepare
npx husky add .husky/pre-commit "npx lint-staged"
Linting:

Run lint: npm run lint

Auto-fix lint: npm run lint:fix

Format code: npm run format

Key Features
Zero-Warning Policy: --max-warnings 0 in CI

Type Safety: Optional type-check script

Security: Object injection/SQLi prevention

Accessibility: Strict jsx-a11y rules

🎨 CSS & Tailwind Linting with Stylelint
This template includes Stylelint for enforcing consistent and maintainable styles across CSS, SCSS, and Tailwind CSS files.

Stylelint Highlights
✅ Tailwind CSS-aware linting

✅ SCSS support

✅ CSS-in-JS / HTML-inlined styles support (via postcss-html)

✅ Enforced property ordering (optional)

✅ Preconfigured to run automatically via lint-staged before commits

project-root/
├── stylelint.config.js         # Central Stylelint configuration
├── .stylelintignore            # Ignored folders and generated styles
├── .husky/
│   └── pre-commit              # Git hook running lint-staged
└── package.json                # Runs Stylelint via scripts/lint-staged

Installation

npm install --save-dev \
  stylelint \
  stylelint-config-standard \
  stylelint-config-tailwindcss \
  stylelint-order \
  postcss \
  postcss-scss \
  postcss-html


Lint Scripts in package.json
"scripts": {
  "lint": "npm run lint:js && npm run lint:css",
  "lint:js": "eslint \"./**/*.{js,jsx,ts,tsx}\"",
  "lint:css": "stylelint \"**/*.{css,scss}\"",
  "lint:fix": "npm run lint:js -- --fix && npm run lint:css -- --fix",
  "format": "prettier --write \"./**/*.{js,jsx,ts,tsx,json,yml,css,scss,md}\" && stylelint \"**/*.{css,scss}\" --fix"
}



🛡️ Enterprise-Grade .gitignore
Covers:

All major IDEs (VSCode, WebStorm)

Build systems (Vite, Webpack)

Databases (MongoDB logs)

Environment files (+ CI exclusion)

Linting/Formatting caches

OS-specific files (Win/Mac/Linux)

💡 Optional: Add TypeScript Support
If you prefer to use TypeScript instead of JavaScript, follow these steps:

1. Install TypeScript and Types
npm install --save-dev typescript ts-node @types/node @types/express

2. Create a tsconfig.json file
You can generate a default one:
npx tsc --init

Or use a minimal custom config:
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["backend/**/*"]
}

3. Start Dev Server in TypeScript Mode
npm run dev:ts


🛡️ Enterprise Features
Git Hygiene Enforcement
# .husky/pre-commit
npx lint-staged && npm run format && git add -A

Zero-Warning Policy
{
  "scripts": {
    "lint": "eslint . --max-warnings 0",
    "type-check": "tsc --noEmit"
  }
}


✅ Why This Template?
VanillaJS First optionally add TS if needed
Full-stack type safety from day one

Security Hardened
Built-in vulnerability detection

A11Y Compliant
WCAG-level React linting rules

CI/CD Ready
Pre-configured for GitHub Actions

📜 License & Contribution
MIT Licensed - Contributions require:

Passing ESLint security rules

TypeScript type-checks

Prettier-formatted code

Signed commits (optional)
```
