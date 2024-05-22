import { readFile, writeFile } from "node:fs/promises"
import { chdir } from "node:process"

import chalk from "chalk"

import { nextConfig } from "@/config/next-config"
import { promptUser } from "@/utils/prompt-user"
import { runNpmCommand } from "@/utils/run-npm-command"

async function editPackageJSON() {
  const data = await readFile("package.json", { encoding: "utf8" })
  const parsedData = JSON.parse(data)

  parsedData.scripts = {
    ...parsedData.scripts,
    dev: "next dev --turbo",
    lint: "next lint --fix",
    test: "vitest",
  }

  await writeFile("package.json", JSON.stringify(parsedData, null, 2), {
    encoding: "utf8",
  })
}

async function editNextConfig() {
  const data = await readFile("next.config.mjs", { encoding: "utf8" })
  console.log(data)

  await writeFile("next.config.mjs", nextConfig, { encoding: "utf8" })
}

export async function startBoilerplate() {
  console.log(chalk.bgBlue("# Initializing boilerplate..."))

  await promptUser()

  runNpmCommand(
    "pnpm dlx create-next-app@latest --use-pnpm --typescript --tailwind --eslint --src-dir --app --import-alias @/*",
  )

  chdir("my-app")

  await editPackageJSON()
  await editNextConfig()

  console.log("# Initializing shadcn...")

  runNpmCommand(
    "pnpm dlx shadcn-ui@latest init && pnpm dlx shadcn-ui@latest add",
  )
}
