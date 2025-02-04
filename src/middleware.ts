import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['fr', 'es', 'en', 'pt', 'it', 'ro', 'se'],
    defaultLocale: 'fr',
});

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)'],
};