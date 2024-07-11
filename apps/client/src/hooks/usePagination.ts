import { useState } from "react";

interface IUsePaginationProps {
  totalCount: number;
  pinnedCount?: number;
  pageSize?: number;
}

const usePagination = ({ totalCount, pageSize = 10 }: IUsePaginationProps) => {
  const [page, setPage] = useState(1);

  const expectedCount = page * pageSize;
  const notPinnedCount = totalCount;
  const setNextPage = () => {
    setPage(page + 1);
  };

  return {
    hasNextPage: notPinnedCount > expectedCount,
    setNextPage,
  };
};

export default usePagination;
