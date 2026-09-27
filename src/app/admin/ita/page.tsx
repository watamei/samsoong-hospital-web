"use client";

import React, { useState, useEffect } from "react";
import { Plus, Trash2, Link as LinkIcon } from "lucide-react";

export default function AdminITAPage() {
  const [fiscalYear, setFiscalYear] = useState("2567");
  const [moit, setMoit] = useState("1");
  const [documents, setDocuments] = useState<any[]>([]);

  useEffect(() => {
    // fetch(`/api/ita?year=${fiscalYear}&moit=${moit}`)
    setDocuments([
      { id: "1", title: "คำสั่งแต่งตั้งคณะทำงาน", url: "#" }
    ]);
  }, [fiscalYear, moit]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[#0F172A]">จัดการข้อมูล ITA</h1>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] p-6 mb-6 flex flex-wrap gap-4 items-end">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#475569]">ปีงบประมาณ</label>
          <select 
            value={fiscalYear}
            onChange={(e) => setFiscalYear(e.target.value)}
            className="w-40 px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00694E]"
          >
            <option value="2567">2567</option>
            <option value="2566">2566</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#475569]">MOIT</label>
          <select 
            value={moit}
            onChange={(e) => setMoit(e.target.value)}
            className="w-40 px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00694E]"
          >
            {Array.from({length: 22}, (_, i) => i + 1).map(num => (
              <option key={num} value={num}>MOIT {num}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-[#0F172A]">เอกสารประกอบ MOIT {moit}</h2>
          <button className="flex items-center gap-2 bg-[#00694E] text-white px-3 py-1.5 rounded-md hover:bg-[#005740] text-sm">
            <Plus size={16} />
            เพิ่มเอกสาร/ลิงก์
          </button>
        </div>

        <div className="space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-3 border border-[#E5E7EB] rounded-md">
              <div className="flex items-center gap-3">
                <LinkIcon size={18} className="text-[#64748B]" />
                <span className="text-[#0F172A]">{doc.title}</span>
              </div>
              <button className="text-[#C8102E] hover:bg-[#FEF2F2] p-2 rounded">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          {documents.length === 0 && (
            <div className="text-center py-8 text-[#64748B]">ยังไม่มีเอกสาร</div>
          )}
        </div>
      </div>
    </div>
  );
}
