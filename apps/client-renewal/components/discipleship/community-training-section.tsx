import { DiscipleshipSubPage } from "@/components/discipleship/discipleship-sub-page";
import { DiscipleshipAlbumGridSection } from "@/components/discipleship/discipleship-album-grid-section";

export function CommunityTrainingSection() {
  return (
    <DiscipleshipSubPage
      title="공동체훈련"
      description="신혼가정·3040세대·시니어를 위한 공동체 훈련을 한 페이지에서 안내합니다."
      contentMaxWidth="max-w-5xl"
    >
      <div className="space-y-12">
        {/* 신혼가정 */}
        <section
          id="newlyweds"
          className="scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))] rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="mb-3 text-xl font-bold text-[#1e2a4a] sm:mb-4 sm:text-2xl">
            명문교회 신혼가정
          </h2>

          <div className="flex flex-col gap-1.5 break-keep text-sm text-[#496674] sm:gap-2 sm:text-base">
            <p className="leading-relaxed">따스한 봄과 함께 신혼가정 모임을 시작합니다.</p>
            <p className="leading-relaxed">
              신혼부부가 함께 찬양하며 서로 삶의 경험에 대한 공감과 치유와 회복을 소망하는 아름다운 모임입니다.
            </p>
            <p className="leading-relaxed">여러분을 축복합니다. 신혼부부를 초대합니다.</p>
          </div>

          {/* 모임 정보 */}
          <div className="mt-6 flex flex-col gap-1.5 break-keep text-xs text-[#496674] sm:mb-8 sm:gap-2 sm:text-sm">
            <p>
              <span className="font-semibold text-[#1e2a4a]">대상</span> 결혼 1-6년차
            </p>
            <p>
              <span className="font-semibold text-[#1e2a4a]">모임시간</span> 주일 오후 1:00-2:10
            </p>
            <p>
              <span className="font-semibold text-[#1e2a4a]">모임장소</span> 서울여상 사랑채플 1층 사랑나눔실
            </p>
            <p>
              <span className="font-semibold text-[#1e2a4a]">문의</span> 박매실 전도사(010-5291-0216)
            </p>
          </div>

          {/* 교육과정 */}
          <div className="mt-6">
            <h3 className="mb-3 break-keep border-b-2 border-gray-200 pb-2 text-lg font-bold text-[#1e2a4a] sm:mb-4 sm:text-xl">
              교육과정
            </h3>

            <div className="mb-4 flex gap-3 sm:mb-6 sm:gap-4">
              <img
                src="/images/discipleship/newlyweds/introduce2.jpg"
                alt="3-6월 교육"
                className="h-20 w-20 shrink-0 rounded-lg object-cover sm:h-24 sm:w-24 md:h-28 md:w-28"
              />
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <h4 className="break-keep text-base font-semibold text-[#1e2a4a] sm:text-lg">3 - 6월</h4>
                <div className="flex flex-col gap-0.5 break-keep text-xs text-[#496674] sm:gap-1 sm:text-sm">
                  <p>친밀한대화 / 소통 / 재정관리 / 관계</p>
                  <p>영적성장 / 소그룹모임(QT)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <img
                src="/images/discipleship/newlyweds/introduce3.jpg"
                alt="9-11월 교육"
                className="h-20 w-20 shrink-0 rounded-lg object-cover sm:h-24 sm:w-24 md:h-28 md:w-28"
              />
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <h4 className="break-keep text-base font-semibold text-[#1e2a4a] sm:text-lg">9 - 11월</h4>
                <div className="flex flex-col gap-0.5 break-keep text-xs text-[#496674] sm:gap-1 sm:text-sm">
                  <p>큐티세미나 / 소그룹모임(QT)</p>
                  <p>정체성과 돈 / 믿음과 돈 / 마음 주인 찾기</p>
                  <p>영원의 주인 맡기기 / 우선순위 바로 잡기</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DiscipleshipAlbumGridSection albumType="newlyweds" albumName="신혼가정" />

        {/* 3040세대 */}
        <section
          id="generation-3040"
          className="scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))] rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="mb-6 sm:mb-8">
            <h2 className="mb-3 break-keep text-xl font-bold text-[#1e2a4a] sm:mb-4 sm:text-2xl">
              명문교회 3040
            </h2>
            <div className="mb-3 flex flex-col gap-0.5 sm:mb-4 sm:gap-1">
              <p className="break-keep text-base font-semibold text-[#1e2a4a] sm:text-lg">"COME TOGETHER"</p>
              <p className="text-xs text-[#496674] sm:text-sm">히브리서 10장 24-25절</p>
            </div>
          </div>

          {/* 비전 */}
          <div className="mb-6 sm:mb-8">
            <h3 className="mb-3 break-keep border-b-2 border-gray-200 pb-2 text-lg font-bold text-[#1e2a4a] sm:mb-4 sm:text-xl">
              명문교회 3040세대 비전
            </h3>
            <div className="flex flex-col gap-1.5 break-keep text-sm text-[#496674] sm:gap-2 sm:text-base">
              <p>하나님을 기쁘시게</p>
              <p>가정을 행복하게</p>
              <p>가정을 교회같이, 교회를 가정같이</p>
            </div>
          </div>

          {/* 목적 */}
          <div className="mb-6 sm:mb-8">
            <h3 className="mb-3 break-keep border-b-2 border-gray-200 pb-2 text-lg font-bold text-[#1e2a4a] sm:mb-4 sm:text-xl">
              명문교회 3040세대 목적
            </h3>
            <div className="flex flex-col gap-2 break-keep text-sm text-[#496674] sm:gap-3 sm:text-base">
              <p className="leading-relaxed">
                3040세대는 직장, 가사, 육아로 몸과 마음이 지쳐 신앙생활에 어려움이 크기 때문에 신앙공동체 안에서 함께
                위로하고 나눌 수 있는 모임이 필요합니다.
              </p>
              <p className="leading-relaxed">
                이를 위해 명문교회 3040 모임은 진정한 믿음과 관계를 회복하고, 소그룹 활동을 통해 삶의 의미와 목적을 공유하며
                믿음생활의 유지 발전에 도움을 주고자 합니다.
              </p>
            </div>
          </div>
        </section>

        <DiscipleshipAlbumGridSection albumType="3040" albumName="3040" />

        {/* 시니어 */}
        <section
          id="seniors"
          className="scroll-mt-[calc(5rem+env(safe-area-inset-top,0px))] rounded-2xl border border-[#E6E6E6] bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="mb-2">
            <h2 className="mb-4 text-2xl font-bold text-[#1e2a4a]">명문교회 시니어</h2>
            <div className="mb-4 flex flex-col gap-1">
              <p className="text-lg font-semibold text-[#1e2a4a]">"COME TOGETHER"</p>
              <p className="text-sm text-[#496674]">히브리서 10장 24-25절</p>
            </div>
          </div>
        </section>

        <DiscipleshipAlbumGridSection
          albumType="main"
          albumName="시니어"
          description="시니어 공동체 관련 사진을 앨범으로 확인할 수 있습니다."
        />

        <p className="pt-6 text-center text-xs text-[#496674]">
          문의·참여 방법은 각 부서 공지를 참고해 주세요.
        </p>
      </div>
    </DiscipleshipSubPage>
  );
}
