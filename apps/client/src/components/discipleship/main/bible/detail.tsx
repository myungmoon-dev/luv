import { useGetBible } from "@/query/bible";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import React from "react";
import { SafeHTML, Spinner, YoutubeVideo } from "ui";

const DiscipleshipMainBibleDetail = () => {
  const params = useParams();
  const bibleId = params?.id as string;
  const { data, isFetching } = useGetBible({ bibleId });

  if (isFetching)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-40">
      <h1 className="mb-2 text-3xl font-bold">{data?.title}</h1>
      <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(data?.createdAt).format("YYYY-MM-DD")}</p>
      <div className="mb-10">
        <SafeHTML html={data?.content} />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {data?.links.map((link) => (
          <YoutubeVideo className="h-[250px]" videoId={link.name} isPlaylist={link.isPlaylist} key={link.name} />
        ))}
      </div>
    </div>
  );
};

export default DiscipleshipMainBibleDetail;
