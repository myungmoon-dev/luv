import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        <div className="relative w-screen h-[calc(100vh-76px)]">
          <Image src="/images/pastor.jpg" alt="pastor" fill={true} objectFit="cover" />
        </div>
        <div className="w-[1200px] h-full absolute bg-gradient-to-r from-white z-10 top-0"></div>
        <div className="absolute top-1/2 left-[30px] text-white text-[60px] flex flex-col gap-5 z-20">
          <span>교회여!</span>
          <span>일어나 세상으로 흘러가라!</span>
        </div>
      </div>
      <div className="h-[200px]">HOME</div>
      <div className="h-[200px]">HOME</div>
      <div className="h-[200px]">HOME</div>
      <div className="h-[200px]">HOME</div>
      <div className="h-[200px]">HOME</div>
      <div className="h-[200px]">HOME</div>
    </Layout>
  );
}
