import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Clock,
  Shield,
  MessageSquare,
  MapPin,
  ChevronRight,
  Calendar,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import PendingData from "@/components/PendingData";
import PendingImage from "@/components/PendingImage";

export default function HomePage() {
  return (
    <>
      {/* ===== Section 1: Hero ===== */}
      <section className="bg-white flex flex-col">
        {/* Image & Title (Top part) */}
        <div className="relative h-[280px] sm:h-[350px] md:h-[500px] lg:h-[65vh] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.png"
              alt="อาคารโรงพยาบาลซำสูง"
              fill
              className="object-cover object-[center_35%]"
              priority
            />
          </div>
          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 text-center px-4 w-full max-w-content mx-auto flex flex-col justify-center h-full pt-8 md:pt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-4 drop-shadow-md">
              โรงพยาบาลซำสูง
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/95 drop-shadow-md font-medium">
              โรงพยาบาลชุมชนขนาด 30 เตียง อำเภอซำสูง จังหวัดขอนแก่น
            </p>
            
            {/* Desktop Buttons (Hidden on mobile) */}
            <div className="hidden md:flex flex-row gap-4 justify-center mt-10">
              <Link
                href="/doctors"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-moph-green font-semibold rounded-[8px] hover:bg-gray-50 transition-colors shadow-sm"
              >
                <Stethoscope size={20} strokeWidth={2} />
                ตารางแพทย์
              </Link>
              <Link
                href="/services/steps"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-moph-green font-semibold rounded-[8px] hover:bg-gray-50 transition-colors shadow-sm"
              >
                <Calendar size={20} strokeWidth={2} />
                ขั้นตอนรับบริการ
              </Link>
              <Link
                href="/about/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-moph-green text-white font-semibold rounded-[8px] hover:bg-moph-green-dark transition-colors shadow-sm"
              >
                <MapPin size={20} strokeWidth={2} />
                แผนที่การเดินทาง
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Buttons (Hidden on desktop) - Placed below the image */}
        <div className="md:hidden bg-moph-green-light px-4 py-5 border-b border-border">
          <div className="flex flex-col gap-3 max-w-sm mx-auto">
            <Link
              href="/doctors"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-white text-moph-green font-semibold rounded-[8px] border border-moph-green/20 shadow-sm active:bg-gray-50"
            >
              <Stethoscope size={20} strokeWidth={2} />
              ตารางแพทย์
            </Link>
            <Link
              href="/services/steps"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-white text-moph-green font-semibold rounded-[8px] border border-moph-green/20 shadow-sm active:bg-gray-50"
            >
              <Calendar size={20} strokeWidth={2} />
              ขั้นตอนการมารับบริการ
            </Link>
            <Link
              href="/about/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-moph-green text-white font-semibold rounded-[8px] shadow-sm active:bg-moph-green-dark"
            >
              <MapPin size={20} strokeWidth={2} />
              แผนที่และการเดินทาง
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Quick Actions ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* โทรหาเรา */}
            <a
              href="tel:043-219192"
              className="group border border-border rounded-[8px] p-5 md:p-6 hover:border-moph-green transition-colors duration-150 text-left"
            >
              <Phone
                size={28}
                strokeWidth={1.5}
                className="text-moph-green mb-3"
              />
              <h3 className="font-semibold text-text-primary text-base mb-1">
                โทรหาเรา
              </h3>
              <p className="text-sm text-text-secondary">
                043-219192 กดเพื่อโทร
              </p>
            </a>

            {/* เวลาเปิดบริการ */}
            <div className="border border-border rounded-[8px] p-5 md:p-6 text-left flex flex-col h-full">
              <Clock
                size={28}
                strokeWidth={1.5}
                className="text-moph-green mb-3"
              />
              <h3 className="font-semibold text-text-primary text-base mb-1">
                เวลาเปิดบริการ
              </h3>
              <div className="mt-auto">
                <p className="text-sm text-text-secondary">
                  เปิดให้บริการ 24 ชั่วโมง ทุกวัน<br />
                  <span className="text-moph-green font-medium">(แผนกอุบัติเหตุและฉุกเฉิน)</span>
                </p>
              </div>
            </div>

            {/* สิทธิการรักษา */}
            <Link
              href="/services/coverage"
              className="group border border-border rounded-[8px] p-5 md:p-6 hover:border-moph-green transition-colors duration-150 text-left flex flex-col h-full"
            >
              <Shield
                size={28}
                strokeWidth={1.5}
                className="text-moph-green mb-3"
              />
              <h3 className="font-semibold text-text-primary text-base mb-1">
                สิทธิการรักษา
              </h3>
              <p className="text-sm text-text-secondary mt-auto">
                ตรวจสอบสิทธิและเอกสารที่ต้องเตรียม
              </p>
            </Link>

            {/* แจ้งข้อร้องเรียน */}
            <Link
              href="/about/contact"
              className="group border border-border rounded-[8px] p-5 md:p-6 hover:border-moph-green transition-colors duration-150 text-left flex flex-col h-full"
            >
              <MessageSquare
                size={28}
                strokeWidth={1.5}
                className="text-moph-green mb-3"
              />
              <h3 className="font-semibold text-text-primary text-base mb-1">
                แจ้งข้อร้องเรียน
              </h3>
              <p className="text-sm text-text-secondary mt-auto">
                แจ้งปัญหาหรือข้อเสนอแนะ
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Section 4: Latest News (Facebook Feed) ===== */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text & CTA */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-moph-green font-semibold mb-3">
                <MessageSquare size={20} />
                <span>ข่าวสารและกิจกรรม</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-5 leading-tight">
                อัปเดตความเคลื่อนไหว<br className="hidden lg:block" />จากโรงพยาบาลซำสูง
              </h2>
              <p className="text-base md:text-lg text-text-secondary mb-8 max-w-lg mx-auto lg:mx-0">
                ติดตามข่าวสารสุขภาพ กิจกรรมรณรงค์ ประกาศสำคัญ และภาพบรรยากาศการให้บริการของเราได้แบบเรียลไทม์ผ่าน Facebook Page อย่างเป็นทางการ
              </p>
              
              <div>
                <a
                  href="https://www.facebook.com/sumsunghospital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#0866FF] text-white font-semibold rounded-[8px] hover:bg-[#0756D6] transition-colors shadow-sm shadow-blue-500/30"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.954 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.898 10.123-5.864 10.123-11.853z"/>
                  </svg>
                  ติดตามเพจของเรา
                </a>
              </div>
            </div>

            {/* Right Column: Facebook iframe */}
            <div className="flex justify-center lg:justify-end w-full overflow-hidden">
              <div className="w-full max-w-[500px] bg-white rounded-[12px] shadow-md border border-gray-100 overflow-hidden">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsumsunghospital%2F&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                  width="500"
                  height="600"
                  style={{ border: 'none', overflow: 'hidden', width: '100%', maxWidth: '500px' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Page Feed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 5: Procurement & Jobs ===== */}
      <section className="py-12 md:py-16 bg-bg-alt">
        <div className="max-w-content mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ประกาศจัดซื้อจัดจ้าง */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-primary">
                  ประกาศจัดซื้อจัดจ้าง
                </h2>
                <Link
                  href="/news/procurement"
                  className="text-moph-green font-medium text-sm hover:underline inline-flex items-center gap-1"
                >
                  ดูทั้งหมด
                  <ChevronRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
              {/* TODO: ต้องเพิ่มประกาศจัดซื้อจัดจ้างผ่านระบบจัดการเนื้อหา */}
              <PendingData label="ประกาศจัดซื้อจัดจ้าง" />
              <ul className="mt-4 space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li
                    key={i}
                    className="opacity-30 flex items-start gap-3 py-2 border-b border-border last:border-0"
                  >
                    <span className="text-xs text-text-secondary whitespace-nowrap mt-0.5">
                      วว/ดด/ปป
                    </span>
                    <span className="text-sm text-text-primary">
                      รายการประกาศ
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* รับสมัครงาน */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-text-primary">
                  รับสมัครงาน
                </h2>
                <Link
                  href="/news/jobs"
                  className="text-moph-green font-medium text-sm hover:underline inline-flex items-center gap-1"
                >
                  ดูทั้งหมด
                  <ChevronRight size={16} strokeWidth={1.5} />
                </Link>
              </div>
              {/* TODO: ต้องเพิ่มประกาศรับสมัครงานผ่านระบบจัดการเนื้อหา */}
              <PendingData label="ประกาศรับสมัครงาน" />
              <ul className="mt-4 space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li
                    key={i}
                    className="opacity-30 flex items-start gap-3 py-2 border-b border-border last:border-0"
                  >
                    <span className="text-xs text-text-secondary whitespace-nowrap mt-0.5">
                      วว/ดด/ปป
                    </span>
                    <span className="text-sm text-text-primary">
                      ตำแหน่งที่เปิดรับ
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section 6: Contact & Map ===== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-content mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-8">
            ติดต่อและแผนที่
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ข้อมูลติดต่อ */}
            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    strokeWidth={1.5}
                    className="text-moph-green mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      ที่อยู่
                    </h3>
                    <p className="text-text-secondary text-sm">
                      231 หมู่ 3 ถนนกระนวน-เชียงยืน ตำบลกระนวน
                      <br />
                      อำเภอซำสูง จังหวัดขอนแก่น 40170
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    strokeWidth={1.5}
                    className="text-moph-green mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      โทรศัพท์
                    </h3>
                    <a
                      href="tel:043-219192"
                      className="text-moph-green hover:underline text-sm"
                    >
                      043-219192
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    size={20}
                    strokeWidth={1.5}
                    className="text-emergency mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      ฉุกเฉิน
                    </h3>
                    <a
                      href="tel:1669"
                      className="text-emergency font-semibold hover:underline text-sm"
                    >
                      1669
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ArrowRight
                    size={20}
                    strokeWidth={1.5}
                    className="text-moph-green mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      Facebook
                    </h3>
                    <a
                      href="https://www.facebook.com/sumsunghospital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-moph-green hover:underline text-sm"
                    >
                      facebook.com/sumsunghospital
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    size={20}
                    strokeWidth={1.5}
                    className="text-moph-green mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-text-primary mb-1">
                      เวลาเปิดบริการ
                    </h3>
                    <p className="text-text-secondary text-sm">
                      เปิดให้บริการ 24 ชั่วโมง ทุกวัน (จันทร์-อาทิตย์)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* แผนที่ */}
            <div className="flex flex-col h-full">
              <div className="relative w-full h-64 md:h-80 rounded-[8px] overflow-hidden border border-border shadow-sm group">
                <iframe
                  src="https://maps.google.com/maps?q=โรงพยาบาลซำสูง%20ขอนแก่น&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="แผนที่ตั้งโรงพยาบาลซำสูง"
                />
                
                {/* Overlay that appears on hover (Desktop only) */}
                <div className="hidden md:flex absolute inset-0 bg-moph-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none items-center justify-center">
                  <div className="bg-white px-4 py-2 rounded-[8px] shadow-sm text-moph-green font-semibold text-sm flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200">
                    <MapPin size={16} strokeWidth={2} />
                    คลิกเพื่อเลื่อนแผนที่
                  </div>
                </div>
              </div>
              
              <a
                href="https://maps.app.goo.gl/5wNNiHPVXxNaJpPH6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-white text-moph-green font-semibold border-2 border-moph-green rounded-[8px] hover:bg-moph-green hover:text-white transition-colors duration-150 shadow-sm active:transform active:scale-[0.99]"
              >
                <MapPin size={18} strokeWidth={2} />
                นำทางด้วย Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
