import CustomImage from "../customImage";
import AboutCoreLabel from "./coreLabel";
import AboutCoreWrapper, { IValueVision } from "./coreWrapper";
import AboutHeaderSection from "./section/header";

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

const AboutLogoWithVision = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-20 overflow-hidden">
      <AboutHeaderSection
        text1="지역과 민족을 품고"
        text2="세계와 열방을 향해 나아가는"
        text3="명문교회를 소개합니다!"
      />
      <CustomImage
        className="h-[500px] md:h-screen"
        src="/images/education/vision1.jpg"
        alt="비전 이미지"
        imgClass="brightness-50"
      >
        <div className="absolute flex h-full w-full flex-col items-end justify-center gap-16 px-3 md:px-12 lg:px-32">
          <div
            data-aos="fade-up"
            className="flex w-full flex-col gap-3 font-SCoreDream text-2xl font-bold text-white md:text-7xl"
          >
            <p>名門(명문)</p>
            <p>이름을 얻는다.</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex w-full flex-col items-end justify-center gap-1 text-white sm:gap-4 sm:text-xl md:text-2xl lg:text-4xl"
          >
            <p>대한예수교장로회(합동)에 속하였으며,</p>
            <p className="font-bold">이 문을 들어오는 자마다 어린양의</p>
            <p className="font-bold">생명책에 이름이 기록되며</p>
            <p>아브람이 아브라함으로,</p>
            <p>야곱이 이스라엘로 새 이름을 얻어서</p>
            <p>새로운 삶을 얻는 교회라는 의미를 가지고 있습니다.</p>
          </div>
        </div>
      </CustomImage>
      <div className="relative flex h-full w-full items-center lg:h-[500px] xl:justify-center">
        <CustomImage
          src="/images/about/logo_bg.png"
          alt="로고 배경이미지"
          className="absolute h-full w-full object-cover"
        />
        <div
          data-aos="fade-right"
          className="flex w-full flex-col gap-3 px-3 py-20 text-xs font-semibold text-white sm:px-12 md:text-base md:font-normal lg:w-1/2 xl:w-2/5 2xl:w-1/3 2xl:text-xl"
        >
          <p className="w-fit border-b-2 border-white pb-[2px] font-SCoreDream text-2xl font-semibold sm:text-4xl md:pb-2 md:text-5xl">
            명문교회 로고
          </p>
          <p className="break-keep">명문의 첫 두글자 영문 MM을 형상화하여 만들어졌습니다.</p>
          <p className="break-keep">
            성부, 성자, 성령을 의미하는 세 개의 기둥으로 세워진 문을 통해 생명의 이름을 얻게 되는 명문교회 설립의도가
            나타나있습니다.
          </p>
          <p className="break-keep">
            생명의문은 열려진 형태이며, 누구든지 하나님의 은혜 앞에 나오는 사람은 생명의 이름을 얻고 구원의 길을 가게
            됩니다.
          </p>
        </div>
        <div className="flex h-full w-fit items-center justify-center px-5">
          <CustomImage
            src="/images/logo.png"
            alt="로고이미지"
            className="right-1 top-5 h-[100px] w-[100px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px]"
            imgClass="object-contain"
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <AboutCoreLabel type="vision" />
        <AboutCoreWrapper dataList={visionList} />
      </div>
    </div>
  );
};

export default AboutLogoWithVision;
