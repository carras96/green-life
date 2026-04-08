import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const beVietnam = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["vietnamese"],
  variable: "--font-be-vietnam",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GreenLife",
  description: "Sức khỏe tối ưu từ thiên nhiên",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={cn("h-full", "antialiased", beVietnam.variable, inter.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
