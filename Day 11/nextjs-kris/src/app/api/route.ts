import { NextRequest, NextResponse } from "next/server";
import React from "react";

type Props = {};

export function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams;
  const slug = search.get("slug");
  return NextResponse.json({ message: slug }, { status: 200 });
}
