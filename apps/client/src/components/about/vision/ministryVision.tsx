import CustomImage from "@/components/customImage";
import Image from "next/image";
import AboutPromiseComponent from "../promise";

const AboutMinistryVision = () => {
  return (
    <div className="flex flex-col py-7">
      <p className="mb-5 text-center text-lg font-medium text-[#222222]">名門(명문)의 의미</p>
      <div className="mb-16 flex gap-4 overflow-x-scroll px-5">
        <div className="flex flex-col gap-4">
          <div className="relative h-[362px] w-[323px]">
            <Image src="/images/about/myungmoon.jpg" fill={true} alt="사진" className="rounded-xl object-cover" />
          </div>
          <p className="text-[#222222]">
            지역과 민족을 품고
            <br />
            세계와 열방을 향해 나아가는 명문교회입니다.
            <br />
            <br />
            대한예수교장로회(합동)에 속하였으며,
            <br />
            이 문을 들어오는 자마다
            <br />
            어린양의 생명책에 이름이 기록되며,
            <br />
            아브람이 아브라함으로,
            <br />
            야곱이 이스라엘로 새 이름을 얻어서
            <br />
            새로운 삶을 얻는 교회라는 의미를 가지고 있습니다.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative h-[362px] w-[323px]">
            <Image src="/images/about/myungmoon.jpg" fill={true} alt="사진" className="rounded-xl object-cover" />
          </div>
          <p className="text-[#222222]">
            명문의 첫 두글자 영문MM을 형상화하여
            <br />
            만들어졌습니다
            <br />
            <br />
            성부, 성자, 성령을 의미하는 세 개의 기둥으로
            <br />
            세워진 문을 통해 생명의 이름을 얻게 되는
            <br />
            명문교회 설립의도가 나타나 있습니다.
            <br />
            <br />
            생명의 문은 열려진 상태이며,
            <br />
            누구든지 하나님의 은혜 앞에 나오는 사람은
            <br />
            생명의 이름을 얻고 구원의 길을 가게 됩니다.
          </p>
        </div>
      </div>
      <div className="mb-10 flex flex-col gap-4 px-5">
        <div className="flex flex-col gap-4 rounded-xl bg-[#001f54]/15 px-4 pb-5 pt-7">
          <p className="text-[17px] font-medium text-[#222222]">
            양을 위하여 목숨을 버리는
            <br />
            목자의 심정으로 목회하겠습니다.
          </p>
          <p className="text-[15px] text-[#4F4F4F]">
            영혼을 구원하기 위해 성육신하신
            <br />
            예수님의 마음을 본받아,
            <br />
            명문교회 모든 성도님들을 위한 한 알의 밀알이 되어
            <br />
            일사각오로 성도님들을 사랑하며 섬기겠습니다.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-xl bg-[#001f54]/15 px-4 pb-5 pt-7">
          <p className="text-[17px] font-medium text-[#222222]">
            생명을 걸고 설교 준비를 하고,
            <br />
            삶으로 설교하겠습니다.
          </p>
          <p className="text-[15px] text-[#4F4F4F]">
            명문의 강단이 푸른 감람나무 같고
            <br />
            물댄 동산 같아서 매주일 생명의 말씀이
            <br />
            선포되도록 하겠습니다. 설교자의 삶과 인격이
            <br />
            설교를 통해 흘러갈 수 있도록 겸손하게 은혜를 구하며
            <br />
            말씀을 전하겠습니다.
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-xl bg-[#001f54]/15 px-4 pb-5 pt-7">
          <p className="text-[17px] font-medium text-[#222222]">
            기도하기를 쉬는 죄를 범하지 않고,
            <br />
            눈물과 무릎으로 목회하겠습니다.
          </p>
          <p className="text-[15px] text-[#4F4F4F]">
            사람의 능력이 아니라,
            <br />
            하나님의 능력으로 목회하겠습니다.
            <br />
            무릎으로 교회를 세우고,
            <br />
            성도님들을 위해 간절한 눈물로 기도하겠습니다.
          </p>
        </div>
      </div>
      <div className="mb-4 h-[8px] w-full bg-[#E6E6E6]" />
      <div className="flex flex-col gap-4 px-5">
        <p className="text-xl font-bold text-[#001f54]">명문교회 5대 핵심 가치</p>
        <div className="flex flex-col">
          <hr className="border-[#747474]" />
          <details>
            <summary className="flex h-[66px] items-center justify-between border-b border-b-[#BBBBBB]">
              <div className="flex flex-col font-medium">
                <p className="text-lg">목자의 심정</p>
                <p>The Heart of Shepherd</p>
              </div>
              <p>화살표 아이콘</p>
            </summary>
            <div className="border-b border-b-[#BBBBBB] bg-[#F7F7F7] p-5 text-[#6E6E6E]">
              ‘내 양을 치라’고 하신
              <br />
              주님의 명령에 순종하여,
              <br />
              모든 것을 헌신하는 마음으로
              <br />
              성도를 목양하고 돌봅니다.
            </div>
          </details>
          <details>
            <summary className="flex h-[66px] items-center justify-between border-b border-b-[#BBBBBB]">
              <div className="flex flex-col font-medium">
                <p className="text-lg">선교적 교회</p>
              </div>
              <p>화살표 아이콘</p>
            </summary>
            <div className="border-b border-b-[#BBBBBB] bg-[#F7F7F7] p-5 text-[#6E6E6E]">
              제자들의 발을 씻겨 주신
              <br />
              예수님의 겸손한 모범을 따라
              <br />
              예수님처럼 교회와 세상을 섬깁니다.
            </div>
          </details>
          <details>
            <summary className="flex h-[66px] items-center justify-between border-b border-b-[#BBBBBB]">
              <div className="flex flex-col font-medium">
                <p className="text-lg">치유하는 교회</p>
              </div>
              <p>화살표 아이콘</p>
            </summary>
            <div className="border-b border-b-[#BBBBBB] bg-[#F7F7F7] p-5 text-[#6E6E6E]">
              다윗이 그 마음 완전함과
              <br />
              손의 능숙함으로 사명을 감당한 것처럼,
              <br />
              최고 수준의 사역을 추구합니다.
            </div>
          </details>
          <details>
            <summary className="flex h-[66px] items-center justify-between border-b border-b-[#BBBBBB]">
              <div className="flex flex-col font-medium">
                <p className="text-lg">한 영혼의 소중함</p>
                <p>The Importance of Individual</p>
              </div>
              <p>화살표 아이콘</p>
            </summary>
            <div className="border-b border-b-[#BBBBBB] bg-[#F7F7F7] p-5 text-[#6E6E6E]">
              천하보다 귀한 한 영혼을
              <br />
              하나님의 마음으로 품고
              <br />
              목양의 사각지대가 없는
              <br />
              돌봄과 사랑의 공동체를 꿈꿉니다.
            </div>
          </details>
          <details>
            <summary className="flex h-[66px] items-center justify-between border-b border-b-[#BBBBBB]">
              <div className="flex flex-col font-medium">
                <p className="text-lg">지상명령</p>
                <p>The Great Commission</p>
              </div>
              <p>화살표 아이콘</p>
            </summary>
            <div className="border-b border-b-[#BBBBBB] bg-[#F7F7F7] p-5 text-[#6E6E6E]">
              주님 다시 오시는 날까지
              <br />
              세계와 열방을 품고 치유하는
              <br />
              선교공동체로 나아갑니다.
            </div>
          </details>
        </div>
      </div>
    </div>
  );

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
