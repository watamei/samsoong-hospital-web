import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth/middleware';
import { cookies } from 'next/headers';

export const GET = withAuth(async (req: NextRequest, user: any) => {
  const csrfToken = cookies().get('csrf_token')?.value;
  return NextResponse.json({ 
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
      display_name: user.display_name,
      must_change_password: user.must_change_password === 1
    },
    csrfToken
  });
});
