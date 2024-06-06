import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";


Deno.serve((req) => {
  const pathname = new URL(req.url).pathname;
  if (pathname.startsWith("")) {
    return serveDir(req, {
      fsRoot: "public",
    });
  }
  // Do dynamic responses
  return new Response();
});
