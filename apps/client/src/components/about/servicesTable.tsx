import { IWorshipService } from "@/constants/innerMenus/types";

const ServiceWorshipSchedule: IWorshipService[] = [
  {
    label: "경건예배",
    time: "오전 7시30분",
    place: "독산동 비전채플 3층",
    worship: "주일",
  },
  {
    label: "1부예배",
    time: "오전 9시",
    place: "서울여상 사랑채플 강당",
    worship: "주일",
  },
  {
    label: "2부예배",
    time: "오전 11시30분",
    place: "서울여상 사랑채플 강당",
    worship: "주일",
  },
  {
    label: "오후찬양예배",
    time: "오후 2시",
    place: "서울여상 사랑채플 강당",
    worship: "주일",
  },
  {
    label: "청년예배",
    time: "오후 2시",
    place: "독산동 비전채플 3층",
    worship: "주일",
  },
  {
    label: "수요예배(오전)",
    time: "오전 10시30분",
    place: "독산동 비전채플 3층",
    worship: "평일",
  },
  {
    label: "수요예배(오후)",
    time: "오후 7시30분",
    place: "독산동 비전채플 3층",
    worship: "평일",
  },
  {
    label: "미스바 금요기도회",
    time: "오후 8시30분",
    place: "독산동 비전채플 3층",
    worship: "평일",
  },
];

interface IServicesTableProps {
  worship: string;
}

const ServicesTable = ({ worship }: IServicesTableProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* th */}
      <div className="grid min-h-[50px] w-full grid-cols-3 items-center gap-5 border-b border-b-gray-300">
        <p className="text-center font-bold">구분</p>
        <p className="flex h-full items-center justify-center border-l border-r border-l-gray-300 border-r-gray-300 text-center font-bold">
          시간
        </p>
        <p className="text-center font-bold">장소</p>
      </div>

      {/* tb */}
      {ServiceWorshipSchedule.filter((schedule) => schedule.worship === worship).map((service, index) => (
        <div key={index} className="grid min-h-[50px] w-full grid-cols-3 items-center gap-5 border-b border-b-gray-300">
          <p className="text-center text-sm">{service.label}</p>
          <p className="flex h-full items-center justify-center border-l border-r border-l-gray-300 border-r-gray-300 text-center text-sm">
            {service.time}
          </p>
          <p className="text-center text-sm">{service.place}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesTable;
