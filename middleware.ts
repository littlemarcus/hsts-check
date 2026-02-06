import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: new Headers(request.headers),
    },
  });
  return response;
}
