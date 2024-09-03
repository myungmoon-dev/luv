import BulletinSection from "@/components/home/bulletin";
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
    <div>
      <BulletinSection />
      <div className="px-24 py-10">
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
    </div>
  );
};

export default BulletinsPage;
