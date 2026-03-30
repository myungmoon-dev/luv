"use client";

import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Loader2, X } from "lucide-react";
import dayjs from "dayjs";
import { useMemo, useState } from "react";

import { YoutubeVideo } from "@/components/youtube/youtube-video";
import { DiscipleshipSubPage } from "@/components/discipleship/discipleship-sub-page";
import { DiscipleshipAlbumGridSection } from "@/components/discipleship/discipleship-album-grid-section";
import { getBibles } from "@/lib/api-bibles";
import { cn } from "@/lib/utils";
import type { IBible, YearMonthType } from "type";

type DateTab = { date: YearMonthType; label: string };

const getDateTabs = (): DateTab[] => {
  const currentDate = dayjs();
  const tabs: DateTab[] = [];

  for (let i = 0; i < 4; i++) {
    const newDate = currentDate.add(i, "month");
    const newYear = newDate.year();
    const newMonth = String(newDate.month() + 1).padStart(2, "0");

    tabs.push({
      label: `${newMonth}월`,
      date: `${newYear}-${newMonth}` as YearMonthType,
    });
  }

  return tabs;
};

const getPreviousMonth = (date: YearMonthType): YearMonthType => {
  const [year, month] = date.split("-").map(Number) as [number, number];
  const d = new Date(year, month - 1, 1);
  d.setMonth(d.getMonth() - 1);
  const newYear = d.getFullYear();
  const newMonth = String(d.getMonth() + 1).padStart(2, "0");
  return `${newYear}-${newMonth}`;
};

const getNextMonth = (date: YearMonthType): YearMonthType => {
  const [year, month] = date.split("-").map(Number) as [number, number];
  const d = new Date(year, month - 1, 1);
  d.setMonth(d.getMonth() + 1);
  const newYear = d.getFullYear();
  const newMonth = String(d.getMonth() + 1).padStart(2, "0");
  return `${newYear}-${newMonth}`;
};

function HtmlContent({ html }: { html: string }) {
  return (
    <div
      className="text-sm leading-relaxed text-[#333] [&_p]:mb-4 [&_img]:max-w-full"
      // 기존 사이트의 입력 포맷 그대로 렌더링
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function FaithEducationSection() {
  const [dateTabs, setDateTabs] = useState<DateTab[]>(getDateTabs());
  const [currentTap, setCurrentTap] = useState<YearMonthType>(dayjs().format("YYYY-MM") as YearMonthType);
  const [selectedBibleId, setSelectedBibleId] = useState<string | null>(null);

  const { data, isFetching } = useQuery({
    queryKey: ["bibles", currentTap],
    queryFn: () => getBibles({ yearMonth: currentTap }),
  });

  const selectedBible = useMemo(() => {
    if (!selectedBibleId) return null;
    return data?.bibles.find((b) => b._id === selectedBibleId) ?? null;
  }, [data?.bibles, selectedBibleId]);

  const handleClickPrev = () => {
    const newFirstDate = getPreviousMonth(dateTabs[0]!.date);
    const newTabs = [
      { label: `${newFirstDate.split("-")[1]}월`, date: newFirstDate },
      ...dateTabs.slice(0, 3),
    ];
    setDateTabs(newTabs);
    setCurrentTap(newFirstDate);
  };

  const handleClickNext = () => {
    const newLastDate = getNextMonth(dateTabs[dateTabs.length - 1]!.date);
    const newTabs = [...dateTabs.slice(1), { label: `${newLastDate.split("-")[1]}월`, date: newLastDate }];
    setDateTabs(newTabs);
    setCurrentTap(newLastDate);
  };

  return (
    <DiscipleshipSubPage
      title="신앙교육"
      description="말씀에 뿌리를 두고 자라가는 집중 과정입니다. 아래 세 가지 프로그램을 한 페이지에서 안내합니다."
      contentMaxWidth="max-w-5xl"
    >
      <div className="space-y-12">
        {/* 성경 파노라마 */}
        <section className="rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="break-keep text-xl font-bold text-[#1e2a4a] sm:text-2xl md:text-3xl">성경파노라마</h2>

          <div className="mt-5 flex flex-col gap-4 text-sm sm:gap-5 sm:text-base">
            <div>
              <h3 className="mb-2 text-sm font-semibold text-gray-900">교육개요</h3>
              <p className="leading-relaxed text-[#496674]">
                구약과 신약의 주요사건을 바탕으로 지리적 배경과 함께 연대순으로 살펴가며 성경을 한눈으로
                조망합니다.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-[#E6E6E6] pt-6">
            <div className="grid gap-2 text-xs sm:gap-3 sm:text-sm md:text-base">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-gray-900">교육대상</span>
                <div className="flex flex-col gap-0.5 break-keep text-[#496674] sm:gap-1">
                  <span>구약의 파노라마: 명문교회 성도</span>
                  <span>신약의 파노라마: 구약의 파노라마 수료자</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-gray-900">교육기간</span>
                <div className="flex flex-col gap-0.5 break-keep text-[#496674] sm:gap-1">
                  <span>4주 과정</span>
                  <span className="text-xs text-gray-500 sm:text-sm">
                    *강의는 상황에 따라 개설되오니 교회소식을 참고해주시길 바랍니다.
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-gray-900">교육시간</span>
                <span className="break-keep text-[#496674]">평일 오전반, 평일 저녁반</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-gray-900">교육장소</span>
                <span className="break-keep text-[#496674]">독산동 비전채플</span>
              </div>
            </div>
          </div>
        </section>

        <DiscipleshipAlbumGridSection albumType="panorama" albumName="성경파노라마" />

        {/* 큐티 세미나 */}
        <section className="rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="break-keep text-xl font-bold text-[#1e2a4a] sm:text-2xl md:text-3xl">큐티 세미나</h2>

          <div className="mt-5 flex flex-col gap-3 text-sm sm:gap-4 sm:text-base">
            <p className="leading-relaxed text-[#496674]">
              큐티 세미나는 '말씀을 통한 개인경건의 시간'으로 묵상을 통해서 주님과 교제하는 훈련입니다.
            </p>
            <p className="leading-relaxed text-[#496674]">
              성경책을 통해 주님과 동행하는 성도의 삶을 구체화합니다. 성경말씀으로 어떻게 주님과 소통과 관계를
              맺을 것인지에 대해서 세부적으로 다루게 됩니다.
            </p>
            <p className="leading-relaxed text-[#496674]">
              성경의 줄애굽과 광야의 성막에서 지성소를 지나 가나안 땅으로 들어가는 성도의 삶을 나타냅니다. 또한
              그리스도의 십자가와 부활의 영광 안에서 성령의 내주 하나됨을 추구합니다.
            </p>
          </div>

          <div className="mt-8 border-t border-[#E6E6E6] pt-6">
            <div className="grid gap-2 text-xs sm:gap-3 sm:text-sm md:text-base">
              <div className="flex items-start gap-4">
                <span className="w-24 shrink-0 font-semibold text-gray-900 sm:w-28 md:w-32">교육대상</span>
                <span className="break-keep text-[#496674]">명문교회 성도 누구나</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-24 shrink-0 font-semibold text-gray-900 sm:w-28 md:w-32">교육과정</span>
                <span className="break-keep text-[#496674]">4주 과정(이론강의+실전조별모임)</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-24 shrink-0 font-semibold text-gray-900 sm:w-28 md:w-32">교육시간</span>
                <span className="break-keep text-[#496674]">목요일 오후7시 30분, 토요일 오후 1시 30분</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="w-24 shrink-0 font-semibold text-gray-900 sm:w-28 md:w-32">교육장소</span>
                <span className="break-keep text-[#496674]">독산동 비전채플 3층</span>
              </div>
            </div>
          </div>
        </section>

        <DiscipleshipAlbumGridSection albumType="qt" albumName="큐티세미나" />

        {/* 성경통독 */}
        <section className="rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="break-keep text-xl font-bold text-[#1e2a4a] sm:text-2xl md:text-3xl">성경통독</h2>

          <div className="mt-4 flex flex-col gap-3 text-sm sm:gap-4 sm:text-base">
            <p className="leading-relaxed text-[#496674]">하나님의 말씀은 우리의 삶을 비추는 등불입니다.</p>
            <p className="leading-relaxed text-[#496674]">
              명문교회 성경통독은 말씀을 꾸준히 읽고 묵상함으로써, 하나님과의 친밀한 교제를 풍요롭게 시작합니다.
            </p>
            <p className="leading-relaxed text-[#496674]">
              정기적으로 업로드되는 성경 본문과 요약 내용을 통해 말씀의 흐름을 이해하고, 삶에 적용해보세요.
            </p>
            <p className="leading-relaxed text-[#496674]">함께 읽고, 함께 자라는 은혜의 여정을 이어갑니다.</p>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleClickPrev}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#E6E6E6] bg-white text-[#1e2a4a] transition hover:bg-[#fafbfc]"
                aria-label="이전 달"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>

              <div className="flex flex-1 items-center justify-center gap-2 overflow-x-auto px-1">
                {dateTabs.map((tab) => (
                  <button
                    key={tab.date}
                    type="button"
                    onClick={() => setCurrentTap(tab.date)}
                    className={cn(
                      "shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                      tab.date === currentTap
                        ? "border-[#1e2a4a] bg-[#1e2a4a] text-white"
                        : "border-[#E6E6E6] bg-white text-[#496674] hover:border-[#1e2a4a]/40",
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleClickNext}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[#E6E6E6] bg-white text-[#1e2a4a] transition hover:bg-[#fafbfc]"
                aria-label="다음 달"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </div>

            {isFetching ? (
              <div className="flex items-center justify-center py-10">
                <Loader2 className="size-10 animate-spin text-[#1e2a4a]" aria-hidden />
              </div>
            ) : (data?.bibles?.length ?? 0) === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <p className="text-sm font-medium text-[#496674]">등록된 성경통독이 없습니다</p>
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-1 gap-4">
                {data?.bibles.map((bible: IBible) => (
                  <div
                    key={bible._id}
                    className="rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <p className="text-sm text-[#496674]">{dayjs(bible.date).format("YYYY.MM.DD")}</p>
                    <h3 className="mt-1 text-lg font-semibold text-[#1e2a4a]">{bible.title}</h3>
                    <button
                      type="button"
                      onClick={() => setSelectedBibleId(bible._id)}
                      className="mt-4 w-full rounded-md bg-[#f8fafc] py-2.5 text-sm font-medium text-[#1e2a4a] transition hover:bg-[#eef2f7]"
                    >
                      자세히 보기
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {selectedBible ? (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
              role="presentation"
              onClick={() => setSelectedBibleId(null)}
            >
              <div
                className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-xl"
                role="presentation"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedBibleId(null)}
                  className="sticky top-0 z-10 flex w-full items-center justify-end border-b border-[#E6E6E6] bg-white p-4"
                >
                  <span className="sr-only">닫기</span>
                  <X className="size-5 text-[#1e2a4a]" aria-hidden />
                </button>

                <div className="px-6 pb-8 pt-4 sm:px-8">
                  <p className="text-sm text-[#496674]">{dayjs(selectedBible.date).format("YYYY.MM.DD")}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#1e2a4a]">{selectedBible.title}</h3>

                  <div className="mt-6 rounded-xl border border-[#E6E6E6] bg-white p-5">
                    <HtmlContent html={selectedBible.content} />
                  </div>

                  {selectedBible.links?.length ? (
                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                      {selectedBible.links.map((link) => (
                        <div key={link.name} className="overflow-hidden rounded-xl border border-[#E6E6E6] bg-white">
                          <div className="relative h-[250px]">
                            <YoutubeVideo
                              videoId={link.name}
                              isPlaylist={link.isPlaylist}
                              className="h-[250px]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </section>

        <p className="text-center text-xs text-[#496674]">개설 시기·신청은 교회 공지를 참고해 주세요.</p>
      </div>
    </DiscipleshipSubPage>
  );
}
