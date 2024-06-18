import { useGetBibles } from "@/query/discipleship";
import { useDateTab } from "helper";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { YearMonthType } from "type";
import { DateTab, Spinner, Table } from "ui";

const DiscipleShipBiblesPage = () => {
  const { push } = useRouter();
  const [currentTap, setCurrentTap] = useState<YearMonthType>("2024-04");
  const [dateTabs, setDateTabs] = useState<{ date: YearMonthType; label: string }[]>([
    { label: "04월", date: "2024-04" },
    { label: "05월", date: "2024-05" },
    { label: "06월", date: "2024-06" },
    { label: "07월", date: "2024-07" },
  ]);

  const { handleClickNext, handleClickPrev } = useDateTab({ setDateTabs });

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
      <DateTab
        selectedTab={currentTap}
        tabs={dateTabs}
        onClickTab={onClickTab}
        onClickPrev={handleClickPrev}
        onClickNext={handleClickNext}
      />
      <Table
        data={data.bibles.map((bible) => ({
          id: bible.id,
          date: bible.date,
          title: bible.title,
          writer: "관리자",
        }))}
        onClickRow={(rowId) => push(`/discipleship/bibles/${rowId}`)}
      />
    </div>
  );
};

export default DiscipleShipBiblesPage;
