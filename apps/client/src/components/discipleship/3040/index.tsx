import Discipleship3040VisionSection from "./section/vision";
import Discipleship3040PurposeSection from "./section/purpose";
import Discipleship3040ProgramSection from "./section/program";
import { Generation3040Type, I3040ProgramData, I3040PurposeData, I3040VisionData, I3040WatchwordData } from "type";
import Discipleship3040TitleSection from "./section/title";
import AlbumList from "@/components/albums";

// FIXME: DB저장 예정
const DISCIPLESHIP_3040_DATA: (I3040VisionData | I3040WatchwordData | I3040PurposeData | I3040ProgramData)[] = [
  {
    id: "watchword",
    data: {
      watchwordEn: "COME TOGETHER",
      watchwordKr: "함께 모여요!",
      verse: "히브리서 10장 24-25절",
    },
  },
  {
    id: "vision",
    data: {
      img: "/images/discipleship/3040/vision.png",
      text1: "하나님을 기쁘시게",
      text2: "가정을 행복하게",
      emphasis: "가정을 교회같이, 교회를 가정같이",
    },
  },
  {
    id: "purpose",
    data: {
      img: "/images/discipleship/3040/purpose.png",
      purposes: [
        "3040 세대는 직장・가사・육아로 몸과 마음이 지쳐 신앙생활에 어려움이 크기 때문에 신앙공동체 안에서 함께 위로하고 나눌 수 있는 모임이 필요합니다.",
        "이를 위해 명문교회 3040 모임은 진정한 믿음의 관계를 회복하고, 소그룹 활동을 통해 삶의 의미와 목적을 공유하며 믿음생활의 유지 발전에 도움을 주고자 합니다.",
      ],
    },
  },
  {
    id: "program",
    data: {
      img: "/images/discipleship/3040/program.png",
      programs: [
        {
          title: "3040 성경적 자녀양육 세미나",
          informations: [
            "5월 11일(토), 18일(토) 10:00~12:00 총 2회",
            "행복한 부부, 거룩한 가정 / 성경적 부모 자녀 관계와 의사소통",
          ],
        },
        {
          title: "3040 바베큐 파티",
          informations: ["5월 25일(토) 가족 및 자녀 동반"],
        },
        {
          title: "명문부부세미나 “끝까지 잘 사는 부부“",
          informations: [
            "6월 15일(토), 22일(토) 10:20~12:30 총 2회",
            "부부 대화의 더하기와 빼기 / 서로 돕는 친밀한 부부",
          ],
        },
        {
          title: "3040 독서모임",
          informations: [
            "『예수님이라면 어떻게 하실까?』",
            "독서나눔 (1차): 9월 28일(토) 10:30, 비전채플 2층",
            "독서나눔 (2차): 10월 중 진행 예정",
          ],
        },
      ],
    },
  },
];

const Discipleship3040 = () => {
  const getPanoramaData = (id: Generation3040Type) => DISCIPLESHIP_3040_DATA.find((item) => item.id === id);
  const watchwordData = getPanoramaData("watchword") as I3040WatchwordData;
  const visionData = getPanoramaData("vision") as I3040VisionData;
  const purposeData = getPanoramaData("purpose") as I3040PurposeData;
  const programData = getPanoramaData("program") as I3040ProgramData;

  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-14 overflow-x-hidden xl:gap-20">
      <Discipleship3040TitleSection
        titleEn={watchwordData.data.watchwordEn}
        titleKr={watchwordData.data.watchwordKr}
        verse={watchwordData.data.verse}
      />
      <Discipleship3040VisionSection
        img={visionData.data.img}
        text1={visionData.data.text1}
        text2={visionData.data.text2 ?? ""}
        emphasis={visionData.data.emphasis}
      />
      <Discipleship3040PurposeSection img={purposeData.data.img} list={purposeData.data.purposes} />
      <Discipleship3040ProgramSection img={programData.data.img} list={programData.data.programs} />
      <AlbumList albumType="3040" />
    </div>
  );
};

export default Discipleship3040;
