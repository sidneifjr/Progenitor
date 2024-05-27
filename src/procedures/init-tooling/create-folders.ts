import { existsSync } from "node:fs"
import { mkdir, writeFile } from "node:fs/promises"
import { chdir } from "node:process"

import { api } from "@/config/data/api"

export async function createFolders() {
  const folders = ["actions", "hooks", "tests", "services", "modules"]

  // 'for of' loop is meant to guarantee that my folders are created sequentially.
  for (const folder of folders) {
    await mkdir(folder)
  }

  if (existsSync("modules")) {
    chdir("modules")
    await writeFile("api.tsx", api)
  }
}
