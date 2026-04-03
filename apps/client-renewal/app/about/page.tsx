import Link from "next/link";

import { AboutMobileSectionNav } from "@/components/about/about-navigation";

export default function AboutPage() {
  return (
    <>
      <AboutMobileSectionNav />
      <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:py-20 lg:px-4 lg:pb-24 lg:pt-24">
        <h1 className="text-2xl font-bold text-[#1B1B1B]">교회소개</h1>
        <p className="mt-4 text-[#666]">이 페이지는 준비 중입니다.</p>
        <Link
          href="/"
          className="mt-8 inline-block font-medium text-[#001F54] underline-offset-4 hover:underline"
        >
          홈으로
        </Link>
      </div>
    </>
  );
}
