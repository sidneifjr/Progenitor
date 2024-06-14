import { intro } from "@clack/prompts"

import { runNpmCommand } from "@/utils/run-npm-command"

import { createConfigFiles } from "./create-config-files"
import { createFolders } from "./create-folders"
import { createTestPlaceholders } from "./create-test-placeholders"

export async function initTooling() {
  intro("Configuring tooling...")

  runNpmCommand(
    "pnpm i prettier prettier-plugin-tailwindcss eslint-plugin-simple-import-sort @rocketseat/eslint-config vitest @vitejs/plugin-react jsdom @testing-library/react zod cypress --save-dev",
  )

  await createConfigFiles()
  await createFolders()
  await createTestPlaceholders()

  intro("Linting project files and starting up Cypress")
  runNpmCommand("pnpm lint && pnpm cy")
}
