import { useGetMissionNewsList } from "@/query/missionNews";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { Spinner } from "ui";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { MISSION_LOCATION_MAP } from "./config";

const MissionNewsList = () => {
  const { push } = useRouter();
  const { data } = useGetMissionNewsList();

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
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
        {data?.missionNewsList.map((missionNews) => (
          <TableRow key={missionNews._id} onClick={() => push(`/mission-news/${missionNews._id}`)}>
            <TableCell>{missionNews.date}</TableCell>
            <TableCell>{missionNews.title}</TableCell>
            <TableCell>{MISSION_LOCATION_MAP[missionNews.location]}</TableCell>
            <TableCell>{missionNews.userName}</TableCell>
            <TableCell>{dayjs(missionNews.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MissionNewsList;
