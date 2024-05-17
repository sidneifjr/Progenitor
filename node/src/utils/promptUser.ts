import { existsSync, rmSync } from "node:fs"

import { input } from "@inquirer/prompts"
import { createSpinner } from "nanospinner"

export async function promptUser() {
  const dir = "my-app"

  const spinner = createSpinner("Deleting old folders...")

  if (existsSync(dir)) {
    const answers = await input({
      message: "Directory already exists. Do you want to replace it? (y/n)",
    })

    if (answers === "y") {
      spinner.start()

      // delete pre-existing folder, required admin
      rmSync(dir, { recursive: true, force: true })

      spinner.success()
    } else {
      console.log("SHUTTING DOWN...")

      process.exit(0)
    }

    return answers
  }
}
