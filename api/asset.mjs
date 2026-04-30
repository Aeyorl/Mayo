import { readFile } from 'node:fs/promises';

const UNLOCK_AT = Date.parse('2026-05-01T00:00:00+01:00');
const ROOT = new URL('../', import.meta.url);

function isUnlocked() {
  return Date.now() >= UNLOCK_AT;
}

function contentTypeFor(path) {
  const ext = path.split('.').pop()?.toLowerCase() || '';

  switch (ext) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'webp':
      return 'image/webp';
    case 'gif':
      return 'image/gif';
    case 'svg':
      return 'image/svg+xml';
    case 'mp4':
      return 'video/mp4';
    case 'mov':
      return 'video/quicktime';
    default:
      return 'application/octet-stream';
  }
}

function isSafeAssetPath(path) {
  return Boolean(path) && !path.includes('..') && !path.startsWith('/') && !path.startsWith('\\');
}

export async function GET(request) {
  if (!isUnlocked()) {
    return new Response('Not found', {
      status: 404,
      headers: { 'cache-control': 'no-store, no-cache, must-revalidate' },
    });
  }

  const url = new URL(request.url);
  const assetPath = url.searchParams.get('path') || '';

  if (!isSafeAssetPath(assetPath)) {
    return new Response('Not found', { status: 404 });
  }

  try {
    const file = await readFile(new URL(`../assets/${assetPath}`, import.meta.url));
    return new Response(file, {
      status: 200,
      headers: {
        'content-type': contentTypeFor(assetPath),
        'cache-control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new Response('Not found', { status: 404 });
  }
}

export const HEAD = GET;
