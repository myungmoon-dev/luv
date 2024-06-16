import { useGetBulletins } from "@/query/bulletin";
import { useRouter } from "next/navigation";
import React from "react";
import { Spinner, Table } from "ui";

const BulletinsPage = () => {
  const { push } = useRouter();

  const { data } = useGetBulletins();

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="px-24 py-10">
      <button className="mb-10" onClick={() => push("/")}>
        {"<"} 뒤로가기
      </button>
      <Table
        data={data?.bulletins.map((bulletin) => ({
          id: bulletin.id,
          date: bulletin.date,
          title: bulletin.title,
          writer: "관리자",
        }))}
        onClickRow={(rowId) => push(`/bulletins/${rowId}`)}
      />
    </div>
  );
};

export default BulletinsPage;
