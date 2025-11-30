import { useGetBooks } from "@/query/books";
import useModalStore from "@/store/modal";
import { Spinner } from "ui";
import Book from "./item";
import BookModal from "./modal";
import useBooksPagination from "./useBooksPagination";
import NewsNavigation from "../Navigation";

const Books = () => {
  const { data, isFetching } = useGetBooks();

  const books = data?.books.map((book) => book).flat();

  const open = useModalStore((state) => state.open);
  const { hasNextPage, setNextPage } = useBooksPagination({
    totalCount: data?.totalBooksCount || 0,
    pageSize: 5,
  });

  const handleClickNextPage = () => {
    setNextPage();
  };

  const handleClickBook = (id: string) => {
    open(<BookModal id={id} />);
  };

  return (
    <div className="flex flex-col gap-16 pb-60 pt-8">
      <NewsNavigation />
      <div className="flex w-full flex-col gap-10 px-5 sm:w-[480px] md:w-[640px] lg:w-[768px] xl:w-[1024px]">
        {isFetching ? (
          <div className="flex h-full items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <div>
            {books?.map((book) => (
              <Book onClick={() => handleClickBook(book._id)} key={book._id} book={book} />
            ))}
          </div>
        )}
        {hasNextPage && (
          <button
            className="w-full rounded-3xl border border-gray-600 py-1 font-bold md:py-2 md:text-lg lg:py-3 lg:text-xl"
            onClick={handleClickNextPage}
          >
            더보기
          </button>
        )}
      </div>
    </div>
  );
};

export default Books;
