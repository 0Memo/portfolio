import createMiddleware from "next-intl/middleware"
import { type NextRequest, NextResponse } from "next/server"

const VALID_LOCALES = ["fr", "es", "en", "pt", "it", "ro", "se"]

const intlMiddleware = createMiddleware({
    locales: VALID_LOCALES,
    defaultLocale: "en",
    localePrefix: "as-needed",
    localeDetection: false,
})

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (pathname.includes(".")) {
        return NextResponse.next()
    }

    return intlMiddleware(request)
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
}