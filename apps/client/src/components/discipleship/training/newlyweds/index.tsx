const DiscipleshipTrainingNewlyweds = () => {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8">
      {/* 제목 및 소개 */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">명문교회 신혼가정</h2>
        <div className="flex flex-col gap-2 break-keep text-gray-700">
          <p>따스한 봄과 함께 신혼가정 모임을 시작합니다.</p>
          <p>신혼부부가 함께 찬양하며 서로 삶의 경험에 대한 공감과 치유와 회복을 소망하는 아름다운 모임입니다.</p>
          <p>여러분을 축복합니다. 신혼부부를 초대합니다.</p>
        </div>
      </div>

      {/* 모임 정보 */}
      <div className="mb-8 flex flex-col gap-1 text-sm text-gray-700 sm:text-base">
        <p>
          <span className="font-semibold">대상</span> 결혼 1-6년차
        </p>
        <p>
          <span className="font-semibold">모임시간</span> 주일 오후 1:00-2:10
        </p>
        <p>
          <span className="font-semibold">모임장소</span> 서울여상 사랑채플 1층 사랑나눔실
        </p>
        <p>
          <span className="font-semibold">문의</span> 박매실 전도사(010-5291-0216)
        </p>
      </div>

      {/* 교육과정 */}
      <div className="mb-8">
        <h3 className="mb-4 border-b-2 border-gray-200 pb-2 text-xl font-bold text-gray-900">교육과정</h3>

        {/* 3-6월 */}
        <div className="mb-6 flex gap-4">
          <img
            src="/images/discipleship/newlyweds/introduce2.jpg"
            alt="3-6월 교육"
            className="h-24 w-24 flex-shrink-0 rounded-lg object-cover sm:h-28 sm:w-28"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold text-gray-900">3 - 6월</h4>
            <div className="flex flex-col gap-1 text-sm text-gray-700">
              <p>친밀한대화 / 소통 / 재정관리 / 관계</p>
              <p>영적성장 / 소그룹모임(QT)</p>
            </div>
          </div>
        </div>

        {/* 9-11월 */}
        <div className="flex gap-4">
          <img
            src="/images/discipleship/newlyweds/introduce3.jpg"
            alt="9-11월 교육"
            className="h-24 w-24 flex-shrink-0 rounded-lg object-cover sm:h-28 sm:w-28"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-semibold text-gray-900">9 - 11월</h4>
            <div className="flex flex-col gap-1 text-sm text-gray-700">
              <p>큐티세미나 / 소그룹모임(QT)</p>
              <p>정체성과 돈 / 믿음과 돈 / 마음 주인 찾기</p>
              <p>영원의 주인 맡기기 / 우선순위 바로 잡기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipTrainingNewlyweds;
