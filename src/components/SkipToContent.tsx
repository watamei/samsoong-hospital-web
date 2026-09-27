import React from 'react';

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="absolute top-0 left-0 -translate-y-full focus:translate-y-0 bg-[#00694E] text-white px-4 py-2 z-50 rounded-br-lg font-medium outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00694E] transition-transform duration-200"
    >
      ข้ามไปเนื้อหาหลัก
    </a>
  );
}
