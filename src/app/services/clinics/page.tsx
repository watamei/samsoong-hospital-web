import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PendingData from '@/components/PendingData';
import fs from 'fs';
import path from 'path';
import { Clock, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'คลินิกและตารางให้บริการ | โรงพยาบาลซำสูง',
};

async function getClinicsData() {
  try {
    const filePath = path.join(process.cwd(), 'content', 'clinics.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    return data.clinics || [];
  } catch (error) {
    return [];
  }
}

export default async function ClinicsPage() {
  const clinics = await getClinicsData();

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8 md:py-12">
      <div className="mb-8">
        <Breadcrumb
          items={[
            { label: 'หน้าแรก', href: '/' },
            { label: 'บริการ', href: '/services' },
            { label: 'คลินิกและตารางให้บริการ' },
          ]}
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">คลินิกและตารางให้บริการ</h1>
      <p className="text-gray-600 mb-10 text-lg">
        ข้อมูลคลินิกเฉพาะทางและเวลาเปิดให้บริการของโรงพยาบาลซำสูง
      </p>

      {clinics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clinics.map((clinic: any) => (
            <div key={clinic.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold text-[#00694E] mb-4 pb-3 border-b border-gray-100">{clinic.name}</h2>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-1">เวลาทำการ:</span>
                    {clinic.schedule.includes('รอข้อมูล') ? (
                      <PendingData label={clinic.schedule} />
                    ) : (
                      <span>{clinic.schedule}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-1">สถานที่:</span>
                    <span>{clinic.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-1">ติดต่อ:</span>
                    <span>{clinic.contact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <PendingData message="รอข้อมูลตารางคลินิกจากทางโรงพยาบาล" />
      )}
    </main>
  );
}
