import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { withAuth } from '@/lib/auth/middleware';
import { processImage } from '@/lib/upload/process-image';
import { validateFile } from '@/lib/upload/validate';
import { saveFile, saveProcessedImages } from '@/lib/upload/storage';
import { nanoid } from 'nanoid';
import { logAudit } from '@/lib/audit';

export async function GET(req: NextRequest) {
  const db = getDb();
  const items = db.prepare('SELECT * FROM images ORDER BY created_at DESC').all();
  return NextResponse.json(items);
}

export const POST = withAuth(async (req: NextRequest, user: any) => {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const altText = formData.get('alt_text') as string;
    const category = formData.get('category') as string || 'general';

    if (!file || !altText) {
      return NextResponse.json({ error: 'กรุณาอัปโหลดไฟล์และระบุคำอธิบายรูปภาพ (Alt Text)' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const validation = validateFile(buffer, file.name);

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    // Process image
    const processed = await processImage(buffer, file.name);
    
    // Save original (we store it as webp if processed)
    const storedFilename = saveFile(processed.original, processed.mimeType);
    
    // Save resized versions
    saveProcessedImages(storedFilename, processed.thumb, processed.medium, processed.large);

    const db = getDb();
    const id = nanoid();

    db.prepare(`
      INSERT INTO images (id, original_filename, stored_filename, alt_text, category, mime_type, file_size, uploaded_by)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(id, file.name, storedFilename, altText, category, processed.mimeType, buffer.length, user.id);

    logAudit(user.id, user.username, 'upload', 'image', id, `Uploaded ${file.name}`);

    return NextResponse.json({ id, storedFilename, success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'เกิดข้อผิดพลาดในการอัปโหลดรูปภาพ' }, { status: 500 });
  }
});
