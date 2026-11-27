"use client";

import { useQuery } from "@tanstack/react-query";
import { CustomImage } from "@/components/about/custom-image";
import { FadeIn } from "@/components/about/fade-in";
import { Eyebrow, SECTION_BODY, SECTION_H2 } from "@/components/about/section-ui";
import { getPastorProfile } from "@/lib/api-pastor";
import { cn } from "@/lib/utils";

const PASTOR_NAME = "이대식";

// 제목 + PDF 원문 문장
const CHURCH_IDENTITIES = [
  { title: "하나님의 주권", desc: "하나님의 주권을 선포하는 교회입니다." },
  { title: "예배의 영광", desc: "예배의 영광을 회복하는 교회입니다." },
  { title: "주의 사랑", desc: "주의 사랑으로 사랑하는 교회입니다." },
  { title: "제자훈련", desc: "제자훈련으로 평신도를 세우는 교회입니다." },
  { title: "다음 세대", desc: "주의 사랑으로 다음 세대를 세우는 교회입니다." },
  { title: "사랑의 실천", desc: "세상 속에 사랑을 실천함으로 복음을 전하는 교회입니다." },
];

const H2 = SECTION_H2;
const BODY = SECTION_BODY;

export function SeniorPastorContent() {
  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ["pastor", "profile"],
    queryFn: getPastorProfile,
  });
  const photoUrl = profile?.bottomImageUrl ?? "";

  return (
    // -mb / lg:-mx: 부모 LeaderTabs의 하단·좌우 패딩을 상쇄해 배경을 화면 끝까지 채움
    <div className="-mb-12 break-keep bg-white text-[#191F28] antialiased sm:-mb-14 lg:-mx-12">
      {/* 1. Hero */}
      <section className="max-w-285 mx-auto px-6 pb-10 pt-16 text-center sm:pb-14 sm:pt-24 lg:pb-16 lg:pt-28">
        <FadeIn>
          <Eyebrow className="mb-6">인사말</Eyebrow>
          <h2 className="text-[2.375rem] font-extrabold leading-[1.22] tracking-[-0.035em] sm:text-6xl lg:text-[76px]">
            이 땅의 유일한 소망은
            <br />
            예수 그리스도이십니다
          </h2>
        </FadeIn>
        <FadeIn delay={180}>
          <p className="mt-7 text-lg leading-relaxed text-[#4E5968] sm:text-[22px]">
            그리고 그분의 몸 된 교회는
            <br />이 세상을 향한 하나님의 희망입니다.
          </p>
        </FadeIn>
      </section>

      {/* 2. 환영합니다 — 히어로 부제보다 한 단계 낮은 회색 문단(진하기가 위→아래로 내려가도록) */}
      <section className="max-w-240 mx-auto px-6 pb-24 text-center sm:pb-32 lg:pb-40">
        <FadeIn>
          <p className="text-[17px] font-semibold leading-[1.9] tracking-[-0.02em] text-[#1E3A8A] sm:text-xl">
            명문교회 홈페이지를 찾아주신 모든 분을 진심으로 환영합니다.
            <br />
            <span className="font-normal text-[#6B7684]">
              이 공간을 통하여 예수 그리스도 안에 있는 사랑과 행복을 경험하길 소망합니다.
            </span>
          </p>
        </FadeIn>
      </section>

      {/* 3. 말씀 (요 13:34) — 헤더 nav(#0A1E51)보다 한 톤 밝은 네이비: 스크롤 시 헤더와 경계가 보이도록 */}
      <section className="bg-[#102A63] text-white">
        <FadeIn className="max-w-240 mx-auto px-6 py-20 text-center sm:py-24 lg:py-28">
          <blockquote>
            {/* 큰 따옴표를 문구 위·아래에 장식으로 배치, 출처는 따옴표 안쪽 */}
            <span
              aria-hidden
              className="block h-10 font-serif text-7xl font-black leading-none text-[#5B7FC7] sm:h-14 sm:text-8xl"
            >
              “
            </span>
            <div className="mt-4 sm:mt-6">
              <p className="text-[1.625rem] font-bold leading-normal tracking-[-0.025em] sm:text-[32px] lg:text-[40px]">
                새 계명을 너희에게 주노니 서로 사랑하라
                <br />
                내가 너희를 사랑한 것 같이
                <br />
                너희도 서로 사랑하라
              </p>
              <cite className="mt-5 block text-base font-medium not-italic text-white/75 sm:mt-6 sm:text-lg">
                요한복음 13:34
              </cite>
            </div>
            <span
              aria-hidden
              className="mt-4 block h-10 font-serif text-7xl font-black leading-none text-[#5B7FC7] sm:mt-6 sm:h-14 sm:text-8xl"
            >
              ”
            </span>
          </blockquote>
        </FadeIn>
      </section>

      {/* 4. 본문 — 담임목사 사진 + 목회 메시지 */}
      <section>
        <div className="max-w-285 mx-auto flex flex-col gap-10 px-6 py-24 sm:py-32 md:flex-row md:items-center md:gap-16 lg:gap-24 lg:py-40">
          {/* 담임목사 사진 — 관리자 "프로필 이미지"(bottomImageUrl) */}
          <FadeIn className="w-full md:w-[42%] md:shrink-0">
            {isProfileLoading ? (
              <div className="aspect-4/5 w-full animate-pulse rounded-[28px] bg-[#F4F6F9]" />
            ) : (
              <CustomImage
                className="aspect-4/5 w-full overflow-hidden rounded-[28px] bg-[#F4F6F9]"
                src={photoUrl}
                alt={`강단에서 말씀을 전하는 ${PASTOR_NAME} 담임목사`}
                imgClass="object-cover object-[50%_70%]"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            )}
          </FadeIn>
          <FadeIn delay={150} className="flex-1">
            <h3 className={H2}>
              사랑은 우리의 힘에서
              <br />
              나오지 않습니다
            </h3>
            <div className={cn(BODY, "mt-8 flex flex-col gap-6 sm:mt-10")}>
              <p>
                주님께서는 제자들에게 “내가 너희를 사랑한 것 같이” 서로 사랑하라고 하셨습니다.
                사랑은 우리의 힘에서 나오지 않습니다.{" "}
                <strong className="font-bold text-[#191F28]">
                  먼저 우리를 사랑하신 주님의 사랑에서 시작됩니다.
                </strong>
              </p>
              <p>
                그래서 명문교회는 죽기까지 우리를 사랑하신 예수 그리스도의 사랑을 기억하며 하나님을
                사랑하고 이웃을 사랑하는 교회, 주의 사랑으로 사랑하며 살아가는 교회가 되기를
                소망합니다.
              </p>
              <p>
                명문교회의 행복은 주의 사랑으로 사랑하는 목회자와 성도가 함께 있다는 것입니다. 이
                사랑 안에서 우리는 이 비전을 향해 함께 달려갑니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. 비전 — 회색 배경 위 흰 카드 */}
      <section className="bg-[#F4F6F9]">
        <div className="max-w-285 lg:py-38 mx-auto px-6 py-24 sm:py-32">
          <FadeIn>
            <Eyebrow>비전</Eyebrow>
            <h3 className={H2}>명문교회는</h3>
          </FadeIn>
          <ul className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {CHURCH_IDENTITIES.map((item, i) => (
              <li key={item.title}>
                <FadeIn
                  delay={(i % 3) * 100}
                  className="flex h-full flex-col gap-3.5 rounded-3xl bg-white px-8 pb-10 pt-9"
                >
                  <span className="text-[15px] font-extrabold text-[#2453C9]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-[22px] font-extrabold leading-[1.35] tracking-[-0.02em] sm:text-2xl">
                    {item.title}
                  </h4>
                  <p className="text-base leading-[1.7] text-[#4E5968] sm:text-[17px]">
                    {item.desc}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. 초대 — 한 단 구성: 인용·맺음말 → 초대 문구 → 우측 서명 (스타일은 페이지 톤 유지) */}
      <section className="max-w-285 mx-auto px-6 py-24 sm:py-32 lg:py-40">
        <FadeIn>
          <blockquote className="text-lg font-bold leading-[1.6] tracking-[-0.02em] sm:text-[22px]">
            “너희가 서로 사랑하면 이로써 모든 사람이 너희가 내 제자인 줄 알리라”
            <cite className="mt-2 block text-sm font-semibold not-italic text-[#2453C9] sm:text-base">
              요한복음 13:35
            </cite>
          </blockquote>
          <p className={cn(BODY, "mt-8")}>
            교회가 세상의 희망이 되는 길은 화려함에 있지 않고, 주님께 받은 사랑으로 서로 사랑하는 데
            있습니다. <br />그 사랑을 통해 세상이 예수 그리스도를 보게 될 것입니다.
            <br /> 명문교회는 이 사랑으로 주님의 제자 됨을 나타내는 교회가 되겠습니다.
          </p>
        </FadeIn>
        <FadeIn delay={150}>
          <h3 className={cn(H2, "mt-16 sm:mt-20")}>그 사랑의 자리에 여러분을 초대합니다</h3>
          <div className="mt-12 flex items-center justify-end gap-4 border-t border-[#E5E8EB] pt-8">
            <p className="flex items-baseline gap-2.5">
              <span className="text-sm text-[#6B7684] sm:text-[15px]">명문교회 담임목사</span>
              <span className="text-lg font-bold sm:text-xl">{PASTOR_NAME}</span>
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
