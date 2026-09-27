import path from 'path';

const MAX_SIZE = 15 * 1024 * 1024; // 15MB

const ALLOWED_MIME_TYPES: Record<string, string[]> = {
  'image/jpeg': ['ffd8ffe0', 'ffd8ffe1', 'ffd8ffe2'],
  'image/png': ['89504e47'],
  'image/webp': ['52494646'],
  'image/heic': ['00000018', '00000024'],
  'application/pdf': ['25504446'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['504b0304'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['504b0304']
};

const BLOCKED_EXTENSIONS = ['.php', '.exe', '.sh', '.html', '.svg', '.js', '.ts', '.phtml'];

export function validateFile(buffer: Buffer, filename: string): { valid: boolean; mimeType: string; error?: string } {
  if (buffer.length > MAX_SIZE) {
    return { valid: false, mimeType: '', error: 'ขนาดไฟล์เกิน 15MB' };
  }

  const ext = path.extname(filename).toLowerCase();
  if (BLOCKED_EXTENSIONS.includes(ext)) {
    return { valid: false, mimeType: '', error: 'ไม่อนุญาตให้อัปโหลดไฟล์ประเภทนี้' };
  }

  const hex = buffer.toString('hex', 0, 4).toLowerCase();
  
  for (const [mime, signatures] of Object.entries(ALLOWED_MIME_TYPES)) {
    if (signatures.some(sig => hex.startsWith(sig))) {
      return { valid: true, mimeType: mime };
    }
  }

  // Fallback for docx/xlsx which might have varied ZIP signatures
  if (ext === '.docx' || ext === '.xlsx' || ext === '.pdf') {
     // rudimentary fallback, true validation needs fuller check
     if (hex.startsWith('504b0304') || hex.startsWith('25504446')) {
         const mime = ext === '.pdf' ? 'application/pdf' : 
                      ext === '.docx' ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' :
                      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
         return { valid: true, mimeType: mime };
     }
  }

  return { valid: false, mimeType: '', error: 'รูปแบบไฟล์ไม่ถูกต้องหรือไม่อนุญาต' };
}
