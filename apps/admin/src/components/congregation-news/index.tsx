import { useDeleteCongregationNews, useGetCongregationNewsList } from "@/query/congregationNews";
import { CongregationNews } from "@/types/congregationNews/response";
import dayjs from "dayjs";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import { useRouter } from "next/router";
import { Spinner } from "ui";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { CONGREGATION_NEWS_TYPE_MAP } from "./config";

const CongregationNewsList = () => {
  const { push } = useRouter();
  const { data, isFetching } = useGetCongregationNewsList();
  const { mutate: deleteCongregationNews } = useDeleteCongregationNews();

  const handleDelete = (news: CongregationNews) => {
    if (!confirm("삭제하시겠습니까?")) return;

    deleteCongregationNews({ id: news._id });
  };

  const handleEdit = (news: CongregationNews) => {
    push(`/congregation-news/${news._id}`);
  };

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
          <TableHead>타입</TableHead>
          <TableHead>내용</TableHead>
          <TableHead>생성일</TableHead>
          <TableHead>수정일</TableHead>
          <TableHead>작업</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.congregationNewsList.map((news) => (
          <TableRow key={news._id}>
            <TableCell>{CONGREGATION_NEWS_TYPE_MAP[news.type]}</TableCell>
            <TableCell className="max-w-md">{news.description}</TableCell>
            <TableCell>{dayjs(news.createdAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
            <TableCell>{dayjs(news.updatedAt).format("YYYY-MM-DD HH:mm:ss")}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEdit(news)}>
                    <Edit className="mr-2 h-4 w-4" />
                    <span>편집</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(news)}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>삭제</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CongregationNewsList;
