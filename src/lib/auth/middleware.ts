import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getSession } from './session';
import { getDb } from '../db';

export function withAuth(
  handler: (req: NextRequest, user: any) => Promise<NextResponse>,
  requiredRole?: 'admin' | 'editor'
) {
  return async (req: NextRequest) => {
    try {
      const sessionId = cookies().get('session')?.value;
      if (!sessionId) {
        return NextResponse.json({ error: 'กรุณาเข้าสู่ระบบ' }, { status: 401 });
      }

      const session = getSession(sessionId);
      if (!session) {
        return NextResponse.json({ error: 'เซสชันหมดอายุ กรุณาเข้าสู่ระบบใหม่' }, { status: 401 });
      }

      const db = getDb();
      const user = db.prepare('SELECT id, username, role, display_name, must_change_password FROM users WHERE id = ?').get(session.user_id) as any;

      if (!user) {
        return NextResponse.json({ error: 'ไม่พบผู้ใช้' }, { status: 401 });
      }

      if (requiredRole && user.role !== requiredRole && user.role !== 'admin') {
        return NextResponse.json({ error: 'ไม่มีสิทธิ์เข้าถึง' }, { status: 403 });
      }

      // Automatically validate CSRF for mutations (POST, PUT, DELETE)
      if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
        const csrfToken = req.headers.get('x-csrf-token');
        const cookieToken = cookies().get('csrf_token')?.value;
        if (!csrfToken || !cookieToken || csrfToken !== cookieToken) {
           return NextResponse.json({ error: 'CSRF token ไม่ถูกต้อง' }, { status: 403 });
        }
      }

      return await handler(req, user);
    } catch (error) {
      console.error('Auth Middleware Error:', error);
      return NextResponse.json({ error: 'เกิดข้อผิดพลาดในระบบ' }, { status: 500 });
    }
  };
}
