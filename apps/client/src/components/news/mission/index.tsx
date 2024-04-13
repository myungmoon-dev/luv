import React from "react";
import { Pagination, Table } from "ui";

const Mission = () => {
  return (
    <div className="flex flex-col gap-7">
      <Table data={[]} />
      <Pagination currentPage={1} onSetPage={() => {}} totalQuantity={0} />
    </div>
  );
};

export default Mission;
