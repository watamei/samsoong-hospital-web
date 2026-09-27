'use client';
import React from 'react';
import { X, ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface SubItem {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export default function MobileNav({ isOpen, onClose, menuItems }: MobileNavProps) {
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity motion-reduce:transition-none" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div 
        className="relative w-[85%] max-w-sm bg-white h-full shadow-xl flex flex-col animate-slide-in motion-reduce:animate-none"
        style={{ animation: 'slideIn 200ms ease-out forwards' }}
      >
        <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
          <span className="font-bold text-lg text-[#0F172A]">เมนู</span>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-900 rounded-md hover:bg-gray-100"
            aria-label="ปิดเมนู"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <nav className="flex flex-col py-2">
            {menuItems.map((item, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-0">
                {item.subItems ? (
                  <>
                    <button 
                      onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 min-h-[44px] text-left text-[#0F172A] font-medium hover:bg-gray-50"
                    >
                      {item.label}
                      <ChevronDown 
                        size={20} 
                        strokeWidth={2} 
                        className={`transition-transform duration-200 ${openSection === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {openSection === item.label && (
                      <div className="bg-gray-50 px-4 py-2 flex flex-col gap-1">
                        {item.subItems.map((sub, sIdx) => (
                          <Link 
                            key={sIdx} 
                            href={sub.href}
                            onClick={onClose}
                            className="block py-2.5 px-2 text-[#4B5563] text-[15px] min-h-[44px] flex items-center hover:text-[#00694E]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 min-h-[44px] flex items-center text-[#0F172A] font-medium hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}} />
    </div>
  );
}
