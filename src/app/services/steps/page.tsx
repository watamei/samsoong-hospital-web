"use client";

import { useState } from 'react';
import { Phone, CheckCircle2, FileText, IdCard, MapPin, Activity, Info, Pill, Glasses } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

// Elegant inline info component (replacing the yellow PendingData)
const InlineInfo = ({ text }: { text: string }) => (
  <div className="mt-3 flex items-start gap-2 bg-gray-50 text-gray-600 px-4 py-3 rounded-md border border-gray-100">
    <Info className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
    <span className="text-sm">{text}</span>
  </div>
);

export default function StepsPage() {
  const [patientType, setPatientType] = useState<'new' | 'old'>('new');

  return (
    <main className="max-w-[1000px] mx-auto px-4 py-10 md:py-16">
      <div className="mb-8">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'บริการ', href: '/services' },
            { label: 'ขั้นตอนการรับบริการ' },
          ]}
        />
      </div>
      
      {/* 1. Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">ขั้นตอนการมารับบริการ</h1>
        <p className="text-lg text-gray-500 font-medium">สั้น ง่าย เข้าใจไว ไม่ซับซ้อน</p>
      </div>
      
      {/* 2. Patient Type Selector (Segmented Control) */}
      <div className="flex justify-center mb-16">
        <div className="inline-flex bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setPatientType('new')}
            className={`px-6 md:px-10 py-3 rounded-md text-sm md:text-base font-semibold transition-all duration-200 ${
              patientType === 'new'
                ? 'bg-white text-[#00694E] shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
            }`}
          >
            ผู้ป่วยใหม่ (มาครั้งแรก)
          </button>
          <button
            onClick={() => setPatientType('old')}
            className={`px-6 md:px-10 py-3 rounded-md text-sm md:text-base font-semibold transition-all duration-200 ${
              patientType === 'old'
                ? 'bg-white text-[#00694E] shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
            }`}
          >
            ผู้ป่วยเก่า (มีประวัติแล้ว)
          </button>
        </div>
      </div>

      {/* 3. The 3-Step Journey (Responsive Stepper) */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-bold text-center text-[#0F172A] mb-12">
          3 ขั้นตอนง่าย ๆ เมื่อมาถึงโรงพยาบาล
        </h2>

        {/* Desktop Horizontal Stepper */}
        <div className="hidden md:block relative">
          {/* Horizontal Line connecting steps */}
          <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white border-[3px] border-[#00694E] text-[#00694E] rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-105 transition-transform bg-clip-padding">
                1
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                เตรียมเอกสาร
              </h3>
              <div className="text-gray-600 mb-4 flex flex-col items-center gap-1.5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-400" />
                  <span>บัตรประชาชนตัวจริง</span>
                </div>
                {patientType === 'old' && (
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span>ใบนัดแพทย์ หรือ ยาเดิม</span>
                  </div>
                )}
              </div>
              <InlineInfo text="รอข้อมูลจาก รพ: ระบุเอกสารเฉพาะ เช่น ใบส่งตัว" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white border-[3px] border-[#00694E] text-[#00694E] rounded-full flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-105 transition-transform bg-clip-padding">
                2
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {patientType === 'new' ? 'ติดต่อจุดลงทะเบียน' : 'ยื่นบัตรคิว / เอกสาร'}
              </h3>
              <InlineInfo text={patientType === 'new' 
                ? "รอข้อมูลจาก รพ: ระบุชื่อจุดบริการ เช่น อาคารอำนวยการ"
                : "รอข้อมูลจาก รพ: ระบุชื่อจุดรับบัตรผู้ป่วยเก่า เช่น ตู้ Kiosk"
              } />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-[#00694E] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-md shadow-[#00694E]/20 group-hover:scale-105 transition-transform">
                3
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                รอพบแพทย์
              </h3>
              <p className="text-gray-600 flex flex-col items-center gap-1.5">
                <Activity className="w-4 h-4 text-gray-400" />
                <span>วัดความดัน ชั่งน้ำหนัก<br/>และรอเรียกชื่อหน้าห้องตรวจ</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="md:hidden relative px-2">
          {/* Vertical connecting line */}
          <div className="absolute left-[34px] top-8 bottom-16 w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative flex gap-5 items-start">
              <div className="relative z-10 w-14 h-14 shrink-0 bg-white border-[3px] border-[#00694E] text-[#00694E] rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="pt-2 w-full">
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  เตรียมเอกสาร
                </h3>
                <div className="text-gray-600 mb-3">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>บัตรประชาชนตัวจริง</span>
                  </div>
                  {patientType === 'old' && (
                    <div className="flex items-center gap-2 mt-1.5">
                      <FileText className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>ใบนัดแพทย์ (ถ้ามี) หรือ ยาเดิม</span>
                    </div>
                  )}
                </div>
                <InlineInfo text="รอข้อมูล: เอกสารเฉพาะ รพ." />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-5 items-start">
              <div className="relative z-10 w-14 h-14 shrink-0 bg-white border-[3px] border-[#00694E] text-[#00694E] rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="pt-2 w-full">
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  {patientType === 'new' ? 'ติดต่อจุดลงทะเบียน' : 'ยื่นบัตรคิว / ยื่นเอกสาร'}
                </h3>
                <InlineInfo text="รอข้อมูล: ระบุชื่อจุดบริการ" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-5 items-start">
              <div className="relative z-10 w-14 h-14 shrink-0 bg-[#00694E] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-sm shadow-[#00694E]/20">
                3
              </div>
              <div className="pt-2 w-full">
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                  รอพบแพทย์
                </h3>
                <p className="text-gray-600 flex items-start gap-2">
                  <Activity className="w-4 h-4 text-gray-400 shrink-0 mt-1" />
                  <span className="leading-snug">วัดความดัน ชั่งน้ำหนัก และรอเรียกชื่อหน้าห้องตรวจ</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Information Section (2-Column Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column (Checklist) */}
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#00694E]" /> สิ่งที่ต้องพกมา
          </h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="bg-gray-50 p-3 rounded-lg shrink-0 border border-gray-100">
                <IdCard className="w-5 h-5 text-[#00694E]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">บัตรประชาชนตัวจริง</p>
                <p className="text-gray-500 text-sm mt-0.5">จำเป็นที่สุด สำหรับทุกคน</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-gray-50 p-3 rounded-lg shrink-0 border border-gray-100">
                <Pill className="w-5 h-5 text-[#00694E]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">ยาเดิม / ซองยาเดิม</p>
                <p className="text-gray-500 text-sm mt-0.5">ที่กินประจำ เพื่อให้แพทย์ดู</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-gray-50 p-3 rounded-lg shrink-0 border border-gray-100">
                <Glasses className="w-5 h-5 text-[#00694E]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">แว่นตา</p>
                <p className="text-gray-500 text-sm mt-0.5">สำหรับผู้สูงอายุที่ต้องใช้อ่าน/กรอกเอกสาร</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Column (Help & Support) */}
        <div className="bg-[#F0F7F5] rounded-xl p-8 flex flex-col justify-center items-start border border-[#00694E]/10">
          <div className="bg-white p-3 rounded-xl shadow-sm mb-6 border border-gray-100">
            <Phone className="w-6 h-6 text-[#00694E]" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#0F172A] mb-3 leading-snug">
            มีข้อสงสัยเรื่องขั้นตอนการเดินทาง หรือไม่แน่ใจว่าต้องไปตึกไหน?
          </h3>
          <p className="text-gray-600 mb-8">
            โทรสอบถามประชาสัมพันธ์โรงพยาบาลได้โดยตรง
          </p>
          <a
            href="tel:043-219192"
            className="inline-flex items-center justify-center gap-3 bg-[#00694E] hover:bg-[#00523d] text-white px-8 py-3.5 rounded-lg font-semibold text-lg transition-colors w-full md:w-auto"
          >
            <Phone className="w-5 h-5" />
            043-219192
          </a>
        </div>
      </div>

    </main>
  );
}
