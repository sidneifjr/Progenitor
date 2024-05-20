import { mkdir, writeFile } from "node:fs/promises"
import { chdir } from "node:process"

import chalk from "chalk"

import { eslintConfig } from "@/config/eslint"
import { prettierConfig } from "@/config/prettier"
import { zodConfig } from "@/config/zod"
import { runNpmCommand } from "@/utils/run-npm-command"

export async function initTooling() {
  console.log("# Configuring tooling...")

  runNpmCommand(
    "pnpm i prettier prettier-plugin-tailwindcss eslint-plugin-simple-import-sort @rocketseat/eslint-config vitest @testing-library/react zod --save-dev",
  )

  writeFile(".prettierrc", prettierConfig)
  writeFile(".eslintrc.json", eslintConfig)

  chdir("src/")
  writeFile("env.ts", zodConfig)

  const folders = ["actions", "hooks", "modules", "tests", "services"]
  console.log("# Creating folders...")

  folders.map((folder) => {
    return mkdir(folder)
  })

  console.log()

  console.log(`
  # ${chalk.bgGreen("Project ready to use!")}
  # You can access your project using:
  #
  # cd my-app
  # code .
  #
  # Have fun!
  `)
}
