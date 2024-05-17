import fs from "node:fs/promises"

import chalk from "chalk"

import { eslintConfig } from "./config/eslint"
import { prettierConfig } from "./config/prettier"
import { zodConfig } from "./config/zod"
import { runNpmCommand } from "./utils/run-npm-command"

console.log(chalk.bgBlue("# Initializing boilerplate..."))

runNpmCommand(
  "pnpm dlx create-next-app@latest --use-pnpm --typescript --tailwind --eslint --src-dir --app --import-alias @/*",
)

process.chdir("my-app")

console.log("# Initializing shadcn...")
runNpmCommand("pnpm dlx shadcn-ui@latest init")

// .env files, with mocked values
const envContent = "EXAMPLE_API_KEY=1234"

fs.writeFile(".env", envContent)
fs.writeFile(".env.example", envContent)

runNpmCommand(
  "pnpm i prettier prettier-plugin-tailwindcss eslint-plugin-simple-import-sort @rocketseat/eslint-config vitest @testing-library/react zod --save-dev",
)

console.log("# Initializing tooling...")
fs.writeFile(".prettierrc", prettierConfig)
fs.writeFile(".eslintrc.json", eslintConfig)

process.chdir("src/")
fs.writeFile("env.ts", zodConfig)

console.log("# Creating folders...")
const folders = ["actions", "hooks", "modules", "tests", "services"]

folders.forEach((folder) => {
  fs.mkdir(folder)
})

console.log(chalk.bgGreen("Project ready to use!"))
