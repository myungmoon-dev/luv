import { useGetBooks } from "@/query/books";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { Spinner } from "ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const Books = () => {
  const { push } = useRouter();
  const { data, isFetching } = useGetBooks();

  if (isFetching)
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>날짜</TableHead>
          <TableHead>제목</TableHead>
          <TableHead>생성일</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.books.map((book) => (
          <TableRow key={book._id} onClick={() => push(`/books/${book._id}`)}>
            <TableCell>{book.date}</TableCell>
            <TableCell>{book.title}</TableCell>
            <TableCell>{dayjs(book.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Books;
