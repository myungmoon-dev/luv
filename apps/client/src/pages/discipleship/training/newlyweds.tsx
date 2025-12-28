import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { Suspense } from "react";
import { Spinner } from "ui";
import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import TrainingMenuSection from "@/components/discipleship/training/trainingMenuSection";
import DiscipleshipTrainingNewlyweds from "@/components/discipleship/training/newlyweds";
import CommonAlbumList from "@/components/common/albums";

const DiscipleshipTrainingNewlywedsPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
          <Spinner />
        </div>
      }
    >
      <DiscipleshipTrainingNewlywedsContent />
    </Suspense>
  );
};

const DiscipleshipTrainingNewlywedsContent = () => {
  return (
    <Layout
      pageTitle="신혼가정 안내"
      title="신혼가정 안내"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div className="flex flex-col gap-10">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />

        {/* 훈련 세부 메뉴 */}
        <TrainingMenuSection />

        {/* 신혼가정 내용 */}
        <DiscipleshipTrainingNewlyweds />

        {/* 앨범 */}
        <CommonAlbumList albumType="newlyweds" albumName="신혼가정" />
      </div>
    </Layout>
  );
};

export default DiscipleshipTrainingNewlywedsPage;
