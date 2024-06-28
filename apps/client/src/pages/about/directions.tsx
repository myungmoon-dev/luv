import KakaoMap from "@/components/kakaomap";
import Layout from "@/components/layout";
import { aboutInnerMenus } from "@/constants/innerMenus/about";

import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import path from "path";

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/about/banner3.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface IAboutDirectionsPageProps {
  bannerBlurDataURL: string;
}

const AboutDirectionsPage = ({ bannerBlurDataURL }: IAboutDirectionsPageProps) => {
  return (
    <Layout
      pageTitle="오시는 길"
      title="오시는 길"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      bannerBlurDataURL={bannerBlurDataURL}
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
