'use client';

import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import { Printer } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

import BillInfo from '@/components/BillPage/BillInfo';
import BillTable from '@/components/BillPage/BillTable';
import { Button } from '@/components/ui/button';

export default function BillPage() {
  const printRef = useRef(null);

  const handleDownloadPdf = async () => {
    if (printRef.current === null) return;

    // html-to-image xử lý oklch/lab tốt hơn nhiều
    const dataUrl = await toPng(printRef.current, { cacheBust: true, pixelRatio: 2 });

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(dataUrl);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('file.pdf');
  };

  return (
    <>

      <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center flex-col items-center gap-4">
        {/* Action Bar - Hidden during print */}
        <Button onClick={handleDownloadPdf} className="flex gap-2 items-center">
          <Printer size={18} />
          Export/Print PDF
        </Button>
        {/* Container limits width on screen, takes full width on print */}
        <div className="max-w-3xl w-full bg-white shadow-lg p-4 sm:p-6 rounded-xl" ref={printRef}>

          <div>
            <h1 className="text-3xl font-bold text-gray-800 tracking-wider text-center">HÓA ĐƠN</h1>
          </div>
          {/* Invoice Header */}
          <div className="flex justify-between items-start my-6">
            <div className="text-left">
              <h2 className="text-2xl font-bold text-green-600 uppercase tracking-tight">NPP AW : 7027314499</h2>
              <div className="mt-2 text-gray-600 text-sm space-y-1">
                <p>Địa chỉ: TDP Ninh Khánh, phường Nếnh, Bắc Ninh</p>
                <p>Điện thoại: 0971078475</p>
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

          {/* Invoice Info */}
          <BillInfo />

          <BillTable />




        </div>
      </div>
    </>
  );
}
