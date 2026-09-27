import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth/middleware';
import { getDb } from '@/lib/db';
import { hashPassword, verifyPassword } from '@/lib/auth/password';
import { logAudit } from '@/lib/audit';

export const POST = withAuth(async (req: NextRequest, user: any) => {
  try {
    const { currentPassword, newPassword } = await req.json();

    if (!currentPassword || !newPassword) {
      return NextResponse.json({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' }, { status: 400 });
    }

    if (newPassword.length < 8) {
       return NextResponse.json({ error: 'รหัสผ่านใหม่ต้องมีอย่างน้อย 8 ตัวอักษร' }, { status: 400 });
    }

    const db = getDb();
    const dbUser = db.prepare('SELECT password_hash FROM users WHERE id = ?').get(user.id) as any;

    const isValid = await verifyPassword(currentPassword, dbUser.password_hash);
    if (!isValid) {
      return NextResponse.json({ error: 'รหัสผ่านปัจจุบันไม่ถูกต้อง' }, { status: 400 });
    }

    const newHash = await hashPassword(newPassword);

    db.prepare('UPDATE users SET password_hash = ?, must_change_password = 0 WHERE id = ?')
      .run(newHash, user.id);

    logAudit(user.id, user.username, 'update', 'auth', user.id, 'Changed password');

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการเปลี่ยนรหัสผ่าน' }, { status: 500 });
  }
});
