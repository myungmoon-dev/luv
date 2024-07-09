import { useGetBooks } from "@/query/books";
import { Spinner, Table } from "ui";

const Books = () => {
  const { data } = useGetBooks();

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <Table
        data={data.books.map((book) => ({
          ...book,
          writer: "관리자",
        }))}
      />
    </div>
  );
};

export default Books;
