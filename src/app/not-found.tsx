'use client';
import Link from 'next/link';
import { Hammer, Sparkles, ArrowLeft } from 'lucide-react';
import PendingData from '@/components/PendingData';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="relative mb-10 mt-6">
        {/* Background glow */}
        <div className="absolute inset-0 bg-amber-200 blur-xl opacity-50 rounded-full animate-pulse"></div>
        {/* Main Circle */}
        <div className="w-28 h-28 bg-amber-50 rounded-full border-4 border-amber-100 flex items-center justify-center relative z-10 shadow-sm">
          <Hammer className="w-12 h-12 text-amber-500 animate-[bounce_2s_infinite]" />
          
          {/* Decorative Sparkles */}
          <Sparkles className="w-6 h-6 text-amber-400 absolute -top-1 -right-2 animate-[spin_4s_linear_infinite]" />
          <Sparkles className="w-4 h-4 text-amber-300 absolute bottom-2 -left-2 animate-pulse" />
        </div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 text-center">
        หน้านี้กำลังอยู่ระหว่างการจัดทำ
      </h1>
      
      <p className="text-lg text-gray-600 max-w-lg text-center mb-10 leading-relaxed">
        ขออภัยในความไม่สะดวก ข้อมูลในส่วนนี้ยังไม่มีหรือกำลังอยู่ระหว่างรอรวบรวมข้อมูลจริงจากทางโรงพยาบาลซำสูงเพื่อนำมาอัปเดตครับ
      </p>

      <div className="w-full max-w-md mb-12">
        <PendingData message="สถานะ: โครงร่างหน้าเว็บรอข้อมูล (Pending Content)" />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/" 
          className="flex items-center justify-center gap-2 px-8 py-3 bg-[#00694E] text-white font-semibold rounded-full hover:bg-[#00523d] transition-colors shadow-sm"
        >
          <ArrowLeft className="w-5 h-5" />
          กลับสู่หน้าหลัก
        </Link>
        <button 
          onClick={() => window.history.back()} 
          className="flex items-center justify-center gap-2 px-8 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-sm"
        >
          ย้อนกลับหน้าเดิม
        </button>
      </div>
    </div>
  );
}
