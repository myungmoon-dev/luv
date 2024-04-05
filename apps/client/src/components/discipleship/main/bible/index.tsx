import React from "react";
import { DateTab, Table } from "ui";

import { useGetBibles } from "@/query/bible";
import { useRouter } from "next/navigation";

const DiscipleshipMainBible = () => {
  const { push } = useRouter();
  const { data } = useGetBibles();
  const onClickTab = (index: number) => {};

  if (!data) return <p>loading...</p>;

  return (
    <div>
      <DateTab selectedTabIndex={0} tabs={["4월", "5월", "6월", "7월"]} onClickTab={onClickTab} />
      <Table
        data={data.bibles.map((bible) => ({
          id: bible.id,
          date: bible.createdAt,
          title: bible.title,
          writer: "관리자",
        }))}
        onClickRow={(rowId) => push(`/discipleship/main/bible/${rowId}`)}
      />
    </div>
  );
};

export default DiscipleshipMainBible;
