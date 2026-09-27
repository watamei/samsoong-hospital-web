import { getDb } from '../db';
import { nanoid } from 'nanoid';
import { cookies } from 'next/headers';

export interface Session {
  id: string;
  user_id: string;
  expires_at: string;
  created_at: string;
}

export function createSession(userId: string): string {
  const db = getDb();
  const sessionId = nanoid(32);
  const expiresAt = new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString(); // 8 hours

  db.prepare(`
    INSERT INTO sessions (id, user_id, expires_at)
    VALUES (?, ?, ?)
  `).run(sessionId, userId, expiresAt);

  return sessionId;
}

export function getSession(sessionId: string): Session | null {
  const db = getDb();
  const session = db.prepare('SELECT * FROM sessions WHERE id = ?').get(sessionId) as Session;
  
  if (!session) return null;

  if (new Date(session.expires_at) < new Date()) {
    deleteSession(sessionId);
    return null;
  }

  return session;
}

export function deleteSession(sessionId: string): void {
  const db = getDb();
  db.prepare('DELETE FROM sessions WHERE id = ?').run(sessionId);
}

export function setSessionCookie(sessionId: string) {
  cookies().set('session', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 8 * 60 * 60, // 8 hours
    path: '/',
  });
}
