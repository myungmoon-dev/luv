import Layout from "@/components/layout";
import { discipleshipInnerMenus } from "@/constants/innerMenus/discipleship";
import { Suspense } from "react";
import { Spinner } from "ui";
import CommonAlbumList from "@/components/common/albums";
import DiscipleshipBannerSection from "@/components/discipleship/bannerSection";
import FaithMenuSection from "@/components/discipleship/faith/faithMenuSection";
import DiscipleshipFaithQtIntroduce from "@/components/discipleship/faith/qt/introduce";

const DiscipleshipFaithQtPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-full w-full items-center justify-center p-8 text-gray-500">
          <Spinner />
        </div>
      }
    >
      <DiscipleshipFaithQt />
    </Suspense>
  );
};

const DiscipleshipFaithQt = () => {
  return (
    <Layout
      pageTitle="큐티세미나 안내"
      title="큐티세미나 안내"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/discipleship/banner.jpg"
      innerMenus={discipleshipInnerMenus}
    >
      <div className="flex flex-col gap-10">
        {/* 배너 이미지 */}
        <DiscipleshipBannerSection />

        {/* 신앙교육 세부 메뉴 */}
        <FaithMenuSection />

        {/* 큐티 세미나 소개 */}
        <DiscipleshipFaithQtIntroduce />

        {/* 앨범 */}
        <CommonAlbumList albumType="qt" albumName="큐티세미나" />
      </div>
    </Layout>
  );
};

export default DiscipleshipFaithQtPage;
