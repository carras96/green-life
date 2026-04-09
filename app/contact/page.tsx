"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";

import { Breadcrumb } from "@/components/Breadcrumb";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Hotline Tư vấn",
      value: "0123 456 789",
      desc: "Hỗ trợ từ 8:00 - 21:00 hàng ngày",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Hỗ trợ",
      value: "support@greenlife.vn",
      desc: "Chúng tôi phản hồi trong vòng 24h",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Zalo OA",
      value: "GreenLife Academy",
      desc: "Nhắn tin trực tiếp để được tư vấn",
      color: "bg-brand-soft text-brand"
    }
  ];

  return (
    <div className="bg-white font-be-vietnam min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Liên hệ" }
            ]}
            className="mb-8"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
              Kết nối với chúng tôi
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-10 text-white leading-tight">
              Chúng tôi luôn <br /> <span className="text-brand">lắng nghe bạn</span>
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
              Mọi ý kiến đóng góp hoặc thắc mắc của quý khách là động lực để GreenLife hoàn thiện hơn mỗi ngày.
              Hãy để lại lời nhắn, chúng tôi sẽ phản hồi sớm nhất có thể.
            </p>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex gap-6 items-center">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{info.title}</h3>
                      <div className="text-xl font-black text-slate-900 mb-1">{info.value}</div>
                      <p className="text-sm font-medium text-slate-400">{info.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="mt-12 p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-brand font-black text-[10px] uppercase tracking-widest mb-6">
                    <MapPin className="w-4 h-4" /> Trụ sở chính
                  </div>
                  <h4 className="text-xl font-black mb-4">GreenLife Academy</h4>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8">
                    Tầng 10, Tòa nhà Vincom Center, <br />
                    72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, <br />
                    Thành phố Hồ Chí Minh, Việt Nam.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-white font-black text-[10px] uppercase tracking-widest hover:text-brand transition-colors">
                    Xem bản đồ <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50"
              >
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Họ và tên</label>
                      <input
                        type="text"
                        placeholder="Nguyễn Văn A"
                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand font-medium transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Số điện thoại</label>
                      <input
                        type="tel"
                        placeholder="0123456789"
                        className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand font-medium transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Email</label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand font-medium transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Lời nhắn</label>
                    <textarea
                      rows={5}
                      placeholder="Bạn cần chúng tôi hỗ trợ gì?"
                      className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-brand font-medium transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full py-6 bg-brand text-white rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-brand-deep transition-all shadow-xl shadow-brand/20">
                    Gửi tin nhắn <Send className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
