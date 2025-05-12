/** @type {import('stylelint').Config} */
export default {
  // ⬇ Base configs
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwindcss', // Tailwind-aware rules
  ],

  // ⬇ Enable plugins
  plugins: ['stylelint-order'],

  // ⬇ Apply to these file types
  overrides: [
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss', // allows SCSS parsing
    },
    {
      files: ['**/*.{js,jsx,ts,tsx,html}'],
      customSyntax: 'postcss-html', // allows CSS in HTML/JS (for Tailwind etc.)
    },
  ],

  // ⬇ Rules
  rules: {
    // Optional: enforce consistent property order
    'order/properties-order': [],
    'no-empty-source': null, // prevents warnings in Tailwind-only files
  },

  // ⬇ Ignore generated and irrelevant folders
  ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/*.min.css'],
};
