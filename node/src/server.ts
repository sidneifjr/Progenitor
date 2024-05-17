import { createEnvVariables } from "@/procedures/createEnvVariables"
import { initTooling } from "@/procedures/initTooling"
import { startBoilerplate } from "@/procedures/startBoilerplate"

await startBoilerplate()
await createEnvVariables()
await initTooling()
