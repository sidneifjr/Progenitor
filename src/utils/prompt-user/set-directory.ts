import { chdir } from "node:process"

import { cancel, isCancel, text } from "@clack/prompts"

export async function setDirectory() {
  const directory = (await text({
    message: "Where do you want to install your project?",
    initialValue: `D:\\Projetos\\Personal`,

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
