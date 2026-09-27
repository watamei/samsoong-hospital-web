import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Breadcrumb from '@/components/Breadcrumb';
import PendingData from '@/components/PendingData';

export const metadata: Metadata = {
  title: 'MOPH-ITA | โรงพยาบาลซำสูง',
};

export default function ITAPage() {
  let itaData: any[] = [];
  try {
    const filePath = path.join(process.cwd(), 'content', 'ita.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(fileContents);
    itaData = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.moits) ? parsed.moits : []);
  } catch (_) {
    // Silently handle if file doesn't exist yet
  }
  if (itaData.length === 0) {
    itaData = Array.from({ length: 22 }, (_, i) => ({
      id: i + 1,
      moit: `MOIT ${i + 1}`,
      title: `หัวข้อประเมินที่ ${i + 1}`,
    }));
  }

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'เกี่ยวกับเรา', href: '/about' },
          { label: 'MOPH-ITA' },
        ]}
      />
      <h1 className="text-3xl font-bold text-[#0F172A] mb-8">MOPH-ITA (การประเมินคุณธรรมและความโปร่งใส)</h1>
      
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#0F172A]">รายการประเมิน</h2>
        <div className="flex items-center gap-2">
          <label htmlFor="year-select" className="text-sm font-medium text-slate-700">ปีงบประมาณ</label>
          <select id="year-select" className="border border-gray-300 rounded px-3 py-1.5 text-sm outline-none focus:border-[#00694E]">
            <option value="2567">2567</option>
            <option value="2566">2566</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {itaData.map((item, idx) => (
          <details key={idx} className="group bg-white border border-gray-200 rounded-lg overflow-hidden">
            <summary className="flex items-center cursor-pointer p-4 font-semibold text-[#0F172A] bg-gray-50 hover:bg-gray-100 transition-colors">
              <span className="w-20 shrink-0 text-[#00694E]">{item.moit || `MOIT ${idx + 1}`}</span>
              <span className="flex-1">{item.title}</span>
            </summary>
            <div className="p-4 border-t border-gray-200">
              <PendingData message={`รอข้อมูลเอกสารประกอบ ${item.moit || `MOIT ${idx + 1}`} จากโรงพยาบาล`} />
            </div>
          </details>
        ))}
      </div>
    </main>
  );
}
