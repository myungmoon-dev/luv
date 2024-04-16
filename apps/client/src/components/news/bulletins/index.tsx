import { useGetBulletins } from "@/query/bulletin";
import React from "react";
import { Table, Pagination, Spinner } from "ui";
import BulletinModal from "./Modal";
import useModalStore from "@/store/modal";

const Bulletins = () => {
  const { data } = useGetBulletins();
  const open = useModalStore((state) => state.open);

  const handleBulletinClick = (id: string) => {
    open(<BulletinModal selectedBulletinId={id} />);
  };

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-7">
      <Table
        data={data.bulletins.map((bulletin) => ({
          id: bulletin.id,
          date: bulletin.date,
          title: bulletin.title,
          writer: "관리자",
        }))}
        onClickRow={handleBulletinClick}
      />
      {/* FIXME: api에서 페이지네이션 정보 보내주도록 수정 */}
      <Pagination currentPage={1} onSetPage={() => {}} totalQuantity={data.bulletins.length} />
    </div>
  );
};

export default Bulletins;
