import { useDeleteBible, useGetBible } from "@/query/discipleship";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { SafeHTML, Spinner, YoutubeVideo } from "ui";

const DiscipleShipBibleDetailPage = () => {
  const { push } = useRouter();
  const params = useParams();
  const bibleId = params?.id as string;
  const { data } = useGetBible({ bibleId });

  const { mutate } = useDeleteBible();

  const handleClickDelete = () => {
    if (!confirm("삭제하시겠습니까?")) return;
    mutate(
      { bibleId },
      {
        onSuccess: () => {
          alert("삭제되었습니다.");
          push("/bibles");
        },
        onError: (err: any) => {
          alert(err.response.data.result);
        },
      },
    );
  };

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
      <div className="mb-10 flex items-center justify-between ">
        <p className="text-sm text-slate-500">
          생성일: {dayjs(bible.createdAt).format("YYYY-MM-DD")}
        </p>
        <button onClick={handleClickDelete} className="text-sm text-red-500">
          삭제
        </button>
      </div>
      <div className="mb-10">
        <SafeHTML html={bible.content} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        {bible.links.map((link) => (
          <YoutubeVideo
            isFullLink={true}
            className="h-[250px]"
            videoId={link.name}
            key={link.name}
            isPlaylist={link.isPlaylist}
          />
        ))}
      </div>
    </div>
  );
};

export default DiscipleShipBibleDetailPage;
