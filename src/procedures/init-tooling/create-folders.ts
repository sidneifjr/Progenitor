import { existsSync } from "node:fs"
import { mkdir, writeFile } from "node:fs/promises"
import { chdir } from "node:process"

import { api } from "@/config/services/api"
import { h1 } from "@/config/typography/h1"
import { h2 } from "@/config/typography/h2"
import { h3 } from "@/config/typography/h3"
import { h4 } from "@/config/typography/h4"
import { large } from "@/config/typography/large"
import { lead } from "@/config/typography/lead"
import { paragraph } from "@/config/typography/paragraph"
import { small } from "@/config/typography/small"

export async function createFolders() {
  const folders = ["actions", "hooks", "tests", "services", "modules"]

  const typographyComponents = [
    {
      name: "h1.tsx",
      component: h1,
    },
    {
      name: "h2.tsx",
      component: h2,
    },
    {
      name: "h3.tsx",
      component: h3,
    },
    {
      name: "h4.tsx",
      component: h4,
    },
    {
      name: "large.tsx",
      component: large,
    },
    {
      name: "lead.tsx",
      component: lead,
    },
    {
      name: "paragraph.tsx",
      component: paragraph,
    },
    {
      name: "small.tsx",
      component: small,
    },
  ]

  // 'for of' loop guarantees that my folders are created sequentially.
  for (const folder of folders) {
    await mkdir(folder)
  }

  if (existsSync("services")) {
    chdir("services")
    await writeFile("api.tsx", api)
    chdir("../")
  }

  chdir("components")
  await mkdir("typography")

  chdir("typography")

  for (const { name, component } of typographyComponents) {
    await writeFile(name, component)
  }

  chdir("../")
}
