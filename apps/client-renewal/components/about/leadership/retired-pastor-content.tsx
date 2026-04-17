import Image from "next/image";

export function RetiredPastorContent() {
  return (
    <div className="pb-16 lg:pb-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 pt-2 sm:gap-8 md:gap-10">
        <div className="relative size-[120px] shrink-0 overflow-hidden rounded-full border-4 border-[#1e2a4a]/15 shadow-sm ring-2 ring-[#E6E6E6] sm:size-[160px] md:size-[200px]">
          <Image
            src="/images/leader/deok-jin.png"
            alt="이덕진 원로목사"
            fill
            className="object-cover object-[50%_18%]"
            sizes="(max-width: 768px) 160px, 200px"
            priority
          />
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="mb-1 h-[3px] w-10 bg-[#1e2a4a]" aria-hidden />
          <h1 className="text-2xl font-bold tracking-tight text-[#1e2a4a] sm:text-3xl md:text-4xl">
            이덕진 원로목사
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-[#496674] sm:text-base md:text-lg">
            대한예수교장로회(합동) GMS 명예선교사,
            <br />
            꿈을꾸는세계선교회 대표
          </p>
        </div>
      </div>
    </div>
  );
}
