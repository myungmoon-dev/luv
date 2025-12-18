import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import Layout from "@/components/layout";
import { Suspense } from "react";
import { Spinner } from "ui";

const HomeWorshipPage = () => {
  return (
    <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
              <Spinner />
            </div>
          }
        >
          <HomeworshipMain />
        </Suspense>
  );
};

const HomeworshipMain = () => {
  return <Layout
      pageTitle="가정예배 안내"
      title="가정예배 안내"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/banner.jpg"
    >
      <div className="flex flex-col gap-10">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />




      </div>
    </Layout>
}
export default HomeWorshipPage;
