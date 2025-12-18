import CommonAlbumList from "@/components/common/albums";
import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import DiscipleshipNewApplySection from "@/components/discipleship/new/contents/apply";
import DiscipleshipNewGuideSection from "@/components/discipleship/new/contents/guide";
import DiscipleshipNewProcessSection from "@/components/discipleship/new/contents/process";
import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { Suspense } from "react";
import { Spinner } from "ui";

const DiscipleshipPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
          <Spinner />
        </div>
      }
    >
      <DiscipleshipMain />
    </Suspense>
  );
};

const DiscipleshipMain = () => {
  return (
    <Layout
      pageTitle="교회 훈련 안내"
      title="교회 훈련 안내"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div className="flex flex-col gap-10">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />

        {/* 새가족 등록 섹션 */}
        <DiscipleshipNewApplySection />

        {/* 새가족을 위한 5단계 섹션 */}
        <DiscipleshipNewGuideSection />

        {/* 5주 새신자 과정 섹션 */}
        <DiscipleshipNewProcessSection />

        {/* 앨범 */}
        <CommonAlbumList albumType="newFamilly" albumName="새가족" />
      </div>
    </Layout>
  );
};

export default DiscipleshipPage;