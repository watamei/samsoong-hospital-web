import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-[#E5E7EB] z-50 flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <a 
        href="tel:043-219192" 
        className="flex-1 flex flex-col items-center justify-center py-2 min-h-[56px] text-[#00694E] hover:bg-gray-50 active:bg-gray-100"
      >
        <Phone size={20} strokeWidth={2} className="mb-1" />
        <span className="text-[11px] font-medium">โทรหาเรา</span>
      </a>
      <div className="w-[1px] bg-[#E5E7EB]"></div>
      <a 
        href="tel:1669" 
        className="flex-1 flex flex-col items-center justify-center py-2 min-h-[56px] bg-[#C8102E] text-white hover:bg-red-700 active:bg-red-800"
      >
        <AlertTriangle size={20} strokeWidth={2} className="mb-1" />
        <span className="text-[11px] font-medium">ฉุกเฉิน 1669</span>
      </a>
    </div>
  );
}
