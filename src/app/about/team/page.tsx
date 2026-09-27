import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PendingData from '@/components/PendingData';

export const metadata: Metadata = {
  title: 'ทำเนียบผู้บริหาร | โรงพยาบาลซำสูง',
};

export default function TeamPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'เกี่ยวกับเรา', href: '/about' },
          { label: 'ทำเนียบผู้บริหาร' },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">ทำเนียบผู้บริหาร</h1>
      <PendingData message="รอข้อมูลรายนามและรูปภาพผู้บริหารจากโรงพยาบาล" />
    </main>
  );
}
