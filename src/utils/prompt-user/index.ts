import { checkIfAppFolderExists } from "./check-if-app-folder-exists"
import { setDirectory } from "./set-directory"

export async function promptUser() {
  await setDirectory()
  await checkIfAppFolderExists()
}
