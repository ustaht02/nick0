import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["tr", "en", "es", "ar"]
const defaultLocale = "tr"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect to default locale for root path
  if (pathname === "/") {
    return NextResponse.next()
  }

  // For other paths without locale, redirect to default locale
  const locale = defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
}
