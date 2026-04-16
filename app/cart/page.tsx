'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Breadcrumb } from '@/components/Breadcrumb'
import { useCart } from '@/context/CartContext'
import { products } from '@/lib/data'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalItems } = useCart()

  // Helper to parse price string to number
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/\./g, '').replace('₫', ''))
  }

  // Helper to format number back to price string
  const formatPrice = (price: number) => {
    return price.toLocaleString('vi-VN') + '₫'
  }

  const cartDetails = cart
    .map((item) => {
      const product = products.find((p) => p.id === parseInt(item.productId))
      return {
        ...item,
        product
      }
    })
    .filter((item) => item.product)

  const subtotal = cartDetails.reduce((sum, item) => {
    if (!item.product) return sum
    return sum + parsePrice(item.product.price) * item.quantity
  }, 0)

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-8">
          <ShoppingCart className="w-10 h-10 text-slate-300" />
        </div>
        <h1 className="text-2xl font-black text-slate-900 mb-4">
          Giỏ hàng của bạn đang trống
        </h1>
        <p className="text-slate-500 mb-10 max-w-md">
          Hãy quay lại cửa hàng để chọn cho mình những sản phẩm dinh dưỡng tốt
          nhất từ Nutrilite.
        </p>
        <Link
          href="/#products"
          className="px-10 py-4 bg-brand text-white rounded-2xl font-black shadow-lg shadow-brand/20 hover:bg-brand-deep transition-all"
        >
          Tiếp tục mua sắm
        </Link>
      </div>
    )
  }

  return (
    <div className="font-be-vietnam text-slate-900 selection:bg-brand/10 pb-24">
      {/* Breadcrumbs */}
      <section className="bg-slate-50 py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-6">
          <Breadcrumb
            items={[{ label: 'Trang chủ', href: '/' }, { label: 'Giỏ hàng' }]}
          />
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-black mb-12">
            Giỏ hàng <span className="text-slate-400">({totalItems})</span>
          </h1>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20 items-start">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cartDetails.map((item) => (
                <motion.div
                  layout
                  key={item.productId}
                  className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm"
                >
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-slate-50 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product!.image}
                      alt={item.product!.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-grow text-center sm:text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest text-brand mb-1">
                      {item.product!.tag}
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      <Link
                        href={`/product/${item.productId}`}
                        className="hover:text-brand transition-colors"
                      >
                        {item.product!.name}
                      </Link>
                    </h3>
                    <div className="text-lg font-black text-slate-400">
                      {item.product!.price}
                    </div>
                  </div>

                  <div className="flex flex-col items-center sm:items-end gap-4">
                    <div className="flex items-center bg-slate-50 rounded-xl px-4 py-2 border border-slate-100">
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity - 1)
                        }
                        className="p-1 hover:text-brand transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                        className="p-1 hover:text-brand transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.productId)}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" /> Xóa
                    </button>
                  </div>
                </motion.div>
              ))}

              <Link
                href="/#products"
                className="inline-flex items-center gap-2 text-sm font-black text-slate-400 hover:text-brand transition-colors mt-4"
              >
                <ArrowLeft className="w-4 h-4" /> Tiếp tục mua thêm
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 text-white p-6 md:p-10 rounded-[2.5rem] shadow-xl lg:sticky lg:top-24">
                <h2 className="text-xl font-black mb-8">Tổng đơn hàng</h2>

                <div className="space-y-5 mb-10 border-b border-white/10 pb-8">
                  <div className="flex justify-between items-start gap-4 text-white/60">
                    <span className="font-bold text-sm">
                      Tạm tính ({totalItems} sản phẩm)
                    </span>
                    <span className="font-black text-white text-right">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-white/60">
                    <span className="font-bold text-sm">Vận chuyển</span>
                    <span className="font-black text-brand-soft">Miễn phí</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mb-10">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                    Tổng cộng thanh toán
                  </span>
                  <span className="text-3xl md:text-4xl font-black text-brand-soft leading-none">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <button className="w-full py-5 bg-brand text-white rounded-2xl font-black text-lg shadow-lg shadow-brand/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Tiến hành thanh toán
                </button>

                <p className="text-[10px] text-white/40 text-center mt-6 font-medium">
                  Bằng việc bấm thanh toán, bạn đồng ý với các Điều khoản &
                  Chính sách của GreenLife.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
