import type { NextRequest } from "next/server";

import { auth0 } from "@/lib/auth0";

export async function middleware(req: NextRequest) {
  return await auth0.middleware(req);
}

export const config = {
  matcher: [
    /**
     * Match all request paths except for the ones that start with:
     * - _next/static (static assets)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt, manifest.json (metadata)
     */

    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.json).*)",
  ],
};
