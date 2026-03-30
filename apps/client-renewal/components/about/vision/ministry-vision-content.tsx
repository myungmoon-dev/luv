import { CoreValueItem } from "@/components/about/vision/core-value-item";
import { ImageTextCard } from "@/components/about/vision/image-text-card";
import { PromiseCard } from "@/components/about/vision/promise-card";

export function MinistryVisionContent() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col pb-14 pt-6 sm:pt-8 md:pb-20 lg:px-16 lg:pt-16">
      <div className="mb-8 px-4 sm:mb-12 sm:px-6 md:mb-16 md:px-10">
        <div className="mb-5 flex flex-col items-center gap-3 sm:mb-8 md:flex-row md:items-end md:gap-4">
          <div className="h-[3px] w-8 bg-[#1e2a4a]" aria-hidden />
          <p className="text-center text-2xl font-bold tracking-tight text-[#1e2a4a] sm:text-3xl md:text-start md:text-4xl">
            名門(명문)의 의미
          </p>
        </div>
      </div>

      <div className="mb-14 flex flex-col gap-12 px-4 sm:mb-20 sm:gap-14 sm:px-6 md:mb-24 md:gap-16 md:px-10 lg:gap-20">
        <ImageTextCard
          imageSrc="/images/about/vision1.jpg"
          imageAlt="명문교회 비전 이미지"
          objectPosition="object-top"
        >
          <p className="text-lg font-semibold leading-snug text-[#1e2a4a] sm:text-xl md:text-2xl">
            지역과 민족을 품고
            <br />
            세계와 열방을 향해 나아가는 명문교회입니다.
          </p>
          <p className="text-sm leading-relaxed text-[#496674] sm:text-base">
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
            <span className="font-medium text-[#1e2a4a]">새로운 삶을 얻는 교회</span>라는 의미를 가지고 있습니다.
          </p>
        </ImageTextCard>
        <ImageTextCard reverse imageSrc="/images/about/vision2.jpg" imageAlt="명문교회 로고 이미지">
          <p className="text-base font-medium leading-relaxed text-[#496674] sm:text-lg">
            명문의 첫 두글자 영문 <span className="font-semibold text-[#1e2a4a]">MM</span>을 형상화하여
            <br />
            만들어졌습니다
          </p>
          <p className="text-lg font-semibold leading-snug text-[#1e2a4a] sm:text-xl">
            성부, 성자, 성령을 의미하는 세 개의 기둥으로
            <br />
            세워진 문을 통해 생명의 이름을 얻게 되는
            <br />
            명문교회 설립의도가 나타나 있습니다.
          </p>
          <p className="text-sm leading-relaxed text-[#496674] sm:text-base">
            생명의 문은 열려진 상태이며,
            <br />
            누구든지 <span className="font-medium text-[#333]">하나님의 은혜</span> 앞에 나오는 사람은
            <br />
            생명의 이름을 얻고 구원의 길을 가게 됩니다.
          </p>
        </ImageTextCard>
      </div>

      <div className="mb-10 flex flex-col gap-4 px-4 sm:mb-16 sm:gap-6 sm:px-6 md:mb-20 md:px-10">
        <PromiseCard>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#496674]">목회 서원</p>
          <p className="text-xl font-bold leading-tight text-[#1e2a4a] sm:text-2xl md:text-[1.65rem]">
            양을 위하여 목숨을 버리는
          </p>
          <p className="-mt-0.5 text-lg font-semibold text-[#1e2a4a]/95 sm:text-xl">
            목자의 심정으로 목회하겠습니다.
          </p>
          <p className="border-t border-[#1e2a4a]/10 pt-4 text-sm leading-[1.8] text-[#496674] sm:text-base">
            영혼을 구원하기 위해 성육신하신
            <br />
            <span className="font-medium text-[#333]">예수님의 마음</span>을 본받아,
            <br />
            명문교회 모든 성도님들을 위한 한 알의 밀알이 되어
            <br />
            일사각오로 성도님들을 사랑하며 섬기겠습니다.
          </p>
        </PromiseCard>
        <PromiseCard>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#496674]">강단</p>
          <p className="text-xl font-bold leading-tight text-[#1e2a4a] sm:text-2xl md:text-[1.65rem]">
            생명을 걸고 설교 준비를 하고,
          </p>
          <p className="-mt-0.5 text-lg font-semibold text-[#1e2a4a]/95 sm:text-xl">
            삶으로 설교하겠습니다.
          </p>
          <p className="border-t border-[#1e2a4a]/10 pt-4 text-sm leading-[1.8] text-[#496674] sm:text-base">
            명문의 강단이 푸른 감람나무 같고
            <br />
            물댄 동산 같아서 매주일 <span className="font-medium text-[#333]">생명의 말씀</span>이
            <br />
            선포되도록 하겠습니다. 설교자의 삶과 인격이
            <br />
            설교를 통해 흘러갈 수 있도록 겸손하게 은혜를 구하며
            <br />
            말씀을 전하겠습니다.
          </p>
        </PromiseCard>
        <PromiseCard>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#496674]">기도</p>
          <p className="text-xl font-bold leading-tight text-[#1e2a4a] sm:text-2xl md:text-[1.65rem]">
            기도하기를 쉬는 죄를 범하지 않고,
          </p>
          <p className="-mt-0.5 text-lg font-semibold text-[#1e2a4a]/95 sm:text-xl">
            눈물과 무릎으로 목회하겠습니다.
          </p>
          <p className="border-t border-[#1e2a4a]/10 pt-4 text-sm leading-[1.8] text-[#496674] sm:text-base">
            사람의 능력이 아니라,
            <br />
            <span className="font-medium text-[#333]">하나님의 능력</span>으로 목회하겠습니다.
            <br />
            무릎으로 교회를 세우고,
            <br />
            성도님들을 위해 간절한 눈물로 기도하겠습니다.
          </p>
        </PromiseCard>
      </div>

      <div className="mb-6 h-2 w-full bg-[#E6E6E6] lg:hidden" aria-hidden />

      <div className="flex flex-col gap-5 px-4 sm:gap-8 sm:px-6 md:gap-10 md:px-10 lg:gap-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-4">
          <div className="h-[3px] w-8 shrink-0 bg-[#1e2a4a]" aria-hidden />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#496674]">Core values</p>
            <h2 className="text-2xl font-bold tracking-tight text-[#1e2a4a] sm:text-3xl md:text-4xl">
              명문교회 5대 핵심 가치
            </h2>
          </div>
        </div>
        <div className="flex flex-col border-t border-[#747474]">
          <CoreValueItem title="목자의 심정" subtitle="The Heart of Shepherd">
            <p className="text-base font-medium text-[#333]">
              ‘내 양을 치라’고 하신
              <br />
              주님의 명령에 순종하여,
            </p>
            <p className="text-sm text-[#496674] sm:text-base">
              모든 것을 헌신하는 마음으로
              <br />
              성도를 목양하고 돌봅니다.
            </p>
          </CoreValueItem>
          <CoreValueItem title="선교적 교회">
            <p className="text-base font-medium italic text-[#333] sm:text-lg">
              제자들의 발을 씻겨 주신
              <br />
              예수님의 겸손한 모범을 따라
            </p>
            <p className="text-sm text-[#496674] sm:text-base">
              예수님처럼 교회와 세상을 섬깁니다.
            </p>
          </CoreValueItem>
          <CoreValueItem title="치유하는 교회">
            <p className="text-sm text-[#496674] sm:text-base">
              다윗이 그 마음 완전함과
              <br />
              손의 능숙함으로 사명을 감당한 것처럼,
            </p>
            <p className="text-base font-semibold text-[#1e2a4a]">
              최고 수준의 사역을 추구합니다.
            </p>
          </CoreValueItem>
          <CoreValueItem title="한 영혼의 소중함" subtitle="The Importance of Individual">
            <p className="text-base font-medium text-[#333]">
              천하보다 귀한 한 영혼을
              <br />
              하나님의 마음으로 품고
            </p>
            <p className="text-sm leading-relaxed text-[#496674] sm:text-base">
              목양의 사각지대가 없는
              <br />
              돌봄과 사랑의 공동체를 꿈꿉니다.
            </p>
          </CoreValueItem>
          <CoreValueItem title="지상명령" subtitle="The Great Commission">
            <p className="text-sm text-[#496674] sm:text-base">
              주님 다시 오시는 날까지
              <br />
              세계와 열방을 품고 치유하는
            </p>
            <p className="text-base font-semibold text-[#1e2a4a] sm:text-lg">
              선교공동체로 나아갑니다.
            </p>
          </CoreValueItem>
        </div>
      </div>
    </div>
  );
}
