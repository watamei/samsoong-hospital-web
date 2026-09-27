import { nanoid } from 'nanoid';
import { cookies } from 'next/headers';

export function generateCsrfToken(): string {
  const token = nanoid(32);
  cookies().set('csrf_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });
  return token;
}

export function validateCsrfToken(requestToken: string): boolean {
  const cookieToken = cookies().get('csrf_token')?.value;
  return !!cookieToken && cookieToken === requestToken;
}
