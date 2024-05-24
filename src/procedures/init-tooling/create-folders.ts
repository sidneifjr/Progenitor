import { mkdir, writeFile } from "node:fs/promises"
import { chdir } from "node:process"

import { api } from "@/config/data/api"

export async function createFolders() {
  const folders = ["actions", "hooks", "modules", "tests", "services"]

  // 'for of' loop is meant to guarantee that my folders are created sequentially.
  for (const folder of folders) {
    await mkdir(folder)
  }

  chdir("modules")
  writeFile("api.tsx", api)
}
