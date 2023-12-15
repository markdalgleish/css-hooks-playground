import { createRequestHandler } from "@remix-run/express";
import { installGlobals } from "@remix-run/node";
import express from "express";

installGlobals();

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({ server: { middlewareMode: true } })
      );

const virtualRemixServerBuildId = viteDevServer
  ? (await import("@remix-run/dev")).unstable_viteServerBuildModuleId
  : null;

const app = express();

// handle asset requests
if (viteDevServer) {
  app.use(viteDevServer.middlewares);
} else {
  app.use(
    "/assets",
    express.static("build/client/assets", { immutable: true, maxAge: "1y" })
  );
}
app.use(express.static("build/client", { maxAge: "1h" }));

// handle SSR requests
app.all(
  "*",
  createRequestHandler({
    build:
      viteDevServer && virtualRemixServerBuildId
        ? () => viteDevServer.ssrLoadModule(virtualRemixServerBuildId)
        : // @ts-expect-error
          await import("./build/server/index.js"),
  })
);

const port = 3000;
app.listen(port, () => console.log("http://localhost:" + port));
