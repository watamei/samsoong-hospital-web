import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getContent<T>(filename: string): T {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as T;
}

export function getNewsFiles(): string[] {
  const newsDir = path.join(CONTENT_DIR, 'news');
  if (!fs.existsSync(newsDir)) return [];
  return fs.readdirSync(newsDir)
    .filter(f => f.endsWith('.md') && !f.startsWith('_'));
}
