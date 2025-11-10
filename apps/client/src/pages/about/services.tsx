import AboutBack from "@/components/about/Back";
import ServicesHeader from "@/components/about/services/Header";
import ServicesTable from "@/components/about/services/Table";
import KakaoMap from "@/components/kakaomap";
import Layout from "@/components/layout";

const AboutServicesPage = () => {
  return (
    <Layout pageTitle="예배 정보" title="예배 정보" customBanner={<></>} hasChildrenPadding={false}>
      <AboutBack title="예배 정보" />
      <div className="flex flex-col items-center justify-center gap-20 px-5 py-10">
        <div className="flex w-full flex-col justify-center gap-8 md:gap-12">
          <ServicesHeader title="주일예배" />
          <ServicesTable worship="주일" />
        </div>
        <div className="flex w-full flex-col justify-center gap-8 md:gap-12">
          <ServicesHeader title="평일예배" />
          <ServicesTable worship="평일" />
        </div>
        <div className="flex w-full flex-col justify-center gap-8 md:gap-12">
          <ServicesHeader title="다음세대예배" />
          <ServicesTable worship="다음세대" />
        </div>
      </div>
      <div className="mb-20 px-5">
        <div className="mb-5 flex items-center justify-between md:mb-10">
          <ServicesHeader title="오시는 길" />
          <span>공유 아이콘</span>
        </div>
        <div className="mb-12 flex flex-col gap-3 md:gap-10 md:mb-20">
          <KakaoMap address="서울특별시 금천구 남부순환로 1406" height="h-[230px] sm:h-[314px] md:h-[395px]" />
          <div className="flex flex-col justify-center gap-2">
            <p className="text-[#001F54] sm:text-lg md:text-2xl">독산동 비전채플 (평일)</p>
            <p className="font-medium text-[#464646] sm:text-lg md:text-xl">서울특별시 금천구 남부순환로 1406</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <KakaoMap address="서울특별시 관악구 관악로 85" height=" h-[230px] sm:h-[314px] md:h-[395px]" />
          <div className="flex flex-col justify-center gap-2">
            <p className="text-[#001F54] sm:text-lg md:text-2xl">서울여상 사랑채플 (주일)</p>
            <p className="font-medium text-[#464646] sm:text-lg md:text-xl">
              서울특별시 관악구 관악로 85
              <br />
              (서울여자상업고등학교 체육관 건물 3층)
            </p>
          </div>
        </div>
      </div>
      <div className="mb-60 flex flex-col gap-4 px-5">
        <ServicesHeader title="교회정보" />
        <div className="grid h-fit grid-cols-[auto,1fr] items-center gap-x-14 gap-y-5 bg-[#D9D9D9]/[.3] px-8 py-4 sm:gap-x-10 sm:gap-y-12">
          <p className="text-sm font-medium text-[#001F54] sm:text-lg md:text-xl">주소</p>
          <p className="whitespace-pre-wrap text-sm text-[#464646] sm:whitespace-normal sm:text-base md:text-lg">
            {"(우) 08548 서울특별시 금천구\n남부순환로 1406"}
          </p>
          <p className="text-sm font-medium text-[#001F54] sm:text-lg md:text-xl">대표번호</p>
          <p className="text-sm text-[#464646] sm:text-base md:text-lg">02-861-5071</p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutServicesPage;
