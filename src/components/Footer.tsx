import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white pt-12 md:pt-16 pb-24 md:pb-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Col 1: Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                โลโก้
              </div>
              <h2 className="text-xl font-bold">โรงพยาบาลซำสูง</h2>
            </div>
            <p className="text-white/80 text-[15px] leading-relaxed mb-4">
              231 หมู่ 3 ถนนกระนวน-เชียงยืน<br />
              ตำบลกระนวน อำเภอซำสูง<br />
              จังหวัดขอนแก่น 40170
            </p>
            <p className="text-white/80 text-[15px]">
              โทรศัพท์: 043-219192
            </p>
          </div>
          
          {/* Col 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">ลิงก์สำคัญ</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors text-[15px]">บริการผู้ป่วย</Link></li>
              <li><Link href="/doctors" className="text-white/80 hover:text-white transition-colors text-[15px]">ตารางแพทย์</Link></li>
              <li><Link href="/news" className="text-white/80 hover:text-white transition-colors text-[15px]">ข่าวสารและประกาศ</Link></li>
              <li><Link href="/about/ita" className="text-white/80 hover:text-white transition-colors text-[15px]">MOPH-ITA</Link></li>
              <li><Link href="/about/contact" className="text-white/80 hover:text-white transition-colors text-[15px]">ติดต่อเรา / แจ้งข้อร้องเรียน</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">ช่องทางติดต่อ</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.facebook.com/sumsunghospital" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors text-[15px] flex items-center gap-2">
                  Facebook โรงพยาบาล
                </a>
              </li>
              <li>
                <a href="tel:043-219192" className="text-white/80 hover:text-white transition-colors text-[15px] flex items-center gap-2">
                  เบอร์โทรศัพท์ 043-219192
                </a>
              </li>
              <li>
                <a href="tel:1669" className="text-[#C8102E] font-medium hover:text-red-400 transition-colors text-[15px] flex items-center gap-2">
                  แจ้งเหตุฉุกเฉิน 1669
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/admin" className="hover:text-white transition-colors">สำหรับเจ้าหน้าที่</Link>
            <Link href="/policy/cookies" className="hover:text-white transition-colors">นโยบายคุกกี้</Link>
            <Link href="/policy/privacy" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</Link>
          </div>
          <div className="text-center md:text-right">
            &copy; {new Date().getFullYear()} โรงพยาบาลซำสูง สังกัดกระทรวงสาธารณสุข
          </div>
        </div>
      </div>
    </footer>
  );
}
