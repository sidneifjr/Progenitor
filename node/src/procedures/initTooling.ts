import { mkdir, writeFile } from "node:fs/promises"
import { chdir } from "node:process"

import chalk from "chalk"

import { eslintConfig } from "@/config/eslint"
import { prettierConfig } from "@/config/prettier"
import { zodConfig } from "@/config/zod"
import { runNpmCommand } from "@/utils/run-npm-command"

export async function initTooling() {
  runNpmCommand(
    "pnpm i prettier prettier-plugin-tailwindcss eslint-plugin-simple-import-sort @rocketseat/eslint-config vitest @testing-library/react zod --save-dev",
  )

  console.log("# Configuring tooling...")
  writeFile(".prettierrc", prettierConfig)
  writeFile(".eslintrc.json", eslintConfig)

  chdir("src/")
  writeFile("env.ts", zodConfig)

  console.log("# Creating folders...")
  const folders = ["actions", "hooks", "modules", "tests", "services"]

  folders.map((folder) => {
    return mkdir(folder)
  })

  console.log(chalk.bgGreen("Project ready to use!"))

  console.log("/n You can access your project using:")
  console.log("cd my-app")
  console.log("code .")

  console.log("/n Have fun!")
}
