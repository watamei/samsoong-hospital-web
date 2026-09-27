import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { withAuth } from '@/lib/auth/middleware';

export const GET = withAuth(async (req: NextRequest, user: any) => {
  if (user.role !== 'admin') {
    return NextResponse.json({ error: 'เฉพาะผู้ดูแลระบบเท่านั้น' }, { status: 403 });
  }
  
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get('limit') || '50');
  const page = parseInt(searchParams.get('page') || '1');
  const offset = (page - 1) * limit;
  
  const db = getDb();
  const total = (db.prepare('SELECT count(*) as count FROM audit_log').get() as any).count;
  const items = db.prepare('SELECT * FROM audit_log ORDER BY created_at DESC LIMIT ? OFFSET ?').all(limit, offset);
  
  return NextResponse.json({ items, total, page, limit });
});
