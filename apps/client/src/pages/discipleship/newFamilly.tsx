import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { Suspense } from "react";
import { Spinner } from "ui";
import CommonAlbumList from "@/components/common/albums";
import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import DiscipleshipNewFamillyIntroduce from "@/components/discipleship/newFamilly/introduce";

const DiscipleshipNewFamillyPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
          <Spinner />
        </div>
      }
    >
      <DiscipleshipNewFamilly />
    </Suspense>
  );
};

const DiscipleshipNewFamilly = () => {
  return (
    <Layout
      pageTitle="새가족 훈련"
      title="새가족 훈련"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div className="flex flex-col gap-10">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />

        {/* 새가족 훈련 소개 */}
        <DiscipleshipNewFamillyIntroduce />

        {/* 앨범 */}
        <CommonAlbumList albumType="newFamilly" albumName="새가족" />
      </div>
    </Layout>
  );
};

export default DiscipleshipNewFamillyPage;
