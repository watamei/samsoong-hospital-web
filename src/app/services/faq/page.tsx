import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PendingData from '@/components/PendingData';
import { Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คำถามที่พบบ่อย | โรงพยาบาลซำสูง',
};

export default function FAQPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'บริการผู้ป่วย', href: '/services' },
          { label: 'คำถามที่พบบ่อย' },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">คำถามที่พบบ่อย (FAQ)</h1>
      
      <div className="mb-12">
        <PendingData message="รอข้อมูลคำถามที่พบบ่อยจากโรงพยาบาล" />
      </div>

      <div className="p-6 bg-[#F6F7F5] rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold text-[#0F172A] mb-2">ยังมีข้อสงสัยเพิ่มเติม?</h2>
        <p className="text-slate-600 mb-4">หากท่านมีคำถามอื่นๆ สามารถติดต่อสอบถามเจ้าหน้าที่ได้โดยตรง</p>
        <div className="flex items-center gap-2 text-[#00694E] font-medium text-lg">
          <Phone className="w-5 h-5" />
          043-219192
        </div>
      </div>
    </main>
  );
}
