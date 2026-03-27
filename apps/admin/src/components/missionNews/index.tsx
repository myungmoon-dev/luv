import ListPagination from "@/components/common/ListPagination";
import { useGetMissionNewsList } from "@/query/missionNews";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";
import { Spinner } from "ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { MISSION_LOCATION_MAP } from "./config";

const MissionNewsList = () => {
  const { push } = useRouter();
  const [page, setPage] = useState(0);
  const { data } = useGetMissionNewsList({ page });

  if (!data)
    return (
      <div className="flex justify-center">
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
            <TableHead>선교지</TableHead>
            <TableHead>생성자</TableHead>
            <TableHead>생성일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.content.map((missionNews) => (
            <TableRow key={missionNews.id} onClick={() => push(`/mission-news/${missionNews.id}`)}>
              <TableCell>{missionNews.date}</TableCell>
              <TableCell>{missionNews.title}</TableCell>
              <TableCell>{MISSION_LOCATION_MAP[missionNews.location]}</TableCell>
              <TableCell>{missionNews.userName}</TableCell>
              <TableCell>{dayjs(missionNews.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
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

export default MissionNewsList;
