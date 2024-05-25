import { useGetBible } from "@/query/bible";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import React from "react";
import { SafeHTML, Spinner, YoutubeVideo } from "ui";

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
    <div className="px-5 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-40">
      <h1 className="mb-2 text-3xl font-bold">{bible.title}</h1>
      <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(bible.createdAt).format("YYYY-MM-DD")}</p>
      <div className="mb-10">
        <SafeHTML html={bible.content} />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {bible.links.map((link) => (
          <YoutubeVideo
            isFullLink={true}
            className="h-[250px]"
            videoId={link.name}
            isPlaylist={link.isPlaylist}
            key={link.name}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscipleshipMainBibleDetail;
