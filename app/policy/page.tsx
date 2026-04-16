'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Eye, Lock, ShieldCheck } from 'lucide-react'

import { Breadcrumb } from '@/components/Breadcrumb'

export default function PolicyPage() {
  const policies = [
    {
      title: 'Chính sách bảo mật',
      icon: <Lock className="w-6 h-6 text-brand" />,
      content: [
        'Chúng tôi cam kết bảo vệ tuyệt đối thông tin cá nhân của khách hàng.',
        'Thông tin khách hàng chỉ được sử dụng cho mục đích giao hàng và chăm sóc khách hàng.',
        'Không chia sẻ, bán hoặc cho thuê thông tin cá nhân cho bất kỳ bên thứ ba nào.',
        'Sử dụng công nghệ mã hóa SSL để bảo vệ dữ liệu trong quá trình thanh toán.'
      ]
    },
    {
      title: 'Điều khoản sử dụng',
      icon: <ShieldCheck className="w-6 h-6 text-brand" />,
      content: [
        'Sản phẩm tại GreenLife là hàng chính hãng Amway 100%.',
        'Khách hàng cần cung cấp thông tin chính xác khi đặt hàng để đảm bảo quyền lợi.',
        'GreenLife có quyền từ chối phục vụ nếu có dấu hiệu gian lận hoặc vi phạm chính sách.',
        'Mọi tranh chấp sẽ được ưu tiên giải quyết thông qua thương lượng, hòa giải.'
      ]
    }
  ]

  return (
    <div className="bg-white font-be-vietnam min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Breadcrumb
            items={[{ label: 'Trang chủ', href: '/' }, { label: 'Chính sách' }]}
            className="mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">
              Pháp lý & Cam kết
            </span>
            <h1 className="text-4xl md:text-6xl font-black mt-6 mb-8 leading-tight">
              Chính sách <br />{' '}
              <span className="text-brand">Bảo mật & Điều khoản</span>
            </h1>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
              Sự tin tưởng của quý khách là tài sản quý giá nhất của GreenLife.
              Chúng tôi luôn minh bạch và trách nhiệm trong mọi chính sách hoạt
              động.
            </p>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {policies.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-10"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-black text-slate-900">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-start p-6 border border-slate-50 hover:border-brand/10 rounded-2xl transition-all group"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand mt-0.5 opacity-20 group-hover:opacity-100 transition-opacity" />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 p-16 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-brand font-black text-[10px] uppercase tracking-widest mb-4">
                <Eye className="w-4 h-4" /> Cam kết minh bạch
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">
                Bạn có thắc mắc về quyền lợi của mình?
              </h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">
                Đội ngũ pháp lý và hỗ trợ khách hàng của chúng tôi luôn sẵn sàng
                giải thích chi tiết các điều khoản để bạn hoàn toàn yên tâm khi
                mua sắm tại GreenLife.
              </p>
            </div>
            <button className="whitespace-nowrap px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-base hover:bg-brand transition-colors shadow-lg shadow-black/5">
              Gửi câu hỏi cho chúng tôi
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
