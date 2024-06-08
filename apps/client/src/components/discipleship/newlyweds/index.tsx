import NewlywedsIntroduceSection from "./section/introduce";
import NewlywedsImageSection from "./section/image";
import NewlywedsGuideSection from "./section/guide";
import NewlywedsCurriculumSeciton from "./section/curriculum";
import {
  INewlywedsCurriculumData,
  INewlywedsGuideData,
  INewlywedsImageData,
  INewlywedsIntroData,
  NewlywedsType,
} from "type";

// FIXME: DB 저장 예정
const DISCIPLESHIP_NEWLYWEDS_DATA: (
  | INewlywedsCurriculumData
  | INewlywedsGuideData
  | INewlywedsImageData
  | INewlywedsIntroData
)[] = [
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
  {
    id: "curriculum",
    data: {
      firstHalf: { title: "3-6월", content: ["친밀한 대화", "소통", "재정관리", "관계", "영적성장", "소그룹모임(QT)"] },
      secondHalf: {
        title: "9-11월",
        content: [
          "큐티세미나",
          "소그룹모임(QT)",
          "정체성과 돈",
          "믿음과 돈",
          "마음 주인 찾기",
          "영원의 주인 맡기기",
          "우선순위 바로 잡기",
        ],
      },
    },
  },
];

const DiscipleshipNewlyweds = () => {
  const getNewlywedsData = (id: NewlywedsType) => DISCIPLESHIP_NEWLYWEDS_DATA.find((item) => item.id === id);
  const introduceData = getNewlywedsData("introduce") as INewlywedsIntroData;
  const imgData = getNewlywedsData("images") as INewlywedsImageData;
  const guideData = getNewlywedsData("guide") as INewlywedsGuideData;
  const curriculumData = getNewlywedsData("curriculum") as INewlywedsCurriculumData;

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

      <NewlywedsCurriculumSeciton
        firstHalf={curriculumData.data.firstHalf}
        secondHalf={curriculumData.data.secondHalf}
      />
    </div>
  );
};

export default DiscipleshipNewlyweds;
