import React, { useState } from "react";
import { DateTab, Spinner, Table } from "ui";

import { useGetBibles } from "@/query/bible";
import { useRouter } from "next/navigation";

const DiscipleshipMainBible = () => {
  const { push } = useRouter();
  const { data } = useGetBibles();

  const [currentTap, setCurrentTap] = useState(0);

  const onClickTab = (index: number) => {
    setCurrentTap(index);
  };

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <DateTab selectedTabIndex={currentTap} tabs={["4월", "5월", "6월", "7월"]} onClickTab={onClickTab} />
      <Table
        data={
          // FIXME: 진짜 임시로 4월일 때만 보이는 것처럼 적용
          currentTap !== 0
            ? []
            : data.bibles.map((bible) => ({
                id: bible.id,
                date: bible.date,
                title: bible.title,
                writer: "관리자",
              }))
        }
        onClickRow={(rowId) => push(`/discipleship/main/bible/${rowId}`)}
      />
    </div>
  );
};

export default DiscipleshipMainBible;
