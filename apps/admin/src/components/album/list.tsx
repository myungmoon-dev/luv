import ConfirmDialog from "@/components/common/ConfirmDialog";
import ListPagination from "@/components/common/ListPagination";
import { useDeleteAlbum, useGetAlbumList } from "@/query/album";
import dayjs from "dayjs";
import { useState } from "react";
import { AlbumType } from "type";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "../ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { ALBUM_TYPE_OPTIONS } from "./config";
import { toast } from "sonner";

interface IAlbumListProps {
  type: AlbumType;
}

const AlbumList = ({ type }: IAlbumListProps) => {
  const [page, setPage] = useState(0);
  const { data, isFetching, refetch } = useGetAlbumList(type, page);

  const { mutate } = useDeleteAlbum();

  const onDelete = (id: string) => {
    mutate(id, {
      onSuccess: () => {
        toast("삭제되었습니다.");
        refetch();
      },
    });
  };

  if (isFetching)
    return (
      <div className="flex w-full items-center justify-center">
        <Spinner />
      </div>
    );

  if (data?.totalElements === 0)
    return <p className="text-center text-muted-foreground">데이터가 존재하지 않습니다.</p>;

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">#</TableHead>
            <TableHead>제목</TableHead>
            <TableHead>타입</TableHead>
            <TableHead>날짜</TableHead>
            <TableHead>업로드일시</TableHead>
            <TableHead className="w-20">처리</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.content.map((album, idx) => {
            const albumOption = ALBUM_TYPE_OPTIONS.find((option) => option.value === album.albumType);
            return (
              <TableRow key={album.id}>
                <TableCell className="text-muted-foreground">{data.totalElements - idx}</TableCell>
                <TableCell className="font-medium">{album.title}</TableCell>
                <TableCell>{albumOption?.label ?? ""}</TableCell>
                <TableCell>{album.date}</TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {dayjs(album.createdAt).format("YYYY-MM-DD HH:mm")}
                </TableCell>
                <TableCell>
                  <ConfirmDialog
                    trigger={<Button variant="destructive" size="sm">삭제</Button>}
                    onConfirm={() => onDelete(album.id)}
                  />
                </TableCell>
              </TableRow>
            );
          })}
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

export default AlbumList;
