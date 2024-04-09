import { useGetBible } from "@/query/discipleship";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import React from "react";
import { Spinner, YoutubeVideo } from "ui";

const DiscipleShipBibleDetailPage = () => {
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
    <div className="px-24 py-10">
      <h1 className="mb-2 text-3xl font-bold">{bible.title}</h1>
      <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(bible.createdAt).format("YYYY-MM-DD")}</p>
      <div className="mb-10">{bible.content}</div>
      <div className="grid grid-cols-2 gap-5">
        {bible.links.map((link) => (
          <YoutubeVideo className="h-[250px]" videoId={link} key={link} />
        ))}
      </div>
    </div>
  );
};

export default DiscipleShipBibleDetailPage;
