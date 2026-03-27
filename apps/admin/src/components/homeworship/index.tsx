import ListPagination from "@/components/common/ListPagination";
import { useGetHomeWorships } from "@/query/homeWorship";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const HomeWorship = () => {
  const { push } = useRouter();
  const [page, setPage] = useState(0);
  const { data, isFetching } = useGetHomeWorships({ page });

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
            <TableHead>공지 여부</TableHead>
            <TableHead>날짜</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>생성자</TableHead>
            <TableHead>생성일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.content.map((homeworship) => (
            <TableRow key={homeworship.id} onClick={() => push(`/homeworship/${homeworship.id}`)}>
              <TableCell>{homeworship.isPinned ? "✅" : "❎"}</TableCell>
              <TableCell>{homeworship.date}</TableCell>
              <TableCell>{homeworship.title}</TableCell>
              <TableCell>{homeworship.userName}</TableCell>
              <TableCell>{dayjs(homeworship.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
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

export default HomeWorship;
