"use client";

import { useState, useEffect } from "react";
import { Save, AlertCircle } from "lucide-react";

export default function CoverageAdminPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    ssoWarningEnabled: true,
    contactExtension: "",
    tabs: {
      uc: "",
      sso: "",
      cs: ""
    }
  });

  useEffect(() => {
    fetch("/api/coverage")
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(e => {
        console.error("Failed to load coverage data:", e);
        setLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setMessage("");
    try {
      const res = await fetch("/api/coverage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setMessage("บันทึกข้อมูลสำเร็จ");
      } else {
        setMessage("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      }
    } catch (e) {
      console.error(e);
      setMessage("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    } finally {
      setSaving(false);
    }
  };

  const handleTabChange = (key: keyof typeof data.tabs, value: string) => {
    setData(prev => ({
      ...prev,
      tabs: {
        ...prev.tabs,
        [key]: value
      }
    }));
  };

  if (loading) return <div>กำลังโหลด...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">จัดการสิทธิการรักษาพยาบาล</h1>
          <p className="text-gray-500 mt-1">แก้ไขเนื้อหาและการตั้งค่าต่างๆ สำหรับหน้าสิทธิการรักษาพยาบาล</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-[#00694E] text-white px-4 py-2 rounded-lg hover:bg-[#00523d] disabled:opacity-50"
        >
          <Save size={20} />
          {saving ? "กำลังบันทึก..." : "บันทึกการเปลี่ยนแปลง"}
        </button>
      </div>

      {message && (
        <div className={`p-4 rounded-lg ${message.includes("สำเร็จ") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
          {message}
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6">
        <h2 className="text-lg font-semibold border-b pb-2">ตั้งค่าทั่วไป</h2>
        
        <div className="flex items-center gap-3">
          <input 
            type="checkbox" 
            id="ssoWarning"
            checked={data.ssoWarningEnabled}
            onChange={(e) => setData({...data, ssoWarningEnabled: e.target.checked})}
            className="w-5 h-5 text-[#00694E] rounded border-gray-300 focus:ring-[#00694E]"
          />
          <label htmlFor="ssoWarning" className="font-medium text-gray-700 cursor-pointer">
            แสดงกล่องแจ้งเตือนสถานะโรงพยาบาลคู่สัญญาประกันสังคม (รอการยืนยันจากฝ่ายบริหาร)
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            เบอร์โทรศัพท์ต่อ แผนกสิทธิบัตร (เช่น "123" หรือ "123-125")
          </label>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">043-219192 ต่อ</span>
            <input 
              type="text" 
              value={data.contactExtension}
              onChange={(e) => setData({...data, contactExtension: e.target.value})}
              placeholder="เว้นว่างไว้หากยังไม่มีข้อมูล (จะแสดง PendingData แทน)"
              className="border border-gray-300 rounded-md px-3 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">
            หากปล่อยว่างไว้ ระบบจะแสดงกรอบสีเหลืองเตือนว่ารอข้อมูล
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6">
        <h2 className="text-lg font-semibold border-b pb-2">แก้ไขเนื้อหา (HTML / Rich Text)</h2>
        <div className="bg-blue-50 text-blue-800 p-4 rounded-lg flex gap-3 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>
            คุณสามารถใช้ HTML tags พื้นฐาน เช่น &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt; ได้<br/>
            (หมายเหตุ: การเว้นว่างเนื้อหาในแต่ละแท็บ ระบบจะดึงข้อความเริ่มต้นที่เตรียมไว้มาแสดงแทน)
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">1. สิทธิหลักประกันสุขภาพแห่งชาติ (บัตรทอง)</h3>
          <textarea
            value={data.tabs.uc}
            onChange={(e) => handleTabChange("uc", e.target.value)}
            rows={8}
            className="w-full border border-gray-300 rounded-md p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            placeholder="เว้นว่างเพื่อใช้เนื้อหาเริ่มต้น"
          />
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">2. สิทธิประกันสังคม</h3>
          <textarea
            value={data.tabs.sso}
            onChange={(e) => handleTabChange("sso", e.target.value)}
            rows={8}
            className="w-full border border-gray-300 rounded-md p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            placeholder="เว้นว่างเพื่อใช้เนื้อหาเริ่มต้น"
          />
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">3. สวัสดิการข้าราชการ</h3>
          <textarea
            value={data.tabs.cs}
            onChange={(e) => handleTabChange("cs", e.target.value)}
            rows={8}
            className="w-full border border-gray-300 rounded-md p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            placeholder="เว้นว่างเพื่อใช้เนื้อหาเริ่มต้น"
          />
        </div>
      </div>
    </div>
  );
}
