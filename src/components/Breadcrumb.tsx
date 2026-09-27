import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="เส้นทาง" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-slate-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-[#00694E] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-900 font-medium">{item.label}</span>
              )}
              {!isLast && <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
