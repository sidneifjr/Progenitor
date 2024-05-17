/* eslint-disable camelcase */
import child_process from "node:child_process"

export function runNpmCommand(command: string) {
  child_process.execSync(command, { stdio: [0, 1, 2] })
}
