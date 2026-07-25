import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const root = new URL(".", import.meta.url).pathname;
const outputDirectory = join(root, "dist", "server");
const assetNames = [
  "index.html",
  "projects.html",
  "index.css",
  "ajeshjhalli-preview.png",
];

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".png": "image/png",
};

const assets = {};

for (const name of assetNames) {
  const contents = await readFile(join(root, name));
  assets[`/${name}`] = {
    body: contents.toString("base64"),
    type: mimeTypes[extname(name)],
  };
}

assets["/"] = assets["/index.html"];

const worker = `const assets = ${JSON.stringify(assets)};

function decodeBase64(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\\/$/, "") || "/";
    const asset = assets[path];

    if (!asset) {
      return new Response("Not found", {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    return new Response(decodeBase64(asset.body), {
      headers: {
        "cache-control": asset.type.startsWith("image/")
          ? "public, max-age=86400"
          : "public, max-age=300",
        "content-type": asset.type,
        "x-content-type-options": "nosniff",
      },
    });
  },
};
`;

await rm(join(root, "dist"), { force: true, recursive: true });
await mkdir(outputDirectory, { recursive: true });
await writeFile(join(outputDirectory, "index.js"), worker);
