import { useGetBible } from "@/query/bible";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import React from "react";

const DiscipleshipMainBibleDetail = () => {
  const { id } = useParams();
  const { data } = useGetBible({ bibleId: id as string });

  if (!data) return <p>loaidng...</p>;

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
