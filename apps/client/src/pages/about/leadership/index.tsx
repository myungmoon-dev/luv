import CustomImage from "@/components/customImage";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";

const LeadershipPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들-담임목사"
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <Tabs menus={aboutLeaderMenus}>
        <div className="flex w-full flex-col gap-5 2xl:max-w-screen-xl">
          <CustomImage
            className="h-[180px] md:h-[600px] lg:h-[600px]"
            src="/images/about/introduce_senior.jpg"
            alt="담임목사"
            imgClass="brightness-90 md:brightness-95 md:object-[70%_0%]"
          >
            <div className="absolute flex h-full w-full flex-col items-end justify-center gap-10 px-3 md:gap-20 md:px-6 xl:px-20">
              <div data-aos="fade-up" className="flex w-full text-white">
                <p className="font-SCoreDream text-xl md:text-4xl lg:text-5xl">
                  "교회여!
                  <br />
                  일어나 세상으로 흘러가라!"
                </p>
              </div>
              <div data-aos="fade-up" className="flex w-full items-end text-white">
                <div className="hidden w-full gap-1 whitespace-pre-wrap break-keep md:flex md:flex-col md:gap-3 md:text-xl lg:text-xl">
                  <p>
                    고려대와 서울대 대학원에서 철학과 영미윤리학을 공부하였습니다. <br />
                    총신신대원에서 목회학 석사(MDiv)를, 시카고에 있는 Trinity Evangelical Divinity School에서
                    조직신학으로 신학 석사(ThM)를, 그리고 The Southern Baptist Theological Seminary에서 설교학 박사
                    학위(PhD)를 취득하였습니다.
                  </p>
                  <p>
                    강남교회, 시카고아가페장로교회, 사랑의교회에서 사역했으며,
                    <br />
                    현재 총신대 목회신학전문대학원에서 설교학 교수로도 섬기고 있습니다.
                  </p>
                  <p>가족으로는 아내 정지영과 두 아들 성재, 은재가 있습니다.</p>
                </div>
                <div className="flex w-full flex-col items-end md:w-1/4 lg:w-1/2 xl:w-full">
                  <p className="font-SCoreDream text-xs md:text-lg lg:text-xl 2xl:text-2xl">명문교회 |</p>
                  <p className="font-SCoreDream text-sm md:text-xl lg:text-2xl 2xl:text-3xl">김지혁 담임목사</p>
                </div>
              </div>
            </div>
          </CustomImage>
          <div className="w-full whitespace-pre-wrap break-keep px-3 text-sm md:hidden">
            고려대와 서울대 대학원에서 철학과 영미윤리학을 공부하였습니다. 총신신대원에서 목회학 석사(MDiv)를, 시카고에
            있는 Trinity Evangelical Divinity School에서 조직신학으로 신학 석사(ThM)를, 그리고 The Southern Baptist
            Theological Seminary에서 설교학 박사 학위(PhD)를 취득하였습니다.
          </div>
          <div className="flex w-full flex-col gap-3 whitespace-pre-wrap break-keep px-3 text-sm md:hidden">
            <p>
              강남교회, 시카고아가페장로교회, 사랑의교회에서 사역했으며,
              <br />
              현재 총신대 목회신학전문대학원에서 설교학 교수로도 섬기고 있습니다.
            </p>
            <p>가족으로는 아내 정지영과 두 아들 성재, 은재가 있습니다.</p>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default LeadershipPage;
