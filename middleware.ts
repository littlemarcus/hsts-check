import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: new Headers(request.headers),
    },
  });

  // 30 seconds
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=30; includeSubDomains; preload',
  );

  return response;
}