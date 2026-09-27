import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { deleteSession, getSession } from '@/lib/auth/session';
import { getDb } from '@/lib/db';
import { logAudit } from '@/lib/audit';

export async function POST(req: NextRequest) {
  const sessionId = cookies().get('session')?.value;
  
  if (sessionId) {
    const session = getSession(sessionId);
    if (session) {
      const db = getDb();
      const user = db.prepare('SELECT * FROM users WHERE id = ?').get(session.user_id) as any;
      if (user) {
        logAudit(user.id, user.username, 'logout', 'auth', user.id, 'Logged out via API');
      }
    }
    deleteSession(sessionId);
    cookies().delete('session');
    cookies().delete('csrf_token');
  }

  return NextResponse.json({ success: true });
}
