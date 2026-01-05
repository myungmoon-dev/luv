import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { Suspense } from "react";
import { Spinner } from "ui";
import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import TrainingMenuSection from "@/components/discipleship/training/trainingMenuSection";
import DiscipleshipTraining3040 from "@/components/discipleship/training/3040";
import CommonAlbumList from "@/components/common/albums";

const DiscipleshipTrainingSeniorPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
          <Spinner />
        </div>
      }
    >
      <DiscipleshipTrainingSeniorContent />
    </Suspense>
  );
};

const DiscipleshipTrainingSeniorContent = () => {
  return (
    <Layout
      pageTitle="시니어 안내"
      title="시니어 안내"
      bannerDescription="일어나라 빛을 발하라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div className="flex flex-col gap-10">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />

        {/* 훈련 세부 메뉴 */}
        <TrainingMenuSection />

        {/* 3040 내용 */}
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8">
          {/* 제목 및 소개 */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-[#001F54]">명문교회 시니어</h2>
            <div className="mb-4 flex flex-col gap-1">
              <p className="text-lg font-semibold text-gray-800">"COME TOGETHER"</p>
              <p className="text-sm text-gray-700">히브리서 10장 24-25절</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DiscipleshipTrainingSeniorPage;
