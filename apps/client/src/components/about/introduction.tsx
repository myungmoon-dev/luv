import CustomImage from "../customImage";
import { IValueVision } from "./coreAlbum";
import AboutCoreSection from "./coreSection";
import AboutHeaderSection from "./section/header";

const valueList: IValueVision[] = [
  {
    id: 1,
    description:
      "'내 양을 치라'고 하신\n주님의 명령에 순종하여,\n모든 것을 헌신하는 마음으로\n성도를 목양하고 돌봅니다.",
    titleEn: "The Heart of Shepherd",
    titleKr: "목자의 심정",
    img: "/images/about/value1.jpg",
    imgClass: "brightness-50 object-[20%_40%]",
  },
  {
    id: 2,
    description: "제자들의 발을 씻겨 주신\n예수님의 겸손한 모법을 따라,\n예수님처럼 교회와 세상을 섬깁니다.",
    titleEn: "The Standard of Excellence",
    titleKr: "최고 수준의 헌신",
    img: "/images/about/value2.jpg",
    imgClass: "brightness-50 object-[20%_40%]",
  },
  {
    id: 3,
    description: "다윗이 그 마음\n완전함과 손의 능숙함으로\n사명을 감당한 것처럼,\n최고 수준의 사역을 추구합니다.",
    titleEn: "The Attitude of Servant",
    titleKr: "섬김과 겸손의 자세",
    img: "/images/about/value3.jpg",
    imgClass: "brightness-50 object-[20%_40%]",
  },
  {
    id: 4,
    description:
      "천하보다 귀한 한 영혼을\n하나님의 마음으로 품고\n목양의 사각지대가 없는 돌봄과\n사랑의 공동체를 꿈꿉니다.",
    titleEn: "The Importance of Individual",
    titleKr: "한 영혼의 소중함",
    img: "/images/about/value4.jpg",
    imgClass: "brightness-50 object-[20%_40%]",
  },
  {
    id: 5,
    description: "주님 다시 오시는 날까지\n세계와 열방을 품고\n치유하는 선교공동체로 나아갑니다.",
    titleEn: "The Great Commission",
    titleKr: "지상명령",
    img: "/images/about/value5.jpg",
    imgClass: "brightness-50 object-[20%_20%]",
  },
];
const visionList: IValueVision[] = [
  {
    id: 1,
    titleKr: "살아있는 교회",
    description: "성령의 임재와 말씀의 능력으로\n예배가 살아있는 교회",
    img: "/images/about/vision1.jpg",
    imgClass: "brightness-50 object-[100%_40%]",
  },
  {
    id: 2,
    titleKr: "선교적 교회",
    description: "지역사회를 품고\n이웃을 섬기는 선교적 교회\n(다음세대, 가정사역, 신혼가정, 3040)",
    img: "/images/about/vision2.jpg",
    imgClass: "brightness-50 object-[50%_40%]",
  },
  {
    id: 3,
    titleKr: "치유하는 교회",
    description: "복음으로 열방을 치유하는 교회\n(국내외 선교, 미자립교회 지원)",
    img: "/images/about/vision3.jpg",
    imgClass: "brightness-50 object-[50%_40%]",
  },
  {
    id: 4,
    titleKr: "일꾼을 세우는 교회",
    description: "다음세대 지도자, 일꾼을 세우는 교회\n(2,000명 예배자/200개 구역/전도와 훈련)",
    img: "/images/about/vision4.jpg",
    imgClass: "brightness-50 object-[50%_40%]",
  },
  {
    id: 5,
    titleKr: "가정을 세우는 교회",
    description: "치유와 회복으로\n가정을 세우는 교회",
    img: "/images/about/vision5.jpg",
    imgClass: "brightness-50 object-[100%_70%]",
  },
];

const AboutIntroduction = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-20 overflow-hidden">
      <AboutHeaderSection
        text1="지역과 민족을 품고"
        text2="세계와 열방을 향해 나아가는"
        text3="명문교회를 소개합니다!"
      />

      <div className="relative flex h-full w-full flex-col items-center justify-center py-16 xl:h-[1080px]">
        <div className="z-[1] flex w-full flex-col items-center justify-center gap-12 px-3 md:w-3/4 md:px-0">
          <div
            data-aos="fade-up"
            className="flex w-full flex-col gap-1 font-bold sm:text-lg md:text-2xl xl:text-2xl xl:font-semibold"
          >
            <p className="font-SCoreDream py-5 text-3xl font-normal text-blue-600 sm:text-4xl xl:py-12 xl:text-7xl">
              名門 (명문)
              <br />
              이름을 얻는다.
            </p>
            <p>대한예수교장로회(합동)에 속하였으며,</p>
            <p>이 문을 들어오는 자마다 어린양의</p>
            <p>생명책에 이름이 기록되며</p>
            <p>아브람이 아브라함으로,</p>
            <p>야곱이 이스라엘로 새 이름을 얻어서</p>
            <p>새로운 삶을 얻는 교회라는 의미를 가지고 있습니다.</p>
          </div>
        </div>
        <div className="absolute h-full w-full">
          <CustomImage className="h-full" src="/images/about/promise.jpg" alt="명문 이미지" />
        </div>
      </div>
      <div className="relative flex h-full w-full items-center lg:h-[500px] xl:justify-center">
        <CustomImage
          src="/images/about/logo_bg.png"
          alt="로고 배경이미지"
          className="absolute h-full w-full object-cover"
        />
        <div
          data-aos="fade-right"
          className="flex w-full flex-col gap-3 px-3 py-20 text-xs font-semibold text-white sm:px-12 md:text-2xl md:font-normal lg:w-1/2 lg:text-xl lg:font-semibold xl:w-3/5 2xl:w-1/2 2xl:text-2xl"
        >
          <p className="font-SCoreDream w-fit border-b-2 border-white pb-[2px] text-2xl font-semibold sm:text-4xl md:mb-2 md:pb-2 md:text-5xl">
            명문교회 로고
          </p>
          <p className="break-keep">명문의 첫 두글자 영문 MM을 형상화하여 만들어졌습니다.</p>
          <p className="break-keep">
            성부, 성자, 성령을 의미하는 세 개의 기둥으로 세워진 문을 통해 생명의 이름을 얻게 되는 명문교회 설립의도가
            나타나있습니다.
          </p>
          <p className="break-keep">
            생명의 문은 열려진 형태이며, 누구든지 하나님의 은혜 앞에 나오는 사람은 생명의 이름을 얻고 구원의 길을 가게
            됩니다.
          </p>
        </div>
        <div className="flex h-full w-fit items-center justify-center px-5">
          <CustomImage
            src="/images/logo.png"
            alt="로고이미지"
            className="right-1 top-5 h-[100px] w-[100px] md:h-[200px] md:w-[200px] lg:h-[400px] lg:w-[400px]"
            imgClass="object-contain"
          />
        </div>
      </div>
      <AboutCoreSection type="corevalue" dataList={valueList} />
      <AboutCoreSection type="vision" dataList={visionList} />
    </div>
  );
};

export default AboutIntroduction;
