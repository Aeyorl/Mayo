import { readFile } from 'node:fs/promises';

const UNLOCK_AT = Date.parse('2026-05-01T00:00:00+01:00');
const ROOT = new URL('../', import.meta.url);
const PAGE_MAP = {
  index: 'index.html',
  birthday: 'birthday.html',
};

function isUnlocked() {
  return Date.now() >= UNLOCK_AT;
}

async function readTextFile(name) {
  return readFile(new URL(name, ROOT), 'utf8');
}

export async function GET(request) {
  const url = new URL(request.url);
  const key = url.searchParams.get('file') || 'index';
  const filename = PAGE_MAP[key] || PAGE_MAP.index;

  const body = isUnlocked()
    ? await readTextFile(filename)
    : await readTextFile('locked.html');

  return new Response(body, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store, no-cache, must-revalidate',
    },
  });
}
