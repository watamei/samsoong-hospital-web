"use client";

import { useState, useEffect } from "react";
import { Plus, Edit2, Trash2, Search } from "lucide-react";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock user fetch
    setUsers([
      { id: 1, username: "admin", name: "ผู้ดูแลระบบ", role: "admin", created_at: "2023-01-01" },
      { id: 2, username: "staff1", name: "เจ้าหน้าที่ประชาสัมพันธ์", role: "editor", created_at: "2023-01-15" },
    ]);
    setLoading(false);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">จัดการผู้ใช้งาน</h1>
        <button className="flex items-center px-4 py-2 bg-[#00694E] text-white rounded-lg hover:bg-[#005741]">
          <Plus className="w-4 h-4 mr-2" />
          เพิ่มผู้ใช้
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="ค้นหาผู้ใช้งาน..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-[#00694E] focus:border-[#00694E]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-600">
                <th className="p-4 font-medium">ชื่อผู้ใช้งาน</th>
                <th className="p-4 font-medium">ชื่อ-สกุล</th>
                <th className="p-4 font-medium">สิทธิ์การใช้งาน</th>
                <th className="p-4 font-medium">วันที่สร้าง</th>
                <th className="p-4 font-medium text-right">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan={5} className="p-4 text-center text-gray-500">กำลังโหลด...</td></tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="p-4 text-sm text-gray-900">{user.username}</td>
                    <td className="p-4 text-sm text-gray-900">{user.name}</td>
                    <td className="p-4 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {user.role === 'admin' ? 'ผู้ดูแลระบบ' : 'ผู้แก้ไข'}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-500">{user.created_at}</td>
                    <td className="p-4 text-right">
                      <button className="text-gray-500 hover:text-[#00694E] p-1 mr-2">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-500 hover:text-red-600 p-1">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
