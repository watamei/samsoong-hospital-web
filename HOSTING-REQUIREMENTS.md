# HOSTING-REQUIREMENTS.md — สเปกเซิร์ฟเวอร์สำหรับเว็บไซต์โรงพยาบาลซำสูง

> เอกสารฉบับนี้ใช้ส่งให้ผู้ดูแลระบบ (System Administrator) เพื่อเตรียมเซิร์ฟเวอร์

---

## สเปกขั้นต่ำ

| รายการ | ความต้องการ |
|---|---|
| ระบบปฏิบัติการ | Ubuntu 22.04 LTS หรือ Debian 12 ขึ้นไป (แนะนำ Linux) |
| CPU | 1 vCPU ขึ้นไป |
| RAM | 1 GB ขึ้นไป (แนะนำ 2 GB) |
| Disk | 10 GB ขึ้นไป (SSD แนะนำ) |
| Node.js | **18.17 ขึ้นไป** (แนะนำ 20 LTS) |
| npm | 9.x ขึ้นไป |
| Reverse Proxy | nginx 1.18+ หรือ Apache 2.4+ (แนะนำ nginx) |
| SSL/TLS | **บังคับ** ต้องมี HTTPS (ใช้ Let's Encrypt ได้ฟรี) |
| Domain | ชี้ DNS มาที่ IP ของเซิร์ฟเวอร์ |

## สเปกแนะนำ (สำหรับ production)

| รายการ | ความต้องการ |
|---|---|
| RAM | 2 GB |
| Disk | 20 GB (รองรับไฟล์อัปโหลดระยะยาว) |
| Backup | สำรองข้อมูลอัตโนมัติอย่างน้อยวันละครั้ง |
| Process Manager | PM2 สำหรับรัน Node.js ให้ restart อัตโนมัติ |
| Firewall | เปิดเฉพาะ port 80, 443 |
| Cron | ต้องมี cron สำหรับตั้งเวลาเผยแพร่อัตโนมัติ |

## ซอฟต์แวร์ที่ต้องติดตั้ง

```bash
# 1. Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. PM2 (Process Manager)
sudo npm install -g pm2

# 3. nginx
sudo apt-get install -y nginx

# 4. Certbot (Let's Encrypt)
sudo apt-get install -y certbot python3-certbot-nginx

# 5. Build tools (สำหรับ native modules เช่น sharp, better-sqlite3)
sudo apt-get install -y build-essential python3
```

## โครงสร้างไดเรกทอรีบนเซิร์ฟเวอร์

```
/var/www/samsoong/
├── app/                 # โค้ด Next.js (deploy ที่นี่)
│   ├── .next/           # build output
│   ├── public/          # static files
│   ├── node_modules/
│   └── package.json
├── data/                # ข้อมูล (ต้องสำรอง!)
│   ├── samsoong.db      # ฐานข้อมูล SQLite
│   └── uploads/         # ไฟล์ที่อัปโหลด
│       ├── originals/
│       ├── thumb/
│       ├── medium/
│       └── large/
├── backups/             # ไฟล์สำรอง
└── logs/                # log files
```

## ตัวอย่างการตั้งค่า nginx

```nginx
server {
    listen 80;
    server_name samsoong.example.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name samsoong.example.com;

    ssl_certificate /etc/letsencrypt/live/samsoong.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/samsoong.example.com/privkey.pem;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; frame-src https://www.google.com;" always;

    # File upload limit
    client_max_body_size 20M;

    # Disable directory listing
    autoindex off;

    # Block access to data directory
    location /data/ {
        deny all;
        return 404;
    }

    # Proxy to Next.js
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Cache static assets
    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## ตัวอย่าง PM2 ecosystem file

```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'samsoong-hospital',
    script: 'node_modules/.bin/next',
    args: 'start',
    cwd: '/var/www/samsoong/app',
    instances: 1,
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
    env_file: '/var/www/samsoong/app/.env',
    error_file: '/var/www/samsoong/logs/error.log',
    out_file: '/var/www/samsoong/logs/output.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    max_memory_restart: '500M',
  }]
};
```

## ขั้นตอนการ Deploy

```bash
# 1. Clone หรือ upload โค้ดไปที่ /var/www/samsoong/app/

# 2. สร้างไดเรกทอรีข้อมูล
mkdir -p /var/www/samsoong/data/uploads/{originals,thumb,medium,large}
mkdir -p /var/www/samsoong/backups
mkdir -p /var/www/samsoong/logs

# 3. ตั้งค่า .env
cp .env.example .env
# แก้ไขค่าใน .env ตามจริง

# 4. ติดตั้ง dependencies
npm ci --production

# 5. Build
npm run build

# 6. เริ่มระบบ
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## การสำรองข้อมูล (Backup)

```bash
#!/bin/bash
# /var/www/samsoong/backup.sh
# ตั้ง cron: 0 2 * * * /var/www/samsoong/backup.sh

BACKUP_DIR="/var/www/samsoong/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# สำรอง database
cp /var/www/samsoong/data/samsoong.db "$BACKUP_DIR/db_$DATE.db"

# สำรอง uploads
tar -czf "$BACKUP_DIR/uploads_$DATE.tar.gz" /var/www/samsoong/data/uploads/

# ลบ backup เก่ากว่า 30 วัน
find "$BACKUP_DIR" -type f -mtime +30 -delete
```

## ทางเลือกสำรอง: WordPress Headless CMS

หากเซิร์ฟเวอร์ไม่สามารถรัน Node.js ได้ สามารถเปลี่ยนไปใช้ WordPress เดิม (sshos.go.th) เป็น headless CMS:

1. เปิด WordPress REST API ที่ sshos.go.th
2. เว็บหน้าบ้าน export เป็น static HTML จาก Next.js
3. ดึงเนื้อหาจาก WordPress API ตอน build time
4. Deploy static files บนเซิร์ฟเวอร์ใดก็ได้ (ไม่ต้องมี Node.js)

> ข้อจำกัด: จะไม่ได้ admin panel ในตัว ต้องใช้ WordPress admin แทน
