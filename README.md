# Progenitor

A relatively simple Node/PowerShell script, for bootstraping a frontend project under my usual requirements.

Opinionated, for simplicity and ease of usage.

## Motivation

This script was created with the intent of reducing repetition.

Several of my projects reuse the same overall structure, based on some key development patterns:

1) SOLID;
2) Composition Pattern;
3) Custom Hooks;

It's not meant as a "single source of truth", per se; you can always add whatever libraries you need, according to your use cases.

## Decisions

Package manager: PNPM is the best option due to its dependency caching allowing package reusage between projects, saving a lot of space over time.

Runtime: Bun for its native support of TypeScript, speed and usability.

## Dependencies

**Node**: v20.12.2
**pnpm**: 8.15.4

## Running

First, choose your flavor amongst the available options:

### Node

`pnpm i`

`pnpm dev`

### Powershell

`./powershell/progenitor.sh`

## Useful links

https://stackoverflow.com/questions/15957529/can-i-install-a-npm-package-from-javascript-running-in-node-js

https://stackoverflow.com/questions/61394928/get-user-input-through-node-js-console