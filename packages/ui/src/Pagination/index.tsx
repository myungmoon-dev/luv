import React from "react";

interface IPaginationProps {
  currentPage: number;
  totalQuantity: number | null;
  onSetPage: ({ pageNumber }: { pageNumber: number }) => void;
}

const quantityPerPage = 10;

export const Pagination = ({}: IPaginationProps) => {
  return <div>Pagination</div>;
};
