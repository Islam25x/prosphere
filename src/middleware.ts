import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PROTECTED_ROUTE_PREFIXES = ["/dashboard", "/projects", "/settings"];
const ACCESS_TOKEN_COOKIE = "access_token";

export function middleware(request: NextRequest) {
  const isProtectedRoute = PROTECTED_ROUTE_PREFIXES.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const hasAccessToken = request.cookies.has(ACCESS_TOKEN_COOKIE);

  if (hasAccessToken) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/dashboard/:path*", "/projects/:path*", "/settings/:path*"],
};
