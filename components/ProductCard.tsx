'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { formatPrice } from '@/helpers/number'
import { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
  showRating?: boolean
  showButton?: boolean
  className?: string
}

export function ProductCard({
  product,
  showRating = false,
  className = ''
}: ProductCardProps) {
  return (
    <div className={`group flex flex-col h-full ${className}`}>
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-4 bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Top Tag */}
          <div className="absolute top-6 left-6">
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-900 shadow-sm border-thin">
              {product.tag}
            </span>
          </div>

          {/* Bottom Info Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
            <div className="px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-xl text-white shadow-xl">
              <span className="text-sm font-black tracking-tight">
                {formatPrice(product.price)}
              </span>
            </div>
            {showRating && (
              <div className="px-3 py-2 bg-white/90 backdrop-blur-sm rounded-xl flex items-center gap-1.5 shadow-sm border-thin">
                <div className="flex gap-0.5">
                  {[1].map((s) => (
                    <Star key={s} className="text-yellow-400" size={12}></Star>
                  ))}
                </div>
                <span className="text-[9px] font-black text-slate-900">
                  5.0
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
      <div className="flex-grow">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-2xl font-black mb-2 text-slate-900 group-hover:text-brand transition-colors leading-snug">
            {product.name}
          </h3>
        </Link>
      </div>
    </div>
  )
}
