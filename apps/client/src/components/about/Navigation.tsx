import Link from 'next/link'
import React from 'react'

const AboutNavigation = () => {
  return (
   <div className="flex justify-center gap-8 sm:gap-16 md:gap-24">
        <Link href="/about/vision" className="flex flex-col items-center lg:gap-5">
          <div className="size-[78px] rounded-full bg-[#F5F5F5] sm:size-[90px] lg:size-[112px]">교회 아이콘</div>
          <p className="font-medium text-[#1B1B1B] sm:text-lg lg:text-xl">교회 비전</p>
        </Link>
        <Link href="/about/leadership" className="flex flex-col items-center lg:gap-5">
          <div className="size-[78px] rounded-full bg-[#F5F5F5] sm:size-[90px] lg:size-[112px]">교회 아이콘</div>
          <p className="font-medium text-[#1B1B1B] sm:text-lg lg:text-xl">섬기는 분들</p>
        </Link>
        <Link href="/about/services" className="flex flex-col items-center lg:gap-5">
          <div className="size-[78px] rounded-full bg-[#F5F5F5] sm:size-[90px] lg:size-[112px]">교회 아이콘</div>
          <p className="font-medium text-[#1B1B1B] sm:text-lg lg:text-xl">예배 정보</p>
        </Link>
      </div>
  )
}

export default AboutNavigation