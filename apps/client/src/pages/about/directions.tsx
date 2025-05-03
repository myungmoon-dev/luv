import KakaoMap from "@/components/kakaomap";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";

const AboutDirectionsPage = () => {
  return (
    <Layout
      pageTitle="오시는 길"
      title="오시는 길"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
    >
      <div className="mx-auto flex max-w-screen-lg flex-col gap-20 px-3">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <KakaoMap address="서울특별시 금천구 남부순환로 1406" height=" h-[230px] lg:h-[330px]" />
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-xl font-bold text-blue-600">독산동 비전채플 (평일)</p>
            <p className="text-gray-600">서울특별시 금천구 남부순환로 1406</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <KakaoMap address="서울특별시 관악구 관악로 85" height=" h-[230px] lg:h-[330px]" />
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-xl font-bold text-blue-600">서울여상 사랑채플 (주일)</p>
            <p className="text-center text-gray-600">
              서울특별시 관악구 관악로 85
              <br />
              (서울여자상업고등학교 체육관 건물 3층)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutDirectionsPage;
