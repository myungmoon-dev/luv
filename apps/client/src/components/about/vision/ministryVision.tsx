import ImageTextCard from "./ImageTextCard";
import PromiseCard from "./PromiseCard";
import CoreValueItem from "./CoreValueItem";

const AboutMinistryVision = () => {
  return (
    <div className="flex flex-col py-7 md:py-8 lg:pt-20">
      <p className="mb-5 text-center text-lg font-medium text-[#222222] sm:text-2xl sm:font-bold md:text-3xl md:mb-12 md:text-start md:px-12 lg:px-16">名門(명문)의 의미</p>
      <div className="mb-16 flex gap-4 overflow-x-scroll px-5 sm:mb-24 sm:px-7 md:mb-32 md:px-12 md:gap-12 lg:flex-col lg:px-16 lg:gap-24">
        <ImageTextCard imageSrc="/images/about/myungmoon.jpg" imageAlt="사진">
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
        </ImageTextCard>
        <ImageTextCard imageSrc="/images/about/myungmoon.jpg" imageAlt="사진">
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
        </ImageTextCard>
      </div>
      <div className="mb-10 flex flex-col gap-4 px-5 sm:mb-24 sm:gap-8 sm:px-7 md:px-12 md:mb-20">
        <PromiseCard>
          <p className="text-[17px] font-medium text-[#222222] sm:text-xl md:text-2xl">
            양을 위하여 목숨을 버리는
            <br />
            목자의 심정으로 목회하겠습니다.
          </p>
          <p className="text-[15px] text-[#4F4F4F] sm:text-[17px] md:text-xl">
            영혼을 구원하기 위해 성육신하신
            <br />
            예수님의 마음을 본받아,
            <br />
            명문교회 모든 성도님들을 위한 한 알의 밀알이 되어
            <br />
            일사각오로 성도님들을 사랑하며 섬기겠습니다.
          </p>
        </PromiseCard>
        <PromiseCard>
          <p className="text-[17px] font-medium text-[#222222] sm:text-xl md:text-2xl">
            생명을 걸고 설교 준비를 하고,
            <br />
            삶으로 설교하겠습니다.
          </p>
          <p className="text-[15px] text-[#4F4F4F] sm:text-[17px] md:text-xl">
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
        </PromiseCard>
        <PromiseCard>
          <p className="text-[17px] font-medium text-[#222222] sm:text-xl md:text-2xl">
            기도하기를 쉬는 죄를 범하지 않고,
            <br />
            눈물과 무릎으로 목회하겠습니다.
          </p>
          <p className="text-[15px] text-[#4F4F4F] sm:text-[17px] md:text-xl">
            사람의 능력이 아니라,
            <br />
            하나님의 능력으로 목회하겠습니다.
            <br />
            무릎으로 교회를 세우고,
            <br />
            성도님들을 위해 간절한 눈물로 기도하겠습니다.
          </p>
        </PromiseCard>
      </div>
      <div className="mb-4 h-[8px] w-full bg-[#E6E6E6] lg:hidden" />
      <div className="flex flex-col gap-4 px-5 sm:mb-20 md:gap-7 lg:gap-20">
        <p className="text-xl font-bold text-[#001f54] sm:text-2xl md:text-3xl">명문교회 5대 핵심 가치</p>
        <div className="flex flex-col">
          <hr className="border-[#747474]" />
          <CoreValueItem title="목자의 심정" subtitle="The Heart of Shepherd">
            ‘내 양을 치라’고 하신
            <br />
            주님의 명령에 순종하여,
            <br />
            모든 것을 헌신하는 마음으로
            <br />
            성도를 목양하고 돌봅니다.
          </CoreValueItem>
          <CoreValueItem title="선교적 교회">
            제자들의 발을 씻겨 주신
            <br />
            예수님의 겸손한 모범을 따라
            <br />
            예수님처럼 교회와 세상을 섬깁니다.
          </CoreValueItem>
          <CoreValueItem title="치유하는 교회">
            다윗이 그 마음 완전함과
            <br />
            손의 능숙함으로 사명을 감당한 것처럼,
            <br />
            최고 수준의 사역을 추구합니다.
          </CoreValueItem>
          <CoreValueItem title="한 영혼의 소중함" subtitle="The Importance of Individual">
            천하보다 귀한 한 영혼을
            <br />
            하나님의 마음으로 품고
            <br />
            목양의 사각지대가 없는
            <br />
            돌봄과 사랑의 공동체를 꿈꿉니다.
          </CoreValueItem>
          <CoreValueItem title="지상명령" subtitle="The Great Commission">
            주님 다시 오시는 날까지
            <br />
            세계와 열방을 품고 치유하는
            <br />
            선교공동체로 나아갑니다.
          </CoreValueItem>
        </div>
      </div>
    </div>
  );
};

export default AboutMinistryVision;
