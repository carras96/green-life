"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Filter,
  LayoutGrid,
  List,
} from "lucide-react";

import { categories, products } from "@/lib/data";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const category = categories[id as keyof typeof categories] || {
    name: "Tất cả sản phẩm",
    description: "Khám phá danh mục sản phẩm chính hãng từ Nutrilite.",
    image: "/hero.png",
  };

  const displayProducts = categories[id as keyof typeof categories]
    ? products.filter((p) => p.category === id)
    : products;

  return (
    <div className="text-slate-900 font-be-vietnam selection:bg-brand/10">
      {/* Category Header */}
      <section className="bg-slate-50 pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">
            <Link href="/" className="hover:text-brand transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">Danh mục</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand">{category.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                  {category.name} <br />
                  <span className="text-brand">Nutrilite</span>
                </h1>
                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-lg">
                  {category.description}
                </p>
              </motion.div>
            </div>
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl hidden lg:block">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Listing Bar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-brand transition-colors">
              <Filter className="w-3 h-3" /> Bộ lọc
            </button>
            <div className="hidden sm:flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span>Sắp xếp:</span>
              <button className="text-slate-900">Mặc định</button>
              <button className="hover:text-brand transition-colors">
                Bán chạy
              </button>
              <button className="hover:text-brand transition-colors">
                Mới nhất
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4 border-l border-slate-100 pl-4 h-6">
            <button className="text-brand">
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button className="text-slate-300 hover:text-brand transition-colors">
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {displayProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full"
              >
                <Link href={`/product/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-10 bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-sm border-thin">
                        {product.tag}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="flex-grow">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-brand transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div
                          key={s}
                          className="w-2.5 h-2.5 bg-yellow-400 rounded-full"
                        ></div>
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-slate-400">
                      5.0
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-slate-50 pt-8 mt-4">
                  <span className="text-xl font-black text-slate-900">
                    {product.price}
                  </span>
                  <Link href={`/product/${product.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white border border-slate-200 text-slate-900 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        {displayProducts.length === 0 && (
          <div className="py-32 text-center">
            <div className="inline-flex w-20 h-20 bg-slate-50 rounded-full items-center justify-center mb-8">
              <Filter className="w-8 h-8 text-slate-200" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">
              Không tìm thấy sản phẩm
            </h3>
            <p className="text-slate-500 font-medium">
              Hiện tại chưa có sản phẩm nào trong danh mục này.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 text-brand font-black text-xs uppercase tracking-widest hover:gap-4 transition-all"
            >
              Quay lại trang chủ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
