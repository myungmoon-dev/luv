import { useDeleteAlbum, useGetAlbumList } from "@/query/album";
import dayjs from "dayjs";
import React from "react";
import { AlbumType } from "type";
import { Spinner } from "ui";
import { Button } from "../ui/button";
import { ALBUM_TYPE_OPTIONS } from "./config";
import { toast } from "sonner";

interface IAlbumListProps {
  type: AlbumType;
}

const AlbumList = ({ type }: IAlbumListProps) => {
  const { data, isFetching, refetch } = useGetAlbumList(type);

  const { mutate } = useDeleteAlbum();

  const onDelete = (id: string) => {
    if (confirm("삭제하시겠습니까?")) {
      mutate(id, {
        onSuccess: () => {
          toast("삭제되었습니다.");
          refetch();
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-5 place-items-center gap-2 border-b pb-2 text-lg font-bold">
        <p>번호</p>
        <p>제목</p>
        <p>타입</p>
        <p>날짜/업로드일시</p>
        <p>처리</p>
      </div>
      <div className="flex w-full flex-col gap-5">
        {isFetching ? (
          <div className="flex w-full flex-col items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            {data?.totalAlbums === 0 && <p className="text-center">데이터가 존재하지 않습니다.</p>}
            {data?.albums.map((album, idx) => {
              // ALBUM_OPTION_DATA에서 albumType에 해당하는 label 찾기
              const albumOption = ALBUM_TYPE_OPTIONS.find((option) => option.value === album.type);
              return (
                <div key={album._id} className="grid grid-cols-5 place-items-center gap-2">
                  <p>{data.totalAlbums - idx}</p>
                  <p>{album.title}</p>
                  <p className="flex gap-1">{albumOption?.label ?? ""}</p>
                  <div className="text-center">
                    <p>{album.date}</p>
                    <p className="text-sm text-gray-400">
                      {dayjs(album.createdAt).format("YYYY-MM-DD HH:mm")}
                    </p>
                  </div>
                  <Button variant="destructive" onClick={() => onDelete(album._id)}>
                    삭제
                  </Button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default AlbumList;
