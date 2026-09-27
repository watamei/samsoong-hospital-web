# MIGRATION.md — ตาราง Mapping URL เดิม -> URL ใหม่

> เอกสารนี้ใช้สำหรับตั้งค่า redirect จากเว็บเดิม (sshos.go.th) ไปยังโครงสร้าง URL ใหม่
> เฉพาะส่วน ITA/MOIT ที่เป็นข้อบังคับการประเมินของ ป.ป.ช./สธ. ห้ามลบทิ้ง

---

## กลยุทธ์ Redirect

- ใช้ **301 Permanent Redirect** สำหรับทุก URL
- ตั้งค่าใน Next.js `next.config.mjs` ในส่วน `redirects`
- หากใช้ nginx เป็น reverse proxy สามารถตั้ง redirect ที่ nginx ได้เช่นกัน

---

## ตาราง Mapping: ITA / MOPH-ITA

| URL เดิม (sshos.go.th) | URL ใหม่ | หมายเหตุ |
|---|---|---|
| `/ita/` | `/about/ita` | หน้ารวม ITA ทั้งหมด |
| `/ita-2569/` | `/about/ita?year=2569` | ITA ปีงบประมาณ 2569 |
| `/ita-2568/` | `/about/ita?year=2568` | ITA ปีงบประมาณ 2568 |
| `/ita-2567/` | `/about/ita?year=2567` | ITA ปีงบประมาณ 2567 |
| `/ita-2566/` | `/about/ita?year=2566` | ITA ปีงบประมาณ 2566 |
| `/ita-2565/` | `/about/ita?year=2565` | ITA ปีงบประมาณ 2565 |
| `/ita-*/moit-1/` | `/about/ita?moit=1` | MOIT 1 |
| `/ita-*/moit-2/` | `/about/ita?moit=2` | MOIT 2 |
| `/ita-*/moit-3/` | `/about/ita?moit=3` | MOIT 3 |
| `/ita-*/moit-4/` | `/about/ita?moit=4` | MOIT 4 |
| `/ita-*/moit-5/` | `/about/ita?moit=5` | MOIT 5 |
| `/ita-*/moit-6/` | `/about/ita?moit=6` | MOIT 6 |
| `/ita-*/moit-7/` | `/about/ita?moit=7` | MOIT 7 |
| `/ita-*/moit-8/` | `/about/ita?moit=8` | MOIT 8 |
| `/ita-*/moit-9/` | `/about/ita?moit=9` | MOIT 9 |
| `/ita-*/moit-10/` | `/about/ita?moit=10` | MOIT 10 |
| `/ita-*/moit-11/` | `/about/ita?moit=11` | MOIT 11 |
| `/ita-*/moit-12/` | `/about/ita?moit=12` | MOIT 12 |
| `/ita-*/moit-13/` | `/about/ita?moit=13` | MOIT 13 |
| `/ita-*/moit-14/` | `/about/ita?moit=14` | MOIT 14 |
| `/ita-*/moit-15/` | `/about/ita?moit=15` | MOIT 15 |
| `/ita-*/moit-16/` | `/about/ita?moit=16` | MOIT 16 |
| `/ita-*/moit-17/` | `/about/ita?moit=17` | MOIT 17 |
| `/ita-*/moit-18/` | `/about/ita?moit=18` | MOIT 18 |
| `/ita-*/moit-19/` | `/about/ita?moit=19` | MOIT 19 |
| `/ita-*/moit-20/` | `/about/ita?moit=20` | MOIT 20 |
| `/ita-*/moit-21/` | `/about/ita?moit=21` | MOIT 21 |
| `/ita-*/moit-22/` | `/about/ita?moit=22` | MOIT 22 |

## ตาราง Mapping: หน้าทั่วไป

| URL เดิม | URL ใหม่ | หมายเหตุ |
|---|---|---|
| `/` | `/` | หน้าแรก |
| `/about/` | `/about` | เกี่ยวกับเรา |
| `/contact/` | `/about/contact` | ติดต่อเรา |
| `/services/` | `/services` | บริการ |
| `/news/` | `/news` | ข่าวสาร |
| `/procurement/` | `/news/procurement` | จัดซื้อจัดจ้าง |
| `/jobs/` | `/news/jobs` | รับสมัครงาน |
| `/?p=*` (WordPress post IDs) | `/news/[slug]` | ต้อง mapping ทีละโพสต์ |

## ตาราง Mapping: MOIT รายละเอียด

### MOIT 1: การกำหนดมาตรการและวางระบบการเผยแพร่ข้อมูลต่อสาธารณะผ่านเว็บไซต์
- เอกสารที่ต้องย้าย: คำสั่ง/ประกาศกรอบแนวทาง, รายงานผลกำกับติดตาม

### MOIT 2: การเปิดเผยข้อมูลข่าวสารที่เป็นปัจจุบัน (12 รายการ)
- เอกสารที่ต้องย้าย: ข้อมูลผู้บริหาร, นโยบาย, โครงสร้าง, กฎหมาย, ช่องทางติดต่อ, ประมวลจริยธรรม

### MOIT 3: รายงานการวิเคราะห์ผลการจัดซื้อจัดจ้าง
- เอกสารที่ต้องย้าย: บันทึกข้อความ, รายงานวิเคราะห์

### MOIT 4: แผนปฏิบัติการจัดซื้อจัดจ้างประจำปี
- เอกสารที่ต้องย้าย: แผนปฏิบัติการ, คำสั่งจัดสรรงบ, ประกาศ e-GP

### MOIT 5: สรุปผลจัดซื้อจัดจ้างรายเดือน (แบบ สขร.1)
- เอกสารที่ต้องย้าย: แบบ สขร.1 รายเดือน (ต.ค. - ก.ย.)

### MOIT 6-8: นโยบาย HR, ประเมินผลราชการ, อบรมจริยธรรม
- เอกสารที่ต้องย้าย: ประกาศนโยบาย, ประกาศรายชื่อดีเด่น, โครงการอบรม

### MOIT 9-10: แนวปฏิบัติเรื่องร้องเรียน, สถิติร้องเรียน
- เอกสารที่ต้องย้าย: คู่มือ, แผนผัง, รายงานสถิติ

### MOIT 11: การเปิดโอกาสให้ผู้มีส่วนได้ส่วนเสียมีส่วนร่วม
- เอกสารที่ต้องย้าย: โครงการ, รายงานผล, ภาพถ่าย

### MOIT 12-14: ป้องกันสินบน, จริยธรรมยา, ทรัพย์สินราชการ
- เอกสารที่ต้องย้าย: ประกาศ No Gift Policy, เกณฑ์จริยธรรม, คู่มือยืมพัสดุ

### MOIT 15-18: แผนป้องกันทุจริต, รายงานผล, ประเมินความเสี่ยง
- เอกสารที่ต้องย้าย: แผนปฏิบัติการ, รายงาน 6/12 เดือน

### MOIT 19-22: จริยธรรม, ต้านทุจริต, เจตจำนงสุจริต, ป้องกันคุกคามทางเพศ
- เอกสารที่ต้องย้าย: รายงาน, ประกาศ, คู่มือ

---

## การตั้งค่า Redirect ใน Next.js

```javascript
// next.config.mjs
const nextConfig = {
  async redirects() {
    return [
      // ITA yearly redirects
      {
        source: '/ita-:year(\\d{4})',
        destination: '/about/ita?year=:year',
        permanent: true,
      },
      // ITA MOIT redirects
      {
        source: '/ita-:year(\\d{4})/moit-:moit(\\d+)',
        destination: '/about/ita?year=:year&moit=:moit',
        permanent: true,
      },
      // General ITA
      {
        source: '/ita',
        destination: '/about/ita',
        permanent: true,
      },
      // Contact
      {
        source: '/contact',
        destination: '/about/contact',
        permanent: true,
      },
      // Procurement
      {
        source: '/procurement',
        destination: '/news/procurement',
        permanent: true,
      },
      // Jobs
      {
        source: '/jobs',
        destination: '/news/jobs',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

---

## สิ่งที่ต้องทำเพิ่มเติม

- [ ] ตรวจสอบ URL เดิมทั้งหมดบนเว็บ sshos.go.th ที่มีอยู่จริง
- [ ] ทำ mapping สำหรับ WordPress post IDs (/?p=123) ไปยัง slug ใหม่
- [ ] ตรวจสอบว่า Google ได้ index URL เดิมไว้หรือไม่ (ใช้ site:sshos.go.th)
- [ ] ทดสอบ redirect ทุกเส้นทางหลัง deploy
- [ ] ส่ง sitemap ใหม่ให้ Google Search Console
