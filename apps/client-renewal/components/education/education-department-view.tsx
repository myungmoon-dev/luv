"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Clock, MapPin, Users } from "lucide-react";

import { EducationDepartmentNav } from "@/components/education/education-department-nav";
import {
  departmentParticle,
  getEducationDepartment,
  type EducationDeptType,
} from "@/lib/data/education-departments";
import { getEducationDepartmentByType } from "@/lib/api-education";
import { cn } from "@/lib/utils";

type Props = {
  type: EducationDeptType;
};

export function EducationDepartmentView({ type }: Props) {
  const fallback = getEducationDepartment(type);
  const { data: fromApi } = useQuery({
    queryKey: ["education", type],
    queryFn: () => getEducationDepartmentByType(type),
    staleTime: 60 * 1000,
  });
  const data = fromApi ?? fallback;
  const particle = departmentParticle(data.department);

  return (
    <div className="bg-[#fafbfc] pb-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <EducationDepartmentNav />
      </div>

      {/* 히어로 */}
      <section className="relative min-h-[200px] w-full sm:min-h-[260px] lg:min-h-[300px]">
        <Image
          src={data.heroImage}
          alt=""
          fill
          priority
          className={cn("object-cover", data.heroImgClass)}
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a1638]/90 via-[#1e2a4a]/55 to-transparent"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[200px] max-w-6xl flex-col justify-end px-4 pb-8 pt-16 sm:min-h-[260px] sm:px-6 sm:pb-10 lg:min-h-[300px] lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/80">명문교회 다음세대</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">{data.department}</h1>
        </div>
      </section>

      {/* 소개 */}
      <section className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
        <h2 className="text-xl font-bold text-[#1e2a4a] sm:text-2xl">
          {`명문교회 ${data.department}${particle}`}
        </h2>
        <p className="mt-6 whitespace-pre-wrap break-keep text-base leading-relaxed text-[#333] sm:text-lg sm:leading-loose">
          {data.introduction}
        </p>
      </section>

      {/* 갤러리 */}
      {data.imgs.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {data.imgs.map((src, idx) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-sm"
              >
                <Image
                  src={src}
                  alt={`${data.department} 소개 이미지 ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* 안내 */}
      <section className={cn(data.imgs.length > 0 ? "mt-14 sm:mt-16" : "mt-0")}>
        <div className="bg-[#1e2a4a] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-xl font-bold text-white sm:text-2xl">
              {data.department} 안내
            </h2>
            <div
              className={cn(
                "mt-10 grid grid-cols-1 gap-6 sm:gap-8",
                data.meetingTime ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3",
              )}
            >
              <div className="flex flex-col items-center rounded-2xl bg-white/10 px-4 py-6 text-center backdrop-blur-sm">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-white/15 text-white">
                  <Users className="size-6" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="text-sm font-semibold text-white/90">대상</p>
                <p className="mt-2 break-keep text-sm leading-relaxed text-white/85">{data.target}</p>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-white/10 px-4 py-6 text-center backdrop-blur-sm">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-white/15 text-white">
                  <Clock className="size-6" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="text-sm font-semibold text-white/90">예배 시간</p>
                <p className="mt-2 break-keep text-sm leading-relaxed text-white/85">{data.time}</p>
              </div>
              {data.meetingTime ? (
                <div className="flex flex-col items-center rounded-2xl bg-white/10 px-4 py-6 text-center backdrop-blur-sm">
                  <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-white/15 text-white">
                    <Clock className="size-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <p className="text-sm font-semibold text-white/90">모임 시간</p>
                  <p className="mt-2 break-keep text-sm leading-relaxed text-white/85">
                    {data.meetingTime}
                  </p>
                </div>
              ) : null}
              <div className="flex flex-col items-center rounded-2xl bg-white/10 px-4 py-6 text-center backdrop-blur-sm">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-white/15 text-white">
                  <MapPin className="size-6" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="text-sm font-semibold text-white/90">예배 장소</p>
                <p className="mt-2 break-keep text-sm leading-relaxed text-white/85">{data.place}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 사역 */}
      {data.coreministry.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">{data.department} 핵심사역</h2>
            <p className="mt-2 text-sm text-[#496674]">부서별로 세워가는 사역의 방향입니다.</p>
          </div>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {data.coreministry.map((item) => (
              <li
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className={cn("object-cover", item.imgClass)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute left-3 top-3 flex size-10 items-center justify-center rounded-full bg-[#1e2a4a] text-sm font-bold text-white shadow-md">
                    {item.id}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-[#1e2a4a]">{item.titleKr}</h3>
                  {item.titleEn ? (
                    <p className="mt-0.5 text-sm font-medium text-[#496674]">{item.titleEn}</p>
                  ) : null}
                  <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-[#333]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
