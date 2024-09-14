import { useRouter } from "next/router";
import React from "react";
import { Pagination, Table } from "ui";

// FIXME: 임시데이터
const data = [
  {
    id: "1",
    date: "2024-09-14",
    title: "2024 명문교회 추석 가정예배 순서지",
    writer: "관리자",
    isPinned: true,
  },
  {
    id: "2",
    date: "2024-09-14",
    title: "명문교회 30구절 PART-1",
    writer: "관리자",
    isPinned: true,
  },
];

const Resources = () => {
  const { push } = useRouter();
  return (
    <div className="flex flex-col gap-7">
      <Table data={data} onClickRow={(rowId) => push(`/news/resources/${rowId}`)} />
      <Pagination currentPage={1} onSetPage={() => {}} totalQuantity={0} />
    </div>
  );
};

export default Resources;
