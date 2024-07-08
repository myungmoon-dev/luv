import React from "react";
import HomeSection from "./section";
import { useRouter } from "next/navigation";

const BooksSection = () => {
  const { push } = useRouter();

  return (
    <HomeSection title="추천 도서">
      <div className="flex gap-5">
        <button
          onClick={() => push("/books")}
          className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white"
        >
          목록
        </button>
        <button
          onClick={() => push("/books/create")}
          className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white"
        >
          추가
        </button>
      </div>
    </HomeSection>
  );
};

export default BooksSection;
