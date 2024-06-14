import { writeFile } from "node:fs/promises"

// .env files, with mocked values
export async function createEnvVariables() {
  const envContent = `EXAMPLE_API_KEY=1234
NEXT_PUBLIC_API_BASE_URL='https://jsonplaceholder.typicode.com/'`

  writeFile(".env", envContent)
  writeFile(".env.example", envContent)
}
