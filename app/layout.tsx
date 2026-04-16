import './globals.css'

import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Geist, Inter } from 'next/font/google'

import { cn } from '@/lib/utils'

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' })

const beVietnam = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['vietnamese'],
  variable: '--font-be-vietnam'
})

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'GreenLife',
  description: 'Sức khỏe tối ưu từ thiên nhiên'
}

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import { Toaster } from '@/components/ui/sonner'
import { CartProvider } from '@/context/CartContext'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      className={cn(
        'h-full',
        'antialiased',
        beVietnam.variable,
        inter.variable,
        'font-sans',
        geist.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <ScrollToTop />
          <Toaster />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
