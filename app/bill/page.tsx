'use client';

import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import { Printer } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

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
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                THÔNG TIN KHÁCH HÀNG
              </h3>
              <div className="space-y-4 text-gray-700 text-sm">
                <div className="flex items-end">
                  <span className="w-32 flex-shrink-0">Tên khách hàng:</span>
                  <div className="border-b border-dotted border-gray-400 flex-grow h-5"></div>
                </div>
                <div className="flex items-end">
                  <span className="w-32 flex-shrink-0">Số điện thoại:</span>
                  <div className="border-b border-dotted border-gray-400 flex-grow h-5"></div>
                </div>
                <div className="flex items-end">
                  <span className="w-32 flex-shrink-0">Địa chỉ:</span>
                  <div className="border-b border-dotted border-gray-400 flex-grow h-5"></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                THÔNG TIN HÓA ĐƠN
              </h3>
              <div className="space-y-4 text-gray-700 text-sm">
                <div className="flex items-end">
                  <span className="w-32 flex-shrink-0 font-medium">Số hóa đơn:</span>
                  <div className="border-b border-dotted border-gray-400 flex-grow h-5"></div>
                </div>
                <div className="flex items-end">
                  <span className="w-32 flex-shrink-0">Ngày lập:</span>
                  <div className="border-b border-dotted border-gray-400 flex-grow h-5 text-center"></div>
                </div>
                <div className="flex items-end">
                  <span className="w-32 flex-shrink-0">Phương thức TT:</span>
                  <div className="border-b border-dotted border-gray-400 flex-grow h-5 text-sm">Chuyển khoản / Tiền mặt</div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider w-12 text-center border-r border-green-500">STT</th>
                  <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider border-r text-center border-green-500">Tên hàng hóa</th>
                  <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider w-24 text-center border-r border-green-500">Số lượng</th>
                  <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider w-32 text-center border-r border-green-500">Đơn giá</th>
                  <th className="py-3 px-4 font-semibold text-xs uppercase tracking-wider w-40 text-center">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {/* Generate 10 empty rows for filling */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 text-center border-r border-gray-200 text-sm text-gray-500">{i + 1}</td>
                    <td className="py-3 px-4 border-r border-gray-200"></td>
                    <td className="py-3 px-4 border-r border-gray-200 text-center"></td>
                    <td className="py-3 px-4 border-r border-gray-200 text-right"></td>
                    <td className="py-3 px-4 text-right"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-6">

            <div className="w-2/3 space-y-3">
              <div className="flex justify-between text-sm text-gray-600">
                <span className="font-medium">Phí vận chuyển:</span>
                <span className="w-80 border-b border-dotted border-gray-400 inline-block h-5 text-right font-mono"></span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 text-md pt-3 mt-3">
                <span className="uppercase tracking-tight">Tổng thanh toán:</span>
                <div className="flex flex-col items-end">
                  <span className="w-72 border-b border-dotted border-gray-400 inline-block h-5 text-right font-mono"></span>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
