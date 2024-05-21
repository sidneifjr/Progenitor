import { mkdir, writeFile } from "node:fs/promises"
import { chdir } from "node:process"

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

const files = [
  {
    filename: ".prettierrc",
    config: prettierConfig,
  },
  {
    filename: ".eslintrc.json",
    config: eslintConfig,
  },
  {
    filename: "vitest.config.ts",
    config: vitestConfig,
  },
]

async function createFile(name: string, content: string) {
  await writeFile(name, content)
}

export async function initTooling() {
  console.log("# Configuring tooling...")

  runNpmCommand(
    "pnpm i prettier prettier-plugin-tailwindcss eslint-plugin-simple-import-sort @rocketseat/eslint-config vitest @vitejs/plugin-react jsdom @testing-library/react zod --save-dev",
  )

  files.map(async (file) => {
    const { filename, config } = file

    return await createFile(filename, config)
  })

  chdir("src/")
  await writeFile("env.ts", zodConfig)

  const folders = ["actions", "hooks", "modules", "tests", "services"]
  console.log("# Creating folders...")

  // 'for of' loop is meant to guarantee that my folders are created sequentially.
  for (const folder of folders) {
    await mkdir(folder)
  }

  chdir("tests")
  await writeFile("page.test.tsx", vitestInitialSpec)

  // inside 'app' folder, i'll create a 'example-for-tests' folder and add contents meant to testing a 'page.tsx' file.
  chdir("../app")
  await mkdir("example-for-tests")

  chdir("example-for-tests/")
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
