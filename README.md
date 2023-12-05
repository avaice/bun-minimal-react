# bun-minimal-react

A React framework integrated with the Bun ecosystem.

Demo: https://avaice.github.io/bun-minimal-react/

This project was created using `bun init` in bun v1.0.15. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Dev

It works only with macOS (It may also work on Linux).

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
bun run tailwind:dev
bun run watcher
```

You need to keep port 8080 open.

## Build

```bash
bun run build
```

The files will be generated in the './dist' directory.
