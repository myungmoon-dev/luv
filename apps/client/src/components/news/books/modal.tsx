import React from "react";
import { SafeHTML, Spinner } from "ui";

import dayjs from "dayjs";
import Image from "next/image";

import { useGetBook } from "@/query/books";

interface IBookModalProps {
  id: string;
}

const BookModal = ({ id }: IBookModalProps) => {
  const { data, isLoading } = useGetBook({ bookId: id });

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <div className="relative h-[220px] w-full sm:h-[300px] md:h-[320px] lg:h-[400px]">
          <Image src={`${data?.image}/bulletin`} alt={`${data?.title}_이미지`} fill={true} className="object-contain" />
        </div>
        <div className="flex flex-col items-center gap-2.5">
          <h3 className="text-3xl font-bold">{data?.title}</h3>
          <div className="flex flex-col items-center gap-1">
            <p>{data?.writer || "작성자"}</p>
            <p className="text-sm">{dayjs(data?.date).format("YYYY. MM.")}</p>
          </div>
        </div>
      </div>
      <hr className="my-5 w-full border-gray-600" />
      <div className="text-gray-500">
        <SafeHTML html={data?.content} />
      </div>
    </div>
  );
};

export default BookModal;
