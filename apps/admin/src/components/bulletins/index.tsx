import ListPagination from "@/components/common/ListPagination";
import { useGetBulletins } from "@/query/bulletin";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const Bulletins = () => {
  const { push } = useRouter();
  const [page, setPage] = useState(0);
  const { data, isFetching } = useGetBulletins({ page });

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
          {data?.content.map((bulletin) => (
            <TableRow key={bulletin.id} onClick={() => push(`/bulletins/${bulletin.id}`)}>
              <TableCell>{bulletin.date}</TableCell>
              <TableCell>{bulletin.title}</TableCell>
              <TableCell>{dayjs(bulletin.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
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

export default Bulletins;
