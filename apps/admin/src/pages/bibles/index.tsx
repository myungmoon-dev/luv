import Layout from "@/components/layout";
import { useGetBibles } from "@/query/discipleship";
import { getDateTabs } from "@/utils/getDateTabs";
import dayjs from "dayjs";
import { useDateTab } from "helper";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { YearMonthType } from "type";
import { DateTab, Spinner, Table } from "ui";

const DiscipleShipBiblesPage = () => {
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

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <Layout title="성경통독">
      <button
        onClick={() => push("/bibles/create")}
        className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white"
      >
        추가
      </button>
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
          onClickRow={(rowId) => push(`/bibles/${rowId}`)}
        />
      </div>
    </Layout>
  );
};

export default DiscipleShipBiblesPage;