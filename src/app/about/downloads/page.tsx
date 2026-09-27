import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PendingData from '@/components/PendingData';

export const metadata: Metadata = {
  title: 'ดาวน์โหลดเอกสาร | โรงพยาบาลซำสูง',
};

export default function DownloadsPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'เกี่ยวกับเรา', href: '/about' },
          { label: 'ดาวน์โหลดเอกสาร' },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">ดาวน์โหลดเอกสาร</h1>
      <PendingData message="รอข้อมูลเอกสารดาวน์โหลดจากโรงพยาบาล" />
    </main>
  );
}
