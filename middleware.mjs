const UNLOCK_AT = Date.parse('2026-05-01T00:00:00+01:00');

function isUnlocked() {
  return Date.now() >= UNLOCK_AT;
}

export default function middleware(request) {
  const url = new URL(request.url);
  const { pathname } = url;

  if (
    pathname === '/locked.html' ||
    pathname === '/favicon.ico' ||
    pathname.startsWith('/.well-known')
  ) {
    return;
  }

  if (isUnlocked()) {
    return;
  }

  if (pathname === '/' || pathname.endsWith('.html')) {
    return Response.redirect(new URL('/locked.html', request.url), 307);
  }

  if (pathname.startsWith('/assets/')) {
    return new Response('Not found', { status: 404 });
  }
}

export const config = {
  matcher: '/:path*',
};
