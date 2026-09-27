"use client";

import React, { useState, useEffect } from "react";
import { Upload, Trash2, FileText, Download } from "lucide-react";

interface DocumentFile {
  id: string;
  filename: string;
  url: string;
  size: number;
  created_at: string;
}

export default function AdminDocumentsPage() {
  const [documents, setDocuments] = useState<DocumentFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    // fetch('/api/documents')...
    setDocuments([
      { id: "1", filename: "แบบฟอร์มขอประวัติการรักษา.pdf", url: "#", size: 1024000, created_at: "2026-09-27" }
    ]);
    setLoading(false);
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    // await fetch('/api/documents', { method: 'POST', body: formData });
    
    setTimeout(() => {
      setUploading(false);
    }, 1000);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[#0F172A]">คลังเอกสารดาวน์โหลด</h1>
        <div>
          <input 
            type="file" 
            id="doc-upload" 
            className="hidden" 
            accept=".pdf,.doc,.docx,.xls,.xlsx"
            onChange={handleUpload}
            disabled={uploading}
          />
          <label 
            htmlFor="doc-upload"
            className="flex items-center gap-2 bg-[#00694E] text-white px-4 py-2 rounded-lg hover:bg-[#005740] transition-colors cursor-pointer"
          >
            <Upload size={20} />
            {uploading ? "กำลังอัปโหลด..." : "อัปโหลดเอกสาร"}
          </label>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden">
        {loading ? (
          <div className="text-center py-8 text-[#64748B]">กำลังโหลดข้อมูล...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#E5E7EB] bg-gray-50 text-[#64748B]">
                  <th className="py-3 px-4 font-medium">ชื่อเอกสาร</th>
                  <th className="py-3 px-4 font-medium">ขนาด</th>
                  <th className="py-3 px-4 font-medium">วันที่อัปโหลด</th>
                  <th className="py-3 px-4 font-medium text-right">จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b border-[#E5E7EB] hover:bg-[#F8FAFC]">
                    <td className="py-3 px-4 font-medium text-[#0F172A] flex items-center gap-2">
                      <FileText size={18} className="text-[#00694E]" />
                      {doc.filename}
                    </td>
                    <td className="py-3 px-4 text-[#475569]">{formatSize(doc.size)}</td>
                    <td className="py-3 px-4 text-[#475569]">{doc.created_at}</td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-[#64748B] hover:text-[#00694E] hover:bg-[#F1F5F9] rounded" title="ดาวน์โหลด">
                          <Download size={18} />
                        </button>
                        <button className="p-2 text-[#64748B] hover:text-[#C8102E] hover:bg-[#F1F5F9] rounded" title="ลบ">
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
