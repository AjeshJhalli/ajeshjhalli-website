import { render } from "https://cdn.skypack.dev/preact-render-to-string@v5.1.12";
import { serveFile } from "https://deno.land/std@0.224.0/http/file_server.ts";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Page404 from "./pages/404.tsx";
import Projects from "./pages/Projects.tsx";

const headers = new Headers();
headers.append("Content-Type", "text/html; charset=UTF-8");

Deno.serve(async (request) => {
  const path = new URL(request.url).pathname;

  switch (path) {
    case "/":
      return new Response(render(<Index />), {
        status: 200,
        headers,
      });
    case "/about":
      return new Response(render(<About />), {
        status: 200,
        headers,
      });
    case "/projects":
      return new Response(render(<Projects />), {
        status: 200,
        headers,
      });
    case "/profile-picture.webp":
      return await serveFile(request, "./src/images/profile-picture.webp");
  }

  return new Response(render(<Page404 />), {
    status: 404,
    headers,
  });
});
