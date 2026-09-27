import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { withAuth } from '@/lib/auth/middleware';
import { hashPassword } from '@/lib/auth/password';
import { nanoid } from 'nanoid';
import { logAudit } from '@/lib/audit';

export const GET = withAuth(async (req: NextRequest, user: any) => {
  if (user.role !== 'admin') {
    return NextResponse.json({ error: 'เฉพาะผู้ดูแลระบบเท่านั้น' }, { status: 403 });
  }
  const db = getDb();
  const users = db.prepare('SELECT id, username, role, display_name, must_change_password, created_at, updated_at FROM users').all();
  return NextResponse.json(users);
});

export const POST = withAuth(async (req: NextRequest, user: any) => {
  if (user.role !== 'admin') {
    return NextResponse.json({ error: 'เฉพาะผู้ดูแลระบบเท่านั้น' }, { status: 403 });
  }
  try {
    const data = await req.json();
    const db = getDb();
    
    // Check if username exists
    const existing = db.prepare('SELECT id FROM users WHERE username = ?').get(data.username);
    if (existing) {
      return NextResponse.json({ error: 'ชื่อผู้ใช้นี้มีในระบบแล้ว' }, { status: 400 });
    }

    const id = nanoid();
    const hashedPassword = await hashPassword(data.password);
    
    db.prepare(`
      INSERT INTO users (id, username, password_hash, role, display_name, must_change_password)
      VALUES (?, ?, ?, ?, ?, 1)
    `).run(id, data.username, hashedPassword, data.role, data.display_name);

    logAudit(user.id, user.username, 'create', 'user', id);
    return NextResponse.json({ success: true, id });
  } catch (error) {
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการสร้างผู้ใช้' }, { status: 500 });
  }
});
