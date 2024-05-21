import { existsSync } from "node:fs"
import { rmdir } from "node:fs/promises"
import os from "node:os"
import { chdir } from "node:process"

import { input } from "@inquirer/prompts"
import { createSpinner } from "nanospinner"

async function setDirectory() {
  const { username } = os.userInfo()

  const directory = await input({
    message: "Where do you want to install your project?",
    default: `C:\\Users\\${username}\\Desktop`,
  })

  chdir(directory)
}

async function checkIfAppFolderExists() {
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

export async function promptUser() {
  await setDirectory()
  await checkIfAppFolderExists()
}
