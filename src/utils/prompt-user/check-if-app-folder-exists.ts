import { existsSync } from "node:fs"
import { rm } from "node:fs/promises"

import { cancel, isCancel, spinner, text } from "@clack/prompts"

export async function checkIfAppFolderExists() {
  const appDir = "my-app"

  const s = spinner()

  if (existsSync(appDir)) {
    const answers = await text({
      message: "Directory already exists. Do you want to replace it? (y/n)",
    })

    if (answers === "y") {
      s.start("Deleting old folders...")

      // delete pre-existing folder, required admin
      await rm(appDir, { recursive: true })

      s.stop("Deleting old folders...")
    } else {
      if (isCancel(answers)) {
        cancel("Operation cancelled.")
        process.exit(0)
      }
    }

    return answers
  }
}
