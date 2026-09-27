"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard,
  Newspaper,
  Calendar,
  Building2,
  Image as ImageIcon,
  FileText,
  Award,
  Settings,
  Users,
  History,
  LogOut,
  Database,
  Menu,
  X,
  Shield
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<{ username: string; role: string; name: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      setLoading(false);
      return;
    }

    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) {
          router.push("/admin/login");
          return;
        }
        const data = await res.json();
        if (data.must_change_password && pathname !== "/admin/change-password") {
          router.push("/admin/change-password");
          return;
        }
        setUser(data);
      } catch (error) {
        console.error("Auth check failed:", error);
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [pathname, router, isLoginPage]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">กำลังโหลด...</div>;
  }

    const menuItems = [
      { name: "แดชบอร์ด", href: "/admin", icon: LayoutDashboard },
      { name: "ข่าวสาร", href: "/admin/news", icon: Newspaper },
      { name: "ตารางแพทย์", href: "/admin/doctors", icon: Calendar },
      { name: "คลินิก", href: "/admin/clinics", icon: Building2 },
      { name: "สิทธิการรักษา", href: "/admin/coverage", icon: Shield },
      { name: "รูปภาพ", href: "/admin/images", icon: ImageIcon },
      { name: "เอกสาร", href: "/admin/documents", icon: FileText },
      { name: "ITA", href: "/admin/ita", icon: Award },
      { name: "ตั้งค่าเว็บไซต์", href: "/admin/settings", icon: Settings },
      { name: "ผู้ใช้งาน", href: "/admin/users", icon: Users },
      { name: "Audit Log", href: "/admin/audit", icon: History },
      { name: "สำรองข้อมูล", href: "/admin/backup", icon: Database },
    ];

  return (
    <div className="min-h-screen bg-[#F6F7F5] flex">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 fixed h-full z-10">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-[#00694E]">ระบบจัดการเว็บไซต์</h1>
          <p className="text-sm text-gray-500">โรงพยาบาลซำสูง</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm rounded-lg ${
                  isActive
                    ? "bg-[#00694E] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" strokeWidth={1.5} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
          >
            <LogOut className="w-5 h-5 mr-3" strokeWidth={1.5} />
            ออกจากระบบ
          </button>
        </div>
      </aside>

      {/* Mobile Header & Sidebar */}
      <div className="md:hidden fixed top-0 w-full bg-white border-b border-gray-200 z-20 px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-semibold text-[#00694E]">รพ.ซำสูง (แอดมิน)</div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-10 bg-black bg-opacity-50 pt-14">
          <div className="bg-white h-full w-64 flex flex-col">
             <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-2 text-sm rounded-lg ${
                      isActive
                        ? "bg-[#00694E] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-3" strokeWidth={1.5} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
              >
                <LogOut className="w-5 h-5 mr-3" strokeWidth={1.5} />
                ออกจากระบบ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 mt-14 md:mt-0 p-4 md:p-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {pathname !== "/admin/change-password" && (
            <div className="mb-6 flex justify-end">
              <div className="text-sm text-gray-600">
                เข้าสู่ระบบโดย: <span className="font-semibold text-gray-900">{user?.name} ({user?.role})</span>
              </div>
            </div>
          )}
          {children}
        </div>
      </main>
    </div>
  );
}
