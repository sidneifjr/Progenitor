pnpm dlx create-next-app@latest --use-pnpm --typescript --tailwind --eslint --src-dir --app --import-alias @/*

cd my-app/

# .env files, with mocked values
echo "EXAMPLE_API_KEY=1234" > .env
echo "EXAMPLE_API_KEY=1234" > .env.example

# UI
echo "# Initializing shadcn..."
pnpm dlx shadcn-ui@latest init

# Linting
echo "# Initializing linting tools..."
pnpm i prettier prettier-plugin-tailwindcss eslint-plugin-simple-import-sort --save-dev

echo '{
  "plugins": [
    "prettier-plugin-tailwindcss"
  ]
}' > .prettierrc

pnpm i @rocketseat/eslint-config --save-dev

echo '{
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
}' > .eslintrc.json

# Testing
echo "# Initializing testing tools..."
pnpm i vitest @testing-library/react --save-dev

# Zod
echo "# Initializing validation tools..."
pnpm i zod --save-dev

cd src/

## Environment Variables Validation
echo "import { z } from 'zod'

const envSchema = z.object({
  EXAMPLE_API_KEY: z.string(),
})

export const env = envSchema.parse(process.env)" > env.ts

# Creating folders
echo "# Initializing folders..."
mkdir actions
mkdir hooks
mkdir modules
mkdir tests
mkdir services

echo "Boilerplate created!"

# Initialize git repo
git init