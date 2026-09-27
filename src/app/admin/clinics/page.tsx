"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

interface Clinic {
  id: string;
  name: string;
  description: string;
  location: string;
  schedule: string;
}

export default function AdminClinicsPage() {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setClinics([
      { id: "1", name: "คลินิกโรคทั่วไป", description: "ตรวจรักษาโรคทั่วไป", location: "อาคารผู้ป่วยนอก", schedule: "จันทร์-ศุกร์ 08.00-16.00 น." }
    ]);
    setLoading(false);
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[#0F172A]">จัดการคลินิก/บริการ</h1>
        <button className="flex items-center gap-2 bg-[#00694E] text-white px-4 py-2 rounded-lg hover:bg-[#005740] transition-colors">
          <Plus size={20} />
          เพิ่มคลินิก
        </button>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] p-4">
        {loading ? (
          <div className="text-center py-8 text-[#64748B]">กำลังโหลดข้อมูล...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB] text-[#64748B]">
                  <th className="py-3 px-4 font-medium">ชื่อคลินิก</th>
                  <th className="py-3 px-4 font-medium">สถานที่</th>
                  <th className="py-3 px-4 font-medium">เวลาทำการ</th>
                  <th className="py-3 px-4 font-medium text-right">จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {clinics.map((clinic) => (
                  <tr key={clinic.id} className="border-b border-[#E5E7EB] hover:bg-[#F8FAFC]">
                    <td className="py-3 px-4 font-medium text-[#0F172A]">{clinic.name}</td>
                    <td className="py-3 px-4 text-[#475569]">{clinic.location}</td>
                    <td className="py-3 px-4 text-[#475569]">{clinic.schedule}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-[#64748B] hover:text-[#00694E] hover:bg-[#F1F5F9] rounded">
                          <Edit size={18} />
                        </button>
                        <button className="p-2 text-[#64748B] hover:text-[#C8102E] hover:bg-[#F1F5F9] rounded">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
