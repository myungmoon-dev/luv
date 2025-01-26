import { useGetHomeWorships } from "@/query/homeWorship";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { Spinner } from "ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const HomeWorship = () => {
  const { push } = useRouter();
  const { data, isFetching } = useGetHomeWorships();

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
          <TableHead>공지 여부</TableHead>
          <TableHead>날짜</TableHead>
          <TableHead>제목</TableHead>
          <TableHead>생성자</TableHead>
          <TableHead>생성일</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.homworships.map((homeworship) => (
          <TableRow key={homeworship._id}>
            <TableCell>{homeworship.isPinned ? "✅" : "❎"}</TableCell>
            <TableCell>{homeworship.date}</TableCell>
            <TableCell>{homeworship.title}</TableCell>
            <TableCell>{homeworship.userName}</TableCell>
            <TableCell>{dayjs(homeworship.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HomeWorship;
