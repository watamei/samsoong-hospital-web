import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { withAuth } from '@/lib/auth/middleware';
import { nanoid } from 'nanoid';
import { logAudit } from '@/lib/audit';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const status = searchParams.get('status');
  const limit = parseInt(searchParams.get('limit') || '10');
  const page = parseInt(searchParams.get('page') || '1');
  const offset = (page - 1) * limit;

  const db = getDb();
  let query = 'SELECT * FROM news WHERE deleted_at IS NULL';
  const params: any[] = [];

  if (category) {
    query += ' AND category = ?';
    params.push(category);
  }
  if (status) {
    query += ' AND status = ?';
    params.push(status);
  }

  const total = (db.prepare(`SELECT COUNT(*) as count FROM (${query})`).get(...params) as any).count;
  
  query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
  params.push(limit, offset);

  const items = db.prepare(query).all(...params);

  return NextResponse.json({ items, total, page, limit });
}

export const POST = withAuth(async (req: NextRequest, user: any) => {
  try {
    const data = await req.json();
    const id = nanoid();
    const slug = data.slug || nanoid(10); // simple slug fallback

    const db = getDb();
    db.prepare(`
      INSERT INTO news (id, title, slug, content, excerpt, category, status, thumbnail_id, author_id, published_at, scheduled_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      id, data.title, slug, data.content, data.excerpt, data.category, data.status,
      data.thumbnail_id || null, user.id, data.published_at || null, data.scheduled_at || null
    );

    logAudit(user.id, user.username, 'create', 'news', id);
    return NextResponse.json({ id, success: true });
  } catch (error) {
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการสร้างข่าว' }, { status: 500 });
  }
});
