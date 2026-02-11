import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get("medmal_auth");
  if (authCookie?.value === process.env.APP_PASSWORD) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname === "/login") {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
