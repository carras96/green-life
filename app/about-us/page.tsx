'use client'

import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, Target, Users } from 'lucide-react'
import Image from 'next/image'

import { Breadcrumb } from '@/components/Breadcrumb'

export default function AboutUsPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-brand" />,
      title: 'Sứ mệnh',
      description:
        'Nâng tầm chất lượng cuộc sống người Việt thông qua giải pháp dinh dưỡng thuần khiết và khoa học.'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Cộng đồng',
      description:
        'Xây dựng hệ sinh thái sống khỏe, nơi mọi người chia sẻ và truyền cảm hứng về lối sống lành mạnh.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      title: 'Chất lượng',
      description:
        'Cam kết 100% sản phẩm chính hãng Nutrilite - Thương hiệu thực phẩm bổ sung bán chạy số 1 thế giới.'
    }
  ]

  return (
    <div className="bg-white font-be-vietnam min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 items-center">
          <Breadcrumb
            items={[
              { label: 'Trang chủ', href: '/' },
              { label: 'Về chúng tôi' }
            ]}
            className="mb-8"
          />
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft border border-brand/10 text-brand text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                <Leaf className="w-3 h-3" /> Câu chuyện thương hiệu
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                Khởi nguồn từ <br />
                <span className="text-brand">Lối sống xanh</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-medium">
                GreenLife ra đời với tâm thế của những người trẻ khao khát mang
                lại giá trị thực cho sức khỏe cộng đồng. Chúng tôi tin rằng, mỗi
                cá nhân đều xứng đáng có một cơ thể tràn đầy năng lượng và tinh
                thần minh mẫn.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-slate-50 rounded-[4rem] rotate-3"></div>
              <div className="absolute inset-4 rounded-[3.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/about/hero.png"
                  alt="GreenLife Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">
              Triết lý vận hành
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-6 mb-8 text-slate-900 leading-tight">
              Chúng tôi không chỉ bán sản phẩm, <br />
              <span className="text-slate-400">chúng tôi trao giải pháp.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900">
                  {value.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="aspect-[4/5] rounded-3xl bg-slate-100 overflow-hidden relative border-thin">
                    <Image
                      src="/about/farm.png"
                      alt="Organic Farm"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-3xl bg-slate-100 overflow-hidden relative border-thin">
                    <Image
                      src="/about/lab.png"
                      alt="Science Lab"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-[4/5] rounded-3xl bg-slate-100 overflow-hidden relative border-thin">
                    <Image
                      src="/about/product.png"
                      alt="Product Vision"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-3xl bg-slate-100 overflow-hidden relative border-thin">
                    <Image
                      src="/about/community.png"
                      alt="Community"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px]">
                Tầm nhìn 2030
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-6 mb-10 text-slate-900">
                Người bạn đồng hành tin cậy nhất
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: 'Nền tảng khoa học',
                    desc: 'Mọi lời khuyên của chúng tôi đều dựa trên các nghiên cứu khoa học từ đội ngũ Nutrilite Global.'
                  },
                  {
                    title: 'Cá nhân hóa lộ trình',
                    desc: 'Mỗi cơ thể là duy nhất. Chúng tôi thiết kế lộ trình dinh dưỡng riêng biệt cho từng khách hàng.'
                  },
                  {
                    title: 'Sự minh bạch tuyệt đối',
                    desc: 'Từ trang trại hữu cơ đến tận tay người dùng, mọi quy trình đều có thể truy xuất nguồn gốc.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-6 h-6 rounded-full bg-brand-soft flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brand"></div>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 font-medium text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with brand secondary color */}
      <section className=" mx-6 mb-32 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center py-24 bg-brand rounded-[4rem]">
          <div>
            <div className="text-5xl font-black mb-2">5+</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
              Năm kinh nghiệm
            </div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">10k+</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
              Khách hàng
            </div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">50+</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
              Chuyên gia đồng hành
            </div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2">100%</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-white/60">
              Chính hãng Nutrilite
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
