import { chdir } from "node:process"

import chalk from "chalk"

import { promptUser } from "@/utils/promptUser"
import { runNpmCommand } from "@/utils/run-npm-command"

export async function startBoilerplate() {
  console.log(chalk.bgBlue("# Initializing boilerplate..."))

  await promptUser()

  runNpmCommand(
    "pnpm dlx create-next-app@latest --use-pnpm --typescript --tailwind --eslint --src-dir --app --import-alias @/*",
  )

  chdir("my-app")

  console.log("# Initializing shadcn...")
  runNpmCommand("pnpm dlx shadcn-ui@latest init")
}
