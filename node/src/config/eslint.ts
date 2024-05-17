export const eslintConfig = `
  "extends": [
    "next/core-web-vitals",
    "@rocketseat/eslint-config/next"
  ],
  "plugins": [
    "simple-import-sort"
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
