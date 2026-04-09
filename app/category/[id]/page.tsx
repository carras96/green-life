"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Filter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
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
      <section className="bg-slate-50 pt-8 md:pt-12 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Danh mục" },
              { label: category.name }
            ]}
            className="mb-8"
          />


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

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} showRating={true} />
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
