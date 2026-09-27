import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { AlertTriangle, Info, CheckCircle2, Shield, HeartPulse } from 'lucide-react';

export const metadata: Metadata = {
  title: 'เกี่ยวกับเว็บไซต์ต้นแบบ | โรงพยาบาลซำสูง',
  description: 'รายละเอียดเกี่ยวกับโครงการพัฒนาเว็บไซต์ต้นแบบสำหรับโรงพยาบาลซำสูง',
};

export default function PrototypePage() {
  return (
    <main className="max-w-[1000px] mx-auto px-4 py-10 md:py-16">
      <div className="mb-8">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'เกี่ยวกับเว็บไซต์ต้นแบบ' },
          ]}
        />
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-12 flex gap-4 items-start shadow-sm">
        <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0 mt-1" />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">
            ประกาศสำคัญ: เว็บไซต์ต้นแบบ (Prototype)
          </h1>
          <p className="text-amber-800 text-lg">
            เว็บไซต์นี้เป็นเพียงตัวต้นแบบที่จัดทำขึ้นเพื่อ <strong>นำเสนอแนวทางการพัฒนาและยกระดับเว็บไซต์</strong> ให้แก่โรงพยาบาลซำสูงเท่านั้น <br className="hidden md:block" />
            <span className="font-semibold underline">ยังไม่ใช่เว็บไซต์อย่างเป็นทางการของโรงพยาบาล และยังไม่เปิดใช้งานจริง</span>
          </p>
        </div>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3 border-b pb-4">
            <Info className="w-6 h-6 text-[#00694E]" />
            จุดประสงค์ของโครงการนี้
          </h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              เนื่องจากเว็บไซต์เดิมของโรงพยาบาลซำสูงขาดการอัปเดตและมีระบบการใช้งานที่อาจไม่ตอบโจทย์ความต้องการของผู้ป่วยในยุคดิจิทัล 
              โครงการนี้จึงถูกริเริ่มขึ้นเพื่อนำเสนอ <strong className="text-[#00694E]">"ความเป็นไปได้"</strong> ในการพลิกโฉมระบบสารสนเทศหน้าบ้าน (Front-end) ของโรงพยาบาลชุมชน
            </p>
            <p>
              เรามุ่งหวังให้โรงพยาบาลชุมชนมีเว็บไซต์ที่:
            </p>
            <ul className="list-none pl-0 space-y-4 my-6">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span><strong>เข้าถึงง่ายสำหรับทุกคน (Accessibility):</strong> รองรับผู้สูงอายุ ผู้พิการทางสายตา และแสดงผลได้ดีบนสมาร์ทโฟน</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
                <span><strong>มีความน่าเชื่อถือและปลอดภัย (Trust & Security):</strong> ดีไซน์ที่สะอาดตา ทันสมัย สร้างความมั่นใจให้ผู้รับบริการ</span>
              </li>
              <li className="flex items-start gap-3">
                <HeartPulse className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <span><strong>มีข้อมูลที่ประชาชนต้องการจริง (User-Centric):</strong> ข้อมูลสิทธิการรักษา ขั้นตอนการรับบริการ ตารางแพทย์ ที่อัปเดตและค้นหาง่าย</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h2 className="text-xl font-bold text-[#0F172A] mb-4">ข้อมูลในเว็บไซต์นี้เชื่อถือได้หรือไม่?</h2>
          <p className="text-gray-700 mb-4">
            เนื่องจากเว็บไซต์นี้ยังเป็นเพียงตัวต้นแบบ:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>ข้อมูล <strong>ตารางแพทย์, เวลาเปิด-ปิดคลินิก, ข่าวสารจัดซื้อจัดจ้าง</strong> ฯลฯ เป็นข้อมูลจำลอง (Mock Data) หรือข้อความรอการอัปเดต (Pending Data)</li>
            <li>ข้อมูล <strong>สิทธิการรักษาพยาบาลระดับประเทศ (บัตรทอง, ประกันสังคม)</strong> อ้างอิงจากแหล่งข้อมูลภาครัฐที่ถูกต้องตามช่วงเวลาที่จัดทำ แต่ไม่ได้การันตีถึงการรองรับสิทธิของโรงพยาบาลซำสูงในความเป็นจริง</li>
            <li>รูปภาพบางส่วนอาจใช้ภาพจำลองเพื่อการนำเสนอโครงสร้าง UI เท่านั้น</li>
          </ul>
          <p className="text-red-600 font-semibold mt-6 bg-red-50 p-4 rounded-lg border border-red-100">
            หากท่านเป็นผู้ป่วยและต้องการทราบข้อมูลจริง กรุณาติดต่อโรงพยาบาลซำสูงโดยตรงที่เบอร์ 043-219192 หรือติดตามผ่าน Facebook Page อย่างเป็นทางการ
          </p>
        </section>
      </div>
    </main>
  );
}
