import chalk from "chalk"

import { runNpmCommand } from "@/utils/run-npm-command"

import { createConfigFiles } from "./create-config-files"
import { createFolders } from "./create-folders"
import { createTestPlaceholders } from "./create-test-placeholders"

export async function initTooling() {
  console.log("# Configuring tooling...")

  runNpmCommand(
    "pnpm i prettier prettier-plugin-tailwindcss eslint-plugin-simple-import-sort @rocketseat/eslint-config vitest @vitejs/plugin-react jsdom @testing-library/react zod --save-dev",
  )

  await createConfigFiles()
  await createFolders()
  await createTestPlaceholders()

  console.log("# Linting project files...")
  runNpmCommand("pnpm lint")

  console.log(chalk.bgGreen("Project ready to use!"))
}
