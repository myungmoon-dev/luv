import { useGetBulletins } from "@/query/bulletin";
import { useRouter } from "next/navigation";
import React from "react";
import { Table } from "ui";

const Bulletins = () => {
  const { push } = useRouter();

  const { data } = useGetBulletins();

  return (
    <div>
      <Table
        data={
          data?.bulletins.map((bulletin) => ({
            id: bulletin.id,
            date: bulletin.date,
            title: bulletin.title,
            writer: "관리자",
          })) || []
        }
        onClickRow={(rowId) => push(`/bulletins/${rowId}`)}
      />
    </div>
  );
};

export default Bulletins;
