import { mkdir } from "node:fs/promises"

export async function createFolders() {
  const folders = ["actions", "hooks", "modules", "tests", "services"]

  // 'for of' loop is meant to guarantee that my folders are created sequentially.
  for (const folder of folders) {
    await mkdir(folder)
  }
}
