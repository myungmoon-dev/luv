import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { Suspense } from "react";
import { Spinner } from "ui";
import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import TrainingMenuSection from "@/components/discipleship/training/trainingMenuSection";
import DiscipleshipTraining3040 from "@/components/discipleship/training/3040";
import CommonAlbumList from "@/components/common/albums";

const DiscipleshipTraining3040Page = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
          <Spinner />
        </div>
      }
    >
      <DiscipleshipTraining3040Content />
    </Suspense>
  );
};

const DiscipleshipTraining3040Content = () => {
  return (
    <Layout
      pageTitle="3040 안내"
      title="3040 안내"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div className="flex flex-col gap-10">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />

        {/* 훈련 세부 메뉴 */}
        <TrainingMenuSection />

        {/* 3040 내용 */}
        <DiscipleshipTraining3040 />

        {/* 앨범 */}
        <CommonAlbumList albumType="3040" albumName="3040" />
      </div>
    </Layout>
  );
};

export default DiscipleshipTraining3040Page;
