import { render } from 'https://cdn.skypack.dev/preact-render-to-string@v5.1.12';
import pageIndex from "./pages/Index.tsx";

const headers = new Headers();
headers.append("Content-Type", "text/html; charset=UTF-8");

Deno.serve((_req) => {
  return new Response(render(pageIndex), {
    status: 200,
    headers
  });
});