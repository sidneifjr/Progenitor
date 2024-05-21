import { mkdir, writeFile } from "node:fs/promises"
import { chdir } from "node:process"

import { vitestInitialSpec, vitestTestPage } from "@/config/vitest"

export async function createTestPlaceholders() {
  chdir("tests")
  await writeFile("page.test.tsx", vitestInitialSpec)

  // inside 'app' folder, i'll create a 'example-for-tests' folder and add contents meant to testing a 'page.tsx' file.
  chdir("../app")
  await mkdir("example-for-tests")

  chdir("example-for-tests/")
  await writeFile("page.tsx", vitestTestPage)
}
