#!/usr/bin/env node

import { intro, outro } from "@clack/prompts"

import { createEnvVariables } from "@/procedures/createEnvVariables"
import { initTooling } from "@/procedures/init-tooling"
import { startBoilerplate } from "@/procedures/startBoilerplate"

intro("Welcome to the Progenitor CLI!")

await startBoilerplate()
await createEnvVariables()
await initTooling()

outro("You're all set!")
