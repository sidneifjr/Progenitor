export const eslintConfig = `{
  "extends": [
    "next/core-web-vitals",
    "@rocketseat/eslint-config/next",
    "plugin:sonarjs/recommended-legacy",
    "plugin:@tanstack/query/recommended"
  ],

  "plugins": [
    "simple-import-sort",
    "sonarjs"
  ],

  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-console": "warn"
  },
  
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "latest"
  }
}`
