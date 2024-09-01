import dayjs from "dayjs";
import Image from "next/image";
import { IBook } from "type";

interface IBookProps {
  book: IBook;
  onClick: () => void;
}

const Book = ({ book, onClick }: IBookProps) => {
  const extractText = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <div onClick={onClick} className="flex cursor-pointer gap-8 border-b border-gray-600">
      <div className="flex items-center justify-center px-[46px] py-6 sm:pb-8 sm:pt-9 md:px-[70px]">
        <div className="relative h-[97px] w-[60px] md:h-[146px] md:w-[91px]">
          {/* FIXME: 이미지 형식 바꿔야함 */}
          <Image src={`${book.image}/bulletin`} alt={`${book.title}_이미지`} fill={true} className="object-contain" />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 py-8 sm:pb-12 sm:pt-14">
        <h3 className="text-xl font-bold">{book.title}</h3>
        <p className="line-clamp-2 text-gray-500">{extractText(book.content)}</p>
        <p>{dayjs(book.date).format("YYYY. MM.")}</p>
      </div>
    </div>
  );
};

export default Book;
