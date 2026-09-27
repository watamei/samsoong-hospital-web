import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PendingData from '@/components/PendingData';

export const metadata: Metadata = {
  title: 'ตารางแพทย์ | โรงพยาบาลซำสูง',
};

export default function DoctorsPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'ตารางแพทย์' },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">ตารางแพทย์ออกตรวจ</h1>
      <PendingData message="รอข้อมูลตารางแพทย์จากโรงพยาบาล" />
    </main>
  );
}
