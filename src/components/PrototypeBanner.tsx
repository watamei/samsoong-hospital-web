"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, X } from "lucide-react";

export default function PrototypeBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border-b border-amber-200 py-3 px-4 relative z-50">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 pr-8 sm:pr-0">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 hidden sm:block" />
        <div className="text-sm text-amber-900 text-center sm:text-left flex-1 max-w-4xl font-medium">
          <span className="font-bold text-amber-700">ประกาศสำคัญ:</span> เว็บไซต์นี้เป็นเพียงตัวต้นแบบ (Prototype) ที่จัดทำขึ้นเพื่อนำเสนอแนวทางการพัฒนาเว็บไซต์ให้แก่โรงพยาบาลซำสูงเท่านั้น <br className="sm:hidden" />
          <span className="inline-block mt-1 sm:mt-0 sm:ml-1">
            ยังไม่ใช่เว็บไซต์อย่างเป็นทางการและไม่สามารถใช้งานจริงได้ 
            <Link href="/about/prototype" className="ml-2 underline text-amber-700 hover:text-amber-800 font-bold whitespace-nowrap">
              อ่านรายละเอียดเพิ่มเติม
            </Link>
          </span>
        </div>
        <button 
          onClick={handleDismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 sm:static sm:translate-y-0 p-1.5 text-amber-600 hover:text-amber-800 hover:bg-amber-200/50 rounded-full transition-colors"
          aria-label="ปิดประกาศ"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
