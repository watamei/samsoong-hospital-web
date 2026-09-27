import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const UPLOAD_DIR = process.env.UPLOAD_DIR || './data/uploads';

const DIRS = {
  original: path.join(UPLOAD_DIR, 'originals'),
  thumb: path.join(UPLOAD_DIR, 'thumb'),
  medium: path.join(UPLOAD_DIR, 'medium'),
  large: path.join(UPLOAD_DIR, 'large'),
  document: path.join(UPLOAD_DIR, 'documents')
};

// Ensure directories exist
Object.values(DIRS).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

export function saveFile(buffer: Buffer, mimeType: string, isDocument: boolean = false): string {
  const ext = mimeType.split('/')[1] === 'webp' ? '.webp' :
              mimeType === 'application/pdf' ? '.pdf' : 
              mimeType.includes('word') ? '.docx' : '.xlsx'; // simplified
  
  const storedFilename = uuidv4() + ext;

  if (isDocument) {
    fs.writeFileSync(path.join(DIRS.document, storedFilename), buffer);
  } else {
    fs.writeFileSync(path.join(DIRS.original, storedFilename), buffer);
  }

  return storedFilename;
}

export function saveProcessedImages(storedFilename: string, thumb: Buffer, medium: Buffer, large: Buffer) {
  fs.writeFileSync(path.join(DIRS.thumb, storedFilename), thumb);
  fs.writeFileSync(path.join(DIRS.medium, storedFilename), medium);
  fs.writeFileSync(path.join(DIRS.large, storedFilename), large);
}

export function deleteFile(storedFilename: string, isDocument: boolean = false): void {
  if (isDocument) {
    const p = path.join(DIRS.document, storedFilename);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  } else {
    ['original', 'thumb', 'medium', 'large'].forEach(size => {
      const p = path.join(DIRS[size as keyof typeof DIRS], storedFilename);
      if (fs.existsSync(p)) fs.unlinkSync(p);
    });
  }
}

export function getFilePath(storedFilename: string, size: 'original' | 'thumb' | 'medium' | 'large' | 'document'): string {
  return path.join(DIRS[size], storedFilename);
}
