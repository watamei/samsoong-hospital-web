import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PendingData from '@/components/PendingData';

export const metadata: Metadata = {
  title: 'ประกาศจัดซื้อจัดจ้าง | โรงพยาบาลซำสูง',
};

export default function ProcurementPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'ข่าวสารและประกาศ', href: '/news' },
          { label: 'ประกาศจัดซื้อจัดจ้าง' },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">ประกาศจัดซื้อจัดจ้าง</h1>
      <PendingData message="รอข้อมูลประกาศจัดซื้อจัดจ้างจากโรงพยาบาล" />
    </main>
  );
}
