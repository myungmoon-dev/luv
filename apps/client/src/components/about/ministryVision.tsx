import CustomImage from "../customImage";
import AboutPromiseComponent from "./promise";

const AboutMinistryVision = () => {
  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-20 overflow-hidden">
      <CustomImage
        className="h-[600px] md:h-[1000px] lg:h-[1200px]"
        src="/images/about/myungmoon.jpg"
        alt="목회비전 이미지"
        imgClass="brightness-50"
      >
        <div className="absolute flex h-full w-full flex-col items-end justify-center gap-10 px-3 md:gap-14 md:px-12 lg:px-32">
          <p className="flex w-full font-SCoreDream text-3xl text-white md:text-5xl lg:text-7xl">명문교회는,</p>
          <div
            data-aos="fade-up"
            className="flex w-full flex-col justify-center gap-1 text-white sm:gap-4 sm:text-xl md:text-xl lg:text-3xl"
          >
            <p>지난 36년간 지역사회 복음화와 세계 선교를 위해</p>
            <p>그리고 다음 세대 믿음의 자녀들을 위해</p>
            <p>눈물로 기도하며 헌신하였습니다.</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex w-full flex-col justify-center gap-1 text-white sm:gap-4 sm:text-xl md:text-xl lg:text-3xl"
          >
            <p>이제 우리는 한국교회의 영적 유산을</p>
            <p>더욱 잘 계승할 뿐만 아니라,</p>
            <p>시대적 변화에 발맞추어 오늘날 우리에게 주신</p>
            <p>교회의 사명을 탁월하게 감당하려고 합니다.</p>
          </div>
          <div
            data-aos="fade-up"
            className="flex w-full flex-col justify-center gap-1 text-white sm:gap-4 sm:text-xl md:text-xl lg:text-3xl"
          >
            <p>총성 없는 전쟁과도 같았던 코로나 시대를 보내면서,</p>
            <p>명문교회는 한 영혼을 천하보다 귀하게 여기시는</p>
            <p>주님의 마음으로 성도님들 한 영혼 한 영혼을 위해</p>
            <p>회복과 소망의 복음을 전하겠습니다.</p>
          </div>
        </div>
      </CustomImage>
      <div className="flex w-full flex-col">
        <AboutPromiseComponent
          direction="left"
          img="/images/about/ministryVision/1.jpg"
          title1="양을 위하여 목숨을 버리는"
          title2="목자의 심정으로 목회하겠습니다."
          text1="영혼을 구원하기 위해 성육신하신"
          text2="예수님의 마음을 본받아,"
          text3="명문교회 모든 성도님들을 위한 한 알의 밀알이 되어"
          text4="일사각오로 성도님들을 사랑하며 섬기겠습니다."
        />
        <AboutPromiseComponent
          direction="right"
          img="/images/about/ministryVision/2.jpg"
          title1="생명을 걸고 설교 준비를 하고,"
          title2="삶으로 설교하겠습니다."
          text1="명문의 강단이 푸른 감람나무 같고 물댄 동산 같아서"
          text2="매주일 생명의 말씀이 선포되도록 하겠습니다."
          text3="설교자의 삶과 인격이 설교를 통해 흘러갈 수 있도록"
          text4="겸손하게 은혜를 구하며 말씀을 전하겠습니다."
        />
        <AboutPromiseComponent
          direction="left"
          img="/images/about/ministryVision/3.jpeg"
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

export default AboutMinistryVision;
