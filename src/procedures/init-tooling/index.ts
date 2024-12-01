import { intro } from "@clack/prompts"

import { runNpmCommand } from "@/utils/run-npm-command"

import { createConfigFiles } from "./create-config-files"
import { createFolders } from "./create-folders"
import { createTestPlaceholders } from "./create-test-placeholders"

export async function initTooling() {
  intro("Configuring tooling...")

  runNpmCommand(
    "pnpm add prettier prettier-plugin-tailwindcss eslint-plugin-simple-import-sort @rocketseat/eslint-config vitest @vitejs/plugin-react @tanstack/react-query @tanstack/eslint-plugin-query eslint-plugin-sonarjs jsdom @testing-library/react @testing-library/jest-dom zod cypress --save-dev",
  )

  await createConfigFiles()
  await createFolders()
  await createTestPlaceholders()

  intro("Linting project files")
  runNpmCommand("pnpm lint")
  // runNpmCommand("pnpm lint && pnpm cy")
}
