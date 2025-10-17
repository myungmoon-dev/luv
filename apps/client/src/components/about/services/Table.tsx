import { IWorshipService } from "@/constants/innerMenus/types";

const ServiceWorshipSchedule: IWorshipService[] = [
  {
    label: "1부\n경건예배",
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
    label: "4부\n청년예배",
    time: "오후 2시",
    place: "독산동 비전채플 3층",
    worship: "주일",
  },
  {
    label: "오후\n찬양예배",
    time: "오후 2시",
    place: "서울여상 사랑채플 강당",
    worship: "주일",
  },
  {
    label: "새벽예배",
    time: "오전 5시",
    place: "독산동 비전채플 3층",
    worship: "평일",
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
    label: "미스바\n금요기도회",
    time: "오후 8시30분",
    place: "독산동 비전채플 3층",
    worship: "평일",
  },
  {
    label: "영아부",
    time: "오전 11시30분",
    place: "서울여상 사랑채플 2층 체조실",
    worship: "다음세대",
  },
  {
    label: "유치부",
    time: "오전 11시30분",
    place: "서울여상 사랑채플 1층 창작나눔실",
    worship: "다음세대",
  },
  {
    label: "유초등부",
    time: "오전 11시30분",
    place: "서울여상 사랑채플 2층 무용실",
    worship: "다음세대",
  },
  {
    label: "중고등부",
    time: "오전 9시30분",
    place: "독산동 비전채플 3층",
    worship: "다음세대",
  },
  {
    label: "청년부",
    time: "오후 2시",
    place: "독산동 비전채플 3층",
    worship: "다음세대",
  },
];

interface IServicesTableProps {
  worship: string;
}

const ServicesTable = ({ worship }: IServicesTableProps) => {
  const rows = ServiceWorshipSchedule.filter((s) => s.worship === worship);

  return (
    <div className="w-full">
      <table className="w-full table-fixed border-separate border-spacing-0">
        <thead>
          <tr className="bg-[#F8F8F8]">
            <th
              scope="col"
              className="w-1/3 border-b border-t border-b-[#BCBCBC] border-t-[#7E7E7E] py-3 text-center text-sm font-medium text-[#4F4F4F] sm:py-5 sm:text-lg"
            >
              예배
            </th>
            <th
              scope="col"
              className="w-2/3 border-b border-l border-t border-b-[#BCBCBC] border-l-[#BCBCBC] border-t-[#7E7E7E] py-3 text-center text-sm font-medium text-[#4F4F4F] sm:py-5 sm:text-lg"
            >
              시간/장소
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((service, i) => (
            <tr key={`${service.label}-${i}`} className="border-b-2 border-gray-200">
              <th
                scope="row"
                className="whitespace-pre-wrap border-b border-[#BCBCBC] bg-[#F8F8F8] px-3 py-3 text-center text-sm font-medium text-[#424242] sm:py-7 sm:text-lg"
              >
                {service.label}
              </th>
              <td className="border-b border-l border-[#BCBCBC] px-3 py-3 text-center text-sm font-medium text-[#424242] sm:py-7 sm:text-lg">
                {service.time}
                <br />
                {service.place}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
