import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[도전과제] 발랑",
  description: "도전과제 발랑 사이트 입니다.",
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="relative min-h-[100vh]">{children}</body>
    </html>
  );
}
