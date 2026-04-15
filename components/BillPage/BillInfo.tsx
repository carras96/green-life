"use client";

import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";

export default function BillInfo() {
    const { register } = useFormContext();

    return (
        <div className="grid grid-cols-2 gap-8 mb-6 bg-white p-4">
            {/* THÔNG TIN KHÁCH HÀNG */}
            <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    THÔNG TIN KHÁCH HÀNG
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-center">
                        <span className="w-32 flex-shrink-0">Tên khách hàng:</span>
                        <Input
                            {...register("customerName")}
                            className="h-8 border-0 border-b border-dotted border-gray-400 rounded-none shadow-none 
             focus-visible:ring-0 px-1 bg-transparent flex-grow font-medium
             autofill:shadow-[inset_0_0_0_1000px_#fff] autofill:text-gray-700"
                        />
                    </div>
                    <div className="flex items-center">
                        <span className="w-32 flex-shrink-0">Số điện thoại:</span>
                        <Input
                            {...register("phoneNumber")}
                            className="h-8 border-0 border-b border-dotted border-gray-400 rounded-none shadow-none 
             focus-visible:ring-0 px-1 bg-transparent flex-grow font-medium
             autofill:shadow-[inset_0_0_0_1000px_#fff] autofill:text-gray-700"
                        />
                    </div>
                    <div className="flex items-center">
                        <span className="w-32 flex-shrink-0">Địa chỉ:</span>
                        <Input
                            {...register("address")}
                            className="h-8 border-0 border-b border-dotted border-gray-400 rounded-none shadow-none 
             focus-visible:ring-0 px-1 bg-transparent flex-grow font-medium
             autofill:shadow-[inset_0_0_0_1000px_#fff] autofill:text-gray-700"
                        />
                    </div>
                </div>
            </div>

            {/* THÔNG TIN HÓA ĐƠN */}
            <div>
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    THÔNG TIN HÓA ĐƠN
                </h3>
                <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-center">
                        <span className="w-32 flex-shrink-0 font-medium text-gray-900">Số hóa đơn:</span>
                        <Input
                            {...register("invoiceNumber")}
                            className="h-8 border-0 border-b border-dotted border-gray-400 rounded-none shadow-none 
             focus-visible:ring-0 px-1 bg-transparent flex-grow font-medium
             autofill:shadow-[inset_0_0_0_1000px_#fff] autofill:text-gray-700"
                        />
                    </div>
                    <div className="flex items-center">
                        <span className="w-32 flex-shrink-0 font-medium text-gray-900">Ngày lập:</span>
                        <Input
                            type="date"
                            {...register("invoiceDate")}
                            className="h-8 border-0 border-b border-dotted border-gray-400 rounded-none shadow-none 
             focus-visible:ring-0 px-1 bg-transparent flex-grow font-medium
             autofill:shadow-[inset_0_0_0_1000px_#fff] autofill:text-gray-700"
                        />
                    </div>
                    <div className="flex items-center text-sm">
                        <span className="w-32 flex-shrink-0 font-medium text-gray-900">Phương thức:</span>
                        <select
                            {...register("paymentMethod")}
                            className="h-8 border-0 border-b border-dotted border-gray-400 rounded-none shadow-none focus-visible:ring-0 px-1 bg-transparent flex-grow outline-none cursor-pointer"
                        >
                            <option value="Chuyển khoản">Chuyển khoản</option>
                            <option value="Tiền mặt">Tiền mặt</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}