import { mkdir, writeFile } from "node:fs/promises"
import { chdir } from "node:process"

import chalk from "chalk"

import { eslintConfig } from "./config/eslint"
import { prettierConfig } from "./config/prettier"
import { zodConfig } from "./config/zod"
import { promptUser } from "./utils/promptUser"
import { runNpmCommand } from "./utils/run-npm-command"

console.log(chalk.bgBlue("# Initializing boilerplate..."))

await promptUser()

runNpmCommand(
  "pnpm dlx create-next-app@latest --use-pnpm --typescript --tailwind --eslint --src-dir --app --import-alias @/*",
)

chdir("my-app")

console.log("# Initializing shadcn...")
runNpmCommand("pnpm dlx shadcn-ui@latest init")

// .env files, with mocked values
const envContent = "EXAMPLE_API_KEY=1234"

writeFile(".env", envContent)
writeFile(".env.example", envContent)

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

folders.forEach((folder) => {
  mkdir(folder)
})

console.log(chalk.bgGreen("Project ready to use!"))
