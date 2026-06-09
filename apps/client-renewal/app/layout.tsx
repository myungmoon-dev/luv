import type { Metadata } from "next";
import React from "react";
import { Geist_Mono } from "next/font/google";

import { QueryProvider } from "@/components/providers/query-provider";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "명문교회",
  description: "LOVE BEGINS, MYUNGMOON CHURCH!",
  keywords: "명문교회, 대한예수교장로회 합동, 김지혁 목사, 이덕진 목사",
  openGraph: {
    title: "대한예수교장로회 합동 명문교회",
    description: "LOVE BEGINS, MYUNGMOON CHURCH!",
    url: "https://myungmoon.or.kr/",
    images: [{ url: "https://myungmoon.or.kr/images/LogoBlue.png" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
