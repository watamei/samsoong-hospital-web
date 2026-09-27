import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { withAuth } from '@/lib/auth/middleware';
import { logAudit } from '@/lib/audit';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const db = getDb();
  const item = db.prepare('SELECT * FROM news WHERE id = ? AND deleted_at IS NULL').get(params.id);
  if (!item) return NextResponse.json({ error: 'ไม่พบข่าว' }, { status: 404 });
  return NextResponse.json(item);
}

export const PUT = withAuth(async (req: NextRequest, user: any) => {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    const data = await req.json();
    const db = getDb();
    
    db.prepare(`
      UPDATE news SET 
        title = ?, slug = ?, content = ?, excerpt = ?, category = ?, 
        status = ?, thumbnail_id = ?, published_at = ?, scheduled_at = ?, updated_at = datetime('now')
      WHERE id = ?
    `).run(
      data.title, data.slug, data.content, data.excerpt, data.category,
      data.status, data.thumbnail_id || null, data.published_at || null, data.scheduled_at || null, id
    );

    logAudit(user.id, user.username, 'update', 'news', id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการอัปเดต' }, { status: 500 });
  }
});

export const DELETE = withAuth(async (req: NextRequest, user: any) => {
  const id = req.nextUrl.pathname.split('/').pop();
  const db = getDb();
  db.prepare("UPDATE news SET deleted_at = datetime('now') WHERE id = ?").run(id);
  logAudit(user.id, user.username, 'delete', 'news', id);
  return NextResponse.json({ success: true });
});
