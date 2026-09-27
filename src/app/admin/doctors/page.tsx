"use client";

import React, { useState, useEffect } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";

interface Doctor {
  id: string;
  name_th: string;
  name_en: string;
  specialty: string;
  clinic_id?: string;
  image_url?: string;
}

export default function AdminDoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch('/api/doctors').then...
    setDoctors([
      { id: "1", name_th: "นพ. ทดสอบ", name_en: "Dr. Test", specialty: "เวชปฏิบัติทั่วไป" }
    ]);
    setLoading(false);
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[#0F172A]">จัดการข้อมูลแพทย์</h1>
        <button className="flex items-center gap-2 bg-[#00694E] text-white px-4 py-2 rounded-lg hover:bg-[#005740] transition-colors">
          <Plus size={20} />
          เพิ่มแพทย์
        </button>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] p-4">
        {loading ? (
          <div className="text-center py-8 text-[#64748B]">กำลังโหลดข้อมูล...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map(doctor => (
              <div key={doctor.id} className="border border-[#E5E7EB] rounded-lg p-4 flex flex-col items-center">
                <div className="w-24 h-24 bg-[#F1F5F9] rounded-full mb-4 flex items-center justify-center text-[#94A3B8]">
                  รูปภาพ
                </div>
                <h3 className="font-medium text-lg text-[#0F172A]">{doctor.name_th}</h3>
                <p className="text-sm text-[#475569] mb-4">{doctor.specialty}</p>
                <div className="flex gap-2 w-full mt-auto">
                  <button className="flex-1 flex justify-center items-center gap-1 border border-[#E5E7EB] py-2 rounded text-[#475569] hover:bg-[#F8FAFC]">
                    <Edit size={16} /> แก้ไข
                  </button>
                  <button className="flex-1 flex justify-center items-center gap-1 border border-[#E5E7EB] py-2 rounded text-[#C8102E] hover:bg-[#FEF2F2]">
                    <Trash2 size={16} /> ลบ
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
