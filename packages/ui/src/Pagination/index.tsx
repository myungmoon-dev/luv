import { cn, Icon } from "..";
import usePagination from "./usePagination";

interface IPaginationProps {
  currentPage: number;
  totalQuantity: number | null;
  onSetPage: ({ pageNumber }: { pageNumber: number }) => void;
  quantityPerPage?: number;
}

export const Pagination = ({
  currentPage,
  totalQuantity,
  onSetPage,
  quantityPerPage = 10,
}: IPaginationProps) => {
  const {
    disabledNext,
    disabledNextStep,
    disabledPrev,
    disabledPrevStep,
    getPageList,
    handleNumberPage,
    handleNextPage,
    handleNextStep,
    handlePreviousPage,
    handlePreviousStep,
    getCursor,
  } = usePagination({
    currentPage,
    totalQuantity,
    onSetPagination: onSetPage,
    quantityPerPage,
  });

  return (
    <div className="ui-flex ui-gap-5 ui-justify-center">
      <div className="flex items-center gap-2">
        <Icon
          name="ChevronDoubleLeft"
          size="sm"
          cursor={getCursor(disabledPrevStep)}
          onClick={handlePreviousStep}
        />
        <Icon
          name="ChevronLeft"
          size="sm"
          cursor={getCursor(disabledPrev)}
          onClick={handlePreviousPage}
        />
      </div>
      <div className="ui-flex ui-gap-2">
        {getPageList().map((page) => (
          <div
            className={cn(
              currentPage === page ? "ui-font-bold" : "ui-font-normal",
              "ui-cursor-pointer",
            )}
            key={page}
            onClick={() => handleNumberPage(page)}
          >
            <p>{page}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Icon
          name="ChevronRight"
          size="sm"
          cursor={getCursor(disabledNext)}
          onClick={handleNextPage}
        />
        <Icon
          name="ChevronDoubleRight"
          size="sm"
          cursor={getCursor(disabledNextStep)}
          onClick={handleNextStep}
        />
      </div>
    </div>
  );
};
