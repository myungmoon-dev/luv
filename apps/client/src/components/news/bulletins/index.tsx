import usePagination from "@/hooks/usePagination";
import { useGetBulletins } from "@/query/bulletin";
import useModalStore from "@/store/modal";
import { Pagination, Spinner, Table } from "ui";
import BulletinModal from "./Modal";
import NewsNavigation from "../Navigation";

const Bulletins = () => {
  const { data, isLoading } = useGetBulletins();
  const open = useModalStore((state) => state.open);

  const { onSetPaginationQuery, page } = usePagination();

  const handleBulletinClick = (id: string) => {
    open(<BulletinModal selectedBulletinId={id} />);
  };

  return (
    <div className="flex flex-col gap-16 pb-60 pt-8">
      <NewsNavigation />
      <div className="flex flex-col gap-7">
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <Table
            data={
              data?.bulletins.map((bulletin) => ({
                id: bulletin._id,
                date: bulletin.date,
                title: bulletin.title,
                writer: "관리자",
              })) || []
            }
            onClickRow={handleBulletinClick}
          />
        )}
        <Pagination
          currentPage={page}
          onSetPage={onSetPaginationQuery}
          totalQuantity={data?.totalBulletins || 0}
        />
      </div>
    </div>
  );
};

export default Bulletins;
