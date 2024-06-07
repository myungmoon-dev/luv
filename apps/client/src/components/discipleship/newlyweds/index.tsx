import CustomImage from "@/components/customImage";
import NewlywedsIntroduceSection from "./section/introduce";
import NewlywedsImageSection from "./section/image";
import NewlywedsGuideSection from "./section/guide";

type NEWLYWEDS_TYPE = "introduce" | "images" | "guide";

interface INewlywedsData {
  id: NEWLYWEDS_TYPE;
  data: any;
}

interface INewlywedsIntroData extends INewlywedsData {
  data: {
    text: string;
  };
}

interface INewlywedsImageData extends INewlywedsData {
  data: {
    imgs: string[];
  };
}

interface INewlywedsGuideData extends INewlywedsData {
  data: {
    target: { title: string; description: string };
    time: { title: string; description: string };
    place: { title: string; description: string };
    manager: { name: string; number: string };
  };
}

const DISCIPLESHIP_NEWLYWEDS_DATA = [
  {
    id: "introduce",
    data: {
      text: "따스한 봄과 함께 신혼가정 모임을 시작합니다.\n신혼부부가 함께 찬양하며 서로 삶의 경험에 대한 공감과 치유와 회복을 소망하는 아름다운 모임입니다.\n여러분을 축복합니다 신혼부부를 초대합니다.",
    },
  },
  {
    id: "images",
    data: {
      imgs: [
        "/images/discipleship/newlyweds/introduce1.jpg",
        "/images/discipleship/newlyweds/introduce2.jpg",
        "/images/discipleship/newlyweds/introduce3.jpg",
      ],
    },
  },
  {
    id: "guide",
    data: {
      target: {
        title: "모임대상",
        description: "결혼 1-6년차",
      },
      time: {
        title: "모임시간",
        description: "주일 오후 1시 - 2시10분",
      },
      place: {
        title: "모임장소",
        description: "서울여상 사랑채플 1층 사랑나눔실",
      },
      manager: {
        name: "박매실 전도사",
        number: "010-5291-0216",
      },
    },
  },
];

const DiscipleshipNewlyweds = () => {
  const getNewlywedsData = (id: NEWLYWEDS_TYPE) => DISCIPLESHIP_NEWLYWEDS_DATA.find((item) => item.id === id);
  const introduceData = getNewlywedsData("introduce") as INewlywedsIntroData;
  const imgData = getNewlywedsData("images") as INewlywedsImageData;
  const guideData = getNewlywedsData("guide") as INewlywedsGuideData;

  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-10 overflow-x-hidden px-3 md:gap-12 xl:gap-20">
      <NewlywedsIntroduceSection text={introduceData.data.text} />
      <NewlywedsImageSection list={imgData.data.imgs} />
      <NewlywedsGuideSection
        manager={guideData.data.manager}
        place={guideData.data.place}
        target={guideData.data.target}
        time={guideData.data.time}
      />

      {/* 일정안내 */}
      <div className="flex w-full max-w-screen-md flex-col items-center justify-center">
        {/* th */}
        <div className="grid min-h-[50px] w-full grid-cols-3 items-center rounded-md bg-gray-200">
          <p className="text-center font-SCoreDream tracking-widest">일 정</p>
          <p className="flex items-center justify-center border-l-2 border-r-2 border-l-blue-600 border-r-blue-600 text-center font-SCoreDream tracking-widest">
            3-6월
          </p>
          <p className="flex items-center justify-center text-center font-SCoreDream tracking-widest">9-11월</p>
        </div>

        {/* tb */}
        <div className="grid min-h-[50px] w-full grid-cols-3 items-center border-b-2 border-b-gray-200">
          <p className="text-center text-lg font-bold md:text-2xl xl:text-lg 2xl:text-2xl">교육과정</p>
          <div className="my-2 flex flex-col gap-2 border-l-2 border-l-gray-200 pl-3 text-xs md:text-sm">
            <p>- 친밀한 대화</p>
            <p>- 소통</p>
            <p>- 재정관리</p>
            <p>- 관계</p>
            <p>- 영적성장</p>
            <p>- 소그룹모임(QT)</p>
          </div>
          <div className="my-2 flex flex-col gap-2 border-l-2 border-l-gray-200 pl-3 text-xs md:text-sm">
            <p>- 큐티세미나</p>
            <p>- 소그룹모임(QT)</p>
            <p>- 정체성과 돈</p>
            <p>- 믿음과 돈</p>
            <p>- 마음 주인 찾기</p>
            <p>- 영원의 주인 맡기기</p>
            <p>- 우선순위 바로 잡기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscipleshipNewlyweds;
