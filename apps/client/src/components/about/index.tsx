import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col gap-14 px-6 pb-32 pt-8">
      <div className="flex justify-center gap-8">
        <Link href="/about/vision" className="flex flex-col items-center">
          <div className="size-[78px] rounded-full bg-[#F5F5F5]">교회 아이콘</div>
          <p className="font-medium text-[#1B1B1B]">교회 비전</p>
        </Link>
        <Link href="/about/leadership" className="flex flex-col items-center">
          <div className="size-[78px] rounded-full bg-[#F5F5F5]">교회 아이콘</div>
          <p className="font-medium text-[#1B1B1B]">섬기는 분들</p>
        </Link>
        <Link href="/about/services" className="flex flex-col items-center">
          <div className="size-[78px] rounded-full bg-[#F5F5F5]">교회 아이콘</div>
          <p className="font-medium text-[#1B1B1B]">예배 정보</p>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold text-[#222222]">
          명문교회에
          <br />
          오신 것을 환영합니다.
        </p>
        <p className="font-medium leading-7 text-[#222222]">
          지역과 민족을 품고
          <br />
          세계와 열방을 향해 나아가는 명문교회입니다.
        </p>
      </div>
    </div>
  );
};

export default About;
