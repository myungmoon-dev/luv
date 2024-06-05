import { IPanoramaData, IPanoramaDetailedData, IPanoramaTargetData, PanoramaDataType } from "type";
import PanoramaDivisionComponent from "../divison";
import PanoramaSectionComponent from "./component";
import PanoramaOutlineSection from "./outline";
import PanoramaTargetSection from "./target";

// FIXME: DB 저장 예정
const PANORAMA_DATA: IPanoramaData[] = [
  {
    id: "outline",
    title: "교육개요",
    description: "구약과 신약의 주요사건을 바탕으로 지리적 배경과 함께 연대순으로 살펴가며 성경을 한눈으로 조망합니다.",
  },
  {
    id: "target",
    title: "교육대상",
    oldPanorama: "명문교회 성도",
    newPanorama: "구약의 파노라마 수료자",
    img: "/images/discipleship/welcome.jpg",
  },
  {
    id: "date",
    title: "교육기간",
    description: "교회소식 참고",
  },
  {
    id: "place",
    title: "교육시간 및 장소",
    description: "평일 오전반, 평일 저녁반",
  },
];

const DiscipleshipPanorama = () => {
  const getPanoramaData = (id: PanoramaDataType) => PANORAMA_DATA.find((item) => item.id === id);
  const outlineData = getPanoramaData("outline") as IPanoramaDetailedData;
  const targetData = getPanoramaData("target") as IPanoramaTargetData;
  const dateData = getPanoramaData("date") as IPanoramaDetailedData;
  const placeData = getPanoramaData("place") as IPanoramaDetailedData;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-10">
      {outlineData && <PanoramaOutlineSection title={outlineData.title} description={outlineData.description} />}
      {targetData && (
        <PanoramaTargetSection
          title={targetData.title}
          img={targetData.img}
          newPanorama={targetData.newPanorama}
          oldPanorama={targetData.oldPanorama}
        />
      )}
      {dateData && (
        <PanoramaSectionComponent title={dateData.title}>
          <PanoramaDivisionComponent text={dateData.description} type="date" />
        </PanoramaSectionComponent>
      )}
      {placeData && (
        <PanoramaSectionComponent title={placeData.title}>
          <PanoramaDivisionComponent text={placeData.description} type="place" />
        </PanoramaSectionComponent>
      )}
    </div>
  );
};

export default DiscipleshipPanorama;
