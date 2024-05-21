import { readFile, writeFile } from "node:fs/promises"
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

  const data = await readFile("package.json", { encoding: "utf8" })
  const parsedData = JSON.parse(data)

  parsedData.scripts = {
    ...parsedData.scripts,
    dev: "next dev --turbo",
    test: "vitest",
  }

  await writeFile("package.json", JSON.stringify(parsedData, null, 2), {
    encoding: "utf8",
  })

  console.log("# Initializing shadcn...")
  runNpmCommand("pnpm dlx shadcn-ui@latest init")
  runNpmCommand("pnpm dlx shadcn-ui@latest add")
}
