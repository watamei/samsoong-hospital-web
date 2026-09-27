import { getDb } from '../db';

export function checkRateLimit(ip: string): { allowed: boolean; remainingAttempts: number } {
  const db = getDb();
  
  // Clean up old attempts (> 15 minutes)
  db.prepare(`
    DELETE FROM login_attempts 
    WHERE attempted_at < datetime('now', '-15 minutes')
  `).run();

  const result = db.prepare(`
    SELECT count(*) as count 
    FROM login_attempts 
    WHERE ip = ?
  `).get(ip) as { count: number };

  const MAX_ATTEMPTS = 5;
  const count = result.count;

  return {
    allowed: count < MAX_ATTEMPTS,
    remainingAttempts: Math.max(0, MAX_ATTEMPTS - count)
  };
}

export function recordAttempt(ip: string): void {
  const db = getDb();
  db.prepare('INSERT INTO login_attempts (ip) VALUES (?)').run(ip);
}
