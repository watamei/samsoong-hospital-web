'use client';
import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import { useFontSize } from './FontSizeProvider';
import Link from 'next/link';

export default function UtilityBar() {
  const { fontSize, setFontSize } = useFontSize();

  return (
    <div className="bg-[#0F172A] text-white/90 text-sm py-1.5 px-4 h-[36px] flex items-center justify-between">
      <div className="flex items-center gap-4 md:gap-6 max-w-[1200px] w-full mx-auto">
        <div className="flex items-center gap-4">
          <a href="tel:043-219192" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={14} strokeWidth={2} />
            <span>043-219192</span>
          </a>
          <a href="tel:1669" className="flex items-center gap-1.5 text-[#C8102E] hover:text-red-500 font-medium transition-colors">
            <AlertTriangle size={14} strokeWidth={2} />
            <span>ฉุกเฉิน 1669</span>
          </a>
        </div>
        
        <div className="ml-auto flex items-center gap-6">
          <div className="hidden md:flex items-center gap-2" aria-label="ปรับขนาดตัวอักษร">
            <span className="text-white/60 mr-1">ขนาดตัวอักษร:</span>
            <button
              onClick={() => setFontSize('normal')}
              className={`w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 transition-colors ${fontSize === 'normal' ? 'bg-white/20 text-white' : ''}`}
              aria-label="ขนาดตัวอักษรปกติ"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 transition-colors text-[16px] ${fontSize === 'large' ? 'bg-white/20 text-white' : ''}`}
              aria-label="ขนาดตัวอักษรใหญ่"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('xlarge')}
              className={`w-6 h-6 flex items-center justify-center rounded hover:bg-white/10 transition-colors text-[18px] ${fontSize === 'xlarge' ? 'bg-white/20 text-white' : ''}`}
              aria-label="ขนาดตัวอักษรใหญ่มาก"
            >
              A+
            </button>
          </div>
          <Link href="/login" className="hover:text-white transition-colors">
            เข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </div>
  );
}
