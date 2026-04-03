import { DiscipleshipSubPage } from "@/components/discipleship/discipleship-sub-page";
import { NewFamilyAlbum } from "@/components/discipleship/new-family-album";

const weeks = [
  { week: "1주차", topic: "하나님의 창조와 사람의 죄" },
  { week: "2주차", topic: "죄 그리고 구원의 길" },
  { week: "3주차", topic: "예수님 안에서의 성장하는 삶" },
  { week: "4주차", topic: "신앙의 성장과 말씀(성경)" },
  { week: "5주차", topic: "성도에게 교회의 유익과 신앙여정" },
];

export function NewFamilySection() {
  return (
    <DiscipleshipSubPage
      title="새가족"
      description="교회에 처음 오신 분들을 환영하며, 등록부터 교육·구역 연결까지 안내합니다."
      contentMaxWidth="max-w-5xl"
    >
      <div className="space-y-8">
        {/* 새가족 등록 — 기존 사이트 문구 유지 */}
        <section className="rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-[#1e2a4a] sm:text-xl md:text-2xl">새가족 등록</h2>
          <div className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-[#496674] sm:gap-3 sm:text-base">
            <p className="break-keep">
              만 40세 이상의 장년 또는 기혼자 세가족은 온라인(실시), 현장(주일/주중) 등록 가능합니다.
            </p>
            <p className="break-keep font-medium text-[#1e2a4a]">
              만 40세 미만의 미혼자는 1,2청년부에서 별도의 과정이 진행됩니다.
            </p>
          </div>
        </section>

        {/* 새가족을 위한 5단계 — 기존 사이트 문구 유지 */}
        <section className="rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-[#1e2a4a] sm:text-xl md:text-2xl">새가족을 위한 5단계</h2>
          <div className="mt-6 rounded-xl bg-[#f8fafc] p-4 sm:p-6 md:p-8">
            <ol className="flex flex-col gap-6">
              <li>
                <h3 className="text-sm font-semibold text-[#1e2a4a] sm:text-base">1. 등록</h3>
                <div className="mt-2 space-y-1 break-keep text-xs text-[#496674] sm:text-sm md:text-base">
                  <p className="leading-relaxed">등록하시면 환영인사 후 담임목사님과 면담</p>
                  <p className="leading-relaxed text-[#1e2a4a]">주일 : 사랑채플 본당 입구</p>
                  <p className="leading-relaxed text-[#1e2a4a]">주중 : 비전채플 4층 세가족담당교역자</p>
                </div>
              </li>
              <li>
                <h3 className="text-sm font-semibold text-[#1e2a4a] sm:text-base">2. 교육</h3>
                <p className="mt-2 break-keep text-xs leading-relaxed text-[#496674] sm:text-sm md:text-base">
                  이슬비 편지, 관리문자, 교육 수료 후 구역 연결
                </p>
              </li>
              <li>
                <h3 className="text-sm font-semibold text-[#1e2a4a] sm:text-base">3. 등반</h3>
                <p className="mt-2 break-keep text-xs leading-relaxed text-[#496674] sm:text-sm md:text-base">
                  등록 실행, 신앙훈련 과정 참여
                </p>
              </li>
              <li>
                <h3 className="text-sm font-semibold text-[#1e2a4a] sm:text-base">4. 성장교육</h3>
                <p className="mt-2 break-keep text-xs leading-relaxed text-[#496674] sm:text-sm md:text-base">
                  등반 후 교회에서 실제적인 신앙의 도움을 주는 추가 교육
                </p>
              </li>
              <li>
                <h3 className="text-sm font-semibold text-[#1e2a4a] sm:text-base">5. 새가족 환영식</h3>
                <p className="mt-2 break-keep text-xs leading-relaxed text-[#496674] sm:text-sm md:text-base">
                  연 2회 새가족 환영식
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* 5주 새신자 과정 */}
        <section className="rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-bold text-[#1e2a4a] sm:text-xl md:text-2xl">5주 새신자 과정</h2>

          <div className="mt-6 flex flex-col gap-2 sm:hidden">
            {weeks.map((w) => (
              <div
                key={w.week}
                className="rounded-xl border border-[#E6E6E6] bg-[#fafbfc] p-3">
                <div className="mb-2 text-sm font-semibold text-[#1e2a4a]">{w.week}</div>
                <div className="break-keep text-xs leading-relaxed text-[#496674]">{w.topic}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 hidden overflow-hidden rounded-xl border border-[#E6E6E6] bg-white shadow-sm sm:block">
            <table className="w-full table-fixed border-collapse text-sm">
              <thead>
                <tr className="border-b border-[#E6E6E6] bg-[#f8fafc] text-[#496674]">
                  <th
                    scope="col"
                    className="w-30 min-w-30 px-4 py-3 text-center text-xs font-semibold sm:w-32 sm:px-5 sm:text-sm"
                  >
                    주차
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-semibold sm:px-5 sm:text-sm">
                    주제
                  </th>
                </tr>
              </thead>
              <tbody>
                {weeks.map((w) => (
                  <tr
                    key={w.week}
                    className="border-b border-[#E6E6E6] bg-white last:border-b-0 hover:bg-[#fafbfc]"
                  >
                    <td className="whitespace-nowrap px-4 py-3.5 text-center align-middle text-sm font-semibold text-[#1e2a4a] sm:px-5 sm:py-4 sm:text-base">
                      {w.week}
                    </td>
                    <td className="break-keep px-4 py-3.5 align-middle text-sm leading-relaxed text-[#496674] sm:px-5 sm:py-4 sm:text-base">
                      {w.topic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="text-center text-xs text-[#496674]">
          세부 일정·문의는 교회 안내에 따릅니다.
        </p>

        <NewFamilyAlbum />
      </div>
    </DiscipleshipSubPage>
  );
}
