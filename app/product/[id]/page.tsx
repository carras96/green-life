"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  Leaf,
  Award,
  Clock,
  Droplets,
  Star,
  Plus,
  Minus,
  ShoppingCart,
} from "lucide-react";

import { products } from "@/lib/data";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.id === parseInt(id)) || products[0];

  // Related products from the same category
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="text-slate-900 font-be-vietnam selection:bg-brand/10">
      <main className="pb-24">
        {/* Breadcrumbs & Simple Nav */}
        <section className="bg-slate-50 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <Link
                href={`/category/${product.category}`}
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-brand transition-colors"
              >
                <ArrowLeft className="w-3 h-3" /> Quay lại danh mục
              </Link>
            </div>
            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <Link href="/" className="hover:text-brand transition-colors">
                Trang chủ
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link
                href={`/category/${product.category}`}
                className="hover:text-brand transition-colors"
              >
                {product.categoryName}
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-brand">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Hero */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square rounded-[3rem] overflow-hidden bg-slate-50 shadow-inner group"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover p-12 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-sm border border-slate-100">
                    {product.tag}
                  </span>
                </div>
              </motion.div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3 h-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      (24 Đánh giá)
                    </span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                    {product.name}
                  </h1>

                  <div className="text-3xl font-black text-brand mb-8">
                    {product.price}
                  </div>

                  <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                    {product.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-12">
                    <div className="flex items-center bg-slate-100 rounded-2xl px-6 py-4">
                      <button className="p-1 hover:text-brand transition-colors"><Minus className="w-4 h-4" /></button>
                      <span className="w-12 text-center font-black">1</span>
                      <button className="p-1 hover:text-brand transition-colors"><Plus className="w-4 h-4" /></button>
                    </div>
                    <button className="flex-grow px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
                      <ShoppingCart className="w-5 h-5" /> Thêm vào giỏ hàng
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-slate-100">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center">
                          {benefit.icon}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                          {benefit.title}
                        </div>
                        <div className="text-[10px] font-medium text-slate-400 leading-normal">
                          {benefit.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="py-20 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-20">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-slate-900 mb-10">
                  Thông tin <span className="text-brand">chi tiết</span>
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-600 font-medium leading-[1.8] mb-8">
                    Sản phẩm Nutrilite của Amway được sản xuất dựa trên quy trình 9 bước nghiêm ngặt từ hạt giống đến thành phẩm. Chúng tôi cam kết mang lại những giá trị dinh dưỡng tinh túy nhất từ thiên nhiên để phục vụ sức khỏe của bạn và gia đình.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <div className="w-5 h-5 bg-brand-soft rounded-full flex items-center justify-center flex-shrink-0">
                          <Plus className="w-3 h-3 text-brand" />
                        </div>
                        <span className="text-sm font-bold text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-50 self-start">
                <h3 className="text-xl font-black mb-8 text-slate-900">Cam kết chất lượng</h3>
                <div className="space-y-8">
                  {[
                    { icon: <ShieldCheck className="w-6 h-6 text-brand" />, title: "Chính hãng 100%", desc: "Bồi hoàn 200% nếu phát hiện hàng giả" },
                    { icon: <Clock className="w-6 h-6 text-brand" />, title: "Giao hàng nhanh", desc: "Ship nhanh trong 24h tại khu vực nội thành" },
                    { icon: <Droplets className="w-6 h-6 text-brand" />, title: "Đổi trả dễ dàng", desc: "Đổi trả trong vòng 7 ngày nếu lỗi sản xuất" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0">{item.icon}</div>
                      <div>
                        <div className="text-sm font-black text-slate-900 mb-1">{item.title}</div>
                        <div className="text-xs font-medium text-slate-400 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-32">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex items-center justify-between mb-20">
                <h2 className="text-3xl font-black text-slate-900">
                  Sản phẩm <span className="text-slate-400">cùng danh mục</span>
                </h2>
                <Link
                  href={`/category/${product.category}`}
                  className="text-brand font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
                >
                  Xem tất cả <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {relatedProducts.map((p, i) => (
                  <Link key={p.id} href={`/product/${p.id}`} className="group flex flex-col h-full">
                    <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-10 bg-slate-50 group-hover:bg-slate-100 transition-colors">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover p-8 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-900 border border-slate-100 shadow-sm">
                          {p.tag}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-black mb-4 text-slate-900 group-hover:text-brand transition-colors leading-snug">
                        {p.name}
                      </h3>
                      <div className="text-lg font-black text-slate-400">
                        {p.price}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
