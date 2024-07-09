import usePagination from "@/hooks/usePagination";
import { useGetBooks } from "@/query/books";
import { Spinner, Table } from "ui";

const Books = () => {
  const { data, fetchNextPage } = useGetBooks();

  const { hasNextPage, setNextPage } = usePagination({ totalCount: data?.pages[0].totalBooksCount || 0, pageSize: 5 });

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
    <div>
      <Table
        data={data.pages
          .map((page) =>
            page.books.map((book) => ({
              ...book,
              writer: "관리자",
            })),
          )
          .flat()}
      />
      {hasNextPage && <button onClick={handleClickNextPage}>더보기</button>}
    </div>
  );
};

export default Books;
