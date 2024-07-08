import { useGetBooks } from "@/query/books";
import React from "react";
import { Table } from "ui";

const Books = () => {
  const { data } = useGetBooks();

  return (
    <div className="px-24 py-10">
      <Table data={data?.books.map((book) => ({ ...book, writer: "관리자" })) || []} />
    </div>
  );
};

export default Books;
