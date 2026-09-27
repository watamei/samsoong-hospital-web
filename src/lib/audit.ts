import { getDb } from './db';
import { nanoid } from 'nanoid';

export function logAudit(
  userId: string,
  username: string,
  action: string,
  entityType: string,
  entityId?: string,
  details?: string,
  ipAddress?: string
) {
  const db = getDb();
  
  try {
    db.prepare(`
      INSERT INTO audit_log (id, user_id, username, action, entity_type, entity_id, details, ip_address)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(nanoid(), userId, username, action, entityType, entityId || null, details || null, ipAddress || null);
  } catch (error) {
    console.error('Failed to log audit event:', error);
  }
}
