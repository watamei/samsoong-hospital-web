'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, ChevronDown } from 'lucide-react';
import MobileNav from './MobileNav';

const menuItems = [
  { label: 'หน้าแรก', href: '/' },
  {
    label: 'บริการผู้ป่วย',
    href: '/services',
    subItems: [
      { label: 'คลินิกและตารางให้บริการ', href: '/services/clinics' },
      { label: 'ขั้นตอนการมารับบริการ', href: '/services/steps' },
      { label: 'สิทธิการรักษา', href: '/services/coverage' },
      { label: 'คำถามที่พบบ่อย', href: '/services/faq' },
    ]
  },
  { label: 'ตารางแพทย์', href: '/doctors' },
  {
    label: 'ข่าวสารและประกาศ',
    href: '/news',
    subItems: [
      { label: 'ข่าวประชาสัมพันธ์', href: '/news/pr' },
      { label: 'ประกาศจัดซื้อจัดจ้าง', href: '/news/procurement' },
      { label: 'รับสมัครงาน', href: '/news/jobs' },
    ]
  },
  {
    label: 'เกี่ยวกับเรา',
    href: '/about',
    subItems: [
      { label: 'ประวัติและพันธกิจ', href: '/about/history' },
      { label: 'ทำเนียบผู้บริหาร', href: '/about/executives' },
      { label: 'โครงสร้างองค์กร', href: '/about/structure' },
      { label: 'เครือข่ายบริการ', href: '/about/network' },
      { label: 'ดาวน์โหลดเอกสาร', href: '/about/downloads' },
      { label: 'MOPH-ITA', href: '/about/ita' },
      { label: 'ติดต่อเรา / แจ้งข้อร้องเรียน', href: '/about/contact' },
    ]
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-40 max-h-[72px]">
        <div className="max-w-[1200px] mx-auto px-4 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* TODO: ทำเวอร์ชันพื้นหลังโปร่งใสของโลโก้ */}
            <Image
              src="/images/logo.png"
              alt="โลโก้โรงพยาบาลซำสูง"
              width={48}
              height={48}
              className="w-12 h-12 object-contain shrink-0"
              priority
            />
            <span className="font-bold text-xl text-[#0F172A]">โรงพยาบาลซำสูง</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 h-full ml-auto mr-4">
            {menuItems.map((item, idx) => (
              <div key={idx} className="relative group h-full flex items-center">
                {item.subItems ? (
                  <button className="px-4 py-2 text-[#0F172A] hover:text-[#00694E] font-medium flex items-center gap-1 rounded-md hover:bg-gray-50 transition-colors">
                    {item.label}
                    <ChevronDown size={16} strokeWidth={2} />
                  </button>
                ) : (
                  <Link href={item.href} className="px-4 py-2 text-[#0F172A] hover:text-[#00694E] font-medium rounded-md hover:bg-gray-50 transition-colors">
                    {item.label}
                  </Link>
                )}
                
                {item.subItems && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-[#E5E7EB] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-sm z-50">
                    <div className="py-2">
                      {item.subItems.map((sub, sIdx) => (
                        <Link key={sIdx} href={sub.href} className="block px-4 py-2.5 text-[15px] text-[#0F172A] hover:bg-gray-50 hover:text-[#00694E] transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button className="w-10 h-10 flex items-center justify-center text-[#0F172A] hover:bg-gray-50 rounded-full transition-colors" aria-label="ค้นหา">
              <Search size={20} strokeWidth={2} />
            </button>
            <button 
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#0F172A] hover:bg-gray-50 rounded-md transition-colors" 
              aria-label="เมนู"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} strokeWidth={2} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} menuItems={menuItems} />
    </>
  );
}
