import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { Suspense } from "react";
import { Spinner } from "ui";
import CommonAlbumList from "@/components/common/albums";
import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import FaithMenuSection from "@/components/discipleship/faith/faithMenuSection";
import DiscipleshipFaithPanoramaIntroduce from "@/components/discipleship/faith/panorama/introduce";

const DiscipleshipFaithPanoramaPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
          <Spinner />
        </div>
      }
    >
      <DiscipleshipFaithPanorama />
    </Suspense>
  );
};

const DiscipleshipFaithPanorama = () => {
  return (
    <Layout
      pageTitle="성경파노라마 안내"
      title="성경파노라마 안내"
      bannerDescription="일어나라 빛을 발하라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div className="flex flex-col gap-10">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />

        {/* 신앙교육 세부 메뉴 */}
        <FaithMenuSection />

        {/* 성경파노라마 소개 */}
        <DiscipleshipFaithPanoramaIntroduce />

        {/* 앨범 */}
        <CommonAlbumList albumType="panorama" albumName="성경파노라마" />
      </div>
    </Layout>
  );
};

export default DiscipleshipFaithPanoramaPage;
