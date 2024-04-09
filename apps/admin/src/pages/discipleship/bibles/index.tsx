import { useGetBibles } from "@/query/discipleship";
import { useRouter } from "next/navigation";
import React from "react";
import { Spinner, Table } from "ui";

const DiscipleShipBiblesPage = () => {
  const { push } = useRouter();
  const { data } = useGetBibles();

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="px-24 py-10">
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
