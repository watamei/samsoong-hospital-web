"use client";

import { Activity, AlertCircle, CheckCircle2, Clock } from "lucide-react";

export default function AdminDashboard() {
  // Mock data for pending content completeness
  const completenessData = [
    { section: "ข้อมูลทั่วไปโรงพยาบาล", status: "complete" },
    { section: "ตารางออกตรวจแพทย์", status: "pending" },
    { section: "ข้อมูลคลินิก", status: "complete" },
    { section: "ข่าวประชาสัมพันธ์", status: "complete" },
    { section: "เอกสารดาวน์โหลด", status: "pending" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">ภาพรวมระบบ</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <Activity className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">การเข้าชมวันนี้</p>
            <p className="text-2xl font-bold text-gray-900">124</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center">
          <div className="bg-green-100 p-3 rounded-full mr-4">
            <CheckCircle2 className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">ข่าวสารทั้งหมด</p>
            <p className="text-2xl font-bold text-gray-900">45</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex items-center">
          <div className="bg-orange-100 p-3 rounded-full mr-4">
            <Clock className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">รออัปเดตข้อมูล</p>
            <p className="text-2xl font-bold text-gray-900">2</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 text-orange-500" />
          สถานะความสมบูรณ์ของข้อมูลบนเว็บไซต์
        </h2>
        <div className="space-y-3">
          {completenessData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">{item.section}</span>
              {item.status === "complete" ? (
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                  สมบูรณ์
                </span>
              ) : (
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                  รอข้อมูล
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>หมายเหตุ:</strong> ส่วนที่แสดงสถานะ "รอข้อมูล" บนเว็บไซต์หน้าบ้านจะแสดงข้อความ "รอข้อมูลจากโรงพยาบาล" (PendingData component)
          </p>
        </div>
      </div>
    </div>
  );
}
