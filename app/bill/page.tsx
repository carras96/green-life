/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'
import { Printer } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import BillInfo from '@/components/BillPage/BillInfo'
import BillTable from '@/components/BillPage/BillTable'
import { Button } from '@/components/ui/button'
import { PHONE_NUMBER } from '@/constants/common'

export default function BillPage() {
  const printRef = useRef<HTMLDivElement>(null)

  // Khởi tạo một Form duy nhất cho toàn bộ Page
  const methods = useForm({
    defaultValues: {
      customerName: '',
      phoneNumber: '',
      address: '',
      invoiceNumber: '',
      invoiceDate: '',
      paymentMethod: 'Chuyển khoản',
      items: Array.from({ length: 10 }).map(() => ({
        name: '',
        quantity: '' as any,
        price: '' as any
      })),
      shippingFee: '' as any
    }
  })

  // Hydration fix: Initialize dynamic values only on the client
  useEffect(() => {
    methods.reset({
      ...methods.getValues(),
      invoiceNumber: new Date().getTime().toString(),
      invoiceDate: new Date().toISOString().split('T')[0]
    })
  }, [methods.reset])

  const handleDownloadPdf = async () => {
    if (printRef.current === null) return

    // Ép kích thước thực tế khi chụp để tránh bị vỡ/cắt trên mobile
    const dataUrl = await toPng(printRef.current, {
      cacheBust: true,
      pixelRatio: 2,
      width: 800, // Khớp với width của container
      height: printRef?.current?.offsetHeight,
      style: {
        transform: 'scale(1)', // Đảm bảo không bị dính zoom trình duyệt
        left: '0',
        top: '0'
      }
    })

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    const imgProps = pdf.getImageProperties(dataUrl)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

    pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save(
      `HoaDon-${methods.getValues('invoiceNumber') || new Date().getTime()}.pdf`
    )
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center flex-col items-center gap-4">
        {/* Action Bar - Hidden during print */}
        <Button onClick={handleDownloadPdf} className="flex gap-2 items-center">
          <Printer size={18} />
          Export/Print PDF
        </Button>

        <FormProvider {...methods}>
          <div className="w-full overflow-x-auto pb-8 flex justify-start md:justify-center">
            {/* Container chính: Ép cứng width để giữ layout PC */}
            <div
              className="w-[800px] min-w-[800px] bg-white shadow-lg p-4 sm:p-6 rounded-xl"
              ref={printRef}
            >
              <div>
                <h1 className="text-3xl font-bold text-gray-800 tracking-wider text-center">
                  HÓA ĐƠN
                </h1>
              </div>
              {/* Invoice Header */}
              <div className="flex justify-between items-start my-6">
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-green-600 uppercase tracking-tight">
                    NPP AW : 7027314499
                  </h2>
                  <div className="mt-2 text-gray-600 text-sm space-y-1">
                    <p>Địa chỉ: TDP Ninh Khánh, phường Nếnh, Bắc Ninh</p>
                    <p>Điện thoại: {PHONE_NUMBER}</p>
                  </div>
                </div>
                <Image
                  src="/qrcode.png"
                  alt="QR Code"
                  width={120}
                  height={120}
                  className="object-contain border border-gray-100 p-1"
                />
              </div>

              <BillInfo />

              <div className="w-full overflow-x-auto overflow-y-hidden">
                <div className="min-w-[700px]">
                  {' '}
                  {/* Ép bảng luôn rộng ít nhất 700px */}
                  <BillTable />
                </div>
              </div>
            </div>
          </div>
        </FormProvider>
      </div>
    </>
  )
}
