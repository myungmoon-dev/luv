import React from "react";
import Layout from "@/components/layout";
import { sermonsInnerMenus } from "@/constants/innerMenus/sermons";
import { Card, SectionHeader } from "ui";
import YoutubeVideo from "@/components/youtubeVideo";

const SermonsSunday3Page = () => {
  return (
    <Layout
      pageTitle="주일 3부 예배"
      title="주일 3부 예배"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/sermons.jpeg"
      innerMenus={sermonsInnerMenus}
    >
      <div className="flex w-full flex-col gap-5">
        <SectionHeader text="2024년" color="pink" selected={true} size="sm" hasLine={true} />
        {/* FIXME: 최신 4개 가져오기 */}
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mb-10 grid min-h-[50px] w-full grid-cols-4 items-center gap-5 rounded-md bg-gray-200 px-3">
            <p className="text-center text-xs font-bold text-[#892122] sm:text-sm">3월 31일</p>
            <p className="text-center text-xs sm:text-sm">3월 24일</p>
            <p className="text-center text-xs sm:text-sm">3월 17일</p>
            <p className="text-center text-xs sm:text-sm">3월 10일</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="font-HSBombaram3 text-lg sm:text-2xl">" 평범한 사람들의 비범한 역사 "</h1>
            <p className="text-xs text-gray-700 sm:text-sm">김지혁 담임목사 | 이사야 28장 16절</p>
            {/* FIXME: YoutubeVideo 숏츠/라이브/주일설교/새벽설교 등으로 구분해야 함 */}
            <Card className="relative mt-10 h-[300px] w-[100%] sm:w-[70%] lg:h-[450px]">
              <YoutubeVideo type="youtube" />
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SermonsSunday3Page;
