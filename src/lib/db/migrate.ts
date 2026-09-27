import fs from 'fs';
import path from 'path';
import { getDb } from './index';

export function runMigrations() {
  const db = getDb();
  const schemaPath = path.join(process.cwd(), 'src/lib/db/schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf-8');

  db.exec(schema);
  console.log('Migrations completed successfully.');
}
