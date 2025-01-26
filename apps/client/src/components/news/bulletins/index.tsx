import { useGetBulletins } from "@/query/bulletin";
import React from "react";
import { Table, Pagination, Spinner } from "ui";
import BulletinModal from "./Modal";
import useModalStore from "@/store/modal";

const Bulletins = () => {
  const { data, isFetching } = useGetBulletins();
  const open = useModalStore((state) => state.open);

  const handleBulletinClick = (id: string) => {
    open(<BulletinModal selectedBulletinId={id} />);
  };

  if (isFetching)
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-7">
      {data && (
        <Table
          data={data.bulletins.map((bulletin) => ({
            id: bulletin._id,
            date: bulletin.date,
            title: bulletin.title,
            writer: "관리자",
          }))}
          onClickRow={handleBulletinClick}
        />
      )}
      {/* FIXME: 페이지네이션 해야함 */}
      {/* <Pagination currentPage={1} onSetPage={() => {}} totalQuantity={data.bulletins.length} /> */}
    </div>
  );
};

export default Bulletins;
