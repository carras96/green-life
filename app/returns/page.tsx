"use client";

import { motion } from "framer-motion";
import { Clock, FileCheck, RefreshCcw, ShieldCheck } from "lucide-react";

import { Breadcrumb } from "@/components/Breadcrumb";

export default function ReturnsPage() {
  const steps = [
    {
      icon: <Clock className="w-6 h-6 text-brand" />,
      title: "Thời hạn đổi trả",
      description:
        "Hỗ trợ đổi trả sản phẩm trong vòng 30 ngày kể từ ngày nhận hàng nếu có lỗi từ nhà sản xuất.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand" />,
      title: "Điều kiện sản phẩm",
      description:
        "Sản phẩm còn nguyên vẹn, chưa qua sử dụng, còn đầy đủ tem mác và hóa đơn mua hàng.",
    },
    {
      icon: <FileCheck className="w-6 h-6 text-brand" />,
      title: "Quy trình xử lý",
      description:
        "Tiếp nhận và phản hồi yêu cầu trong vòng 24-48 giờ làm việc sau khi nhận được thông tin.",
    },
  ];

  return (
    <div className="bg-white font-be-vietnam min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Đổi trả" }
            ]}
            className="mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">
              Dịch vụ hỗ trợ
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-6 mb-8 text-slate-900 leading-tight">
              Chính sách <br /> <span className="text-brand">Đổi trả</span>
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
              GreenLife luôn đặt quyền lợi của khách hàng lên hàng đầu. Nếu có
              bất kỳ vấn đề gì về chất lượng sản phẩm, chúng tôi sẵn sàng hỗ trợ
              bạn đổi trả một cách nhanh chóng nhất.
            </p>
          </motion.div>
        </div>
        {/* Soft decorative elements */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-slate-50 hover:bg-slate-50/50 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-slate-100">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black mb-4 text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-center text-slate-900">
              Chi tiết quy trình đổi trả
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Bước 1: Liên hệ hỗ trợ",
                  content:
                    "Gửi yêu cầu đổi trả qua Zalo: 0123 456 789 hoặc email support@greenlife.vn kèm theo hình ảnh/video sản phẩm và mã đơn hàng.",
                },
                {
                  title: "Bước 2: Xác nhận yêu cầu",
                  content:
                    "Đội ngũ CSKH sẽ kiểm tra và xác nhận yêu cầu đổi trả của quý khách trong vòng 24 giờ làm việc.",
                },
                {
                  title: "Bước 3: Gửi trả hàng",
                  content:
                    "Sau khi yêu cầu được chấp nhận, quý khách đóng gói sản phẩm cẩn thận và gửi về địa chỉ kho của GreenLife.",
                },
                {
                  title: "Bước 4: Nhận sản phẩm mới hoặc hoàn tiền",
                  content:
                    "Sau khi nhận và kiểm tra hàng trả lại, chúng tôi sẽ tiến hành gửi sản phẩm thay thế hoặc hoàn tiền theo thỏa thuận.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-100"
                >
                  <h4 className="font-extrabold text-slate-900 mb-2 uppercase tracking-tight text-sm">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 p-12 bg-brand rounded-[3rem] text-white text-center">
              <RefreshCcw className="w-12 h-12 mx-auto mb-8 opacity-50" />
              <h3 className="text-3xl font-black mb-6">Bạn cần hỗ trợ thêm?</h3>
              <p className="text-white/80 font-medium mb-10 text-lg">
                Đừng ngần ngại liên hệ trực tiếp với chúng tôi để được giải đáp
                mọi thắc mắc về chính sách đổi trả.
              </p>
              <button className="px-10 py-5 bg-white text-brand rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-black/5">
                Gọi 0123 456 789
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
