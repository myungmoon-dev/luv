import EducationCoreMinistrySection, { IValueVision } from "./section/coreministry";
import EducationImageSection from "./section/image";
import EducationInformationSection from "./section/information";
import EducationIntroductionSection from "./section/introduction";

interface IEducationOverViewProps {
  type: "infants" | "toddlers" | "elementary" | "middle" | "high" | "2youth" | "1youth";
}

interface IEducationData {
  type: string;
  department: string;
  introduction: string;
  target: string;
  time: string;
  place: string;
  coreministry: IValueVision[];
  mainImg: string;
  imgs: string[];
}

// FIXME: DB에 다음세대 데이터 넣어야됨
const EDUCATION_DATA: IEducationData[] = [
  {
    type: "infants",
    department: "영아부",
    imgs: ["/images/education/infants/1.jpg", "/images/education/infants/2.jpg", "/images/education/infants/3.jpg"],
    introduction:
      "부모와 교사가 함께 오직 말씀, 기도, 사랑으로\n우리 아이들에게 복음의 씨앗을 심어주어 바른 믿음을 키워주는 부서입니다.",
    target: "만 0세 - 3세",
    time: "11:30 - 12:30",
    place: "사랑채플 2층 체조실",
    coreministry: [
      {
        id: 1,
        description: "커리큘럼에 맞는 설교와 공과 교육, 성경암송",
        titleKr: "말씀",
        img: "/images/education/infants/1.jpg",
        imgClass: "brightness-50 object-[0%_40%]",
      },
      {
        id: 2,
        description: "어릴 때부터 기도를 통하여 하나님 찾기 훈련",
        titleKr: "기도",
        img: "/images/education/infants/2.jpg",
        imgClass: "brightness-50 object-[50%_40%]",
      },
      {
        id: 3,
        description: "심방, 구제헌금으로 이웃 사랑 실천하기",
        titleKr: "섬김",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
    ],
    mainImg: "/images/education/vision1.jpg",
  },
  {
    type: "toddlers",
    department: "유치부",
    imgs: ["/images/education/toddlers/1.jpg", "/images/education/toddlers/2.jpg", "/images/education/toddlers/3.jpg"],
    introduction:
      "만 4~5세 유아들이 하나님을 경외하는 사람으로 자라가도록 부모와 교사가 합력하여 하나님의 말씀으로 양육하며, 하나님을 예배하는 공동체입니다.",
    target: "만 4세 - 5세",
    time: "오전 11:30 - 12:35",
    place: "사랑채플 1층 창작나눔실",
    coreministry: [
      {
        id: 1,
        description: "유아의 눈높이에 적합한 복음 메시지 반복",
        titleKr: "복음 제시",
        img: "/images/education/infants/1.jpg",
        imgClass: "brightness-50 object-[0%_40%]",
      },
      {
        id: 2,
        description: "찬양, 설교, 공과, 암송, 특별 활동의 메시지 일원화",
        titleKr: "One Point 예배",
        img: "/images/education/infants/2.jpg",
        imgClass: "brightness-50 object-[50%_40%]",
      },
      {
        id: 3,
        description: "영상을 활용한 가정 미션, 가족 말씀 암송, 부모초청예배, 교육설명회, 부모 모임 등",
        titleKr: "가정과의 연계",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
      {
        id: 4,
        description: "예배 섬김(헌금 위원, 예배실 뒷정리 등), 이웃 섬김(인사 캠페인, 구제 헌금 등)",
        titleKr: "섬김 훈련",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
      {
        id: 5,
        description: "해피데이(친구초청잔치), 절기와 성경학교에 친구 초청, 선교헌금 드리기, 선교사님을 위한 기도회 등",
        titleKr: "전도 훈련",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
    ],
    mainImg: "/images/education/vision1.jpg",
  },
  {
    type: "elementary",
    department: "예빛(유초등부)",
    imgs: [
      "/images/education/elementary/1.jpg",
      "/images/education/elementary/2.jpg",
      "/images/education/elementary/3.jpg",
    ],
    introduction:
      "우리는 예!빛!\n안녕하세요 유초등부 연합공동체 예빛입니다!\n예빛은 '예수님은 우리의 빛이세요'와 '우리는 예수님의 빛 아이에요'의 줄임말입니다!",
    target: "초등학생",
    time: "11:30 - 12:30",
    place: "사랑채플 2층 무용실",
    coreministry: [
      {
        id: 1,
        description: "예빛 어린이들이 바르게 찬양하고\n기쁘게 예배할 수 있도록 가르치며 양육하고 있습니다.",
        titleKr: "예빛 율동 찬양팀",
        img: "/images/education/infants/1.jpg",
        imgClass: "brightness-50 object-[0%_40%]",
      },
      {
        id: 2,
        description:
          "예빛 어린이들의 입학식, 등교길 등에서 함께하며 심방하고\n주변 친구들에게 전도하는 활동을 하고 있습니다.",
        titleKr: "등교 심방&전도",
        img: "/images/education/infants/2.jpg",
        imgClass: "brightness-50 object-[50%_40%]",
      },
      {
        id: 3,
        description: "예빛선생님들이 직접 아이들과 소통하고\n교제하기 위해 교회 바깥에서 모임을 진행합니다.",
        titleKr: "반 목회",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
      {
        id: 4,
        description: "어린이들이 직접 선교헌금을 드리며\n다음세대도 선교의 책임이 있다는 것을 배우고 실행합니다.",
        titleKr: "선교헌금",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
    ],

    mainImg: "/images/education/vision1.jpg",
  },
  {
    type: "middle",
    department: "중등부",
    imgs: ["/images/education/middle/1.jpg", "/images/education/middle/2.jpg", "/images/education/middle/3.jpg"],
    introduction:
      "중학교 1~3학년 청소년들이 모여 예배를 드리고, 말씀을 통해 성경적 세계관을 배우며, 하나님의 자녀로 성장하도록 섬기는 공동체입니다.",
    target: "중학생",
    time: "09:30 - 10:30",
    place: "독산동 비전채플 3층",
    coreministry: [
      {
        id: 1,
        description: "성령님의 임재와 말씀의 능력이 살아 있는 예배",
        titleKr: "Anointing Worship",
        img: "/images/education/infants/1.jpg",
        imgClass: "brightness-50 object-[0%_40%]",
      },
      {
        id: 2,
        description: "말씀으로 하나님을 경험하는 수련회(겨울, 여름)",

        titleKr: "Bible Camp",
        img: "/images/education/infants/2.jpg",
        imgClass: "brightness-50 object-[50%_40%]",
      },
      {
        id: 3,
        description: "학교 앞 전도, 주중 심방",
        titleKr: "Contact",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
      {
        id: 4,
        description: "세상으로 흘러가 이웃 섬김을 실천하는 제자도",
        titleKr: "Disciple",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
    ],
    mainImg: "/images/education/vision1.jpg",
  },
  {
    type: "high",
    department: "고등부",
    imgs: ["/images/education/high/1.jpg", "/images/education/high/2.jpg", "/images/education/high/3.jpg"],
    introduction:
      "고등학교 1~3학년 청소년들이 모여 예배를 드리고, 하나님의 비전을 향해 함께 달려가며 부르심을 따라 세상을 섬기고 교회를 섬기는 영적리더를 세우는 공동체입니다.",
    target: "고등학생",
    time: "09:30 - 10:30",
    place: "독산동 비전채플 3층",
    coreministry: [
      {
        id: 1,
        description: "성령님의 임재와 말씀의 능력이 살아 있는 예배",

        titleKr: "Anointing Worship",
        img: "/images/education/infants/1.jpg",
        imgClass: "brightness-50 object-[0%_40%]",
      },
      {
        id: 2,
        description: "말씀으로 하나님을 경험하는 수련회(겨울, 여름)",

        titleKr: "Bible Camp",
        img: "/images/education/infants/2.jpg",
        imgClass: "brightness-50 object-[50%_40%]",
      },
      {
        id: 3,
        description: "학교 앞 전도, 주중 심방",

        titleKr: "Contact",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
      {
        id: 4,
        description: "세상으로 흘러가 이웃 섬김을 실천하는 제자도",

        titleKr: "Disciple",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
    ],
    mainImg: "/images/education/vision1.jpg",
  },
  {
    type: "2youth",
    department: "M'embers",
    imgs: ["/images/education/2youth/1.jpg", "/images/education/2youth/2.jpg", "/images/education/2youth/3.jpg"],
    introduction:
      "명문교회 2청년부 M'embers [M(yungmoon) embers, 명문교회의 불씨들]는 하나님을 경외하고 사랑하는 20~27세 청년들이 함께 모여 예배하는 공동체입니다.",
    target: "20-27세 청년",
    time: "14:00 - 16:30",
    place: "독산동 비전채플 3층",
    coreministry: [
      {
        id: 1,
        description: "말씀과 기도를 통해 복음의 능력을 경험하는 청년부",

        titleKr: "말씀 공동체",
        img: "/images/education/infants/1.jpg",
        imgClass: "brightness-50 object-[0%_40%]",
      },
      {
        id: 2,
        description: "각종 모임(순모임, Vip's 모임, 또래모임 등)과 교제를 통해 서로 하나되는 청년부",
        titleKr: "나눔 공동체",
        img: "/images/education/infants/2.jpg",
        imgClass: "brightness-50 object-[50%_40%]",
      },
      {
        id: 3,
        description: "세상 속에서 예수님의 손과 발이 되어 섬기는 청년부",
        titleKr: "섬김 공동체",
        img: "/images/education/infants/3.jpg",
        imgClass: "brightness-50 object-[100%_40%]",
      },
    ],

    mainImg: "/images/education/vision1.jpg",
  },
  {
    type: "1youth",
    department: "1청년부",
    imgs: ["/images/education/1youth/1.jpeg", "/images/education/1youth/2.jpg", "/images/education/1youth/3.jpg"],
    introduction: "28세 이상의 청년들이\n말씀 앞에서 삶과 신앙의 성숙을 이루어가기 위해 모인 공동체 입니다. ",
    target: "28세 이상 청년",
    time: "14:00 - 16:30",
    place: "독산동 비전채플 3층",
    coreministry: [
      {
        id: 1,
        description: "교회 곳곳에 흩어져 섬김에 최선을 다하고",

        titleKr: "Along",
        img: "/images/education/infants/1.jpg",
        imgClass: "brightness-50 object-[0%_40%]",
      },
      {
        id: 2,
        description: "함께 모여 예배하고 교제하며 하나됨을 이룬다.",

        titleKr: "Togther",
        img: "/images/education/infants/2.jpg",
        imgClass: "brightness-50 object-[50%_40%]",
      },
    ],
    mainImg: "/images/education/vision1.jpg",
  },
];

const EducationOverView = ({ type }: IEducationOverViewProps) => {
  const educationData = EDUCATION_DATA.find((data) => data.type === type);

  if (!educationData) {
    return null;
  }

  return (
    <div className="sacle flex w-full flex-col items-center justify-center gap-16 overflow-x-hidden">
      <EducationIntroductionSection department={educationData.department} text={educationData.introduction} />
      <EducationImageSection list={educationData.imgs} />
      <EducationInformationSection
        department={educationData.department}
        place={educationData.place}
        target={educationData.target}
        time={educationData.time}
      />
      <EducationCoreMinistrySection dataList={educationData.coreministry} department={educationData.department} />
    </div>
  );
};

export default EducationOverView;
