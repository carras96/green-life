"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, Truck } from "lucide-react";

export default function ShippingPage() {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-brand" />,
      title: "Giao hàng nhanh chóng",
      description:
        "Đơn hàng nội thành được giao trong vòng 24h. Các tỉnh thành khác từ 2-4 ngày làm việc.",
    },
    {
      icon: <Globe className="w-6 h-6 text-brand" />,
      title: "Ship hàng toàn quốc",
      description:
        "GreenLife hỗ trợ giao hàng tận nơi trên toàn lãnh thổ Việt Nam với chi phí tối ưu nhất.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand" />,
      title: "Đảm bảo an toàn",
      description:
        "Mọi sản phẩm đều được đóng gói kỹ lưỡng và bảo hiểm 100% giá trị trong quá trình vận chuyển.",
    },
  ];

  return (
    <div className="bg-white font-be-vietnam min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">
              Dịch vụ hỗ trợ
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-6 mb-8 text-slate-900 leading-tight">
              Chính sách <br /> <span className="text-brand">Giao hàng</span>
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
              GreenLife cam kết mang đến trải nghiệm mua sắm thuận tiện và nhanh
              chóng nhất. Chúng tôi luôn nỗ lực để sản phẩm đến tay khách hàng
              trong tình trạng hoàn hảo nhất.
            </p>
          </motion.div>
        </div>
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-soft/20 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-slate-50 hover:bg-slate-50/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black mb-4 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-black mb-8 text-slate-900">
                  Chi phí vận chuyển
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-2xl flex justify-between items-center">
                    <span className="font-bold text-slate-600">
                      Nội thành TP.HCM & Hà Nội
                    </span>
                    <span className="font-black text-brand">25.000đ</span>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl flex justify-between items-center">
                    <span className="font-bold text-slate-600">
                      Các tỉnh thành khác
                    </span>
                    <span className="font-black text-brand">
                      35.000đ - 45.000đ
                    </span>
                  </div>
                  <div className="p-6 border-2 border-brand/10 bg-brand-soft/30 rounded-2xl flex justify-between items-center">
                    <div>
                      <span className="font-black text-slate-900 block">
                        Miễn phí vận chuyển
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                        Cho đơn hàng từ 1.000.000đ
                      </span>
                    </div>
                    <span className="font-black text-brand text-xl">0đ</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-12 rounded-[2.5rem] text-white">
              <h2 className="text-3xl font-black mb-8">Lưu ý khi nhận hàng</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand flex-shrink-0 flex items-center justify-center text-[10px] font-black">
                    1
                  </div>
                  <p className="text-slate-300 font-medium text-sm leading-relaxed">
                    Kiểm tra tình trạng bao bì và niêm phong của sản phẩm ngay
                    khi nhận từ nhân viên giao hàng.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand flex-shrink-0 flex items-center justify-center text-[10px] font-black">
                    2
                  </div>
                  <p className="text-slate-300 font-medium text-sm leading-relaxed">
                    Quý khách vui lòng quay video quá trình mở hộp để được hỗ
                    trợ tốt nhất trong trường hợp có khiếu nại.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand flex-shrink-0 flex items-center justify-center text-[10px] font-black">
                    3
                  </div>
                  <p className="text-slate-300 font-medium text-sm leading-relaxed">
                    Mọi vấn đề phát sinh vui lòng liên hệ hotline{" "}
                    <span className="text-white font-black">0123 456 789</span>{" "}
                    trong vòng 24h kể từ khi nhận hàng.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
