import { existsSync } from "node:fs"
import { rmdir } from "node:fs/promises"

import { input } from "@inquirer/prompts"
import { createSpinner } from "nanospinner"

export async function checkIfAppFolderExists() {
  const appDir = "my-app"

  const spinner = createSpinner("Deleting old folders...")

  if (existsSync(appDir)) {
    const answers = await input({
      message: "Directory already exists. Do you want to replace it? (y/n)",
    })

    if (answers === "y") {
      spinner.start()

      // delete pre-existing folder, required admin
      await rmdir(appDir, { recursive: true })

      spinner.success()
    } else {
      console.log("# Shutting down...")

      process.exit(0)
    }

    return answers
  }
}
