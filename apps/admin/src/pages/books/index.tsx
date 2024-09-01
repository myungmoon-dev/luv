import usePagination from "@/hooks/usePagination";
import { useGetBooks } from "@/query/books";
import { useRouter } from "next/router";
import React from "react";
import { Spinner, Table } from "ui";

const Books = () => {
  const { push } = useRouter();
  const { data, fetchNextPage } = useGetBooks();

  const { hasNextPage, setNextPage } = usePagination({
    totalCount: data?.pages[0].totalBooksCount || 0,
    pageSize: 5,
  });

  const handleClickNextPage = () => {
    setNextPage();
    fetchNextPage();
  };

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="px-24 py-10">
      <Table
        data={data.pages.map((page) => page.books).flat()}
        onClickRow={(rowId) => push(`/books/${rowId}`)}
      />
      {hasNextPage && <button onClick={handleClickNextPage}>더보기</button>}
    </div>
  );
};

export default Books;
