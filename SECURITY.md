# นโยบายความปลอดภัย (Security Policies)

## การพิสูจน์ตัวตน (Authentication)
- ใช้ **bcrypt** (cost factor = 12) สำหรับแฮชรหัสผ่าน
- Sessions ถูกเก็บในฐานข้อมูลและผูกกับ Cookie
- Cookies มีการตั้งค่า `HttpOnly`, `SameSite=Lax`, และ `Secure` (ใน production)

## การป้องกันการโจมตี
- **Rate Limiting**: จำกัดการเข้าสู่ระบบ 5 ครั้ง ต่อ 15 นาที ต่อ IP Address
- **CSRF Protection**: ต้องแนบ Token ใน HTTP Header (`x-csrf-token`) สำหรับทุกการส่งข้อมูลแบบ mutation (POST, PUT, DELETE)
- **SQL Injection**: ป้องกันโดยใช้ Prepared Statements ตลอดทั่วทั้งแอปพลิเคชัน (`better-sqlite3` parameter binding)
- **XSS**: ใช้กลไกป้องกันของ React / Next.js เพื่อ escape ข้อมูลก่อนแสดงผลบนเบราว์เซอร์

## ความปลอดภัยของไฟล์อัปโหลด
- ใช้ Magic Numbers ในการตรวจสอบประเภทไฟล์ที่แท้จริง (ป้องกันการเปลี่ยนนามสกุลไฟล์หลอก)
- อนุญาตเฉพาะ .jpg, .png, .webp, .heic, .pdf, .docx, .xlsx
- ขจัด Metadata ฝังตัวและ Scripts ที่อาจอยู่ในไฟล์ภาพ โดยประมวลผลผ่าน `sharp` เสมอ
- ไฟล์ทั้งหมดถูกเปลี่ยนชื่อเป็นแบบสุ่ม (UUID) เพื่อป้องกัน Directory Traversal

## การติดตามกิจกรรม (Audit Trail)
- ทุกการเข้าสู่ระบบ ลบ อัปเดตข้อมูล จะถูกบันทึกพร้อม IP Address เพื่อการตรวจสอบย้อนหลัง
