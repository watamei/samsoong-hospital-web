import dotenv from 'dotenv';
dotenv.config();

import { runMigrations } from '../src/lib/db/migrate';
import { seedDatabase } from '../src/lib/db/seed';

async function main() {
  console.log('Initializing database...');
  runMigrations();
  await seedDatabase();
  console.log('Database initialization complete.');
}

main().catch(console.error);
