import { createEnvVariables } from "@/procedures/createEnvVariables"
import { initTooling } from "@/procedures/init-tooling"
import { startBoilerplate } from "@/procedures/startBoilerplate"

await startBoilerplate()
await createEnvVariables()
await initTooling()
