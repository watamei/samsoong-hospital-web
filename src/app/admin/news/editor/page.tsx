"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminNewsEditorPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "ข่าวประชาสัมพันธ์",
    content: "",
    excerpt: "",
    status: "draft",
    published_at: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      // Fetch existing data
      // fetch(`/api/news/${id}`).then(res => res.json()).then(data => setFormData(data));
      setFormData(prev => ({ ...prev, title: "ตัวอย่างข่าว" })); // Mock
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // await fetch('/api/news', { method: id ? 'PUT' : 'POST', body: JSON.stringify(formData) });
    setTimeout(() => {
      setLoading(false);
      router.push("/admin/news");
    }, 1000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/news" className="p-2 hover:bg-[#E2E8F0] rounded-full text-[#475569]">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-semibold text-[#0F172A]">
          {id ? "แก้ไขข่าวสาร" : "เพิ่มข่าวสารใหม่"}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-[#E5E7EB] p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#475569]">หัวข้อ (Title) *</label>
            <input 
              required
              type="text" 
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#475569]">Slug (URL) *</label>
            <input 
              required
              type="text" 
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#475569]">หมวดหมู่ *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            >
              <option value="ข่าวประชาสัมพันธ์">ข่าวประชาสัมพันธ์</option>
              <option value="ประกาศจัดซื้อจัดจ้าง">ประกาศจัดซื้อจัดจ้าง</option>
              <option value="รับสมัครงาน">รับสมัครงาน</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#475569]">สถานะ *</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            >
              <option value="draft">แบบร่าง (Draft)</option>
              <option value="published">เผยแพร่ (Published)</option>
              <option value="hidden">ซ่อน (Hidden)</option>
            </select>
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-[#475569]">วันที่เผยแพร่</label>
            <input 
              type="date" 
              name="published_at"
              value={formData.published_at}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-[#475569]">เนื้อหาย่อ (Excerpt)</label>
            <textarea 
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-[#475569]">เนื้อหา (Content) *</label>
            <textarea 
              required
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={10}
              className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00694E]"
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button 
            type="submit" 
            disabled={loading}
            className="flex items-center gap-2 bg-[#00694E] text-white px-6 py-2 rounded-md hover:bg-[#005740] transition-colors disabled:opacity-50"
          >
            <Save size={20} />
            {loading ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
          </button>
        </div>
      </form>
    </div>
  );
}
