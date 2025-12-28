import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { Suspense } from "react";
import { Spinner } from "ui";
import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import FaithMenuSection from "@/components/discipleship/faith/faithMenuSection";
import DiscipleshipFaithReadingIntroduce from "@/components/discipleship/faith/readingBible/introduce";
import DiscipleshipFaithReading from "@/components/discipleship/faith/readingBible";

const DiscipleshipFaithReadingPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
          <Spinner />
        </div>
      }
    >
      <DiscipleshipFaithReadingContent />
    </Suspense>
  );
};

const DiscipleshipFaithReadingContent = () => {
  return (
    <Layout
      pageTitle="성경통독 안내"
      title="성경통독 안내"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div className="flex flex-col gap-10">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />

        {/* 신앙교육 세부 메뉴 */}
        <FaithMenuSection />

        {/* 성경통독 소개 */}
        <DiscipleshipFaithReadingIntroduce />

        {/* 성경통독 목록 */}
        <DiscipleshipFaithReading />
      </div>
    </Layout>
  );
};

export default DiscipleshipFaithReadingPage;
