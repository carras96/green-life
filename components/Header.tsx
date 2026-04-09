"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Leaf,
  Menu,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Giải pháp", href: "/#solutions" },
    { name: "Sản phẩm", href: "/#products" },
    { name: "Đánh giá", href: "/#testimonials" },
    { name: "Về chúng tôi", href: "/about-us" },
  ];

  return (
    <>
      {/* Top Header Label */}
      <div className="bg-slate-50 py-2 hidden sm:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3" /> Ship toàn quốc
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" /> Cam kết 100% chính hãng
            </span>
          </div>
          <div>Hỗ trợ khách hàng: 0123 456 789</div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Leaf className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              GreenLife
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-bold text-slate-500 uppercase tracking-wider">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-brand transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-6">
            <motion.a
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              href="tel:0123456789"
              className="sm:px-6 px-3 sm:py-3 py-2 bg-brand text-white rounded-lg font-bold text-sm hover:bg-brand-deep transition-all shadow-md shadow-brand/25 flex items-center gap-2 whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Tư vấn ngay</span>
            </motion.a>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <div
                  className="lg:hidden p-2 text-slate-600 hover:text-brand transition-colors cursor-pointer"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </div>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] font-be-vietnam border-l-slate-100 bg-white shadow-2xl"
              >
                <SheetHeader className="text-left pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 bg-brand rounded-lg flex items-center justify-center shadow-sm">
                      <Leaf className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-slate-900">
                      GreenLife
                    </span>
                  </div>
                  <SheetTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 pt-8">
                    Menu điều hướng
                  </SheetTitle>
                  <SheetDescription className="sr-only">
                    Menu điều hướng dành cho thiết bị di động của GreenLife.
                  </SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-2 mt-8 px-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between p-5 bg-slate-50 hover:bg-brand/5 rounded-2xl text-base font-bold text-slate-600 hover:text-brand transition-all duration-300"
                    >
                      {item.name}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand" />
                    </Link>
                  ))}

                  <div className="mt-12">
                    <a
                      href="tel:0123456789"
                      className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl group hover:bg-brand transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-90 transition-transform">
                        <Phone className="w-5 h-5 text-brand" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-white/70">
                          Hỗ trợ 24/7
                        </div>
                        <div className="text-sm font-black text-slate-900 group-hover:text-white">
                          0123 456 789
                        </div>
                      </div>
                    </a>
                  </div>
                </nav>

                <div className="absolute bottom-8 left-6 right-6">
                  <div className="p-6 bg-brand/5 rounded-2xl border border-brand/10">
                    <div className="text-[10px] font-black text-brand uppercase tracking-widest mb-2">
                      Cam kết
                    </div>
                    <div className="text-xs font-medium text-slate-500 leading-relaxed">
                      100% sản phẩm Amway Nutrilite chính hãng, có đầy đủ hóa
                      đơn chứng từ.
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
