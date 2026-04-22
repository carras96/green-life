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

import { BillItem } from './bill.types'

interface BillContainerProps {
  initialItems?: BillItem[]
}

export default function BillContainer({ initialItems }: BillContainerProps) {
  const printRef = useRef<HTMLDivElement>(null)

  const methods = useForm({
    defaultValues: {
      customerName: '',
      phoneNumber: '',
      address: '',
      invoiceNumber: '',
      invoiceDate: '',
      paymentMethod: 'Chuyển khoản',
      items: initialItems || Array.from({ length: 10 }).map(() => ({
        name: '',
        quantity: undefined,
        price: undefined
      })),
      shippingFee: undefined
    }
  })

  useEffect(() => {
    methods.reset({
      ...methods.getValues(),
      invoiceNumber: new Date().getTime().toString(),
      invoiceDate: new Date().toISOString().split('T')[0],
      items: initialItems || methods.getValues('items')
    })
  }, [initialItems, methods.reset])

  const handleDownloadPdf = async () => {
    if (printRef.current === null) return

    const dataUrl = await toPng(printRef.current, {
      cacheBust: true,
      pixelRatio: 2,
      width: 800,
      height: printRef?.current?.offsetHeight,
      style: {
        transform: 'scale(1)',
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
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center flex-col items-center gap-4">
      <Button onClick={handleDownloadPdf} className="flex gap-2 items-center">
        <Printer size={18} />
        Export/Print PDF
      </Button>

      <FormProvider {...methods}>
        <div className="w-full overflow-x-auto pb-8 flex justify-start md:justify-center">
          <div
            className="w-[800px] min-w-[800px] bg-white shadow-lg p-4 sm:p-6 rounded-xl"
            ref={printRef}
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-800 tracking-wider text-center">
                HÓA ĐƠN
              </h1>
            </div>
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
                <BillTable />
              </div>
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  )
}
