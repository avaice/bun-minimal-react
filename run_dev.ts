// UNUSED_FILE

// for dev build

await Bun.build({
  entrypoints: ["./src/index.tsx"],
  outdir: "./.cache",
})

Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url)
    console.log(url.pathname)
    if (url.pathname === "/index.js") {
      return new Response(Bun.file("./.cache/index.js", {}))
    }
    if (url.pathname === "/") {
      return new Response(Bun.file("./public/index.html"))
    }
    return new Response(Bun.file(`./public${url.pathname}`))
  },
})
