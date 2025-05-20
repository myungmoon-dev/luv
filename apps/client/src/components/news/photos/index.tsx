import usePagination from "@/hooks/usePagination";
import { useGetAlbumList } from "@/query/album";
import useModalStore from "@/store/modal";
import { Pagination, Spinner, Table } from "ui";
import AlbumModal from "./Modal";

const NewsPhotos = () => {
  const { data, isLoading } = useGetAlbumList("all");
  const open = useModalStore((state) => state.open);

  const { onSetPaginationQuery, page } = usePagination();

  const handleAlbumClick = (id: string) => {
    open(<AlbumModal albumId={id} />);
  };

  return (
    <div className="flex flex-col gap-7">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <Table
          data={
            data?.albums.map((album) => ({ id: album._id, date: album.date, title: album.title, writer: "관리자" })) ||
            []
          }
          onClickRow={handleAlbumClick}
        />
      )}
      <Pagination currentPage={page} onSetPage={onSetPaginationQuery} totalQuantity={data?.totalAlbums || 0} />
    </div>
  );
};

export default NewsPhotos;
