import ListPagination from "@/components/common/ListPagination";
import { useGetBibles } from "@/query/discipleship";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";
import { YearMonthType } from "type";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const Bibles = () => {
  const { push } = useRouter();
  const [page, setPage] = useState(0);
  const [currentTap] = useState<YearMonthType>(
    dayjs().format("YYYY-MM") as YearMonthType,
  );

  const { data, isFetching } = useGetBibles({ yearMonth: currentTap, page });

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
          {data?.content.map((bible) => (
            <TableRow key={bible.id} onClick={() => push(`/bibles/${bible.id}`)}>
              <TableCell>{bible.date}</TableCell>
              <TableCell>{bible.title}</TableCell>
              <TableCell>{dayjs(bible.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
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

export default Bibles;
