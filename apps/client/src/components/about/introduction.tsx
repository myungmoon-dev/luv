import CustomImage from "../customImage";
import AboutCoreLabel from "./coreLabel";
import AboutCoreWrapper, { IValueVision } from "./coreWrapper";
import AboutPromiseComponent from "./promise";
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

const AboutIntroduction = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-20 overflow-hidden">
      <AboutHeaderSection
        text1="지역과 민족을 품고"
        text2="세계와 열방을 향해 나아가는"
        text3="명문교회를 소개합니다!"
      />
      <CustomImage
        className="h-[500px] md:h-[700px] lg:h-[800px] xl:h-screen"
        src="/images/education/vision1.jpg"
        alt="비전 이미지"
        imgClass="brightness-50"
      >
        <div className="absolute flex h-full w-full flex-col items-end justify-center gap-16 px-12 xl:px-32">
          <div
            data-aos="fade-up"
            className="flex w-full flex-col gap-3 font-SCoreDream text-2xl font-bold text-white md:text-5xl lg:text-7xl"
          >
            <p>복음으로!</p>
            <p>오직 성령의 능력으로!</p>
            <p>회복을 넘어 부흥으로!</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex w-full flex-col justify-center gap-4 text-xl text-white md:w-2/3 md:text-3xl lg:text-5xl xl:w-1/2"
          >
            <p>명문교회는</p>
            <p className="font-bold">'지역과 민족을 품고</p>
            <p className="font-bold">세계와 열방을 향해 나아가는'</p>
            <p>생명의 공동체입니다.</p>
          </div>
        </div>
      </CustomImage>

      <div className="flex w-full flex-col items-center justify-center xl:h-screen">
        <AboutCoreLabel type="corevalue" />
        <AboutCoreWrapper dataList={valueList} />
      </div>

      <div className="relative flex h-full w-full flex-col items-center justify-center py-16 xl:h-[1080px]">
        <div className="z-[1] flex w-full flex-col items-center justify-center gap-12 px-3 md:w-3/4 md:px-0">
          <div
            data-aos="fade-up"
            className="flex w-full flex-col gap-1 font-bold sm:text-lg md:text-2xl xl:text-2xl xl:font-semibold"
          >
            <p className="py-5 font-SCoreDream text-3xl font-normal text-blue-600 sm:text-4xl xl:py-12 xl:text-7xl">
              명문교회는,
            </p>
            <p>지난 36년간 지역사회 목음화와 세계 선교를 위해</p>
            <p>그리고 다음 세대 믿음의 자녀들을 위해</p>
            <p>눈물로 기도하며 헌신하였습니다.</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex w-full flex-col gap-1 font-bold sm:text-lg md:text-2xl xl:text-2xl xl:font-semibold"
          >
            <p>이제 우리는 한국교회의 영적 유산을</p>
            <p>더욱 잘 계승할 뿐만 아니라,</p>
            <p>시대적 변화에 발맞추어 오늘날 우리에게 주신</p>
            <p>교회의 사명을 탁월하게 감당하려고 합니다.</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex w-full flex-col gap-1 font-bold sm:text-lg md:text-2xl xl:text-2xl xl:font-semibold"
          >
            <p>총성 없는 전쟁과도 같았던 코로나 시대를 보내면서,</p>
            <p>명문교회는 한 영혼을 천하보다 귀하게 여기시는</p>
            <p>주님의 마음으로 성도님들 한 영혼 한 영혼을 위해</p>
            <p>회복과 소망의 복음을 전하겠습니다.</p>
          </div>
        </div>
        <div className="absolute h-full w-full">
          <CustomImage className="h-full" src="/images/about/promise.jpg" alt="비전 이미지" />
        </div>
      </div>

      {/* FIXME: 4-section */}
      <div className="flex w-full flex-col">
        <AboutPromiseComponent
          direction="left"
          img="/images/about/default-1.jpg"
          title1="양을 위하여 목숨을 버리는"
          title2="목자의 심정으로 목회하겠습니다."
          text1="영혼을 구원하기 위해 성육신하신"
          text2="예수님의 마음을 본받아,"
          text3="명문교회 모든 성도님들을 위한 한 알의 밀알이 되어"
          text4="일사각오로 성도님들을 사랑하며 섬기겠습니다."
        />
        <AboutPromiseComponent
          direction="right"
          img="/images/about/default-2.jpg"
          title1="생명을 걸고 설교 준비를 하고,"
          title2="삶으로 설교하겠습니다."
          text1="명문의 강단이 푸른 감람나무 같고 물댄 동산 같아서"
          text2="매주일 생명의 말씀이 선포되도록 하겠습니다."
          text3="설교자의 삶과 인격이 설교를 통해 흘러갈 수 있도록"
          text4="겸손하게 은혜를 구하며 말씀을 전하겠습니다."
        />
        <AboutPromiseComponent
          direction="left"
          img="/images/discipleship/banner.jpg"
          title1="기도하기를 쉬는 죄를 범하지 않고,"
          title2="눈물과 무릎으로 목회하겠습니다."
          text1="사람의 능력이 아니라,"
          text2="하나님의 능력으로 목회하겠습니다."
          text3="무릎으로 교회를 세우고,"
          text4="성도님들을 위해 간절한 눈물로 기도하겠습니다."
        />
      </div>
    </div>
  );
};

export default AboutIntroduction;
