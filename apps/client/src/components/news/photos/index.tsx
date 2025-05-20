import { useGetAlbumListSuspense } from "@/query/album";
import { Suspense } from "@suspensive/react";
import { Table } from "ui";

const NewsPhotos = () => {
  return (
    <Suspense clientOnly>
      <NewsPhotosMain />
    </Suspense>
  );
};

const NewsPhotosMain = () => {
  const { data } = useGetAlbumListSuspense("all");

  return (
    <div>
      <Table
        data={data.albums.map((album) => ({ id: album._id, date: album.date, title: album.title, writer: "관리자" }))}
      />
    </div>
  );
};

export default NewsPhotos;
