import ListPagination from "@/components/common/ListPagination";
import { useGetBooks } from "@/query/books";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";
import { Spinner } from "ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const Books = () => {
  const { push } = useRouter();
  const [page, setPage] = useState(0);
  const { data, isFetching } = useGetBooks({ page });

  if (isFetching)
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>날짜</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>생성일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.content.map((book) => (
            <TableRow key={book.id} onClick={() => push(`/books/${book.id}`)}>
              <TableCell>{book.date}</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{dayjs(book.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ListPagination
        page={page}
        totalPages={data?.totalPages ?? 0}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Books;
