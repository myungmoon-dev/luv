"use client";

import { useQuery } from "@tanstack/react-query";
import { CustomImage } from "@/components/about/custom-image";
import { getPastorBooks, getPastorProfile } from "@/lib/api-pastor";

export function SeniorPastorContent() {
  const { data: books = [] } = useQuery({
    queryKey: ["pastor", "books"],
    queryFn: getPastorBooks,
  });

  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryKey: ["pastor", "profile"],
    queryFn: getPastorProfile,
  });

  return (
    <div className="mb-14">
      {/* Hero Section */}
      <div className="relative mb-10 overflow-hidden">
        {isProfileLoading ? (
          <div className="h-[240px] w-full animate-pulse bg-[#1e2a4a]/20 sm:h-[380px] md:h-[500px] lg:h-[580px]" />
        ) : (
          <CustomImage
            className="h-[240px] w-full sm:h-[380px] md:h-[500px] lg:h-[580px]"
            src={profile?.topImageUrl ?? ""}
            alt="담임목사 김지혁"
            imgClass="object-cover object-top"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 sm:p-10 md:p-14">
          <p className="text-sm text-white sm:text-xl md:text-3xl">
            <span className="font-light">안녕하세요 </span>
            <span className="font-bold">명문교회 담임목사</span>
          </p>
          <p className="mt-1 font-bold text-white">
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl">김지혁</span>
            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">입니다</span>
          </p>
        </div>
      </div>

      {/* 본문 컨테이너 */}
      <div className="mx-auto max-w-5xl lg:px-0">
        {/* 1. 인사말 */}
        <div className="mb-12 px-4 sm:px-8 md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <div className="shrink-0 md:w-[45%]">
              <div className="mb-2 h-[3px] w-8 bg-[#001F54]" />
              <p className="text-3xl font-[1000] leading-tight text-[#001F54] sm:text-4xl md:text-5xl lg:text-6xl">
                NICE TO
              </p>
              <p className="text-3xl font-[1000] leading-tight text-[#001F54] sm:text-4xl md:text-5xl lg:text-6xl">
                MEET YOU!
              </p>
            </div>
            <div className="flex-1 space-y-4 text-sm leading-relaxed text-[#6E6E6E] sm:text-base md:pt-4">
              <p>
                <span className="font-medium text-[#333]">
                  사랑하는 성도 여러분,
                  <br />
                  그리고 명문교회를 찾아 주신 모든 분들에게!
                </span>
              </p>
              <p>
                명문교회 홈페이지를 방문해 주신 모든 분들을 주님의 이름으로 환영합니다. 평강의
                하나님께서 여러분과 여러분의 가정에 풍성한 은혜와 평안을 더하여 주시기를
                바랍니다.
              </p>
              <p>
                <span className="font-medium text-[#333]">함께 걸어가는 믿음의 여정</span>
              </p>
              <p>
                신앙의 여정은 혼자 걷는 길이 아닙니다. 우리는 함께 주님을 따라가는 믿음의
                동반자들입니다. 여러분이 어떤 상황에 계시든, 어떤 필요가 있으시든, 명문교회는
                여러분을 따뜻하게 품고 함께 기도하며 동행하고자 합니다. 이곳에서 참된 위로와
                소망, 그리고 새로운 힘을 얻으시기를 바랍니다.
              </p>
              <p>
                앞으로도 명문교회가 지역사회를 섬기고, 복음을 전하며, 하나님 나라의 확장을 위해
                쓰임 받는 교회가 되도록 여러분의 기도와 동참을 부탁드립니다.
              </p>
              <p className="font-medium text-[#333]">
                하나님의 크신 사랑과 은혜가 여러분과 함께 하시기를 축복합니다.
              </p>
            </div>
          </div>
          <div className="mt-8 h-[2px] bg-[#E6E6E6]" />
        </div>

        {/* 2. FAMILY */}
        <div className="mb-12 w-full bg-[#F0F0F0] px-4 py-8 sm:px-8 sm:py-12 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0 md:w-[45%]">
              <div className="mb-1 h-[3px] w-8 bg-[#001F54]" />
              <p className="text-2xl font-[1000] leading-none text-[#001F54] sm:text-4xl md:text-6xl">
                FAMILY
              </p>
              <p className="text-base font-bold text-[#001F54] sm:text-2xl md:text-[1.68rem]">
                HUSBAND &amp; DAD
              </p>
            </div>
            <p className="flex-1 break-keep text-sm leading-relaxed text-[#444] sm:text-base">
              사역의 여정 속에서 가장 따뜻한 쉼표가 되어주는 아내 정지영 사모와, 그리고 기쁨으로
              자라나는 두 아들 성재와 은재와 함께 행복한 믿음의 가정을 일구어가고 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 3. BIOGRAPHY */}
      <div className="mx-auto mb-12 flex max-w-5xl flex-col px-4 sm:px-8 md:flex-row md:items-stretch">
        <div className="w-full shrink-0 md:w-[45%]">
          {isProfileLoading ? (
            <div className="h-[260px] w-full animate-pulse bg-[#1e2a4a]/20 md:h-full md:min-h-[400px]" />
          ) : (
            <CustomImage
              className="h-[260px] w-full md:h-full md:min-h-[400px]"
              src={profile?.bottomImageUrl ?? ""}
              alt="김지혁 담임목사"
              imgClass="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col px-4 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="mb-1 flex justify-end">
            <div className="h-[3px] w-8 bg-[#001F54]" />
          </div>
          <p className="mb-6 text-right text-3xl font-black text-[#001F54] sm:text-4xl md:text-6xl">
            BIOGRAPHY
          </p>

          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-px flex-1 bg-[#D0D5E0]" />
              <p className="font-bold tracking-widest text-[#001F54]">학력</p>
            </div>
            <ul className="space-y-2 text-sm text-[#444]">
              <li className="flex items-center gap-2">
                <span className="size-[5px] shrink-0 rounded-full bg-[#001F54]" />
                고려대, 서울대 대학원: 철학과 영미윤리학
              </li>
              <li className="flex items-center gap-2">
                <span className="size-[5px] shrink-0 rounded-full bg-[#001F54]" />
                총신신대원: 목회학 석사 (M.Div.)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[9px] size-[5px] shrink-0 rounded-full bg-[#001F54]" />
                <span>
                  Trinity Evangelical Divinity School (시카고)
                  <br />
                  <span className="text-[#666]">조직신학 석사 (Th.M.)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[9px] size-[5px] shrink-0 rounded-full bg-[#001F54]" />
                <span>
                  The Southern Baptist Theological Seminary
                  <br />
                  <span className="text-[#666]">설교학 박사 (Ph.D.)</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <div className="h-px flex-1 bg-[#D0D5E0]" />
              <p className="font-bold tracking-widest text-[#001F54]">사역 경력</p>
            </div>
            <ul className="space-y-2 text-sm text-[#444]">
              {["강남교회", "시카고아가페장로교회", "사랑의교회"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-[5px] shrink-0 rounded-full bg-[#001F54]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-2 flex items-center gap-2">
              <div className="h-px flex-1 bg-[#D0D5E0]" />
              <p className="font-bold tracking-widest text-[#001F54]">현재 활동</p>
            </div>
            <ul className="space-y-2 text-sm text-[#444]">
              {[
                "총신대 목회신학전문대학원 교수",
                "농어촌교회사역연구소 연구위원",
                "한국개혁주의 설교학회 학술부회장",
                "GMS 이사",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-[5px] shrink-0 rounded-full bg-[#001F54]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 4. BOOKS */}
      <div className="mx-auto mb-12 max-w-5xl px-4 sm:px-8 md:pt-10 lg:px-0">
        <div className="mb-6">
          <div className="mb-2 h-[3px] w-8 bg-[#001F54]" />
          <p className="text-3xl font-[1000] leading-tight text-[#001F54] sm:text-4xl md:text-5xl lg:text-6xl">
            BOOKS
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex items-start gap-3 rounded-xl border border-[#E6E6E6] p-4"
            >
              {book.imageUrl ? (
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="size-14 shrink-0 rounded-lg object-cover"
                />
              ) : (
                <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-[#001F54]/10">
                  <svg
                    className="size-5 text-[#001F54]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              )}
              <div>
                <p className="text-sm font-bold text-[#001F54] sm:text-base">{book.title}</p>
                {book.sub && <p className="text-xs text-[#6E6E6E] sm:text-sm">{book.sub}</p>}
                <p className="mt-1 text-xs text-[#999] sm:text-sm">
                  {book.publisher} · {book.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-[#BBBBBB]" />
    </div>
  );
}
