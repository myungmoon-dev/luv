import SectionHeader from "@/components/index/section-header";
import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="">
        {/* 1 section */}
        <div className="h-[94vh] bg-gray-200 flex items-center justify-center relative">
          <div className="relative w-full h-full">
            {/* 대표 이미지 */}
            <Image
              src="/images/pastor_edit.jpeg"
              className="object-cover w-full h-full"
              layout="fill"
              objectFit="cover"
              alt="pastor"
            />
            <div className="absolute top-1/2 left-[5%] text-black flex flex-col gap-1 lg:gap-3 z-20">
              {/* 설교 날짜 및 설교본문 */}
              <div className="flex gap-3 xl:gap-5 font-light text-2xl xl:text-4xl">
                <span>2023. 12. 14</span>
                <span> | </span>
                <span>이사야 9장 6-7절</span>
              </div>
              {/* 설교제목 */}
              <h1 className="font-bold text-4xl xl:text-6xl">놀라운 그 이름</h1>
            </div>
            {/* 유튜브 로고 */}
            <div className="z-[1] w-14 h-10 right-10 xl:right-26 bottom-10 absolute flex justify-center bg-[#ff4242] p-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6 fill-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </div>
            {/* 그라데이션 div */}
            {/* <div
              className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent"
              style={{ width: "35%", opacity: 1 }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent"
              style={{ width: "45%", opacity: 0.7 }}
            /> */}
          </div>
        </div>

        {/* 2,3 sections */}
        <div className="grid grid-rows-2 sm:p-10 md:p-16 gap-10">
          {/* 2 section */}
          <div className="h-[screen] flex flex-col justify-start items-center gap-10 xl:gap-20">
            {/* header 표어 */}
            <SectionHeader text="2024 명문 표어" />
            {/* title 표어 */}
            <h2 className="font-HSBombram3 text-center text-2xl xl:text-3xl">"교회여! 일어나 세상으로 흘러가라!"</h2>
            {/* contents 표어 */}
            <div className="grid grid-cols-4 gap-10 xl:gap-20 w-full h-[150px] xl:h-[250px] px-10 xl:px-32">
              <div className="flex flex-col justify-center gap-3 xl:gap-7">
                <div className="h-[90px] xl:h-[200px] relative bg-gray-200 p-4 rounded-xl overflow-clip">
                  <Image src="/images/balance.jpg" layout="fill" objectFit="cover" alt="balance" />
                </div>
                <span className="text-center text-sm xl:text-lg text-gray-700">
                  말씀과 성령이 <br />
                  균형잡힌 건강한 교회
                </span>
              </div>
              <div className="flex flex-col justify-center gap-3 xl:gap-7">
                <div className="h-[90px] xl:h-[200px] relative bg-gray-200 p-4 rounded-xl overflow-clip">
                  <Image src="/images/world.jpg" layout="fill" objectFit="cover" alt="world" />
                </div>
                <span className="text-center text-sm xl:text-lg text-gray-700">
                  민족과 세계로 <br />
                  복음을 전파하는 교회
                </span>
              </div>
              <div className="flex flex-col justify-center gap-3 xl:gap-7">
                <div className="h-[90px] xl:h-[200px] relative bg-gray-200 p-4 rounded-xl overflow-clip">
                  <Image src="/images/some.jpg" layout="fill" objectFit="cover" alt="some" />
                </div>
                <span className="text-center text-sm xl:text-lg text-gray-700">
                  지역사회와 이웃을 <br />
                  섬기는 교회
                </span>
              </div>
              <div className="flex flex-col justify-center gap-3 xl:gap-7">
                <div className="h-[90px] xl:h-[200px] relative bg-gray-200 p-4 rounded-xl overflow-clip">
                  <Image src="/images/next-leader.jpg" layout="fill" objectFit="cover" alt="next-leader" />
                </div>
                <span className="text-center text-sm xl:text-lg text-gray-700">
                  다음 세대를 탁월한 <br />
                  리더로 세우는 교회
                </span>
              </div>
            </div>
            {/* -- line -- */}
            <div className="w-full h-[10px] bg-[#dfc7c7] rounded-lg" />
            {/* nav-icons */}
            <div className="w-full grid md:grid-cols-8 grid-cols-4 justify-items-center gap-2">
              {/* 1. nav-icon */}
              <div className="flex flex-col justify-center items-center gap-3">
                {/* 1. icon */}
                <div className="w-16 md:w-20 h-16 md:h-20 flex justify-center items-center bg-[#dfc7c7] p-2 rounded-xl shadow-lg">
                  <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">교회소개</span>
              </div>
              {/* 1. nav-icon */}
              <div className="flex flex-col justify-center items-center gap-3">
                {/* 1. icon */}
                <div className="w-16 md:w-20 h-16 md:h-20 flex justify-center items-center bg-[#dfc7c7] p-2 rounded-xl shadow-lg">
                  <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">교회소개</span>
              </div>
              {/* 1. nav-icon */}
              <div className="flex flex-col justify-center items-center gap-3">
                {/* 1. icon */}
                <div className="w-16 md:w-20 h-16 md:h-20 flex justify-center items-center bg-[#dfc7c7] p-2 rounded-xl shadow-lg">
                  <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">교회소개</span>
              </div>
              {/* 1. nav-icon */}
              <div className="flex flex-col justify-center items-center gap-3">
                {/* 1. icon */}
                <div className="w-16 md:w-20 h-16 md:h-20 flex justify-center items-center bg-[#dfc7c7] p-2 rounded-xl shadow-lg">
                  <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">교회소개</span>
              </div>
              {/* 1. nav-icon */}
              <div className="flex flex-col justify-center items-center gap-3">
                {/* 1. icon */}
                <div className="w-16 md:w-20 h-16 md:h-20 flex justify-center items-center bg-[#dfc7c7] p-2 rounded-xl shadow-lg">
                  <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">교회소개</span>
              </div>
              {/* 1. nav-icon */}
              <div className="flex flex-col justify-center items-center gap-3">
                {/* 1. icon */}
                <div className="w-16 md:w-20 h-16 md:h-20 flex justify-center items-center bg-[#dfc7c7] p-2 rounded-xl shadow-lg">
                  <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">교회소개</span>
              </div>
              {/* 1. nav-icon */}
              <div className="flex flex-col justify-center items-center gap-3">
                {/* 1. icon */}
                <div className="w-16 md:w-20 h-16 md:h-20 flex justify-center items-center bg-[#dfc7c7] p-2 rounded-xl shadow-lg">
                  <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">교회소개</span>
              </div>
              {/* 1. nav-icon */}
              <div className="flex flex-col justify-center items-center gap-3">
                {/* 1. icon */}
                <div className="w-16 md:w-20 h-16 md:h-20 flex justify-center items-center bg-[#dfc7c7] p-2 rounded-xl shadow-lg">
                  <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
                  </svg>
                </div>
                <span className="text-gray-500 text-sm">교회소개</span>
              </div>
            </div>

            {/* header 주보 */}
            <SectionHeader text="주보" />
            {/* contents 주보 */}
            <div className="h-full grid grid-cols-4 gap-10 justify-items-center mb-10">
              <div className="w-36 h-36 bg-[#dfc7c7] rounded-3xl rounded-b-none" />
              <div className="w-36 h-36 bg-[#dfc7c7] rounded-3xl rounded-b-none" />
              <div className="w-36 h-36 bg-[#dfc7c7] rounded-3xl rounded-b-none" />
              <div className="w-36 h-36 bg-[#dfc7c7] rounded-3xl rounded-b-none" />
            </div>
          </div>
          {/* 3 section */}
          <div className="h-[screen] flex flex-col gap-10 2xl:gap-20">
            {/* header 오시는 길 */}
            <SectionHeader text="오시는 길" />
            {/* contents 오시는 길 */}
            <div className="grid grid-cols-2 gap-3 w-full h-1/2 mb-10">
              {/* 1. 독산동 비전채플 */}
              <div className="flex flex-col gap-5 justify-center items-center">
                {/* title */}
                <div className="px-8 py-3 bg-[#dfc7c7] rounded-[3.5rem] shadow-md">
                  <h3 className="font-bold text-md text-gray-800">독산동 비전채플(평일)</h3>
                </div>
                {/* 상세주소 */}
                <div className="h-[60px] flex justify-center items-center">
                  <span className="font-light text-md text-center">서울특별시 금천구 남부순환로 1406</span>
                </div>
                {/* 카카오 맵 */}
                <div className="w-[90%] h-[100%] bg-[#dfc7c7] rounded-2xl shadow-md"></div>
              </div>
              {/* 2. 서울여상 사랑채플 */}
              <div className="flex flex-col gap-5 justify-center items-center">
                {/* title */}
                <div className="px-8 py-3 bg-[#dfc7c7] rounded-[3.5rem] shadow-md">
                  <h3 className="font-bold text-md text-gray-800">서울여상 사랑채플(주일)</h3>
                </div>
                {/* 상세주소 */}
                <div className="h-[60px] flex justify-center items-center">
                  <span className="font-light text-sm text-center">
                    서울 관악구 관악로 85 <br /> (서울여자상업고등학교 체육관 건물 3층)
                  </span>
                </div>
                {/* 카카오 맵 */}
                <div className="w-[90%] h-[100%] bg-[#dfc7c7] rounded-2xl shadow-md"></div>
              </div>
            </div>

            {/* header CONTACT */}
            <SectionHeader text="CONTACT" />
            {/* content CONTACT */}
            <div className="flex w-full justify-around align-middle items-center h-[200px]">
              {/* 대표 전화번호 */}
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="p-8 bg-[#dfc7c7] rounded-xl">
                  <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
                  </svg>
                </div>
                <span className="text-lg text-gray-500">02) 861-5071</span>
              </div>
              {/* 대표 이메일 */}
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="p-8 bg-[#dfc7c7] rounded-xl">
                  <svg className="w-10 xl:w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M14 2H10V8H4V12H10V22H14V12H20V8H14V2Z" fill="white"></path>
                  </svg>
                </div>
                <span className="text-md text-gray-500">myungmoon@mm.or.kr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
