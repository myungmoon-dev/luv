import { useState } from "react";
import { DateTab, Spinner, Table } from "ui";

import { useGetBibles } from "@/query/bible";
import { useDateTab } from "helper";
import { useRouter } from "next/navigation";
import { YearMonthType } from "type";

const DiscipleshipMainBible = () => {
  const { push } = useRouter();
  const [dateTabs, setDateTabs] = useState<{ date: YearMonthType; label: string }[]>([
    { label: "04월", date: "2024-04" },
    { label: "05월", date: "2024-05" },
    { label: "06월", date: "2024-06" },
    { label: "07월", date: "2024-07" },
  ]);
  const [currentTap, setCurrentTap] = useState<YearMonthType>("2024-04");

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
    <div className="w-full px-20">
      <DateTab
        onClickPrev={handleClickPrev}
        selectedTab={currentTap}
        tabs={dateTabs}
        onClickTab={onClickTab}
        onClickNext={handleClickNext}
      />
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
