import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { MapPin, Phone, Mail, Clock, Printer, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ติดต่อเรา | โรงพยาบาลซำสูง',
  description: 'ข้อมูลการติดต่อและแผนที่การเดินทางมายังโรงพยาบาลซำสูง จังหวัดขอนแก่น',
};

export default function ContactPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'เกี่ยวกับเรา', href: '/about/history' },
            { label: 'ติดต่อเรา' },
          ]}
        />
      </div>

      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">ติดต่อโรงพยาบาลซำสูง</h1>
        <p className="text-lg text-gray-600">เราพร้อมให้บริการและดูแลคุณตลอด 24 ชั่วโมง</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0F172A] mb-6 border-b pb-4">ข้อมูลการติดต่อหลัก</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#00694E]/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-[#00694E] w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">ที่อยู่</h3>
                  <p className="text-gray-600 leading-relaxed">
                    เลขที่ 231 หมู่ 3 ถนนกระนวน-เชียงยืน<br />
                    ตำบลกระนวน อำเภอซำสูง<br />
                    จังหวัดขอนแก่น 40170
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#00694E]/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-[#00694E] w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">โทรศัพท์ / Call Center</h3>
                  <a href="tel:043-219192" className="text-gray-600 hover:text-[#00694E] hover:underline block">
                    เบอร์กลาง: 043-219192
                  </a>
                  <a href="tel:043-219136" className="text-gray-600 hover:text-[#00694E] hover:underline block mt-1">
                    สายด่วน Call Center: 043-219136 (ตลอด 24 ชั่วโมง)
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#00694E]/10 rounded-full flex items-center justify-center shrink-0">
                  <Printer className="text-[#00694E] w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">โทรสาร (Fax)</h3>
                  <p className="text-gray-600">043-219136</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#00694E]/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-[#00694E] w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">อีเมล</h3>
                  <a href="mailto:14132sshos@gmail.com" className="text-gray-600 hover:text-[#00694E] hover:underline">
                    14132sshos@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0F172A] mb-6 border-b pb-4">เบอร์ต่อภายใน (สายตรง)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex items-start gap-3 col-span-1 sm:col-span-2">
                <AlertTriangle className="text-red-500 shrink-0 w-5 h-5 mt-0.5" />
                <div>
                  <span className="font-bold text-red-700 block">แผนกฉุกเฉิน (ER)</span>
                  <span className="text-red-600 font-medium">โทร 043-219192 ต่อ 141 <br className="sm:hidden" />(ตลอด 24 ชั่วโมง)</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-bold text-gray-800 block text-sm">ฝ่ายธุรการ</span>
                <span className="text-[#00694E] font-medium text-lg">ต่อ 101</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-bold text-gray-800 block text-sm">งานเทคโนโลยีสารสนเทศ (IT)</span>
                <span className="text-[#00694E] font-medium text-lg">ต่อ 117</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-bold text-gray-800 block text-sm">ฝ่ายงานประกันสุขภาพ</span>
                <span className="text-[#00694E] font-medium text-lg">ต่อ 121</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-bold text-gray-800 block text-sm">ฝ่ายพัสดุ</span>
                <span className="text-[#00694E] font-medium text-lg">ต่อ 128</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <span className="font-bold text-gray-800 block text-sm">ฝ่ายงานการเงินและบัญชี</span>
                <span className="text-[#00694E] font-medium text-lg">ต่อ 129</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-full min-h-[400px] lg:min-h-0 bg-white border border-gray-200 rounded-2xl p-2 shadow-sm relative overflow-hidden flex flex-col">
          <iframe
            src="https://maps.google.com/maps?q=โรงพยาบาลซำสูง%20ขอนแก่น&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl flex-grow"
            title="แผนที่ตั้งโรงพยาบาลซำสูง"
          />
          <a
            href="https://maps.app.goo.gl/5wNNiHPVXxNaJpPH6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 mx-4 mb-4 flex items-center justify-center gap-2 px-6 py-4 bg-[#00694E] text-white font-bold rounded-xl hover:bg-[#00523d] transition-colors shadow-md"
          >
            <MapPin size={20} strokeWidth={2.5} />
            เปิดนำทางด้วย Google Maps
          </a>
        </div>
      </div>
    </main>
  );
}
