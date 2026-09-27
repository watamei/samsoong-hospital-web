'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function TributeSplash() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Check session storage so it only shows once per session
    const hasSeenSplash = sessionStorage.getItem('hasSeenTributeSplash');
    if (!hasSeenSplash) {
      setShowSplash(true);
      // Optional: Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        handleEnterSite();
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleEnterSite = () => {
    setShowSplash(false);
    sessionStorage.setItem('hasSeenTributeSplash', 'true');
  };

  if (!showSplash) return null;

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#1a1a1a]"
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'url(/images/tribute/bg-pattern.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Radial Gradient overlay for vignette effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

          {/* Main Content Modal */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-2xl mx-4 flex flex-col items-center p-8 md:p-12"
          >
            {/* Portrait inside Frame */}
            <div className="relative w-64 h-80 md:w-72 md:h-96 mb-8 drop-shadow-2xl flex items-center justify-center">
              {/* Portrait */}
              <div className="absolute w-[80%] h-[80%] overflow-hidden">
                <Image
                  src="/images/tribute/portrait.jpg"
                  alt="สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Golden Frame overlay */}
              <Image
                src="/images/tribute/frame.png"
                alt="Golden Frame"
                fill
                className="object-contain pointer-events-none z-10 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>

            {/* Typography */}
            <div className="text-center space-y-4 mb-10 text-white drop-shadow-md">
              <h1 className="text-2xl md:text-3xl font-medium tracking-wide text-amber-200">
                ทีฆายุกา โหตุ มหาราชินี
              </h1>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light">
                สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง<br />
                ๑๒ สิงหาคม พุทธศักราช ๒๕๖๗
              </p>
              <div className="pt-6">
                <p className="text-sm md:text-base text-gray-300 font-light">
                  ด้วยเกล้าด้วยกระหม่อม ขอเดชะ<br />
                  ข้าพระพุทธเจ้า คณะผู้บริหาร ข้าราชการ และเจ้าหน้าที่โรงพยาบาลซำสูง
                </p>
              </div>
            </div>

            {/* Enter Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEnterSite}
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                เข้าสู่เว็บไซต์ (Enter Site)
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
