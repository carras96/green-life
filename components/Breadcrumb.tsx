import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      className={cn(
        "flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-black uppercase tracking-widest text-slate-400",
        className
      )}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-brand transition-colors"
                id={`breadcrumb-link-${index}`}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  isLast ? "text-brand" : "text-slate-900"
                )}
                id={`breadcrumb-text-${index}`}
              >
                {item.label}
              </span>
            )}
            {!isLast && <ChevronRight className="w-3 h-3" />}
          </div>
        );
      })}
    </nav>
  );
}
