import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { Suspense } from "react";
import { Spinner } from "ui";
import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import FaithMenuSection from "@/components/discipleship/faith/faithMenuSection";
import DiscipleshipFaithReadingDetail from "@/components/discipleship/faith/readingBible/detail";

const DiscipleshipFaithReadingDetailPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
          <Spinner />
        </div>
      }
    >
      <DiscipleshipFaithReadingDetailContent />
    </Suspense>
  );
};

const DiscipleshipFaithReadingDetailContent = () => {
  return (
    <Layout
      pageTitle="성경통독"
      title="성경통독"
      bannerDescription="일어나라 빛을 발하라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div className="flex flex-col gap-10">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />

        {/* 신앙교육 세부 메뉴 */}
        <FaithMenuSection />

        {/* 성경통독 세부 내용 */}
        <DiscipleshipFaithReadingDetail />
      </div>
    </Layout>
  );
};

export default DiscipleshipFaithReadingDetailPage;
