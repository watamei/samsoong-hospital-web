"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Search, Filter } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  status: string;
  published_at: string;
}

export default function AdminNewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // In a real app, this would be a fetch to /api/news
    setNews([
      { id: "1", title: "ประกาศรับสมัครงาน", category: "รับสมัครงาน", status: "published", published_at: "2026-09-27" },
      { id: "2", title: "ข่าวประชาสัมพันธ์ทั่วไป", category: "ข่าวประชาสัมพันธ์", status: "published", published_at: "2026-09-26" }
    ]);
    setLoading(false);
  }, []);

  const tabs = [
    { id: "all", label: "ทั้งหมด" },
    { id: "ข่าวประชาสัมพันธ์", label: "ข่าวประชาสัมพันธ์" },
    { id: "ประกาศจัดซื้อจัดจ้าง", label: "ประกาศจัดซื้อจัดจ้าง" },
    { id: "รับสมัครงาน", label: "รับสมัครงาน" }
  ];

  const filteredNews = activeTab === "all" ? news : news.filter(n => n.category === activeTab);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[#0F172A]">จัดการข่าวสาร/ประกาศ</h1>
        <Link 
          href="/admin/news/editor"
          className="flex items-center gap-2 bg-[#00694E] text-white px-4 py-2 rounded-lg hover:bg-[#005740] transition-colors"
        >
          <Plus size={20} />
          เพิ่มข่าวใหม่
        </Link>
      </div>

      <div className="bg-white rounded-lg border border-[#E5E7EB] overflow-hidden">
        <div className="border-b border-[#E5E7EB] px-4 py-3 flex gap-4 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md whitespace-nowrap transition-colors ${activeTab === tab.id ? 'bg-[#00694E] text-white' : 'text-[#64748B] hover:bg-[#F1F5F9]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4">
          {loading ? (
            <div className="text-center py-8 text-[#64748B]">กำลังโหลดข้อมูล...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E5E7EB] text-[#64748B]">
                    <th className="py-3 px-4 font-medium">หัวข้อ</th>
                    <th className="py-3 px-4 font-medium">หมวดหมู่</th>
                    <th className="py-3 px-4 font-medium">สถานะ</th>
                    <th className="py-3 px-4 font-medium">วันที่เผยแพร่</th>
                    <th className="py-3 px-4 font-medium text-right">จัดการ</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredNews.map((item) => (
                    <tr key={item.id} className="border-b border-[#E5E7EB] hover:bg-[#F8FAFC]">
                      <td className="py-3 px-4 font-medium text-[#0F172A]">{item.title}</td>
                      <td className="py-3 px-4 text-[#475569]">{item.category}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {item.status === 'published' ? 'เผยแพร่' : 'แบบร่าง'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[#475569]">{item.published_at}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Link href={`/admin/news/editor?id=${item.id}`} className="p-2 text-[#64748B] hover:text-[#00694E] hover:bg-[#F1F5F9] rounded">
                            <Edit size={18} />
                          </Link>
                          <button className="p-2 text-[#64748B] hover:text-[#C8102E] hover:bg-[#F1F5F9] rounded">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {filteredNews.length === 0 && (
                    <tr>
                      <td colSpan={5} className="py-8 text-center text-[#64748B]">ไม่พบข้อมูล</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
