import { existsSync, rmSync } from "node:fs"

import { input } from "@inquirer/prompts"

export async function promptUser() {
  const dir = "my-app"

  console.log("current directory:", process.cwd())

  if (existsSync(dir)) {
    const answers = await input({
      message: "Directory already exists. Do you want to replace it? (y/n)",
    })

    console.log("You choose: ", answers)

    if (answers === "y") {
      // delete pre-existing folder, required admin
      rmSync(dir, { recursive: true, force: true })
    } else {
      console.log("SHUTTING DOWN...")

      process.exit(0)
    }

    return answers
  }
}
