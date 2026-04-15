/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";

import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BillTable() {
    const { register, control, watch } = useForm({
        defaultValues: {
            items: Array.from({ length: 10 }).map(() => ({
                name: "",
                quantity: "" as any, // Để trống ban đầu
                price: "" as any,    // Để trống ban đầu
            })),
            shippingFee: "" as any,  // Để trống ban đầu
        },
    });

    const { fields } = useFieldArray({ control, name: "items" });
    const watchedItems = watch("items");

    // Tính tổng tiền hàng (Chỉ cộng khi có giá trị)
    const subtotal = watchedItems.reduce((acc, item) => {
        const qty = parseFloat(item.quantity) || 0;
        const price = parseFloat(item.price) || 0;
        return acc + (qty * price);
    }, 0);

    const shippingFee = parseFloat(watch("shippingFee")) || 0;
    const totalPayment = subtotal + shippingFee;

    return (
        <div className="p-4">
            <form className="space-y-4 mb-6">
                <div className="rounded-lg border border-gray-200 overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-green-600 hover:bg-green-600 border-none">
                                <TableHead className="w-12 text-center text-white border-r border-green-500 uppercase text-[10px] font-bold">STT</TableHead>
                                <TableHead className="text-center text-white border-r border-green-500 uppercase text-[10px] font-bold">Tên hàng hóa</TableHead>
                                <TableHead className="w-24 text-center text-white border-r border-green-500 uppercase text-[10px] font-bold">SL</TableHead>
                                <TableHead className="w-32 text-center text-white border-r border-green-500 uppercase text-[10px] font-bold">Đơn giá</TableHead>
                                <TableHead className="w-40 text-center text-white uppercase text-[10px] font-bold">Thành tiền</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {fields.map((field, index) => {
                                const qty = parseFloat(watchedItems[index]?.quantity) || 0;
                                const price = parseFloat(watchedItems[index]?.price) || 0;
                                const rowTotal = qty * price;

                                return (
                                    <TableRow key={field.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                                        <TableCell className="text-center border-r border-gray-200 py-1 text-xs text-gray-500">{index + 1}</TableCell>

                                        <TableCell className="border-r border-gray-200 p-0">
                                            <Input
                                                {...register(`items.${index}.name`)}
                                                className="border-none shadow-none focus-visible:ring-0 focus-visible:bg-blue-50 h-10 rounded-none bg-transparent placeholder:italic placeholder:text-gray-300"
                                            />
                                        </TableCell>

                                        {/* Số lượng - Không format nghìn nhưng để trống được */}
                                        <TableCell className="border-r border-gray-200 p-0">
                                            <Input
                                                type="number"
                                                {...register(`items.${index}.quantity`)}
                                                className="border-none shadow-none focus-visible:ring-0 focus-visible:bg-blue-50 h-10 text-center rounded-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            />
                                        </TableCell>

                                        {/* Đơn giá - Để trống ban đầu */}
                                        <TableCell className="border-r border-gray-200 p-0">
                                            <Controller
                                                control={control}
                                                name={`items.${index}.price`}
                                                render={({ field: { onChange, value, ref } }) => (
                                                    <NumericFormat
                                                        getInputRef={ref}
                                                        value={value ?? ""}
                                                        onValueChange={(values) => {
                                                            // Nếu xóa hết thì để là undefined/rỗng để ô trống
                                                            onChange(values.value === "" ? "" : values.floatValue);
                                                        }}
                                                        thousandSeparator=","
                                                        allowNegative={false}
                                                        className="flex w-full bg-transparent px-3 py-2 text-sm text-right h-10 border-none outline-none focus-visible:bg-blue-50"
                                                    />
                                                )}
                                            />
                                        </TableCell>

                                        <TableCell className="p-0 text-right pr-4 text-sm font-medium text-gray-600">
                                            {rowTotal > 0 ? rowTotal.toLocaleString() : ""}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex justify-end mt-6">
                    <div className="w-full max-w-md space-y-3">
                        {/* Phí vận chuyển - Để trống ban đầu */}
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <span className="font-medium">Phí vận chuyển:</span>
                            <div className="flex items-center border-b border-dotted border-gray-400">
                                <Controller
                                    control={control}
                                    name="shippingFee"
                                    render={({ field: { onChange, value, ref } }) => (
                                        <NumericFormat
                                            getInputRef={ref}
                                            value={value ?? ""}
                                            onValueChange={(values) => {
                                                onChange(values.value === "" ? "" : values.floatValue);
                                            }}
                                            thousandSeparator=","
                                            className="w-40 h-8 text-right bg-transparent border-none outline-none font-mono"
                                        />
                                    )}
                                />
                                <span className="ml-2 text-gray-400">đ</span>
                            </div>
                        </div>

                        <div className="flex justify-between font-bold text-gray-900 text-lg pt-3 border-t border-gray-100">
                            <span className="uppercase tracking-tight">Tổng thanh toán:</span>
                            <span className="text-green-700 font-mono">
                                {totalPayment > 0 ? totalPayment.toLocaleString() : "0"} <span className="text-sm underline">đ</span>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}