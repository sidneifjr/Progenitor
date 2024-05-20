import { existsSync } from "node:fs"
import { rmdir } from "node:fs/promises"

import { input } from "@inquirer/prompts"
import { createSpinner } from "nanospinner"

// Permitir que o usuário defina o diretório o projeto será criado!
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
      await rmdir(dir, { recursive: true })

      spinner.success()
    } else {
      console.log("SHUTTING DOWN...")

      process.exit(0)
    }

    return answers
  }
}
