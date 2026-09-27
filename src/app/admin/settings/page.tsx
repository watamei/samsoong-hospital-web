"use client";

import { useState, useEffect } from "react";
import { Save } from "lucide-react";

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [settings, setSettings] = useState({
    hospital_name_th: "โรงพยาบาลซำสูง",
    hospital_name_en: "Samsoong Hospital",
    address: "231 หมู่ 3 ถนนกระนวน-เชียงยืน ตำบลกระนวน อำเภอซำสูง จังหวัดขอนแก่น 40170",
    phone: "043-219192",
    emergency_phone: "1669",
    nhso_phone: "1330",
    facebook: "https://www.facebook.com/sumsunghospital",
    legacy_website: "https://www.sshos.go.th",
  });

  useEffect(() => {
    // In a real app, fetch from /api/settings
    // For now we use the mock data as default
    setInitialLoading(false);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Mock API call
      // const res = await fetch("/api/settings", { method: "PUT", ... });
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage("บันทึกข้อมูลสำเร็จ");
    } catch (error) {
      setMessage("เกิดข้อผิดพลาดในการบันทึก");
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) return <div>กำลังโหลด...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">ตั้งค่าเว็บไซต์</h1>

      {message && (
        <div className={`p-4 rounded-lg mb-6 ${message.includes("สำเร็จ") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">ข้อมูลทั่วไป</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อโรงพยาบาล (TH)</label>
              <input
                type="text"
                name="hospital_name_th"
                value={settings.hospital_name_th}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#00694E] focus:border-[#00694E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อโรงพยาบาล (EN)</label>
              <input
                type="text"
                name="hospital_name_en"
                value={settings.hospital_name_en}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#00694E] focus:border-[#00694E]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">ที่อยู่</label>
              <textarea
                name="address"
                value={settings.address}
                onChange={handleChange}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#00694E] focus:border-[#00694E]"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">ช่องทางการติดต่อ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์ติดต่อ</label>
              <input
                type="text"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#00694E] focus:border-[#00694E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">เบอร์ฉุกเฉิน (สีแดง)</label>
              <input
                type="text"
                name="emergency_phone"
                value={settings.emergency_phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#00694E] focus:border-[#00694E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">สายด่วน สปสช.</label>
              <input
                type="text"
                name="nhso_phone"
                value={settings.nhso_phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#00694E] focus:border-[#00694E]"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">โซเชียลมีเดียและอื่นๆ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
              <input
                type="url"
                name="facebook"
                value={settings.facebook}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#00694E] focus:border-[#00694E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">เว็บไซต์เดิม (Legacy)</label>
              <input
                type="url"
                name="legacy_website"
                value={settings.legacy_website}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#00694E] focus:border-[#00694E]"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center px-4 py-2 bg-[#00694E] text-white rounded-lg hover:bg-[#005741] disabled:opacity-50"
          >
            <Save className="w-4 h-4 mr-2" />
            {loading ? "กำลังบันทึก..." : "บันทึกการตั้งค่า"}
          </button>
        </div>
      </form>
    </div>
  );
}
