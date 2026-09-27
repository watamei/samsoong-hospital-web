"use client";

import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";

export default function AuditPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock audit logs
    setLogs([
      { id: 1, action: "LOGIN", user: "admin", target: "System", timestamp: "2023-10-25 08:30:12", details: "Successful login" },
      { id: 2, action: "UPDATE_SETTINGS", user: "admin", target: "Settings", timestamp: "2023-10-25 09:15:00", details: "Updated contact number" },
      { id: 3, action: "CREATE_USER", user: "admin", target: "User ID 2", timestamp: "2023-10-24 14:20:05", details: "Created editor account" },
    ]);
    setLoading(false);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">ประวัติการใช้งานระบบ (Audit Log)</h1>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex gap-4 bg-gray-50">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="ค้นหาประวัติ..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-[#00694E] focus:border-[#00694E]"
            />
          </div>
          <button className="flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            ตัวกรอง
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-600">
                <th className="p-4 font-medium">วันเวลา</th>
                <th className="p-4 font-medium">ผู้ใช้งาน</th>
                <th className="p-4 font-medium">การกระทำ</th>
                <th className="p-4 font-medium">เป้าหมาย</th>
                <th className="p-4 font-medium">รายละเอียด</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr><td colSpan={5} className="p-4 text-center text-gray-500">กำลังโหลด...</td></tr>
              ) : (
                logs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50 text-sm">
                    <td className="p-4 text-gray-500 whitespace-nowrap">{log.timestamp}</td>
                    <td className="p-4 font-medium text-gray-900">{log.user}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-mono">
                        {log.action}
                      </span>
                    </td>
                    <td className="p-4 text-gray-600">{log.target}</td>
                    <td className="p-4 text-gray-600">{log.details}</td>
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
