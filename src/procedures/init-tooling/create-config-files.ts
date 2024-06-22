import { writeFile } from "node:fs/promises"
import { chdir } from "node:process"

import { eslintConfig } from "@/config/eslint"
import { prettierConfig } from "@/config/prettier"
import { readmeConfig } from "@/config/readme"
import { vitestConfig } from "@/config/vitest"
import { zodConfig } from "@/config/zod"

export async function createConfigFiles() {
  await writeFile(".prettierrc", prettierConfig)
  await writeFile(".eslintrc.json", eslintConfig)
  await writeFile("vitest.config.ts", vitestConfig)
  await writeFile("README.md", readmeConfig)

  chdir("src/")
  await writeFile("env.ts", zodConfig)
}
