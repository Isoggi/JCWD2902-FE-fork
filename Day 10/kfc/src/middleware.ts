import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import React from "react";

export function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const user = JSON.parse(cookies().get("user")?.value || "{}") as IUser;
  const { pathname } = request.nextUrl;
  // if(!request.cookies.get('token'))
  if (user && (pathname === "/login" || pathname === "/register"))
    return NextResponse.redirect(new URL("/", request.url));
  return res;
}
