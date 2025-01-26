import { useGetBulletins } from "@/query/bulletin";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { Spinner } from "ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const Bulletins = () => {
  const { push } = useRouter();

  const { data, isFetching } = useGetBulletins();

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
        {data?.bulletins.map((bulletin) => (
          <TableRow key={bulletin._id} onClick={() => push(`/bulletins/${bulletin._id}`)}>
            <TableCell>{bulletin.date}</TableCell>
            <TableCell>{bulletin.title}</TableCell>
            <TableCell>{dayjs(bulletin.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Bulletins;
