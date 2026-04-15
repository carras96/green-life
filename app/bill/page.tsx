'use client';

import { Printer } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function BillPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center print:bg-white print:p-0">
      {/* Container limits width on screen, takes full width on print */}
      <div className="max-w-4xl w-full bg-white shadow-lg p-10 rounded-xl print:shadow-none print:p-0 print:border-none relative">

        {/* Action Bar - Hidden during print */}
        <div className="absolute top-4 right-4 flex gap-4 print:hidden">
          <Button onClick={handlePrint} className="flex gap-2 items-center">
            <Printer size={18} />
            Export/Print PDF
          </Button>
        </div>

        {/* Invoice Header */}
        <div className="flex justify-between items-start border-b-2 border-gray-200 pb-8 mb-8 mt-12 print:mt-0">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 tracking-wider">HÓA ĐƠN</h1>
            <p className="text-gray-500 mt-2">Bản thể hiện của hóa đơn điện tử</p>
          </div>
          <div className="text-right">
            <h2 className="text-2xl font-bold text-green-600">Green Life</h2>
            <div className="mt-2 text-gray-600 text-sm space-y-1">
              <p>Địa chỉ: ..............................................................</p>
              <p>Điện thoại: ...........................................................</p>
              <p>MST: .....................................................................</p>
            </div>
          </div>
        </div>

        {/* Invoice Info */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 border-b border-gray-100 pb-2">THÔNG TIN KHÁCH HÀNG</h3>
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
                <span className="w-32 flex-shrink-0">Địa chỉ cụ thể:</span>
                <div className="border-b border-dotted border-gray-400 flex-grow h-5"></div>
              </div>
              <div className="flex items-end">
                <span className="w-32 flex-shrink-0">Email:</span>
                <div className="border-b border-dotted border-gray-400 flex-grow h-5"></div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 border-b border-gray-100 pb-2">THÔNG TIN HÓA ĐƠN</h3>
            <div className="space-y-4 text-gray-700 text-sm">
              <div className="flex items-end">
                <span className="w-32 flex-shrink-0">Số hóa đơn:</span>
                <div className="border-b border-dotted border-gray-400 flex-grow h-5"></div>
              </div>
              <div className="flex items-end">
                <span className="w-32 flex-shrink-0">Ngày lập:</span>
                <div className="border-b border-dotted border-gray-400 flex-grow h-5"></div>
              </div>
              <div className="flex items-end">
                <span className="w-32 flex-shrink-0">Mã đơn hàng:</span>
                <div className="border-b border-dotted border-gray-400 flex-grow h-5"></div>
              </div>
              <div className="flex items-end">
                <span className="w-32 flex-shrink-0">Phương thức TT:</span>
                <div className="border-b border-dotted border-gray-400 flex-grow h-5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-50 text-green-900 border-y border-green-200">
                <th className="py-3 px-4 font-semibold text-sm w-12 text-center">STT</th>
                <th className="py-3 px-4 font-semibold text-sm">Tên hàng hóa, dịch vụ</th>
                <th className="py-3 px-4 font-semibold text-sm w-24 text-center">ĐVT</th>
                <th className="py-3 px-4 font-semibold text-sm w-24 text-center">Số lượng</th>
                <th className="py-3 px-4 font-semibold text-sm w-32 text-right">Đơn giá</th>
                <th className="py-3 px-4 font-semibold text-sm w-40 text-right">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {/* Generate 8 empty rows for filling */}
              {Array.from({ length: 10 }).map((_, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="py-4 px-4 text-center border-r border-gray-100 text-sm text-gray-500">{i + 1}</td>
                  <td className="py-4 px-4 border-r border-gray-100"></td>
                  <td className="py-4 px-4 border-r border-gray-100 text-center"></td>
                  <td className="py-4 px-4 border-r border-gray-100 text-center"></td>
                  <td className="py-4 px-4 border-r border-gray-100 text-right"></td>
                  <td className="py-4 px-4 text-right"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="flex justify-between mb-12">
          <div className="w-1/3 space-y-3">
            <Image
              src="/qrcode.png"
              alt="QR Code"
              width={240}
              height={240}
              className="object-contain"
            />
          </div>
          <div className="w-2/3 space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Phí vận chuyển:</span>
              <span className="w-40 border-b border-dotted border-gray-400 inline-block h-5"></span>
            </div>
            <div className="flex justify-between font-bold text-gray-800 text-lg pt-3 mt-3">
              <span>Tổng cộng thanh toán:</span>
              <span className="w-40 border-b border-dotted border-gray-400 inline-block h-6"></span>
            </div>
            <div className="mt-2 text-sm text-gray-600 italic">
              <span className="border-b border-dotted border-gray-400 inline-block w-full h-5 mt-2"></span>
            </div>
          </div>
        </div>

        {/* Signatures */}
        <div className="grid grid-cols-2 text-center text-sm pt-8">
          <div>
            <p className="font-bold text-gray-800">Người mua hàng</p>
            <p className="italic text-gray-500 mb-20">(Ký, ghi rõ họ tên)</p>
          </div>
          <div>
            <p className="font-bold text-gray-800">Người bán hàng</p>
            <p className="italic text-gray-500 mb-20">(Ký, đóng dấu, ghi rõ họ tên)</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 pt-4 border-t border-gray-100 text-center text-xs text-gray-400 italic">
          Cần kiểm tra đối chiếu khi lập, giao, nhận hóa đơn.
        </div>
      </div>
    </div>
  );
}
