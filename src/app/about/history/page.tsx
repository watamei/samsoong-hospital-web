import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { History, Building2, Users, CheckCircle2, UserCheck, PhoneCall } from 'lucide-react';

export const metadata: Metadata = {
  title: 'ประวัติโรงพยาบาลและข้อมูลทั่วไป | โรงพยาบาลซำสูง',
  description: 'ประวัติความเป็นมา ข้อมูลบุคลากร และข้อมูลทั่วไปของโรงพยาบาลซำสูง จังหวัดขอนแก่น',
};

export default function HistoryPage() {
  return (
    <main className="max-w-[1000px] mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'เกี่ยวกับเรา' },
            { label: 'ประวัติและข้อมูลทั่วไป' },
          ]}
        />
      </div>

      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">ประวัติและข้อมูลทั่วไป</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          โรงพยาบาลชุมชน 30 เตียง ให้บริการระดับทุติยภูมิ สังกัดกระทรวงสาธารณสุข
        </p>
      </div>

      <div className="space-y-16">
        {/* Section 1: History */}
        <section className="relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#00694E] rounded-l-2xl"></div>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm ml-2">
            <h2 className="text-2xl font-bold text-[#00694E] mb-6 flex items-center gap-3">
              <History className="w-7 h-7" />
              ประวัติความเป็นมา
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
              <p>
                ท้องที่อำเภอซำสูงเดิมเป็นส่วนหนึ่งของอำเภอกระนวน ทางราชการได้แบ่งพื้นที่การปกครองออกมาจัดตั้งเป็น <strong>กิ่งอำเภอซำสูง</strong> ตามประกาศกระทรวงมหาดไทยเมื่อวันที่ 31 มีนาคม พ.ศ. 2537 โดยมีผลบังคับตั้งแต่วันที่ 30 เมษายน ปีเดียวกัน ต่อมาจึงได้มีพระราชกฤษฎีกายกฐานะขึ้นเป็น <strong>อำเภอซำสูง</strong> ในวันที่ 24 สิงหาคม พ.ศ. 2550 โดยมีผลบังคับตั้งแต่วันที่ 8 กันยายน ปีเดียวกัน
              </p>
              <p>
                และเนื่องจากอยู่ห่างจากโรงพยาบาลสมเด็จพยุพราชอำเภอกระนวนค่อนข้างไกลมาก การเดินทางไปใช้บริการสำหรับผู้ป่วยจึงยากลำบาก ถึงแม้จะมีสถานีอนามัยประจำตำบลต่างๆ ที่อยู่ในเขตอำเภอซำสูง แต่ก็ไม่เพียงพอสำหรับการรักษาพยาบาลผู้ป่วยที่มีแนวโน้มเพิ่มขึ้นตามจำนวนประชากรได้
              </p>
              <div className="bg-[#F0F7F5] p-6 rounded-xl border border-[#00694E]/10 mt-6">
                <p className="text-[#0F172A] font-semibold text-xl leading-relaxed m-0 text-center">
                  จึงได้มีการก่อตั้ง "โรงพยาบาลซำสูง" ขึ้นมาในวันที่ <span className="text-[#00694E] font-bold">14 กรกฎาคม พ.ศ. 2544</span>
                </p>
                <p className="text-gray-600 text-center mt-2">
                  เพื่อรองรับการรักษาพยาบาลผู้ป่วยในเขตอำเภอซำสูง และพื้นที่ใกล้เคียงจากอำเภอชื่นชม จังหวัดมหาสารคาม
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Hospital Data */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm h-full">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3 border-b pb-4">
              <Building2 className="w-6 h-6 text-[#00694E]" />
              ข้อมูลสถานพยาบาล
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900">ระดับของการให้บริการ:</span>
                  <p className="text-gray-600">โรงพยาบาลชุมชน 30 เตียง ให้บริการระดับทุติยภูมิ</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900">จำนวนเตียงผู้ป่วยใน:</span>
                  <p className="text-gray-600">30 เตียง (ไม่รวมเตียงทารกคลอดปกติ)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900">หน่วยงานในเครือข่าย:</span>
                  <ul className="list-disc pl-5 mt-1 text-gray-600">
                    <li>สำนักงานสาธารณสุขอำเภอซำสูง 1 แห่ง</li>
                    <li>โรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต.) 5 แห่ง</li>
                    <li>ศูนย์บริการสาธารณสุข (PCU) 1 แห่ง</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm h-full">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3 border-b pb-4">
              <Users className="w-6 h-6 text-[#00694E]" />
              บริบทประชากรในพื้นที่
            </h2>
            <p className="text-gray-700 mb-6">
              ให้บริการส่งเสริม ป้องกัน รักษา และฟื้นฟูสุขภาพผู้ป่วยและประชาชนทั่วไป ในเขตอำเภอซำสูง และพื้นที่ใกล้เคียง (อำเภอชื่นชม, อำเภอเชียงยืน จ.มหาสารคาม)
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-center">
                <span className="block text-3xl font-black text-blue-600 mb-1">25,671</span>
                <span className="text-sm font-bold text-gray-700">ประชากร (คน)</span>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 text-center">
                <span className="block text-3xl font-black text-orange-600 mb-1">5,265</span>
                <span className="text-sm font-bold text-gray-700">ครัวเรือน</span>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 text-center">
                <span className="block text-3xl font-black text-purple-600 mb-1">41</span>
                <span className="text-sm font-bold text-gray-700">หมู่บ้าน</span>
              </div>
              <div className="bg-pink-50 p-4 rounded-xl border border-pink-100 text-center">
                <span className="block text-3xl font-black text-pink-600 mb-1">5</span>
                <span className="text-sm font-bold text-gray-700">ตำบล</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Personnel */}
        <section className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b pb-4 gap-4">
            <h2 className="text-2xl font-bold text-[#0F172A] flex items-center gap-3">
              <UserCheck className="w-7 h-7 text-[#00694E]" />
              ข้อมูลบุคลากรทางการแพทย์
            </h2>
            <span className="bg-green-100 text-green-800 text-sm font-bold px-4 py-2 rounded-full border border-green-200">
              จุดเด่น: บุคลากรส่วนใหญ่มีภูมิลำเนาอยู่ในพื้นที่
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700">แพทย์</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md">5 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700">ทันตแพทย์</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md">2 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700">เภสัชกร</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md">4 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700">พยาบาลวิชาชีพ</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md">26 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700 text-sm sm:text-base pr-2 leading-tight">พยาบาลวิชาชีพที่ผ่านอบรม<br className="hidden lg:block"/>เวชปฏิบัติทั่วไป</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md shrink-0">9 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700">นักวิชาการสาธารณสุข</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md">1 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700">เทคนิคการแพทย์</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md">2 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700">เจ้าพนักงานวิทยาศาสตร์การแพทย์</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md">1 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700">เจ้าพนักงานเภสัชกรรม</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md">2 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700">เจ้าหน้าที่รังสีการแพทย์</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md">1 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed">
              <span className="font-semibold text-gray-700">เจ้าหน้าที่เวชสถิติ</span>
              <span className="font-bold text-[#00694E] bg-[#00694E]/10 px-3 py-1 rounded-md">1 คน</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-gray-100 border-dashed opacity-50">
              <span className="font-semibold text-gray-700">พยาบาลเทคนิค</span>
              <span className="font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-md">0 คน</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
