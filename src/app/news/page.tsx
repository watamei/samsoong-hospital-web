import { Metadata } from 'next';
import Link from 'next/link';
import { Megaphone, FileText, Briefcase } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import PendingData from '@/components/PendingData';

export const metadata: Metadata = {
  title: 'ข่าวสารและประกาศ | โรงพยาบาลซำสูง',
};

const categories = [
  {
    title: 'ข่าวประชาสัมพันธ์',
    icon: Megaphone,
    href: '/news/pr', // Placeholder
  },
  {
    title: 'ประกาศจัดซื้อจัดจ้าง',
    icon: FileText,
    href: '/news/procurement',
  },
  {
    title: 'รับสมัครงาน',
    icon: Briefcase,
    href: '/news/jobs',
  },
];

export default function NewsPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'ข่าวสารและประกาศ' },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">ข่าวสารและประกาศ</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-[#00694E] hover:shadow-sm transition-all"
          >
            <div className="w-10 h-10 bg-[#F6F7F5] rounded-full flex items-center justify-center text-[#00694E]">
              <cat.icon className="w-5 h-5" />
            </div>
            <span className="font-semibold text-[#0F172A]">{cat.title}</span>
          </Link>
        ))}
      </div>

      <div className="space-y-12">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-[#0F172A]">ข่าวประชาสัมพันธ์ล่าสุด</h2>
            <Link href="/news/pr" className="text-[#00694E] hover:underline text-sm font-medium">ดูทั้งหมด</Link>
          </div>
          <PendingData message="รอข้อมูลข่าวประชาสัมพันธ์จากโรงพยาบาล" />
        </section>
      </div>
    </main>
  );
}
