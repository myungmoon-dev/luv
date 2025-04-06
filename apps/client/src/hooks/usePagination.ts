import { usePageFromQueryParam } from "./usePage";
import { useSizeFromQueryParam } from "./useSize";

interface IUsePaginationProps {
  key?: string;
  sizeKey?: string;
}

const usePagination = ({ key = "page", sizeKey = "size" }: IUsePaginationProps = {}) => {
  const [page, setPage] = usePageFromQueryParam({ key });
  const [size] = useSizeFromQueryParam({ key: sizeKey });

  // pagination 컴포넌트에 넣어 사용, 페이지네이션 내부 클릭 시 query 변경
  const onSetPaginationQuery = ({ pageNumber }: { pageNumber: number }) => {
    setPage(pageNumber);
  };

  return { onSetPaginationQuery, page, size };
};

export default usePagination;
