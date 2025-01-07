import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export const middleware = async (request: NextRequest) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("next-auth.session-token");

  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  return NextResponse.next();
};
export const config = {
  matcher: [
    "/admin",
    "/admin/addProject",
    "/admin/project",
    "/admin/contacts",
    "/admin/reviews",
    "/admin/project/[id]",
  ],
};
