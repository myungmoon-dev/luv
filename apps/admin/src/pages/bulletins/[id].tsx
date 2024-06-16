import { useGetBulletin } from "@/query/bulletin";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { Spinner } from "ui";

const BulletinDetailPage = () => {
  const { data: bulletin } = useGetBulletin();

  if (!bulletin)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="px-24 py-10">
      <h1 className="mb-2 text-3xl font-bold">{bulletin.title}</h1>
      <p className="mb-2 text-sm text-slate-500">날짜: {dayjs(bulletin.date).format("YYYY-MM-DD")}</p>
      <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(bulletin.createdAt).format("YYYY-MM-DD")}</p>
      <div className="flex flex-col gap-5">
        {bulletin.images.map((image) => (
          <div className="relative w-[868px] h-[550px]">
            <Image src={`${image}/bulletin`} fill={true} alt="주보" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulletinDetailPage;
