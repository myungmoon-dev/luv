import { useState } from "react";
import { DateTab, Spinner, Table } from "ui";

import { useGetBibles } from "@/query/bible";
import { useDateTab } from "helper";
import { useRouter } from "next/navigation";
import { YearMonthType } from "type";
import dayjs from "dayjs";
import { getDateTabs } from "@/utils/getDateTabs";

const DiscipleshipMainBible = () => {
  const { push } = useRouter();
  const [dateTabs, setDateTabs] = useState<{ date: YearMonthType; label: string }[]>(getDateTabs());
  const [currentTap, setCurrentTap] = useState<YearMonthType>(dayjs().format("YYYY-MM") as YearMonthType);

  const { handleClickNext, handleClickPrev } = useDateTab({ setDateTabs });

  const { data, isFetching } = useGetBibles({ yearMonth: currentTap });

  const onClickTab = (tab: YearMonthType) => {
    setCurrentTap(tab);
  };

  if (isFetching)
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
      {data && (
        <Table
          data={data.bibles.map((bible) => ({
            id: bible._id,
            date: bible.date,
            title: bible.title,
            writer: "관리자",
          }))}
          onClickRow={(rowId) => push(`/discipleship/main/bible/${rowId}`)}
        />
      )}
    </div>
  );
};

export default DiscipleshipMainBible;
