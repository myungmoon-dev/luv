import CustomImage from "@/components/customImage";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";

const LeadershipPage = () => {
  return (
    <Layout
      pageTitle="섬기는 분들-담임목사"
      title="섬기는 분들"
      bannerDescription="보라 내가 반드시 길을 내리라!"
      bannerImage="/images/about/banner3.jpg"
      bannerImgClass="object-[100%_60%]"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <Tabs menus={aboutLeaderMenus}>
        <div className="2xl:max-w-screen-xl flex w-full flex-col gap-8">
          {/* 담임목사 인사말 */}
          <div className="mx-auto w-full max-w-screen-md whitespace-pre-wrap break-keep px-3 text-sm">
            <div className="flex flex-col gap-4 text-gray-800 lg:text-center">
              <div className="text-center">
                <h2 className="mb-2 text-xl font-bold text-blue-900 lg:text-3xl">담임목사 인사말</h2>
                <div className="mx-auto mb-4 h-0.5 w-16 bg-blue-500 lg:w-32"></div>
              </div>
              <div className="flex flex-col gap-3 text-sm leading-relaxed lg:text-base">
                <p className="text-center font-semibold text-blue-800">
                  사랑하는 성도 여러분,
                  <br />
                  그리고 명문교회를 찾아 주신 모든 분들에게!
                </p>
                <p>
                  명문교회 홈페이지를 방문해 주신 모든 분들을 주님의 이름으로 환영합니다. 평강의 하나님께서 여러분과
                  여러분의 가정에 풍성한 은혜와 평안을 더하여 주시기를 바랍니다.
                </p>
                <div>
                  <p className="mb-2 font-semibold text-blue-800">함께 걸어가는 믿음의 여정</p>
                  <p>
                    신앙의 여정은 혼자 걷는 길이 아닙니다. 우리는 함께 주님을 따라가는 믿음의 동반자들입니다. 여러분이
                    어떤 상황에 계시든, 어떤 필요가 있으시든, 명문교회는 여러분을 따뜻하게 품고 함께 기도하며 동행하고자
                    합니다. 이곳에서 참된 위로와 소망, 그리고 새로운 힘을 얻으시기를 바랍니다.
                  </p>
                </div>
                <p>
                  앞으로도 명문교회가 지역사회를 섬기고, 복음을 전하며, 하나님 나라의 확장을 위해 쓰임 받는 교회가
                  되도록 여러분의 기도와 동참을 부탁드립니다.
                </p>
                <p className="text-center font-semibold italic text-blue-800">
                  하나님의 크신 사랑과 은혜가 여러분과 함께 하시기를 축복합니다.
                </p>
              </div>
            </div>
          </div>
          <CustomImage
            className="h-[180px] md:h-[600px] lg:h-[600px]"
            src="/images/about/introduce_senior2.jpeg"
            alt="담임목사"
            imgClass="brightness-90 md:brightness-95 object-[50%_0%] md:object-[70%_0%]"
          >
            <div className="xl:px-20 absolute flex h-full w-full flex-col items-end justify-center gap-10 px-3 md:gap-20 md:px-6">
              <div data-aos="fade-up" className="flex w-full text-white">
                <p className="font-SCoreDream text-lg md:text-4xl lg:text-5xl">
                  "보라!
                  <br />
                  내가 반드시 길을 내리라!"
                </p>
              </div>
              <div data-aos="fade-up" className="flex w-full items-end text-white">
                <div className="hidden w-full gap-1 whitespace-pre-wrap break-keep md:flex md:flex-col md:gap-3 md:text-xl lg:text-xl">
                  <p>
                    고려대와 서울대 대학원에서 철학과 영미윤리학을 공부하였습니다. <br />
                    총신신대원에서 목회학 석사(MDiv)를, <br />
                    시카고에 있는 Trinity Evangelical Divinity School에서 조직신학으로 신학 석사(ThM)를, <br />
                    그리고 The Southern Baptist Theological Seminary에서 설교학 박사 학위(PhD)를 취득하였습니다.
                  </p>
                  <p>강남교회, 시카고아가페장로교회, 사랑의교회에서 사역했습니다.</p>
                  <div className="flex flex-col">
                    <p>현재 총신대 목회신학전문대학원에서 후학들을 가르치고 있으며</p>
                    <p>농어촌교회사역연구소 연구위원으로, 한국개혁주의 설교학회 학술부회장으로,</p>
                    <p>GMS 이사로도 섬기고 있습니다.</p>
                  </div>
                  <p>가족으로는 아내 정지영과 두 아들 성재, 은재가 있습니다.</p>
                </div>
                <div className="xl:w-full flex w-full flex-col items-end md:w-1/4 lg:w-1/2">
                  <p className="2xl:text-2xl font-SCoreDream text-xs md:text-lg lg:text-xl">명문교회 |</p>
                  <p className="2xl:text-3xl font-SCoreDream text-sm md:text-xl lg:text-2xl">김지혁 담임목사</p>
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
            <p>강남교회, 시카고아가페장로교회, 사랑의교회에서 사역했습니다.</p>
            <p>
              현재 총신대 목회신학전문대학원에서 후학들을 가르치고 있으며, 농어촌교회사역연구소 연구위원으로,
              한국개혁주의 설교학회 학술부회장으로, GMS 이사로도 섬기고 있습니다.
            </p>
            <p>가족으로는 아내 정지영과 두 아들 성재, 은재가 있습니다.</p>
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default LeadershipPage;
