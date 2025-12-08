import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname === "/login" || pathname === "/register" || pathname === "/";

  const isProtectedPath =
    pathname.startsWith("/feed") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/write") ||
    pathname.startsWith("/post");

  // Rule 1: If logged in (token exists) and trying to access auth pages (login, register, landing), redirect to feed
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/feed", request.url));
  }

  // Rule 2: If NOT logged in (no token) and trying to access protected pages, redirect to login
  if (!token && isProtectedPath) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|js|css)).*)",
  ],
};
