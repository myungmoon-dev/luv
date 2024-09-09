import usePagination from "@/hooks/usePagination";
import { useGetBooks } from "@/query/books";
import { useRouter } from "next/router";
import { Spinner, Table } from "ui";
import { Button } from "../ui/button";

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
    <div className="flex flex-col gap-5">
      <Table
        data={data.pages.map((page) => page.books).flat()}
        onClickRow={(rowId) => push(`/books/${rowId}`)}
      />
      {hasNextPage && (
        <div className="flex justify-end">
          <Button onClick={handleClickNextPage}>더보기</Button>
        </div>
      )}
    </div>
  );
};

export default Books;
