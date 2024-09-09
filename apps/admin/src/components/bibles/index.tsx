import { useGetBibles } from "@/query/discipleship";
import { getDateTabs } from "@/utils/getDateTabs";
import dayjs from "dayjs";
import { useDateTab } from "helper";
import { useRouter } from "next/router";
import { useState } from "react";
import { YearMonthType } from "type";
import { DateTab, Spinner, Table } from "ui";

const Bibles = () => {
  const { push } = useRouter();
  const [currentTap, setCurrentTap] = useState<YearMonthType>(
    dayjs().format("YYYY-MM") as YearMonthType,
  );
  const [dateTabs, setDateTabs] = useState<{ date: YearMonthType; label: string }[]>(getDateTabs());

  const { handleClickNext, handleClickPrev } = useDateTab({ setDateTabs });

  const { data } = useGetBibles({ yearMonth: currentTap });

  const onClickTab = (tab: YearMonthType) => {
    setCurrentTap(tab);
  };

  return (
    <div className="px-24 py-10">
      <DateTab
        selectedTab={currentTap}
        tabs={dateTabs}
        onClickTab={onClickTab}
        onClickPrev={handleClickPrev}
        onClickNext={handleClickNext}
      />
      {!data ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <Table
          data={data.bibles.map((bible) => ({
            id: bible.id,
            date: bible.date,
            title: bible.title,
            writer: "관리자",
          }))}
          onClickRow={(rowId) => push(`/bibles/${rowId}`)}
        />
      )}
    </div>
  );
};

export default Bibles;
