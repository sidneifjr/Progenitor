import childProcess from "node:child_process"

export function runNpmCommand(command: string) {
  childProcess.execSync(command, { stdio: [0, 1, 2] })
}
