import { Metadata } from 'next';
import Link from 'next/link';
import { Phone, AlertCircle, Info, Shield, Plus, ShieldCheck, HeartPulse, Hospital, FileText, Smartphone, Globe } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import PendingData from '@/components/PendingData';

export const metadata: Metadata = {
  title: 'สิทธิการรักษาพยาบาล | โรงพยาบาลซำสูง',
  description: 'ตรวจสอบสิทธิการรักษาพยาบาล บัตรทอง ประกันสังคม ข้าราชการ และเอกสารที่ต้องเตรียม',
};

import { readFileSync } from 'fs';
import { join } from 'path';

// ข้อมูลที่จะสามารถแก้ไขได้ผ่าน Admin ในอนาคต (งานที่ 4)
async function getCoverageData() {
  try {
    const path = join(process.cwd(), 'content', 'coverage.json');
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (e) {
    return {
      ssoWarningEnabled: true,
      contactExtension: '',
      tabs: { uc: '', sso: '', cs: '' }
    };
  }
}

export default async function CoveragePage() {
  const adminData = await getCoverageData();

  return (
    <main className="max-w-[1200px] mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { label: 'หน้าแรก', href: '/' },
          { label: 'บริการ', href: '/services' },
          { label: 'สิทธิการรักษาพยาบาล' },
        ]}
      />

      {/* [A] ส่วนหัว */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          สิทธิการรักษาพยาบาล
        </h1>
        <p className="text-lg text-text-secondary mb-6">
          ตรวจสอบสิทธิของท่านก่อนมาโรงพยาบาล เพื่อความสะดวกและลดเวลารอคอย
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg text-left shadow-sm inline-block w-full">
          <div className="flex gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0" />
            <div>
              <p className="text-yellow-800 font-medium">
                ข้อมูลในหน้านี้เป็นข้อมูลสิทธิระดับประเทศ
              </p>
              <p className="text-yellow-800 mt-1">
                สำหรับการใช้สิทธิที่โรงพยาบาลซำสูง กรุณาสอบถาม โทร 043-219192 ในวันและเวลาราชการ
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 lg:col-start-3 space-y-8">
          
          {/* [B] เครื่องมือ "ไม่แน่ใจว่าตนเองมีสิทธิอะไร" */}
          <section className="bg-white border border-border rounded-[12px] p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5 border-b border-border pb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-text-primary">
                ไม่แน่ใจว่าตนเองใช้สิทธิใด ตรวจสอบได้ที่นี่
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <a href="tel:1330" className="flex items-start gap-4 p-4 rounded-lg bg-blue-50 border border-blue-100 hover:bg-blue-100 transition-colors group">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">โทรสายด่วน สปสช. 1330</h3>
                  <p className="text-sm text-blue-700 mt-1">ให้บริการตลอด 24 ชั่วโมง</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-border">
                <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">แอปพลิเคชัน "สปสช."</h3>
                  <p className="text-sm text-text-secondary mt-1">ตรวจสอบและจัดการสิทธิได้ครบที่สุด</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-border">
                <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                  <Smartphone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">แอปพลิเคชัน "ทางรัฐ"</h3>
                  <p className="text-sm text-text-secondary mt-1">ตรวจสอบสิทธิได้ แต่ย้ายสิทธิไม่ได้</p>
                </div>
              </div>

              <a href="https://www.nhso.go.th" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">เว็บไซต์ สปสช.</h3>
                  <p className="text-sm text-text-secondary mt-1">www.nhso.go.th</p>
                </div>
              </a>
            </div>

            <div className="bg-blue-50/50 p-4 rounded-lg text-center border border-blue-100/50">
              <p className="text-blue-800 font-medium">
                "หากไม่สะดวกใช้แอปพลิเคชัน แนะนำให้โทร 1330 เป็นวิธีที่ง่ายที่สุด"
              </p>
            </div>
          </section>

          {/* [D] ส่วน "เจ็บป่วยฉุกเฉินวิกฤต" (นำมาไว้บนเพื่อให้เด่น) */}
          <section className="bg-red-50 border-2 border-red-200 rounded-[12px] p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <HeartPulse className="w-32 h-32 text-red-500" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-red-700">
                  เจ็บป่วยฉุกเฉินวิกฤต ใช้สิทธิ UCEP ได้ทุกโรงพยาบาล
                </h2>
              </div>
              
              <p className="text-red-900 mb-6 text-lg">
                หากมีภาวะฉุกเฉินวิกฤตถึงแก่ชีวิต ผู้ป่วยทุกสิทธิสามารถเข้ารับการรักษาที่โรงพยาบาลที่ใกล้ที่สุดได้ทันที ไม่ว่าจะเป็นโรงพยาบาลรัฐหรือเอกชน โดยไม่ต้องสำรองจ่ายในช่วง 72 ชั่วโมงแรก หรือจนกว่าอาการจะพ้นภาวะวิกฤต
              </p>

              <a href="tel:1669" className="inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 w-full sm:w-auto">
                <Phone className="w-6 h-6 animate-pulse" />
                โทร 1669 เรียกรถพยาบาล ฟรี ตลอด 24 ชั่วโมง
              </a>

              <div className="mt-6">
                <PendingData label="รายละเอียดการเข้ารับบริการห้องฉุกเฉิน ของโรงพยาบาลซำสูง" />
              </div>
            </div>
          </section>

          {/* Table of Contents for non-JS anchor linking */}
          <div className="bg-gray-50 border border-border p-4 rounded-lg flex flex-wrap gap-2 justify-center">
            <a href="#uc" className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium hover:bg-moph-green hover:text-white transition-colors">บัตรทอง (30 บาท)</a>
            <a href="#sso" className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium hover:bg-moph-green hover:text-white transition-colors">ประกันสังคม</a>
            <a href="#cs" className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium hover:bg-moph-green hover:text-white transition-colors">สวัสดิการข้าราชการ</a>
          </div>

          {/* [C] แท็บ 3 สิทธิหลัก (Using HTML Details/Summary for native accordion) */}
          <div className="space-y-4">
            
            {/* Tab 1: UC */}
            <details id="uc" className="group bg-white border border-border rounded-[12px] shadow-sm [&_summary::-webkit-details-marker]:hidden open:ring-2 ring-moph-green/20" open>
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-moph-green" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">สิทธิหลักประกันสุขภาพแห่งชาติ</h2>
                    <p className="text-sm text-text-secondary">(บัตรทอง / สิทธิ 30 บาท)</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-open:rotate-45 transition-transform bg-gray-50 group-open:bg-moph-green group-open:text-white group-open:border-moph-green">
                  <Plus size={16} />
                </div>
              </summary>
              <div className="p-6 pt-0 border-t border-border mt-4 content-body">
                {adminData.tabs?.uc ? (
                  <div className="prose prose-moph max-w-none" dangerouslySetInnerHTML={{ __html: adminData.tabs.uc }} />
                ) : (
                  <div className="prose prose-moph max-w-none">
                    <h3>ใครใช้สิทธินี้</h3>
                    <p>คนไทยที่มีเลขประจำตัวประชาชน 13 หลัก และไม่มีสิทธิรักษาพยาบาลจากหน่วยงานอื่น เช่น ไม่ได้เป็นผู้ประกันตนประกันสังคม และไม่ได้เป็นข้าราชการหรือครอบครัวข้าราชการ</p>
                    
                    <h3>นโยบาย 30 บาทรักษาทุกที่</h3>
                    <p>ตั้งแต่ 1 มกราคม 2568 ผู้ใช้สิทธิบัตรทองสามารถเข้ารับบริการ ได้ทุกหน่วยบริการที่เข้าร่วมโครงการทั่วประเทศ โดยใช้บัตรประจำตัวประชาชนใบเดียว ไม่ต้องใช้ใบส่งตัว สำหรับบริการปฐมภูมิ</p>
                    
                    <h3>เอกสารที่ต้องเตรียม</h3>
                    <ul>
                      <li>บัตรประจำตัวประชาชน</li>
                      <li>เด็กอายุต่ำกว่า 7 ปีที่ยังไม่มีบัตรประชาชน ใช้สูติบัตรร่วมกับบัตรประชาชนของผู้ปกครอง</li>
                    </ul>
                    
                    <h3>สิทธิประโยชน์ที่เพิ่มขึ้นในปี 2568</h3>
                    <ul>
                      <li>บริการทันตกรรมพื้นฐาน 3 ครั้งต่อปี</li>
                      <li>รับยาสำหรับ 32 อาการเจ็บป่วยเล็กน้อยที่ร้านยาที่เข้าร่วมโครงการ</li>
                      <li>บริการรถรับส่งผู้ป่วยติดเตียง ประสานผ่านสายด่วน 1330</li>
                    </ul>
                    
                    <h3>การย้ายหน่วยบริการประจำ</h3>
                    <p>ทำได้ด้วยตนเองผ่านแอป สปสช. แอปทางรัฐ เว็บไซต์ สปสช. หรือโทร 1330</p>
                    
                    <h3>หากถูกปฏิเสธการใช้สิทธิ หรือถูกเรียกเก็บเงินที่ไม่ถูกต้อง</h3>
                    <p>โทรสายด่วน สปสช. 1330 เพื่อร้องเรียนและขอคำปรึกษา</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mt-6 border-l-4 border-gray-400">
                      <h4 className="text-gray-800 font-semibold mb-2">ข้อควรทราบ</h4>
                      <p className="text-sm text-gray-700 mb-0">หน่วยบริการที่เข้าร่วมโครงการ 30 บาทรักษาทุกที่ สามารถตรวจสอบรายชื่อได้ที่เว็บไซต์ สปสช. แนะนำให้โทรสอบถามหน่วยบริการปลายทางก่อนเข้ารับบริการทุกครั้ง</p>
                    </div>
                  </div>
                )}
              </div>
            </details>

            {/* Tab 2: SSO */}
            <details id="sso" className="group bg-white border border-border rounded-[12px] shadow-sm [&_summary::-webkit-details-marker]:hidden open:ring-2 ring-moph-green/20">
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">สิทธิประกันสังคม</h2>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-open:rotate-45 transition-transform bg-gray-50 group-open:bg-moph-green group-open:text-white group-open:border-moph-green">
                  <Plus size={16} />
                </div>
              </summary>
              <div className="p-6 pt-0 border-t border-border mt-4 content-body">
                {adminData.ssoWarningEnabled && (
                  <div className="mb-6">
                    <PendingData label="สถานะการเป็นสถานพยาบาลคู่สัญญาประกันสังคม ของโรงพยาบาลซำสูง" />
                    <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg mt-2 text-yellow-900">
                      <strong>แจ้งเตือนสำคัญ:</strong> ผู้ประกันตนต้องใช้สิทธิที่โรงพยาบาลตามบัตรรับรองสิทธิของตนเอง กรุณาตรวจสอบก่อนเดินทางมา โดยโทร 1506 กด 1 หรือโทร 043-219192
                    </div>
                  </div>
                )}
                
                {adminData.tabs?.sso ? (
                  <div className="prose prose-moph max-w-none" dangerouslySetInnerHTML={{ __html: adminData.tabs.sso }} />
                ) : (
                  <div className="prose prose-moph max-w-none">
                    <h3>ใครใช้สิทธินี้</h3>
                    <p>ผู้ประกันตนมาตรา 33 มาตรา 39 และมาตรา 40 ตามเงื่อนไขที่กำหนด</p>
                    
                    <h3>เอกสารที่ต้องเตรียม</h3>
                    <ul>
                      <li>บัตรประจำตัวประชาชน</li>
                    </ul>
                    
                    <h3>สอบถามข้อมูลและตรวจสอบสถานพยาบาลตามสิทธิ</h3>
                    <p>สายด่วนประกันสังคม 1506<br/>เว็บไซต์สำนักงานประกันสังคม <a href="https://www.sso.go.th" target="_blank" rel="noopener noreferrer">www.sso.go.th</a></p>
                    
                    <h3>กรณีเจ็บป่วยฉุกเฉิน</h3>
                    <p>สามารถเข้ารักษาที่สถานพยาบาลใดก็ได้ที่ใกล้ที่สุด โดยไม่จำกัดเฉพาะโรงพยาบาลตามบัตรรับรองสิทธิ ดูรายละเอียดในหัวข้อการเจ็บป่วยฉุกเฉินวิกฤต (UCEP)</p>
                  </div>
                )}
              </div>
            </details>

            {/* Tab 3: CS */}
            <details id="cs" className="group bg-white border border-border rounded-[12px] shadow-sm [&_summary::-webkit-details-marker]:hidden open:ring-2 ring-moph-green/20">
              <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                    <Hospital className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-text-primary">สิทธิสวัสดิการรักษาพยาบาลข้าราชการ</h2>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-open:rotate-45 transition-transform bg-gray-50 group-open:bg-moph-green group-open:text-white group-open:border-moph-green">
                  <Plus size={16} />
                </div>
              </summary>
              <div className="p-6 pt-0 border-t border-border mt-4 content-body">
                {adminData.tabs?.cs ? (
                  <div className="prose prose-moph max-w-none" dangerouslySetInnerHTML={{ __html: adminData.tabs.cs }} />
                ) : (
                  <div className="prose prose-moph max-w-none">
                    <h3>ใครใช้สิทธินี้</h3>
                    <p>ข้าราชการ ลูกจ้างประจำ ผู้รับเบี้ยหวัดบำนาญ และบุคคลในครอบครัว ได้แก่ บิดา มารดา คู่สมรส และบุตรตามเงื่อนไข</p>
                    
                    <h3>ผู้ที่ไม่อยู่ในสิทธินี้</h3>
                    <p>ข้าราชการส่วนท้องถิ่น พนักงานรัฐวิสาหกิจ และพนักงานองค์กรภาครัฐอื่น ซึ่งมีระบบสวัสดิการของตนเองแยกต่างหาก</p>
                    
                    <h3>เงื่อนไขก่อนใช้สิทธิ</h3>
                    <p className="text-red-600 font-medium">ผู้มีสิทธิและบุคคลในครอบครัวต้องลงทะเบียนในฐานข้อมูล ของกรมบัญชีกลางผ่านส่วนราชการต้นสังกัดให้เรียบร้อยก่อน มิฉะนั้นจะไม่สามารถใช้ระบบเบิกจ่ายตรงได้ และต้องสำรองจ่ายเอง</p>
                    
                    <h3>การใช้สิทธิผู้ป่วยนอก</h3>
                    <p>ใช้บัตรประจำตัวประชาชนยืนยันตัวตนทุกครั้งที่เข้ารับบริการ ตามแนวปฏิบัติของกรมบัญชีกลาง</p>
                    
                    <h3>เอกสารที่ต้องเตรียม</h3>
                    <ul>
                      <li>บัตรประจำตัวประชาชนของผู้เข้ารับการรักษา</li>
                    </ul>
                    
                    <h3>ตรวจสอบสิทธิ</h3>
                    <p>ผ่านแอปพลิเคชันเป๋าตัง เมนูกระเป๋าสุขภาพ (Health Wallet) เลือกสิทธิข้าราชการ หรือสอบถามส่วนราชการต้นสังกัด หรือกรมบัญชีกลาง <a href="https://www.cgd.go.th" target="_blank" rel="noopener noreferrer">www.cgd.go.th</a></p>
                  </div>
                )}
              </div>
            </details>
            
          </div>

          {/* [E] ส่วน "ขั้นตอนเมื่อมาถึงโรงพยาบาล" */}
          <section className="bg-white border border-border rounded-[12px] p-6 shadow-sm mt-8">
            <div className="flex items-center gap-3 mb-5 border-b border-border pb-4">
              <div className="w-10 h-10 bg-moph-green-light rounded-full flex items-center justify-center">
                <FileText className="w-5 h-5 text-moph-green" />
              </div>
              <h2 className="text-xl font-bold text-text-primary">
                ขั้นตอนเมื่อมาถึงโรงพยาบาล
              </h2>
            </div>
            
            <PendingData label="จุดยื่นบัตร เวลาเปิดรับบัตร ลำดับขั้นตอน และผังอาคาร" />
          </section>

          {/* [F] ส่วนติดต่อท้ายหน้า */}
          <section className="bg-gray-50 border border-border rounded-[12px] p-6 text-center mt-8">
            <h3 className="text-lg font-bold text-text-primary mb-2">สอบถามเรื่องสิทธิการรักษากับโรงพยาบาลโดยตรง</h3>
            <p className="text-lg font-semibold text-moph-green mb-4">โทร 043-219192</p>
            
            {adminData.contactExtension ? (
              <p className="text-text-secondary">ต่อ {adminData.contactExtension}</p>
            ) : (
              <div className="max-w-md mx-auto">
                <PendingData label="เบอร์ต่อแผนกสิทธิบัตร และเวลาทำการ" />
              </div>
            )}
          </section>
          
          <div className="text-center text-sm text-gray-400 mt-12 pb-8">
            ข้อมูลอ้างอิงจาก สปสช. สำนักงานประกันสังคม และกรมบัญชีกลาง ปรับปรุงล่าสุด {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })} เงื่อนไขอาจเปลี่ยนแปลง กรุณาตรวจสอบกับหน่วยงานเจ้าของสิทธิ
          </div>

        </div>
      </div>
    </main>
  );
}
