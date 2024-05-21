# Progenitor

A relatively simple Node CLI, meant for bootstraping a frontend project under my usual requirements.

Opinionated, for simplicity and ease of usage.

## Motivation

This script was created with the intent of reducing repetition.

Several of my projects reuse the same overall structure, based on some key development patterns:

1) SOLID;
2) Composition Pattern;
3) Custom Hooks;

It's not meant as a "single source of truth", per se; you can always add whatever libraries you need, according to your use cases.

## Decisions

**Package manager**: PNPM is the best option due to its dependency caching allowing package reusage between projects, saving a lot of space over time. It's also very useful during testing, avoiding unnecessary bandwidth traffic.

**Runtime**: Bun was initially chosen for its native support of TypeScript, speed and usability. However, due to its incompatibility with Inquirer, Node and TSX was needed.

## Dependencies

**Node**: v20.12.2

**pnpm**: 8.15.4

## Running

`pnpm i`

`pnpm dev`

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