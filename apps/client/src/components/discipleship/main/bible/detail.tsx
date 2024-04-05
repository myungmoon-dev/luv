import { useGetBible } from "@/query/bible";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import React from "react";
import { Spinner } from "ui";

const DiscipleshipMainBibleDetail = () => {
  const params = useParams();
  const bibleId = params?.id as string;
  const { data } = useGetBible({ bibleId });

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  const bible = data.bible;

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">{bible.title}</h1>
      <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(bible.createdAt).format("YYYY-MM-DD")}</p>
      <div>{bible.content}</div>
    </div>
  );
};

export default DiscipleshipMainBibleDetail;
