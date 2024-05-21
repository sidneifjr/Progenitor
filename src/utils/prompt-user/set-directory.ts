import os from "node:os"
import { chdir } from "node:process"

import { input } from "@inquirer/prompts"

export async function setDirectory() {
  const { username } = os.userInfo()

  const directory = await input({
    message: "Where do you want to install your project?",
    default: `C:\\Users\\${username}\\Desktop`,
  })

  chdir(directory)
}
