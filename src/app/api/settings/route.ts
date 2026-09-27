import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { withAuth } from '@/lib/auth/middleware';
import { logAudit } from '@/lib/audit';

export async function GET() {
  const db = getDb();
  const settings = db.prepare('SELECT key, value FROM site_settings').all() as any[];
  const result = settings.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {});
  return NextResponse.json(result);
}

export const PUT = withAuth(async (req: NextRequest, user: any) => {
  if (user.role !== 'admin') {
    return NextResponse.json({ error: 'เฉพาะผู้ดูแลระบบเท่านั้น' }, { status: 403 });
  }

  try {
    const data = await req.json();
    const db = getDb();
    
    db.transaction(() => {
      const stmt = db.prepare('UPDATE site_settings SET value = ?, updated_by = ?, updated_at = datetime("now") WHERE key = ?');
      for (const [key, value] of Object.entries(data)) {
        stmt.run(String(value), user.id, key);
      }
    })();

    logAudit(user.id, user.username, 'update', 'settings', 'site', 'Updated site settings');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการบันทึก' }, { status: 500 });
  }
});
