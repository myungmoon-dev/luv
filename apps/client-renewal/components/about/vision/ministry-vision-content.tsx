import Image from "next/image";

import { FadeIn } from "@/components/about/fade-in";
import { Eyebrow, GRAY_BG, NAVY_BG, SECTION_BODY, SECTION_H2 } from "@/components/about/section-ui";
import { cn } from "@/lib/utils";

const PROMISES = [
  {
    label: "목회 서원",
    title: ["양을 위하여 목숨을 버리는", "목자의 심정으로 목회하겠습니다."],
    body: "영혼을 구원하기 위해 성육신하신 예수님의 마음을 본받아, 명문교회 모든 성도님들을 위한 한 알의 밀알이 되어 일사각오로 성도님들을 사랑하며 섬기겠습니다.",
  },
  {
    label: "강단",
    title: ["생명을 걸고 설교 준비를 하고,", "삶으로 설교하겠습니다."],
    body: "명문의 강단이 푸른 감람나무 같고 물댄 동산 같아서 매주일 생명의 말씀이 선포되도록 하겠습니다. 설교자의 삶과 인격이 설교를 통해 흘러갈 수 있도록 겸손하게 은혜를 구하며 말씀을 전하겠습니다.",
  },
  {
    label: "기도",
    title: ["기도하기를 쉬는 죄를 범하지 않고,", "눈물과 무릎으로 목회하겠습니다."],
    body: "사람의 능력이 아니라, 하나님의 능력으로 목회하겠습니다. 무릎으로 교회를 세우고, 성도님들을 위해 간절한 눈물로 기도하겠습니다.",
  },
];

const CORE_VALUES = [
  {
    title: "목자의 심정",
    subtitle: "The Heart of Shepherd",
    lead: "‘내 양을 치라’고 하신 주님의 명령에 순종하여,",
    body: "모든 것을 헌신하는 마음으로 성도를 목양하고 돌봅니다.",
  },
  {
    title: "선교적 교회",
    lead: "제자들의 발을 씻겨 주신 예수님의 겸손한 모범을 따라",
    body: "예수님처럼 교회와 세상을 섬깁니다.",
  },
  {
    title: "치유하는 교회",
    lead: "다윗이 그 마음 완전함과 손의 능숙함으로 사명을 감당한 것처럼,",
    body: "최고 수준의 사역을 추구합니다.",
  },
  {
    title: "한 영혼의 소중함",
    subtitle: "The Importance of Individual",
    lead: "천하보다 귀한 한 영혼을 하나님의 마음으로 품고",
    body: "목양의 사각지대가 없는 돌봄과 사랑의 공동체를 꿈꿉니다.",
  },
  {
    title: "지상명령",
    subtitle: "The Great Commission",
    lead: "주님 다시 오시는 날까지 세계와 열방을 품고 치유하는",
    body: "선교공동체로 나아갑니다.",
  },
];

export function MinistryVisionContent() {
  return (
    <div className="break-keep bg-white text-[#191F28] antialiased">
      {/* 1. Hero */}
      <section className="max-w-285 mx-auto px-6 pb-16 pt-20 text-center sm:pb-20 sm:pt-28 lg:pt-36">
        <FadeIn>
          <Eyebrow className="mb-6">名門(명문)의 의미</Eyebrow>
          <h2 className="text-[2rem] font-extrabold leading-[1.25] tracking-[-0.035em] sm:text-5xl lg:text-[64px]">
            지역과 민족을 품고
            <br />
            세계와 열방을 향해 나아가는
            <br />
            명문교회입니다
          </h2>
        </FadeIn>
      </section>

      <FadeIn className="max-w-285 mx-auto px-6">
        <div className="aspect-4/3 relative w-full overflow-hidden rounded-[28px] bg-[#F4F6F9] sm:aspect-video">
          <Image
            src="/images/education/banner.jpg"
            alt="명문교회 비전 이미지"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1140px) 100vw, 1140px"
          />
        </div>
      </FadeIn>

      {/* 2. 이름의 의미 */}
      <section className="max-w-285 mx-auto flex flex-col gap-8 px-6 py-24 sm:py-32 md:flex-row md:gap-16 lg:gap-24 lg:py-40">
        <FadeIn className="md:flex-[1_1_380px]">
          <h3 className={SECTION_H2}>
            새로운 삶을
            <br />
            얻는 교회
          </h3>
        </FadeIn>
        <FadeIn delay={150} className={cn(SECTION_BODY, "md:flex-[1_1_480px]")}>
          <p>
            대한예수교장로회(합동)에 속하였으며, 이 문을 들어오는 자마다 어린양의 생명책에 이름이
            기록되며, 아브람이 아브라함으로, 야곱이 이스라엘로 새 이름을 얻어서{" "}
            <strong className="font-bold text-[#191F28]">새로운 삶을 얻는 교회</strong>라는 의미를
            가지고 있습니다.
          </p>
        </FadeIn>
      </section>

      {/* 3. 로고 */}
      <section className={GRAY_BG}>
        <div className="max-w-285 mx-auto flex flex-col gap-10 px-6 py-24 sm:py-32 md:flex-row md:items-center md:gap-16 lg:gap-24 lg:py-40">
          <FadeIn className="md:flex-[1_1_440px]">
            <div className="aspect-4/3 relative w-full overflow-hidden rounded-[28px]">
              <Image
                src="/images/about/vision2.jpg"
                alt="예배에 모인 명문교회 성도들"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={150} className="md:flex-[1_1_440px]">
            <Eyebrow>로고에 담긴 의미</Eyebrow>
            <h3 className="text-2xl font-extrabold leading-[1.4] tracking-[-0.03em] sm:text-[32px]">
              성부, 성자, 성령을 의미하는 세 개의 기둥으로 세워진 문
            </h3>
            <div className={cn(SECTION_BODY, "mt-7 space-y-5")}>
              <p>
                명문의 첫 두글자 영문 <strong className="font-bold text-[#191F28]">MM</strong>을
                형상화하여 만들어졌습니다. 성부, 성자, 성령을 의미하는 세 개의 기둥으로 세워진 문을
                통해 생명의 이름을 얻게 되는 명문교회 설립의도가 나타나 있습니다.
              </p>
              <p>
                생명의 문은 열려진 상태이며, 누구든지{" "}
                <strong className="font-bold text-[#191F28]">하나님의 은혜</strong> 앞에 나오는
                사람은 생명의 이름을 얻고 구원의 길을 가게 됩니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. 목회 서원 (네이비) */}
      <section className={cn(NAVY_BG, "text-white")}>
        <ul className="max-w-285 mx-auto px-6 py-16 sm:py-24 lg:py-28">
          {PROMISES.map((item, i) => (
            <li
              key={item.label}
              className={cn("py-12 sm:py-16", i > 0 && "border-t border-white/15")}
            >
              <FadeIn className="flex flex-col gap-6 md:flex-row md:gap-16 lg:gap-24">
                <div className="md:flex-[1_1_380px]">
                  <p className="mb-4 text-[15px] font-bold text-[#9DB8FF] sm:text-[17px]">
                    {item.label}
                  </p>
                  <h3 className="text-2xl font-extrabold leading-[1.4] tracking-[-0.03em] sm:text-[32px]">
                    {item.title[0]}
                    <br />
                    {item.title[1]}
                  </h3>
                </div>
                <p className={cn(SECTION_BODY, "text-[#C3CCDB] md:flex-[1_1_480px] md:pt-10")}>
                  {item.body}
                </p>
              </FadeIn>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. 5대 핵심 가치 */}
      <section className={GRAY_BG}>
        <div className="max-w-285 lg:py-38 mx-auto px-6 py-24 sm:py-32">
          <FadeIn>
            <Eyebrow>Core values</Eyebrow>
            <h3 className={SECTION_H2}>명문교회 5대 핵심 가치</h3>
          </FadeIn>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {CORE_VALUES.map((item, i) => (
              <li key={item.title}>
                <FadeIn
                  delay={(i % 3) * 100}
                  className="flex h-full flex-col gap-3.5 rounded-3xl bg-white px-8 pb-10 pt-9"
                >
                  <span className="text-[15px] font-extrabold text-[#2453C9]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-[22px] font-extrabold leading-[1.35] tracking-[-0.02em] sm:text-2xl">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="mt-1 text-sm font-medium text-[#8B95A1]">{item.subtitle}</p>
                    )}
                  </div>
                  <p className="text-base leading-[1.7] text-[#4E5968] sm:text-[17px]">
                    {item.lead} <span className="font-semibold text-[#191F28]">{item.body}</span>
                  </p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
