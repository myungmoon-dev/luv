import { useGetBibles } from "@/query/discipleship";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { YearMonthType } from "type";
import { DateTab, Spinner, Table } from "ui";

const DATE_TAB: { date: YearMonthType; label: string }[] = [
  { label: "4월", date: "2024-04" },
  { label: "5월", date: "2024-05" },
  { label: "6월", date: "2024-06" },
  { label: "7월", date: "2024-07" },
];

const DiscipleShipBiblesPage = () => {
  const { push } = useRouter();
  const [currentTap, setCurrentTap] = useState<YearMonthType>("2024-04");

  const { data } = useGetBibles({ yearMonth: currentTap });

  const onClickTab = (tab: YearMonthType) => {
    setCurrentTap(tab);
  };

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="px-24 py-10">
      <DateTab selectedTab={currentTap} tabs={DATE_TAB} onClickTab={onClickTab} />
      <Table
        data={data.bibles.map((bible) => ({
          id: bible.id,
          date: bible.createdAt,
          title: bible.title,
          writer: "관리자",
        }))}
        onClickRow={(rowId) => push(`/discipleship/bibles/${rowId}`)}
      />
    </div>
  );
};

export default DiscipleShipBiblesPage;
