import Link from 'next/link'
import React from 'react'
import { Icon } from 'ui'

const AboutNavigation = () => {
  return (
   <div className="flex justify-center gap-8 sm:gap-16 md:gap-24">
        <Link href="/about/vision" className="flex flex-col items-center lg:gap-5">
          <div className="size-[78px] rounded-full bg-[#F5F5F5] sm:size-[90px] lg:size-[112px] flex items-center justify-center"><Icon name="Vision" iconClassName='size-[34px] md:size-[36px] lg:size-[45px] xl:size-[52px]' cursor='ui-cursor-pointer' /></div>
          <p className="font-medium text-[#1B1B1B] sm:text-lg lg:text-xl">교회 비전</p>
        </Link>
        <Link href="/about/leadership" className="flex flex-col items-center lg:gap-5">
          <div className="size-[78px] rounded-full bg-[#F5F5F5] sm:size-[90px] lg:size-[112px] flex items-center justify-center"><Icon name="Leadership" iconClassName='size-[34px] md:size-[36px] lg:size-[45px] xl:size-[52px]' cursor='ui-cursor-pointer' /></div>
          <p className="font-medium text-[#1B1B1B] sm:text-lg lg:text-xl">섬기는 분들</p>
        </Link>
        <Link href="/about/services" className="flex flex-col items-center lg:gap-5">
          <div className="size-[78px] rounded-full bg-[#F5F5F5] sm:size-[90px] lg:size-[112px] flex items-center justify-center"><Icon name="Information" iconClassName='size-[34px] md:size-[36px] lg:size-[45px] xl:size-[52px]' cursor='ui-cursor-pointer' /></div>
          <p className="font-medium text-[#1B1B1B] sm:text-lg lg:text-xl">예배 정보</p>
        </Link>
      </div>
  )
}

export default AboutNavigation