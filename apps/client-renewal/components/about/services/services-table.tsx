import type { WorshipCategory } from "@/lib/constants/worship-schedule";
import { worshipSchedule } from "@/lib/constants/worship-schedule";

type ServicesTableProps = {
  worship: WorshipCategory;
};

export function ServicesTable({ worship }: ServicesTableProps) {
  const rows = worshipSchedule.filter((s) => s.worship === worship);

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[320px] table-fixed border-separate border-spacing-0">
        <thead>
          <tr className="bg-[#f8fafc]">
            <th
              scope="col"
              className="w-[34%] border border-b-[#d0d5dd] border-t-[#1e2a4a] py-3 text-center text-xs font-semibold text-[#496674] sm:py-4 sm:text-sm md:text-base"
            >
              예배
            </th>
            <th
              scope="col"
              className="w-[66%] border border-b-[#d0d5dd] border-l-0 border-t-[#1e2a4a] py-3 text-center text-xs font-semibold text-[#496674] sm:py-4 sm:text-sm md:text-base"
            >
              시간 / 장소
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((service, i) => (
            <tr key={`${service.label}-${i}`}>
              <th
                scope="row"
                className="whitespace-pre-wrap border border-[#E6E6E6] border-t-0 bg-[#fafbfc] px-2 py-3 text-center text-xs font-semibold text-[#333] sm:px-3 sm:py-4 sm:text-sm md:text-base"
              >
                {service.label}
              </th>
              <td className="border border-l-0 border-[#E6E6E6] border-t-0 px-2 py-3 text-center text-xs leading-relaxed text-[#496674] sm:px-3 sm:py-4 sm:text-sm md:text-base">
                <span className="font-medium text-[#333]">{service.time}</span>
                <br />
                {service.place}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
