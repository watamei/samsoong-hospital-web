import { Metadata } from 'next';
import Link from 'next/link';
import { Building, Users, GitMerge, Link as LinkIcon, Download, FileCheck, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'เกี่ยวกับเรา | โรงพยาบาลซำสูง',
};

const menuItems = [
  { title: 'ประวัติและพันธกิจ', icon: Building, href: '/about/history' },
  { title: 'ทำเนียบผู้บริหาร', icon: Users, href: '/about/team' },
  { title: 'โครงสร้างองค์กร', icon: GitMerge, href: '/about/structure' },
  { title: 'เครือข่ายบริการ', icon: LinkIcon, href: '/about/network' },
  { title: 'ดาวน์โหลดเอกสาร', icon: Download, href: '/about/downloads' },
  { title: 'MOPH-ITA', icon: FileCheck, href: '/about/ita' },
  { title: 'ติดต่อเรา', icon: Phone, href: '/about/contact' },
];

export default function AboutPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'เกี่ยวกับเรา' },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">เกี่ยวกับเรา</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-lg hover:border-[#00694E] hover:shadow-md transition-all"
          >
            <div className="w-16 h-16 bg-[#F6F7F5] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00694E]/10 transition-colors">
              <item.icon className="w-8 h-8 text-[#00694E]" />
            </div>
            <h2 className="text-lg font-semibold text-[#0F172A]">{item.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
