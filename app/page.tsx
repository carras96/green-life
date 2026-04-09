"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Award,
  Heart,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { products } from "@/lib/data";

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  return (
    <div className="text-slate-900 font-be-vietnam selection:bg-brand/10">
      {/* Minimalist Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft border border-brand/10 text-brand text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                <ShieldCheck className="w-3 h-3" />
                Phân phối Amway chính hãng 100%
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 text-balance">
                Sức khỏe tối ưu <br />
                <span className="text-brand">từ thiên nhiên</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-medium max-w-xl">
                Đồng hành cùng GreenLife để tái tạo năng lượng sống từ những
                giải pháp dinh dưỡng hàng đầu thế giới của Nutrilite.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#products"
                  className="px-10 py-5 bg-slate-900 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
                >
                  Khám phá ngay <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="#solutions"
                  className="px-10 py-5 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all"
                >
                  Tìm hiểu giải pháp
                </motion.a>
              </div>

              <div className="mt-16 flex items-center gap-12 border-t border-slate-50 pt-12">
                <div>
                  <div className="text-3xl font-black text-slate-900">
                    10k+
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest pt-1">
                    Khách hàng tin tưởng
                  </div>
                </div>
                <div className="w-px h-10 bg-slate-100"></div>
                <div>
                  <div className="text-3xl font-black text-slate-900">
                    99%
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest pt-1">
                    Mức độ hài lòng
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-slate-50 rounded-[4rem] -rotate-3 transition-transform hover:rotate-0 duration-700"></div>
            <div className="absolute inset-4 rounded-[3.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/hero-premium.png"
                alt="Premium Supplements"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -right-8 p-8 bg-white rounded-3xl shadow-2xl border-thin hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                  <Zap className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Năng lượng
                  </div>
                  <div className="text-lg font-black text-slate-900">
                    +45% Mỗi ngày
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Features Section */}
      <section id="solutions" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">
                Giải pháp sức khỏe
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-6 mb-8 text-slate-900 leading-tight">
                Chúng tôi chú trọng vào <br />{" "}
                <span className="text-slate-400">chất lượng cuộc sống</span>
              </h2>
            </div>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md pb-2">
              GreenLife không chỉ bán sản phẩm, chúng tôi cung cấp lộ trình
              sống lành mạnh được cá nhân hóa bởi các chuyên gia dinh dưỡng.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Activity className="w-6 h-6 text-orange-500" />,
                title: "Sức đề kháng",
                desc: "Tăng cường hệ miễn dịch tự nhiên chống lại các tác nhân gây bệnh từ môi trường.",
              },
              {
                icon: <Heart className="w-6 h-6 text-red-500" />,
                title: "Tim mạch",
                desc: "Giải pháp hỗ trợ tim mạch và huyết áp tối ưu từ nguồn gốc thực vật tinh khiết.",
              },
              {
                icon: <Activity className="w-6 h-6 text-blue-500" />,
                title: "Cân nặng",
                desc: "Chế độ dinh dưỡng thông minh giúp bạn duy trì vóc dáng lý tưởng và năng lượng.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl border border-slate-50 hover:border-slate-100 hover:bg-slate-50/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8 text-sm">
                  {item.desc}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest hover:text-brand transition-colors"
                >
                  Tìm hiểu thêm <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="products" className="py-32 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 gap-8 border-b border-slate-100 pb-12">
            <div className="max-w-2xl">
              <span className="text-slate-400 font-black tracking-widest uppercase text-[10px]">
                Danh mục sản phẩm
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 text-slate-900">
                Dòng sản phẩm <span className="text-brand">chủ lực</span>
              </h2>
            </div>
            <Link href="/category/all" className="text-slate-900 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-4 hover:gap-6 transition-all">
              Xem tất cả sản phẩm <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group flex flex-col h-full">
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
                    <h3 className="text-2xl font-black mb-4 text-slate-900 group-hover:text-brand transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                </div>
                <div className="flex items-center justify-between border-t border-slate-50 pt-8 mt-4">
                  <span className="text-xl font-black text-slate-400">
                    {product.price}
                  </span>
                  <Link href={`/product/${product.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white border border-slate-200 text-slate-900 rounded-full flex items-center justify-center shadow-sm group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">
              Đánh giá từ khách hàng
            </span>
            <h2 className="text-4xl md:text-6xl font-black mt-6 mb-12 text-slate-900">
              Sự tin tưởng lựa chọn
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10 opacity-30 grayscale saturate-0">
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest">
                <Award className="w-4 h-4" /> ISO Certified
              </div>
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" /> Nutrilite Global
              </div>
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest">
                <Star className="w-4 h-4" /> 5-Star Reviews
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Chị Minh Thư",
                role: "Nhân viên văn phòng",
                comment:
                  "Cơ thể dẻo dai hơn hẳn từ khi dùng Protein của Nutrilite. Giờ đây tôi không còn cảm thấy mệt mỏi vào cuối ngày làm việc nữa.",
              },
              {
                name: "Anh Hoàng Nam",
                role: "Huấn luyện viên",
                comment:
                  "Sản phẩm Amway tại GreenLife luôn đảm bảo chính hãng. Đây là lựa chọn hàng đầu của tôi khi giới thiệu cho học viên mình.",
              },
              {
                name: "Cô Ngọc Lan",
                role: "Nội trợ",
                comment:
                  "Bio C Plus giúp gia đình tôi tăng cường sức đề kháng rõ rệt qua mùa dịch. Đội ngũ GreenLife tư vấn rất chu đáo.",
              },
            ].map((feedback, index) => (
              <div
                key={index}
                className="p-10 rounded-3xl border border-slate-50 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 text-yellow-500 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg font-medium leading-relaxed mb-10 text-slate-600">
                  &quot;{feedback.comment}&quot;
                </p>
                <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-400">
                    {feedback.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-slate-900">
                      {feedback.name}
                    </h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mt-1">
                      {feedback.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-brand rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">
              Bắt đầu hành trình <br />{" "}
              <span className="text-white/90">sống khỏe</span> hôm nay
            </h2>
            <p className="text-white/70 text-lg font-medium mb-16 max-w-xl mx-auto">
              Liên hệ ngay với GreenLife để được tư vấn lộ trình chăm sóc sức
              khỏe toàn diện từ chuyên gia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-12 py-6 bg-white text-brand rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl shadow-black/5">
                Nhận tư vấn miễn phí
              </button>
              <button className="w-full sm:w-auto px-12 py-6 border border-white/40 rounded-2xl font-black text-xl hover:bg-white/10 transition-colors">
                Chat qua Zalo
              </button>
            </div>
          </div>
          {/* Soft decorative bubbles */}
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
