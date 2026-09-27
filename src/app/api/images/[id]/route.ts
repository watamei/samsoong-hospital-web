import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { withAuth } from '@/lib/auth/middleware';
import { getFilePath, deleteFile as deleteStorageFile } from '@/lib/upload/storage';
import fs from 'fs';
import { logAudit } from '@/lib/audit';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const db = getDb();
  const image = db.prepare('SELECT * FROM images WHERE id = ?').get(params.id) as any;
  
  if (!image) return new NextResponse('Not found', { status: 404 });

  const url = new URL(req.url);
  const size = url.searchParams.get('size') as 'original' | 'thumb' | 'medium' | 'large' || 'original';
  
  const filePath = getFilePath(image.stored_filename, size);
  
  if (!fs.existsSync(filePath)) {
    return new NextResponse('File not found on disk', { status: 404 });
  }

  const file = fs.readFileSync(filePath);
  return new NextResponse(file, {
    headers: {
      'Content-Type': image.mime_type,
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

export const DELETE = withAuth(async (req: NextRequest, user: any) => {
  const id = req.nextUrl.pathname.split('/').pop();
  const db = getDb();
  
  // Check if used in hero or news
  const inHero = db.prepare('SELECT id FROM hero_settings WHERE image_id = ?').get(id);
  const inNews = db.prepare('SELECT id FROM news WHERE thumbnail_id = ?').get(id);
  const inDoctor = db.prepare('SELECT id FROM doctors WHERE image_id = ?').get(id);

  if (inHero || inNews || inDoctor) {
    return NextResponse.json({ error: 'ไม่สามารถลบได้ เนื่องจากรูปภาพถูกใช้งานอยู่' }, { status: 400 });
  }

  const image = db.prepare('SELECT * FROM images WHERE id = ?').get(id) as any;
  if (image) {
    deleteStorageFile(image.stored_filename);
    db.prepare('DELETE FROM images WHERE id = ?').run(id);
    logAudit(user.id, user.username, 'delete', 'image', id, `Deleted ${image.original_filename}`);
  }

  return NextResponse.json({ success: true });
});
