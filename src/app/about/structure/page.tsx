import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PendingData from '@/components/PendingData';
import PendingImage from '@/components/PendingImage';

export const metadata: Metadata = {
  title: 'โครงสร้างองค์กร | โรงพยาบาลซำสูง',
};

export default function StructurePage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'เกี่ยวกับเรา', href: '/about' },
          { label: 'โครงสร้างองค์กร' },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">โครงสร้างองค์กร</h1>
      <PendingData message="รอข้อมูลโครงสร้างองค์กรจากโรงพยาบาล" />
      <div className="mt-8">
        <PendingImage width={800} height={600} text="แผนผังโครงสร้างองค์กร" />
      </div>
    </main>
  );
}
