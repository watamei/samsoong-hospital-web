-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('admin', 'editor')),
  display_name TEXT NOT NULL,
  must_change_password INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Sessions table
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  expires_at TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Rate limiting
CREATE TABLE IF NOT EXISTS login_attempts (
  ip TEXT NOT NULL,
  attempted_at TEXT DEFAULT (datetime('now'))
);

-- News/announcements
CREATE TABLE IF NOT EXISTS news (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT,
  excerpt TEXT,
  category TEXT NOT NULL CHECK(category IN ('news', 'procurement', 'jobs')),
  status TEXT NOT NULL DEFAULT 'draft' CHECK(status IN ('draft', 'published', 'hidden')),
  thumbnail_id TEXT REFERENCES images(id),
  author_id TEXT REFERENCES users(id),
  published_at TEXT,
  scheduled_at TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now')),
  deleted_at TEXT
);

-- Doctors
CREATE TABLE IF NOT EXISTS doctors (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  specialty TEXT,
  image_id TEXT REFERENCES images(id),
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Doctor schedule
CREATE TABLE IF NOT EXISTS doctor_schedules (
  id TEXT PRIMARY KEY,
  doctor_id TEXT NOT NULL REFERENCES doctors(id),
  day_of_week TEXT NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  location TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Clinics
CREATE TABLE IF NOT EXISTS clinics (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  day_of_week TEXT NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  location TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Images
CREATE TABLE IF NOT EXISTS images (
  id TEXT PRIMARY KEY,
  original_filename TEXT NOT NULL,
  stored_filename TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  mime_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  width INTEGER,
  height INTEGER,
  uploaded_by TEXT REFERENCES users(id),
  created_at TEXT DEFAULT (datetime('now'))
);

-- Documents (PDF, DOCX, etc.)
CREATE TABLE IF NOT EXISTS documents (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  original_filename TEXT NOT NULL,
  stored_filename TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  uploaded_by TEXT REFERENCES users(id),
  created_at TEXT DEFAULT (datetime('now'))
);

-- ITA documents
CREATE TABLE IF NOT EXISTS ita_documents (
  id TEXT PRIMARY KEY,
  moit_number INTEGER NOT NULL CHECK(moit_number BETWEEN 1 AND 22),
  fiscal_year INTEGER NOT NULL,
  quarter INTEGER CHECK(quarter BETWEEN 1 AND 4),
  title TEXT NOT NULL,
  document_id TEXT REFERENCES documents(id),
  external_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Site settings (key-value)
CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value TEXT,
  updated_at TEXT DEFAULT (datetime('now')),
  updated_by TEXT REFERENCES users(id)
);

-- Hero settings
CREATE TABLE IF NOT EXISTS hero_settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  image_id TEXT REFERENCES images(id),
  heading TEXT DEFAULT 'โรงพยาบาลซำสูง',
  subheading TEXT DEFAULT 'โรงพยาบาลชุมชนขนาด 30 เตียง อำเภอซำสูง จังหวัดขอนแก่น',
  overlay_opacity INTEGER DEFAULT 45,
  updated_at TEXT DEFAULT (datetime('now'))
);

-- Audit log
CREATE TABLE IF NOT EXISTS audit_log (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  username TEXT NOT NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  details TEXT,
  ip_address TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Auto-save drafts
CREATE TABLE IF NOT EXISTS drafts (
  id TEXT PRIMARY KEY,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  content TEXT NOT NULL,
  user_id TEXT REFERENCES users(id),
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);
