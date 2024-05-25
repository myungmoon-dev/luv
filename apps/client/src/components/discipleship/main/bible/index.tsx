import React, { useState } from "react";
import { DateTab, Spinner, Table } from "ui";

import { useGetBibles } from "@/query/bible";
import { useRouter } from "next/navigation";
import { YearMonthType } from "type";

const DATE_TAB: YearMonthType[] = ["2024-04", "2024-05", "2024-06", "2024-07"];

const DiscipleshipMainBible = () => {
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
    <div className="w-full px-20">
      <DateTab selectedTab={currentTap} tabs={DATE_TAB} onClickTab={onClickTab} />
      <Table
        data={data.bibles.map((bible) => ({
          id: bible.id,
          date: bible.date,
          title: bible.title,
          writer: "관리자",
        }))}
        onClickRow={(rowId) => push(`/discipleship/main/bible/${rowId}`)}
      />
    </div>
  );
};

export default DiscipleshipMainBible;
