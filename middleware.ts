import { NextRequest, NextResponse } from "next/server";

const maintenanceEnabled = process.env.MAINTENANCE_MODE !== "false";

export function middleware(request: NextRequest) {
  if (!maintenanceEnabled || request.nextUrl.pathname === "/maintenance") {
    return NextResponse.next();
  }

  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/maintenance";
  maintenanceUrl.search = "";
  return NextResponse.redirect(maintenanceUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
