import readline from "node:readline"

export async function prompt() {
  const { stdin, stdout } = process

  const rl = readline.createInterface({
    input: stdin,
    output: stdout
  })
  
  rl.question("What is your name?", (name) => {
    console.log(`Hi, ${name}!`)
  
    rl.close()
  })
  
  rl.on("close", () => {
    console.log('bye!')
  
    process.exit(0)
  })
}