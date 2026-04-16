'use client'

import { Leaf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const footerSections = [
    {
      title: 'Sản phẩm',
      links: [
        { name: 'Dinh dưỡng', href: '/category/dinh-duong' },
        { name: 'Giảm cân', href: '/category/giam-can' },
        { name: 'Tim mạch', href: '/category/tim-mach' },
        { name: 'Tiêu hóa', href: '/category/tieu-hoa' }
      ]
    },
    {
      title: 'Hỗ trợ',
      links: [
        { name: 'Giao hàng', href: '/shipping' },
        { name: 'Đổi trả', href: '/returns' },
        { name: 'Chính sách', href: '/policy' },
        { name: 'Liên hệ', href: '/contact' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '/social-icon/facebook.png' },
    { name: 'Zalo', href: '#', icon: '/social-icon/zalo.png' },
    { name: 'Tiktok', href: '#', icon: '/social-icon/tiktok.png' },
    { name: 'Youtube', href: '#', icon: '/social-icon/youtube.png' }
  ]

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-4 md:pt-32 md:pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <Leaf className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              GreenLife
            </span>
          </Link>
          <p className="text-slate-400 font-medium leading-relaxed max-w-xs text-sm">
            Đơn vị tiên phong cung cấp giải pháp sống nguyên bản và sản phẩm
            Amway chính hãng tại Việt Nam.
          </p>
        </div>

        {footerSections.map((col) => (
          <div key={col.title} className="col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-10 text-slate-900">
              {col.title}
            </h4>
            <ul className="space-y-4 md:space-y-6">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-bold text-sm text-slate-400 hover:text-brand transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 lg:col-span-1">
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 md:mb-10 text-slate-900">
            Mạng xã hội
          </h4>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center transition-all border border-slate-100 overflow-hidden"
                title={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 md:mt-16 pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center md:text-left">
        <div>© 2026 GREENLIFE ACADEMY. ALL RIGHTS RESERVED.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-900 transition-colors">
            Bảo mật
          </a>
          <a href="#" className="hover:text-slate-900 transition-colors">
            Điều khoản
          </a>
        </div>
      </div>
    </footer>
  )
}
