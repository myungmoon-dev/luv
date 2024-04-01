interface IUsePaginationProps {
  currentPage: number;
  totalQuantity: number | null;
}

export const usePagination = ({ currentPage, totalQuantity }: IUsePaginationProps) => {
  const getPageList = () => {
    // FIXME: 추후 로직 적용
    if (!totalQuantity) return [];

    return new Array(Math.floor(totalQuantity / 10) + (totalQuantity % 10 ? 1 : 0)).fill(1).map((_, i) => i + 1);
  };

  return { getPageList };
};
