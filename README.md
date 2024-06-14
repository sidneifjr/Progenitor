# Progenitor

A relatively simple Node CLI, meant for bootstraping a frontend project under my usual requirements.

Opinionated, for simplicity and ease of usage.

The CLI setups a project based on the following technologies:

- React
- Next.js (with Turbo)
- TailwindCSS
- shadcn
- ESLint/Prettier
- Vitest
- Testing Library
- Cypress
- Zod

## Stack

- Node.js
- TypeScript
- TSX
- Clack
- ESLint

## Motivation

This script was created with the intent of reducing repetition, since several projects on the market have similar overall structure, based on some key development patterns:

1) SOLID;
2) Composition Pattern;
3) Custom Hooks;

## Decisions

**Package manager**: Pnpm is the best option due to its dependency caching, that allows package reusage between projects and saving a lot of space over time. It's very useful during testing, avoiding unnecessary bandwidth traffic.

**Runtime**: Bun was initially chosen for its native support of TypeScript, speed and usability. However, due to current compatibility issues with native Node.js APIs with Inquirer, Node and TSX was needed.

## Dependencies

**Node**: v20.12.2

**pnpm**: 8.15.4

## Running

`pnpm i`

`pnpm dev`

## To do

- [x] Move api.tsx to services.
- [x] Add 'typography' folder to components.
- [ ] Github bots that check for updates, then open a PR. (Dependabot, Github Actions?)
- [ ] Installable npm package (once it is good enough).

## Useful links

https://stackoverflow.com/questions/15957529/can-i-install-a-npm-package-from-javascript-running-in-node-js

https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console

https://stackoverflow.com/questions/38061520/node-js-how-to-pause-execution-of-subsequent-lines-of-code-while-waiting-for-u

https://codedamn.com/news/nodejs/how-to-get-current-directory-in-node-js

https://www.npmjs.com/package/ora#why-does-the-spinner-freeze

https://stackoverflow.com/questions/10011011/using-node-js-how-do-i-read-a-json-file-into-server-memory

https://chatgpt.com/c/3014b422-2e2f-4d19-ae9f-5dc3a00ba625

https://stackoverflow.com/questions/40424298/how-to-get-os-username-in-nodejs

https://stackoverflow.com/a/18427652