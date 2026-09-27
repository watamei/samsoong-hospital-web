import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Users, ShieldCheck, HelpCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'บริการผู้ป่วย | โรงพยาบาลซำสูง',
};

const services = [
  {
    title: 'คลินิกและตารางให้บริการ',
    description: 'ตรวจสอบเวลาทำการและตารางออกตรวจของคลินิกต่างๆ',
    icon: Clock,
    href: '/services/clinics',
  },
  {
    title: 'ขั้นตอนการมารับบริการ',
    description: 'ข้อมูลเตรียมตัวและขั้นตอนการเข้ารับบริการสำหรับผู้ป่วยใหม่และผู้ป่วยเก่า',
    icon: Users,
    href: '/services/steps',
  },
  {
    title: 'สิทธิการรักษา',
    description: 'ตรวจสอบสิทธิการรักษาพยาบาล บัตรทอง ประกันสังคม ข้าราชการ',
    icon: ShieldCheck,
    href: '/services/coverage',
  },
  {
    title: 'คำถามที่พบบ่อย',
    description: 'รวบรวมคำถามและคำตอบเกี่ยวกับการมารับบริการ',
    icon: HelpCircle,
    href: '/services/faq',
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'บริการผู้ป่วย' },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">บริการผู้ป่วย</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link
            key={service.href}
            href={service.href}
            className="group flex flex-col p-6 bg-white border border-gray-200 rounded-lg hover:border-[#00694E] hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 bg-[#F6F7F5] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00694E]/10 transition-colors">
              <service.icon className="w-6 h-6 text-[#00694E]" />
            </div>
            <h2 className="text-xl font-semibold text-[#0F172A] mb-2">{service.title}</h2>
            <p className="text-slate-600 leading-relaxed">{service.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
