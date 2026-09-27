import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { verifyPassword } from '@/lib/auth/password';
import { createSession, setSessionCookie } from '@/lib/auth/session';
import { checkRateLimit, recordAttempt } from '@/lib/auth/rate-limit';
import { generateCsrfToken } from '@/lib/auth/csrf';
import { logAudit } from '@/lib/audit';

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'unknown';
    const { allowed, remainingAttempts } = checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: 'พยายามเข้าสู่ระบบหลายครั้งเกินไป กรุณารอสักครู่' },
        { status: 429 }
      );
    }

    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ error: 'กรุณากรอกชื่อผู้ใช้และรหัสผ่าน' }, { status: 400 });
    }

    const db = getDb();
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username) as any;

    if (!user) {
      recordAttempt(ip);
      return NextResponse.json({ error: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' }, { status: 401 });
    }

    const isValid = await verifyPassword(password, user.password_hash);
    
    if (!isValid) {
      recordAttempt(ip);
      return NextResponse.json({ error: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' }, { status: 401 });
    }

    const sessionId = createSession(user.id);
    setSessionCookie(sessionId);
    const csrfToken = generateCsrfToken();

    logAudit(user.id, user.username, 'login', 'auth', user.id, 'Logged in via API', ip);

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

  } catch (error) {
    console.error('Login Error:', error);
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในระบบ' }, { status: 500 });
  }
}
