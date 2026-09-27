import { getDb } from './index';
import { hashPassword } from '../auth/password';
import { nanoid } from 'nanoid';

export async function seedDatabase() {
  const db = getDb();
  
  const adminUser = process.env.ADMIN_USER || 'admin';
  const adminPassword = process.env.ADMIN_PASSWORD || 'password123';
  
  const existingAdmin = db.prepare('SELECT id FROM users WHERE username = ?').get(adminUser);
  
  if (!existingAdmin) {
    const hashedPassword = await hashPassword(adminPassword);
    db.prepare(`
      INSERT INTO users (id, username, password_hash, role, display_name, must_change_password)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(nanoid(), adminUser, hashedPassword, 'admin', 'Administrator', 1);
    console.log('Admin user created');
  }

  const defaultSettings = [
    ['name_th', 'โรงพยาบาลซำสูง'],
    ['name_en', 'Samsoong Hospital'],
    ['type', 'โรงพยาบาลชุมชน ขนาด 30 เตียง สังกัดกระทรวงสาธารณสุข'],
    ['address', '231 หมู่ 3 ถนนกระนวน-เชียงยืน ตำบลกระนวน อำเภอซำสูง จังหวัดขอนแก่น 40170'],
    ['phone', '043-219192'],
    ['emergency', '1669'],
    ['nhso_hotline', '1330'],
    ['facebook', 'https://www.facebook.com/sumsunghospital'],
    ['legacy_site', 'https://www.sshos.go.th']
  ];

  const insertSetting = db.prepare('INSERT OR IGNORE INTO site_settings (key, value) VALUES (?, ?)');
  const insertHero = db.prepare('INSERT OR IGNORE INTO hero_settings (id) VALUES (1)');
  
  db.transaction(() => {
    for (const [key, value] of defaultSettings) {
      insertSetting.run(key, value);
    }
    insertHero.run();
  })();
  console.log('Seed completed.');
}
