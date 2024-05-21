import { mkdir, writeFile } from "node:fs/promises"
import { chdir, cwd } from "node:process"

import chalk from "chalk"

import { eslintConfig } from "@/config/eslint"
import { prettierConfig } from "@/config/prettier"
import {
  vitestConfig,
  vitestInitialSpec,
  vitestTestPage,
} from "@/config/vitest"
import { zodConfig } from "@/config/zod"
import { runNpmCommand } from "@/utils/run-npm-command"

export async function initTooling() {
  console.log("# Configuring tooling...")

  runNpmCommand(
    "pnpm i prettier prettier-plugin-tailwindcss eslint-plugin-simple-import-sort @rocketseat/eslint-config vitest @vitejs/plugin-react jsdom @testing-library/react zod --save-dev",
  )

  await writeFile(".prettierrc", prettierConfig)
  await writeFile(".eslintrc.json", eslintConfig)
  await writeFile("vitest.config.ts", vitestConfig)

  // to do: add a test script to your package.json
  chdir("src/")
  await writeFile("env.ts", zodConfig)

  const folders = ["actions", "hooks", "modules", "tests", "services"]
  console.log("# Creating folders...")

  folders.map(async (folder) => {
    await mkdir(folder)
  })

  console.log("current working directory:", cwd()) // returns "current working directory D:\Projetos\Personal\progenitor\node\my-app\src"

  // review: cannot find "tests" folder due to incompatibility with promises?
  chdir("tests")
  await writeFile("page.test.tsx", vitestInitialSpec)

  // to do: inside 'src' folder, i'll enter the 'app' folder and modify the contents of the page.tsx file.
  chdir("../app")
  await mkdir("placeholder")

  chdir("placeholder/")
  await writeFile("page.tsx", vitestTestPage)

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
