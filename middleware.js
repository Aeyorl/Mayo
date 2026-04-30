import { NextResponse } from 'next/server';

const UNLOCK_AT = Date.parse('2026-05-01T00:00:00+01:00');

function isUnlocked() {
  return Date.now() >= UNLOCK_AT;
}

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  if (
    pathname === '/locked.html' ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/.well-known')
  ) {
    return NextResponse.next();
  }

  if (isUnlocked()) {
    return NextResponse.next();
  }

  if (pathname === '/' || pathname.endsWith('.html')) {
    return NextResponse.rewrite(new URL('/locked.html', request.url));
  }

  if (pathname.startsWith('/assets/')) {
    return new NextResponse('Not found', { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
