"use client";

import { Download, Database, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function BackupPage() {
  const [loading, setLoading] = useState(false);

  const handleBackup = async () => {
    setLoading(true);
    try {
      // Mock backup process
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("ดาวน์โหลดไฟล์สำรองข้อมูลสำเร็จ");
    } catch (error) {
      alert("เกิดข้อผิดพลาดในการสำรองข้อมูล");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">สำรองข้อมูลระบบ</h1>

      <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm max-w-2xl">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full mr-4">
            <Database className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">ดาวน์โหลดฐานข้อมูล</h2>
            <p className="text-gray-500">สำรองข้อมูลทั้งหมดของระบบในรูปแบบ SQL หรือ JSON</p>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start">
          <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-yellow-800">
            <p className="font-medium mb-1">คำแนะนำความปลอดภัย</p>
            <p>ไฟล์สำรองข้อมูลมีข้อมูลส่วนบุคคลและข้อมูลสำคัญของระบบ กรุณาเก็บรักษาไฟล์อย่างปลอดภัยและลบทิ้งเมื่อไม่จำเป็นต้องใช้งานแล้ว</p>
          </div>
        </div>

        <button
          onClick={handleBackup}
          disabled={loading}
          className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-[#00694E] text-white rounded-lg hover:bg-[#005741] disabled:opacity-50 transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          {loading ? "กำลังสร้างไฟล์สำรองข้อมูล..." : "ดาวน์โหลดไฟล์สำรองข้อมูล (Backup)"}
        </button>
      </div>
    </div>
  );
}
