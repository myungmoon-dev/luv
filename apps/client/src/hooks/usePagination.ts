import { useState } from "react";

interface IUsePaginationProps {
  totalCount: number;
  pinnedCount?: number;
}

const PAGE_SIZE = 10;

const usePagination = ({ totalCount }: IUsePaginationProps) => {
  const [page, setPage] = useState(1);

  const expectedCount = page * PAGE_SIZE;
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
