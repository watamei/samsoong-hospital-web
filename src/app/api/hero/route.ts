import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { withAuth } from '@/lib/auth/middleware';
import { logAudit } from '@/lib/audit';

export async function GET() {
  const db = getDb();
  const hero = db.prepare(`
    SELECT h.*, i.stored_filename as image_filename 
    FROM hero_settings h 
    LEFT JOIN images i ON h.image_id = i.id 
    WHERE h.id = 1
  `).get();
  return NextResponse.json(hero || {});
}

export const PUT = withAuth(async (req: NextRequest, user: any) => {
  if (user.role !== 'admin') {
    return NextResponse.json({ error: 'เฉพาะผู้ดูแลระบบเท่านั้น' }, { status: 403 });
  }

  try {
    const data = await req.json();
    const db = getDb();
    
    db.prepare(`
      UPDATE hero_settings 
      SET image_id = ?, heading = ?, subheading = ?, overlay_opacity = ?, updated_at = datetime('now')
      WHERE id = 1
    `).run(data.image_id || null, data.heading, data.subheading, data.overlay_opacity);

    logAudit(user.id, user.username, 'update', 'settings', 'hero', 'Updated hero settings');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการบันทึก' }, { status: 500 });
  }
});
