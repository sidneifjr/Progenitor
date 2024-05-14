# Progenitor

A relatively simple PowerShell script, for bootstraping a frontend project under my usual requirements.

Opinionated, for simplicity and ease of usage.

## Intent

This script was created with the intent of reducing repetition.

Several of my projects reuse the same overall structure, based on some key development patterns:

1) SOLID;
2) Composition Pattern;
3) Custom Hooks;

It's not meant as a "single source of truth", per se; you can always add whatever libraries you need, according to your use cases.

### Package manager

PNPM is the best option due to dependency caching; over time, you'll save disk space due to package reusage in your projects.

## Dependencies

**Node**: v20.12.2
**pnpm**: 8.15.4

## Running

``./progenitor.sh``