import { render } from 'https://cdn.skypack.dev/preact-render-to-string@v5.1.12';
import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";
import Index from "./pages/Index.tsx";

const headers = new Headers();
headers.append("Content-Type", "text/html; charset=UTF-8");

Deno.serve(async (request) => {

  const path = new URL(request.url).pathname;

  if (path === "/profile-picture.webp") {
    return await serveFile(request, "./src/images/profile-picture.webp");
  }

  return new Response(render(<Index activePage="home" />), {
    status: 200,
    headers
  });
});