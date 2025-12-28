import { useState } from "react";
import { DateTab, Spinner } from "ui";
import { useGetBibles } from "@/query/bible";
import { useRouter } from "next/navigation";
import { YearMonthType } from "type";
import dayjs from "dayjs";
import { useDateTab } from "helper";
import { getDateTabs } from "@/utils/getDateTabs";

const DiscipleshipFaithReadingBible = () => {
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
      <div className="flex justify-center py-10">
        <Spinner />
      </div>
    );

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8">
      <DateTab
        onClickPrev={handleClickPrev}
        selectedTab={currentTap}
        tabs={dateTabs}
        onClickTab={onClickTab}
        onClickNext={handleClickNext}
      />
      <div className="mt-6 flex flex-col gap-4">
        {data?.bibles.map((bible) => (
          <div
            key={bible._id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-500">{dayjs(bible.date).format("YYYY.MM.DD")}</p>
              <h3 className="text-lg font-semibold text-gray-900">{bible.title}</h3>
              <button
                onClick={() => push(`/discipleship/faith/bibleReading/${bible._id}`)}
                className="mt-2 w-full rounded-md bg-gray-100 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                자세히 보기
              </button>
            </div>
          </div>
        ))}

        {data?.bibles.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <p className="text-base">등록된 성경통독이 없습니다</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscipleshipFaithReadingBible;
