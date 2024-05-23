import { IWorshipService } from "@/constants/innerMenus/types";

const ServiceWorshipSchedule: IWorshipService[] = [
  {
    label: "1부 경건예배",
    time: "오전 7시30분",
    place: "독산동 비전채플 3층",
    worship: "주일",
  },
  {
    label: "2부 예배",
    time: "오전 9시",
    place: "서울여상 사랑채플 강당",
    worship: "주일",
  },
  {
    label: "3부 예배",
    time: "오전 11시30분",
    place: "서울여상 사랑채플 강당",
    worship: "주일",
  },
  {
    label: "4부 청년예배",
    time: "오후 2시",
    place: "독산동 비전채플 3층",
    worship: "주일",
  },
  {
    label: "오후 찬양예배",
    time: "오후 2시",
    place: "서울여상 사랑채플 강당",
    worship: "주일",
  },

  {
    label: "수요 예배(오전)",
    time: "오전 10시30분",
    place: "독산동 비전채플 3층",
    worship: "평일",
  },
  {
    label: "수요 예배(오후)",
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
      <div className="mb-3 grid min-h-[50px] w-full grid-cols-3 items-center gap-5 rounded-md bg-gray-200">
        <p className="text-center font-bold tracking-widest">구 분</p>
        <p className="flex items-center justify-center border-l-2 border-r-2 border-l-blue-500 border-r-blue-500 text-center font-bold tracking-widest">
          시 간
        </p>
        <p className="text-center font-bold tracking-widest">장 소</p>
      </div>

      {/* tb */}
      {ServiceWorshipSchedule.filter((schedule) => schedule.worship === worship).map((service, index) => (
        <div
          key={index}
          className="grid min-h-[50px] w-full grid-cols-3 items-center gap-5 border-b-2 border-b-gray-200"
        >
          <p className="text-center text-xs sm:text-sm">{service.label}</p>
          <p className="flex items-center justify-center border-l-2 border-r-2 border-l-gray-200 border-r-gray-200 text-center text-xs sm:text-sm">
            {service.time}
          </p>
          <p className="text-center text-xs sm:text-sm">{service.place}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesTable;
