import os from "node:os"
import { chdir } from "node:process"

import { cancel, isCancel, text } from "@clack/prompts"

export async function setDirectory() {
  const { username } = os.userInfo()

  const directory = (await text({
    message: "Where do you want to install your project?",
    initialValue: `C:\\Users\\${username}\\Desktop`,

    validate(value) {
      if (value.length === 0) return "Value is required!"
    },
  })) as string

  if (isCancel(directory)) {
    cancel("Operation cancelled.")
    process.exit(0)
  }

  chdir(directory)
}
