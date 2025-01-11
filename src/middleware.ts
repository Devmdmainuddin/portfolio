import {cookies} from "next/headers";
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export const middleware = async (request: NextRequest) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("__Secure-next-auth.session-token");

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

// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware() {
//     return NextResponse.next();
//   },
//   {
//     callbacks: {
//       authorized: ({ token, req }) => {
//         const { pathname } = req.nextUrl;

//     console.log("pathname",pathname);

//         // Allow auth-related routes
//         if (
//           pathname.startsWith("/api/auth") ||
//           pathname === "/signin" ||
//           pathname === "/signUp"
//         ) {
//           return true;
//         }

//         // Public routes
//         if (
//           pathname === "/" ||
//           pathname.startsWith("/api/projects") ||
//           pathname.startsWith("/projects") ||
//           pathname.startsWith("/about") ||
//           pathname.startsWith("/contact")
//         ) {
//           return true;
//         }

//         // Admin routes require admin role
//         if (pathname.startsWith("/admin")) {
//           return token?.role === "admin";
//         }

//         // All other routes require authentication
//         return !!token;
//       },
//     },
//   }
// );

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except:
//      * - favicon.ico (favicon file)
//      * - public folder
//      */
//     "/((?!_next/static|_next/image|favicon.ico|public/).*)",
//   ],
// };
