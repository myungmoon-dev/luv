import React from "react";
import { ITableData, Table } from "ui";

const MOCK_TABLE_DATA: ITableData[] = [
  { date: "2024. 04. 03", id: "3", title: "2024년 3월 5번째주", viewCount: 5, writer: "admin" },
  { date: "2024. 04. 03", id: "2", title: "2024년 3월 4번째주", viewCount: 3, writer: "admin" },
  { date: "2024. 04. 03", id: "1", title: "2024년 3월 3번째주", viewCount: 10, writer: "admin" },
];

const Bulletins = () => {
  return (
    <div>
      <Table data={MOCK_TABLE_DATA} />
    </div>
  );
};

export default Bulletins;
