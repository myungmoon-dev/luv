"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  BookOpen,
  GraduationCap,
  Sparkles,
  Users,
  Waypoints,
} from "lucide-react";

import { EducationDepartmentNav } from "@/components/education/education-department-nav";

const departments = [
  {
    href: "/education/infants",
    label: "영아부",
    description: "말씀·기도·사랑으로 복음의 씨앗을 심습니다",
    Icon: Baby,
  },
  {
    href: "/education/toddlers",
    label: "유치부",
    description: "하나님을 경외하며 자라는 유아 공동체",
    Icon: Sparkles,
  },
  {
    href: "/education/elementary",
    label: "유초등부",
    description: "찬양과 예배를 배우며 세워지는 아이들",
    Icon: BookOpen,
  },
  {
    href: "/education/high",
    label: "중고등부",
    description: "말씀 안에서 세계관을 세우는 청소년",
    Icon: GraduationCap,
  },
  {
    href: "/education/youth-adults2",
    label: "청년부",
    description: "예배와 교제로 하나 되는 청년 공동체",
    Icon: Users,
  },
  {
    href: "/education/bridge",
    label: "브릿지",
    description: "미혼 직장인을 위한 예배와 교제 공동체",
    Icon: Waypoints,
  },
] as const;

const visions: { lead: string; emphasis: string; bold: string }[] = [
  {
    lead: "하나님을 영화롭게 하며",
    emphasis: "하나님을 깊이 만나는 ",
    bold: "예배 공동체",
  },
  {
    lead: "교회와 가정이 협력하여 분명한 복음과 말씀으로",
    emphasis: "다음세대를 세우는 ",
    bold: "교육공동체",
  },
  {
    lead: "교사와 부모가 다음세대에게 믿음의 선배로서",
    emphasis: "본을 보이는 ",
    bold: "신앙 전수 공동체",
  },
  {
    lead: "이웃을 섬기며 복음을 전하는",
    emphasis: "",
    bold: "선교 공동체",
  },
];

const coreValues = [
  { n: "01", title: "영적 변화와 회심이 일어나는 교육" },
  { n: "02", title: "성경의 핵심 진리를 이해하도록 돕는 교육" },
  { n: "03", title: "그리스도인의 삶으로 나아가는 교육" },
  { n: "04", title: "교회와 가정의 동역으로 이루어지는 교육" },
];

export function EducationMainPage() {
  return (
    <div className="bg-[#fafbfc]">
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <EducationDepartmentNav />
      </div>
      {/* 히어로 */}
      <section className="relative min-h-[min(52vh,420px)] w-full overflow-hidden">
        <Image
          src="/images/education/banner.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0a1638]/88 via-[#1e2a4a]/75 to-[#1e2a4a]/55"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(52vh,420px)] max-w-5xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:px-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/80">명문교회 교육</p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">다음세대</h1>
          <p className="mt-4 max-w-xl text-lg font-medium text-white/95 sm:text-xl md:text-2xl">
            일어나라 빛을 발하라!
          </p>
        </div>
      </section>

      {/* 사명 */}
      <section className="relative -mt-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#1e2a4a]/10 bg-white shadow-[0_20px_50px_-24px_rgba(30,42,74,0.35)]">
          <div className="relative aspect-[21/9] min-h-[160px] w-full sm:aspect-[2.4/1] sm:min-h-[200px]">
            <Image
              src="/images/education/vision1.jpg"
              alt=""
              fill
              className="object-cover brightness-[0.55]"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1638]/90 via-[#1e2a4a]/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/80">사명 선언문</p>
              <p className="mt-2 text-lg font-semibold leading-snug text-white sm:text-xl md:text-2xl">
                명문교회 교육부서는
              </p>
              <p className="mt-1 text-lg font-semibold leading-snug text-white sm:text-xl md:text-2xl">
                하나님을 경외하는 다음세대를 세우기 위해 존재한다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 부서 카드 */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <header className="mb-10 text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-px w-8 bg-[#1e2a4a]" aria-hidden />
            <span className="text-sm font-semibold tracking-wide text-[#496674]">부서 안내</span>
            <span className="h-px w-8 bg-[#1e2a4a]" aria-hidden />
          </div>
          <h2 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">함께 걸어가는 다음세대</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#496674] sm:text-base">
            연령별 사역을 선택해 각 부서 소개를 확인할 수 있습니다.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {departments.map(({ href, label, description, Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1e2a4a]/25 hover:shadow-md"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[#1e2a4a]/[0.08] text-[#1e2a4a] transition-colors group-hover:bg-[#1e2a4a] group-hover:text-white">
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#1e2a4a]">{label}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#496674]">{description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1e2a4a] opacity-0 transition-opacity group-hover:opacity-100">
                  자세히
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 비전 */}
      <section className="border-y border-[#E6E6E6] bg-white py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">명문교회 다음세대 비전</h2>
            <p className="mt-2 text-sm text-[#496674]">하나님 앞에서 세워가는 네 가지 방향</p>
          </div>
          <ol className="space-y-4">
            {visions.map((v, i) => (
              <li
                key={v.bold}
                className="rounded-2xl border border-[#E6E6E6] bg-[#fafbfc] px-5 py-5 sm:px-7 sm:py-6"
              >
                <span className="text-xs font-bold text-[#1e2a4a]/50">VISION {String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-[15px] leading-relaxed text-[#333] sm:text-base">{v.lead}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#333] sm:text-base">
                  {v.emphasis}
                  <span className="font-semibold text-[#1e2a4a]">{v.bold}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 핵심가치 */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">명문교회 다음세대 핵심가치</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {coreValues.map((item) => (
            <div
              key={item.n}
              className="relative overflow-hidden rounded-2xl border border-[#1e2a4a]/12 bg-gradient-to-br from-white to-[#f0f4fa] p-6 shadow-sm"
            >
              <span className="absolute right-4 top-4 text-4xl font-black tabular-nums text-[#1e2a4a]/[0.07]">
                {item.n}
              </span>
              <p className="relative text-sm font-semibold uppercase tracking-wider text-[#496674]">Value {item.n}</p>
              <p className="relative mt-3 text-base font-medium leading-snug text-[#1e2a4a] sm:text-lg">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
