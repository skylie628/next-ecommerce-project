import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  console.log("req la", req.nextUrl.pathname);
  if (req.nextUrl.pathname.startsWith("/auth/signin") && isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
export const config = {
  matcher: ["/", "/auth/signin"],
};
