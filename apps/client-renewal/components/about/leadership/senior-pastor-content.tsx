"use client";

import type { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { CustomImage } from "@/components/about/custom-image";
import { FadeIn } from "@/components/about/fade-in";
import { getPastorProfile } from "@/lib/api-pastor";

const PASTOR_NAME = "이대식";

/** PDF 시안 색상 */
const NAVY = "text-[#1E3A8A]";
const BAND_BG = "bg-[#EFF3FA]";

/** 강조 키워드 */
function K({ children }: { children: ReactNode }) {
  return <strong className={`font-bold ${NAVY}`}>{children}</strong>;
}

// PDF "명문교회는" 목록 (키워드 강조 위치까지 원문 그대로)
const CHURCH_IDENTITIES: ReactNode[] = [
  <>
    <K>하나님의 주권</K>을 선포하는 교회입니다.
  </>,
  <>
    <K>예배의 영광</K>을 회복하는 교회입니다.
  </>,
  <>
    <K>주의 사랑</K>으로 사랑하는 교회입니다.
  </>,
  <>
    <K>제자훈련</K>으로 <K>평신도를 세우는</K> 교회입니다.
  </>,
  <>
    주의 사랑으로 <K>다음 세대</K>를 세우는 교회입니다.
  </>,
  <>
    세상 속에 <K>사랑을 실천함</K>으로 <K>복음</K>을 전하는 교회입니다.
  </>,
];

const BODY = "text-[15px] leading-[1.85] text-[#4E5968] sm:text-[17px]";

export function SeniorPastorContent() {
  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ["pastor", "profile"],
    queryFn: getPastorProfile,
  });
  const photoUrl = profile?.bottomImageUrl ?? "";

  return (
    // -mb / lg:-mx: 부모 LeaderTabs의 하단·좌우 패딩을 상쇄해 배경을 화면 끝까지 채움
    <div className="-mb-12 break-keep bg-white text-[#191F28] antialiased sm:-mb-14 lg:-mx-12">
      {/* 1. 상단 문구 (연파랑 띠) — 따옴표는 제목만 감싸도록 첫 글자 왼쪽 위 / 마지막 글자 오른쪽 아래 */}
      <section className={BAND_BG}>
        <FadeIn className="max-w-285 mx-auto px-6 py-12 text-center sm:py-16 lg:py-20">
          <h2 className="text-2xl font-bold leading-snug tracking-[-0.03em] text-[#D6142E] sm:text-[32px] lg:text-[36px]">
            <span
              aria-hidden
              className="mr-2 inline-block h-[0.6em] -translate-y-[0.05em] align-top font-serif text-[2.1em] font-black leading-none text-[#1E3A8A]/40 sm:mr-3"
            >
              “
            </span>
            이 땅의 유일한 소망은 예수 그리스도이십니다.
            <span
              aria-hidden
              className="ml-2 inline-block h-[0.6em] translate-y-[0.05em] align-bottom font-serif text-[2.1em] font-black leading-none text-[#1E3A8A]/40 sm:ml-3"
            >
              ”
            </span>
          </h2>
          <p className={`mt-4 text-base sm:mt-5 sm:text-xl ${NAVY}`}>
            그리고 그분의 몸 된 교회는 이 세상을 향한 하나님의 희망입니다.
          </p>
        </FadeIn>
      </section>

      {/* 2. 사진 + 환영 인사·말씀·본문 */}
      <section className="max-w-285 mx-auto flex flex-col gap-10 px-6 py-16 sm:py-20 md:flex-row md:gap-12 lg:gap-16 lg:py-24">
        <FadeIn className="w-full md:w-[40%] md:shrink-0">
          {isProfileLoading ? (
            <div className="aspect-4/5 w-full animate-pulse bg-[#F4F6F9]" />
          ) : (
            <CustomImage
              className="aspect-4/5 w-full overflow-hidden bg-[#F4F6F9]"
              src={photoUrl}
              alt={`강단에서 말씀을 전하는 ${PASTOR_NAME} 담임목사`}
              imgClass="object-cover object-[50%_70%]"
              sizes="(max-width: 768px) 100vw, 460px"
            />
          )}
        </FadeIn>
        <FadeIn delay={120} className="flex-1">
          <h3 className={`text-xl font-bold leading-normal tracking-[-0.02em] sm:text-2xl ${NAVY}`}>
            명문교회 홈페이지를 찾아주신 모든 분을 진심으로 환영합니다.
          </h3>
          <p className={`mt-4 ${BODY}`}>
            이 공간을 통하여 예수 그리스도 안에 있는 사랑과 행복을 경험하길 소망합니다.
          </p>

          {/* 요 13:34 — 왼쪽 네이비 세로선 */}
          <blockquote className="mt-8 border-l-[3px] border-[#1E3A8A]/30 py-1 pl-5 sm:pl-6">
            <p className="text-base font-medium leading-[1.75] text-[#333D4B] sm:text-lg">
              새 계명을 너희에게 주노니 서로 사랑하라
              <br className="hidden sm:block" /> 내가 너희를 사랑한 것 같이 너희도 서로 사랑하라
            </p>
            <cite className={`mt-1.5 block text-sm font-semibold not-italic ${NAVY}`}>
              요한복음 13:34
            </cite>
          </blockquote>

          <div className={`mt-8 flex flex-col gap-5 ${BODY}`}>
            <p>
              주님께서는 제자들에게 “내가 너희를 사랑한 것 같이” 서로 사랑하라고 하셨습니다. 사랑은
              우리의 힘에서 나오지 않습니다. 먼저 우리를 사랑하신 주님의 사랑에서 시작됩니다.
            </p>
            <p>
              그래서 명문교회는 죽기까지 우리를 사랑하신 예수 그리스도의 사랑을 기억하며 하나님을
              사랑하고 이웃을 사랑하는 교회, 주의 사랑으로 사랑하며 살아가는 교회가 되기를
              소망합니다.
            </p>
            <p>
              명문교회의 행복은 주의 사랑으로 사랑하는 목회자와 성도가 함께 있다는 것입니다. <br />
              이 사랑 안에서 우리는 이 비전을 향해 함께 달려갑니다.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 3. 명문교회는 (연파랑 띠, 좌 제목 / 우 목록) */}
      <section className={BAND_BG}>
        <div className="max-w-285 mx-auto flex flex-col gap-8 px-6 py-16 sm:py-20 md:flex-row md:gap-12 lg:gap-16 lg:py-24">
          <FadeIn className="md:w-[40%] md:shrink-0">
            <h3 className={`text-2xl font-bold tracking-[-0.02em] sm:text-[28px] ${NAVY}`}>
              명문교회는
            </h3>
          </FadeIn>
          <FadeIn delay={120} className="flex-1">
            <ul className="border-t-2 border-[#1E3A8A]">
              {CHURCH_IDENTITIES.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-[#D9E0EC] py-4 text-[15px] text-[#333D4B] sm:py-5 sm:text-[17px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 4. 맺음말 + 서명 — 좌 제목이 짧아 이 섹션만 왼쪽 칼럼 30%로 좁힘 */}
      <section className="max-w-285 mx-auto flex flex-col gap-8 px-6 py-16 sm:py-20 md:flex-row md:gap-12 lg:gap-16 lg:py-24">
        <FadeIn className="md:w-[30%] md:shrink-0">
          <h3
            className={`text-2xl font-bold leading-snug tracking-[-0.02em] sm:text-[28px] ${NAVY}`}
          >
            그 사랑의 자리에
            <br />
            여러분을 초대합니다.
          </h3>
        </FadeIn>
        <FadeIn delay={120} className="flex-1">
          <p className={`text-pretty ${BODY}`}>
            주님은{" "}
            <span className="text-[#6B7684]">
              “너희가 서로 사랑하면 이로써 모든 사람이 너희가 내 제자인 줄 알리라”
            </span>
            {/* 붙여 쓴 ”( 사이에서도 줄바꿈 허용(break-keep 때문에 덩어리로 넘어가는 것 방지) */}
            <wbr />
            {/* 출처와 조사 "고"만 붙여서 줄바꿈 시 "고"가 떨어지지 않도록 */}
            <span className="whitespace-nowrap">
              <span className="text-[#6B7684]">(요 13:35)</span>고
            </span>{" "}
            말씀하셨습니다. 교회가 세상의 희망이 되는 길은 화려함에 있지 않고, 주님께 받은 사랑으로
            서로 사랑하는 데 있습니다. 그 사랑을 통해 세상이 예수 그리스도를 보게 될 것입니다.
            명문교회는 이 사랑으로 주님의 제자 됨을 나타내는 교회가 되겠습니다.
          </p>
          <p className="mt-8 flex items-baseline justify-end gap-3 sm:mt-10">
            <span className="text-sm text-[#6B7684] sm:text-base">명문교회 담임목사</span>
            <span className={`text-2xl font-extrabold tracking-[0.12em] sm:text-[28px] ${NAVY}`}>
              {PASTOR_NAME}
            </span>
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
