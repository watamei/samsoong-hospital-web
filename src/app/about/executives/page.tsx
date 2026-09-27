import { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'ทำเนียบผู้บริหาร | โรงพยาบาลซำสูง',
  description: 'รายนามผู้บริหารและผู้อำนวยการโรงพยาบาลซำสูง จังหวัดขอนแก่น',
};

export default function ExecutivesPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8 md:py-12">
      <div className="mb-10">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'เกี่ยวกับเรา', href: '/about/history' },
            { label: 'ทำเนียบผู้บริหาร' },
          ]}
        />
      </div>

      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">ทำเนียบผู้บริหาร</h1>
        <p className="text-lg text-gray-600">คณะผู้บริหารโรงพยาบาลซำสูง จังหวัดขอนแก่น</p>
      </div>

      <div className="flex justify-center mb-20">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm max-w-[500px] w-full text-center hover:shadow-md transition-shadow relative overflow-hidden">
          {/* Decorative background shape */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#00694E]/10 to-transparent"></div>
          
          <div className="relative w-48 h-60 mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <Image
              src="/images/director.png"
              alt="นายแพทย์ชัยณรงค์ มงคลศรีสวัสดิ์"
              fill
              className="object-cover object-top"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">นายแพทย์ชัยณรงค์ มงคลศรีสวัสดิ์</h2>
          <p className="text-[#00694E] font-semibold text-lg mb-4">ผู้อำนวยการโรงพยาบาลซำสูง</p>
          <div className="w-16 h-1 bg-[#00694E]/20 mx-auto rounded-full"></div>
        </div>
      </div>
    </main>
  );
}
