import QtIntroduceSection from "./section/introduce";
import QtImageSection from "./section/images";
import QtSummarySection from "./section/summary";
import QtTargetSection from "./section/target";
import QtProgramSection from "./section/program";
import QtScheduleSection from "./section/schedule";

type QtType = "introduce" | "images" | "summary" | "target" | "program" | "schedule";

export interface IQtData<T> {
  id: QtType;
  data: T;
}

export interface IQtIntroduceData extends IQtData<{ text: string }> {}
export interface IQtImagesData extends IQtData<{ imgs: string[] }> {}
export interface IQtSummaryData extends IQtData<{ contents: { id: string; text: string }[] }> {}
export interface IQtTargetData extends IQtData<{ emphasis: string; text: string }> {}
export interface IQtProgramData extends IQtData<{ description: string; lessons: { label: string; text: string }[] }> {}
export interface IQtScheduleData
  extends IQtData<{
    description: string;
    contents: { id: string; label: string; text: string; img: string }[];
  }> {}

const DISCIPLESHIP_QT_DATA = [
  {
    id: "introduce",
    data: {
      text: " 말씀 묵상을 통하여 삶에 적용하고 예수님을 닮아가는 과정으로,\n변화와 성숙을 추구하는 경건훈련(Godlinesstraining, 딤전4:8)입니다.",
    },
  },
  {
    id: "images",
    data: {
      imgs: ["/images/discipleship/qt/1.jpg", "/images/discipleship/qt/2.jpg", "/images/discipleship/qt/3.jpg"],
    },
  },
  {
    id: "summary",
    data: {
      contents: [
        {
          id: "A",
          text: "큐티 세미나는 ‘말씀을 통한 개인경건의 시간’으로, 묵상을 통해서 주님과 교제하는 훈련입니다.",
        },
        {
          id: "B",
          text: "성경책을 통해서 주님과 동행하는 성도의 삶을 구체화합니다. 성경말씀으로 어떻게 주님과 소통과 관계를 맺을 것인지에 대해서 세부적으로 다루게 됩니다.",
        },
        {
          id: "C",
          text: "성경의 출애굽과 광야의 성막에서 지성소를 지나 가나안 땅으로 들어가는 성도의 삶을 나타냅니다. 또한 그리스도의 십자가와 부활의 영광 안에서 성령의 내주 하나됨을 추구합니다.",
        },
      ],
    },
  },
  {
    id: "target",
    data: {
      emphasis: "명문교회 성도라면 누구나",
      text: "신청 가능합니다.\n(총 4주간의 짧은 훈련 기간이므로 4회 전참하셔야 수료가 됩니다.)",
    },
  },
  {
    id: "program",
    data: {
      description: "총 4주 과정으로 '이론강의'와 '실전조별모임'으로 구성됩니다.",
      lessons: [
        {
          label: "1과",
          text: "큐티의\n정의",
        },
        {
          label: "2과",
          text: "큐티의\n읽기",
        },
        {
          label: "3과",
          text: "묵상의\n실습과 적용",
        },
        {
          label: "4과",
          text: "묵상의\n나눔",
        },
      ],
    },
  },
  {
    id: "schedule",
    data: {
      description: "교육시간은 변경될 수 있습니다.",
      contents: [
        {
          id: "weekday",
          label: "평일반",
          text: "목요일 7시 30분",
          img: "/images/discipleship/qt/program/weekday.jpg",
        },
        {
          id: "weekend",
          label: "주말반",
          text: "토요일 1시 30분",
          img: "/images/discipleship/qt/program/weekend.jpg",
        },
        {
          id: "place",
          label: "교육장소",
          text: "독산동 비전채플 3층",
          img: "/images/discipleship/qt/program/place.jpeg",
        },
      ],
    },
  },
];

const DiscipleshipQt = () => {
  const getQtData = (id: QtType) => DISCIPLESHIP_QT_DATA.find((item) => item.id === id);
  const introduceData = getQtData("introduce") as IQtIntroduceData;
  const imagesData = getQtData("images") as IQtImagesData;
  const summaryData = getQtData("summary") as IQtSummaryData;
  const targetData = getQtData("target") as IQtTargetData;
  const programData = getQtData("program") as IQtProgramData;
  const scheduleData = getQtData("schedule") as IQtScheduleData;

  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-12 overflow-x-hidden px-3 md:gap-12 xl:gap-20">
      <QtIntroduceSection text={introduceData.data.text} />
      <QtImageSection list={imagesData.data.imgs} />
      <QtSummarySection contents={summaryData.data.contents} />
      <QtTargetSection emphasis={targetData.data.emphasis} text={targetData.data.text} />
      <QtProgramSection description={programData.data.description} list={programData.data.lessons} />
      <QtScheduleSection
        description={scheduleData.data.description}
        weekday={scheduleData.data.contents[0]}
        weekend={scheduleData.data.contents[1]}
        place={scheduleData.data.contents[2]}
      />
    </div>
  );
};

export default DiscipleshipQt;
