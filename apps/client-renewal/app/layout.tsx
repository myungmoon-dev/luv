import type { Metadata } from "next";
import React from "react";
import { Geist_Mono, Poppins } from "next/font/google";

import { QueryProvider } from "@/components/providers/query-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "메인 | 명문교회",
  description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
  keywords: "명문교회, 대한예수교장로회 합동, 김지혁 목사, 이덕진 목사",
  openGraph: {
    title: "메인 | 명문교회",
    description: "복음으로! 오직 성령의 능력으로! 회복을 넘어 부흥으로!",
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
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: `${poppins.style.fontFamily}, "Pretendard", sans-serif`,
        }}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
