import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";
import { IBook } from "type";
import { Icon } from "ui";

interface IBookProps {
  book: IBook;
}

const Book = ({ book }: IBookProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const extractText = (html: string) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="flex cursor-pointer items-center justify-between border-b border-gray-600 px-4 py-4 md:px-7 md:py-6 lg:px-20"
      >
        <div className="flex items-center gap-4">
          <div className="relative h-[95px] w-[64px] md:h-[146px] md:w-[91px]">
            {/* FIXME: 이미지 형식 바꿔야함 */}
            <Image
              src={book.imageUrls[0]}
              alt={`${book.title}_이미지`}
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-medium md:text-2xl">{book.title}</h3>
            <p className="flex gap-1 md:text-lg lg:text-xl">
              <span className="text-[#BBBBBB]">저자</span>
              <span className="text-[#777777]">{book.writer}</span>
            </p>
          </div>
        </div>
        <div>
          <Icon name="CaretDown" />
        </div>
      </div>
      <div>
        {isOpen && (
          <div className="flex flex-col gap-4 border-b border-[#BBBBBB] bg-[#F7F7F7] px-4 py-4 md:px-7 md:py-6">
            <p className="text-[#6E6E6E]">{extractText(book.content)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
