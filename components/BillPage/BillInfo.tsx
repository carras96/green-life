"use client";

import { format } from "date-fns";
import { vi } from "date-fns/locale"; // Dùng để hiển thị tiếng Việt
import { CalendarIcon } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function BillInfo() {
    const { register, control, watch } = useFormContext();

    const invoiceNumber = watch("invoiceNumber");

    return (
        <div className="grid grid-cols-2 gap-8 mb-6 bg-white py-4">
            <div className="h-full flex flex-col">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    THÔNG TIN KHÁCH HÀNG
                </h3>
                <div className=" text-gray-700 text-sm flex justify-between flex-col flex-1">
                    <div className="flex items-center">
                        <span className="w-32 flex-shrink-0 font-medium text-gray-900">Tên khách hàng:</span>
                        <Input
                            {...register("customerName")}
                            placeholder="................................................................................"
                            className="h-8 border-0  rounded-none shadow-none focus-visible:ring-0 px-1 bg-transparent flex-grow font-medium autofill:shadow-[inset_0_0_0_1000px_#fff] autofill:text-gray-700"
                        />
                    </div>
                    <div className="flex items-center">
                        <span className="w-32 flex-shrink-0 font-medium text-gray-900">Số điện thoại:</span>
                        <Input
                            {...register("phoneNumber")}
                            placeholder="................................................................................"
                            className="h-8 border-0  rounded-none shadow-none focus-visible:ring-0 px-1 bg-transparent flex-grow font-medium autofill:shadow-[inset_0_0_0_1000px_#fff] autofill:text-gray-700"
                        />
                    </div>
                    <div className="flex items-center">
                        <span className="w-32 flex-shrink-0 font-medium text-gray-900">Địa chỉ:</span>
                        <Input
                            {...register("address")}
                            placeholder="................................................................................"
                            className="h-8 border-0  rounded-none shadow-none focus-visible:ring-0 px-1 bg-transparent flex-grow font-medium autofill:shadow-[inset_0_0_0_1000px_#fff] autofill:text-gray-700"
                        />
                    </div>
                </div>
            </div>

            {/* THÔNG TIN HÓA ĐƠN */}
            <div className="h-full flex flex-col">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    THÔNG TIN HÓA ĐƠN
                </h3>
                <div className=" text-gray-700 text-sm flex justify-between flex-col flex-1">
                    <div className="flex items-center">
                        <span className="w-32 flex-shrink-0 font-medium text-gray-900">Số hóa đơn:</span>
                        <span className="flex-shrink-0 font-medium text-gray-900 h-8">{invoiceNumber}</span>
                        {/* <Input
                            {...register("invoiceNumber")}
                            className="h-8 border-0  rounded-none shadow-none focus-visible:ring-0 px-1 bg-transparent flex-grow font-medium autofill:shadow-[inset_0_0_0_1000px_#fff] autofill:text-gray-700"
                        /> */}
                    </div>

                    {/* NGÀY LẬP - SHADCN DATE PICKER */}
                    <div className="flex items-center">
                        <span className="w-32 flex-shrink-0 font-medium text-gray-900">Ngày lập:</span>
                        <Controller
                            control={control}
                            name="invoiceDate"
                            render={({ field }) => (
                                <Popover>
                                    <PopoverTrigger className="w-full">
                                        {/* Thay Button bằng div để tránh lồng button */}
                                        <div
                                            role="button"
                                            className={cn(
                                                "w-full h-8 border-0  cursor-pointer flex items-center bg-transparent flex-grow font-medium text-sm text-gray-900",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                format(new Date(field.value), "dd/MM/yyyy")
                                            ) : (
                                                <span>Chọn ngày</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value ? new Date(field.value) : undefined}
                                            onSelect={(date) => field.onChange(date?.toISOString())}
                                            initialFocus
                                            locale={vi}
                                        />
                                    </PopoverContent>
                                </Popover>
                            )}
                        />
                    </div>

                    <div className="flex items-center text-sm">
                        <span className="w-32 flex-shrink-0 font-medium text-gray-900">Phương thức:</span>
                        <Controller
                            control={control}
                            name="paymentMethod"
                            render={({ field }) => (
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    value={field.value}
                                >
                                    <SelectTrigger className="h-8 border-0 rounded-none shadow-none focus-visible:ring-0 bg-transparent flex-grow outline-none cursor-pointer p-0 font-medium text-sm text-gray-900">
                                        <SelectValue placeholder="Chọn phương thức" />
                                    </SelectTrigger>
                                    <SelectContent className="p-2">
                                        <SelectItem value="Chuyển khoản">Chuyển khoản</SelectItem>
                                        <SelectItem value="Tiền mặt">Tiền mặt</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}