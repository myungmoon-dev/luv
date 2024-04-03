import React from "react";
import { usePagination } from "./usePagination";
import { cn } from "..";

interface IPaginationProps {
  currentPage: number;
  totalQuantity: number | null;
  onSetPage: ({ pageNumber }: { pageNumber: number }) => void;
}

const quantityPerPage = 10;

export const Pagination = ({ currentPage, totalQuantity }: IPaginationProps) => {
  const { getPageList } = usePagination({ currentPage, totalQuantity });

  return (
    <div className="ui-flex ui-gap-5 ui-justify-center">
      <div className="ui-flex ui-gap-2">
        {getPageList().map((page) => (
          <div className={cn(currentPage === page ? "ui-font-bold" : "ui-font-normal", "ui-cursor-pointer")} key={page}>
            <p>{page}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
