import AboutBack from "@/components/about/Back";
import CustomImage from "@/components/customImage";
import Layout from "@/components/layout";
import Tabs from "@/components/layout/tabs";
import { aboutLeaderMenus } from "@/constants/innerMenus/about";

const LeadershipPage = () => {
  return (
    <Layout pageTitle="섬기는 분들-담임목사" title="섬기는 분들" customBanner={<></>} hasChildrenPadding={false}>
      <AboutBack title="섬기는 분들" />
      <Tabs menus={aboutLeaderMenus}>
        <div>
          <div className="mb-14 flex flex-col items-center gap-4 sm:gap-6">
            <CustomImage
              className="size-[100px] sm:size-[150px]"
              src="/images/leader/ji-hyuk.jpeg"
              alt="담임목사"
              imgClass="rounded-full"
            />
            <p className="text-center font-medium text-[#464646] sm:text-xl">김지혁 담임목사</p>
            <p className="text-center text-sm text-[#777777] sm:text-base">
              고려대, 서울대 대학원: 철학과 영미윤리학
              <br />
              총신신대원: 목회학 석사 (M.Div.)
              <br />
              Trinity Evangelical Divinity School (시카고) :
              <br />
              조직신학 석사 (Th.M.)
              <br />
              The Southern Baptist Theological Seminary :
              <br />
              설교학 박사 (Ph.D.)
              <br />
              <br />
              사역 경력
              <br />
              강남교회
              <br />
              시카고아가페장로교회
              <br />
              사랑의교회
              <br />
              <br />
              현재 활동
              <br />
              총신대 목회신학전문대학원 교수
              <br />
              농어촌교회사역연구소 연구위원
              <br />
              한국개혁주의 설교학회 학술부회장
              <br />
              GMS 이사
              <br />
              <br />
              가족
              <br />
              아내 정지영
              <br />두 아들 성재, 은재
            </p>
          </div>
          <div className="h-[8px] w-full bg-[#E6E6E6]" />
          <div className="flex flex-col px-5 py-4 sm:px-12 sm:py-6">
            <p className="mb-5 text-xl font-bold text-[#001F54]">인사말</p>
            <hr className="mb-4 border-[#747474]" />
            <p className="mb-4 px-2 text-[#6E6E6E]">
              <span className="font-medium">
                사랑하는 성도 여러분,
                <br />
                그리고 명문교회를 찾아 주신 모든 분들에게!
              </span>
              <br />
              <br />
              명문교회 홈페이지를 방문해 주신 모든 분들을
              <br />
              주님의 이름으로 환영합니다.
              <br />
              평강의 하나님께서 여러분과 여러분의 가정에
              <br />
              풍성한 은혜와 평안을 더하여 주시기를 바랍니다.
              <br />
              <br />
              <span className="font-medium">함께 걸어가는 믿음의 여정</span>
              <br />
              <br />
              신앙의 여정은 혼자 걷는 길이 아닙니다.
              <br />
              우리는 함께 주님을 따라가는 믿음의 동반자들입니다.
              <br />
              여러분이 어떤 상황에 계시든, 어떤 필요가 있으시든,
              <br />
              명문교회는 여러분을 따뜻하게 품고 함께 기도하며
              <br />
              동행하고자 합니다. 이곳에서 참된 위로와 소망,
              <br />
              그리고 새로운 힘을 얻으시기를 바랍니다.
              <br />
              <br />
              앞으로도 명문교회가 지역사회를 섬기고,
              <br />
              복음을 전하며, 하나님 나라의 확장을 위해 쓰임 받는
              <br />
              교회가 되도록 여러분의 기도와 동참을 부탁드립니다.
              <br />
              <br />
              <span className="font-medium">하나님의 크신 사랑과 은혜가 여러분과 함께 하시기를 축복합니다.</span>
            </p>
            <hr className="border-[#BBBBBB]" />
          </div>
        </div>
      </Tabs>
    </Layout>
  );
};

export default LeadershipPage;
