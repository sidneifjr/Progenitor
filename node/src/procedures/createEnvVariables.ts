import { writeFile } from "node:fs/promises"

// .env files, with mocked values
export async function createEnvVariables() {
  const envContent = "EXAMPLE_API_KEY=1234"

  writeFile(".env", envContent)
  writeFile(".env.example", envContent)
}
