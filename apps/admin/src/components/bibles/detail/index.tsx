import { Button } from "@/components/ui/button";
import { useDeleteBible, useGetBible } from "@/query/discipleship";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { SafeHTML, Spinner, YoutubeVideo } from "ui";

const BibleDetail = () => {
  const { push } = useRouter();
  const params = useParams();
  const bibleId = params?.id as string;
  const { data, isPending } = useGetBible({ bibleId });

  const { mutate } = useDeleteBible();

  const handleClickDelete = () => {
    if (!confirm("삭제하시겠습니까?")) return;
    mutate(
      { bibleId },
      {
        onSuccess: () => {
          toast("삭제되었습니다.");
          push("/bibles");
        },
        onError: (err: any) => {
          alert(err.response.data.result);
        },
      },
    );
  };

  if (isPending)
    return (
      <div className="flex h-full items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">{data?.title}</h1>
      <div className="mb-10 flex items-center justify-between ">
        <p className="text-sm text-slate-500">
          생성일: {dayjs(data?.createdAt).format("YYYY-MM-DD HH:mm:ss")}
        </p>
        <Button variant="destructive" onClick={handleClickDelete}>
          삭제
        </Button>
      </div>
      <div className="mb-10">
        <SafeHTML html={data?.content} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        {data?.links.map((link) => (
          <YoutubeVideo
            isFullLink={false}
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

export default BibleDetail;
