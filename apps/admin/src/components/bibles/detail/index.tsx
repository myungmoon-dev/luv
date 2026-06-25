import { Button } from "@/components/ui/button";
import ConfirmDialog from "@/components/common/ConfirmDialog";
import { useDeleteBible, useGetBible } from "@/query/discipleship";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { SafeHTML, YoutubeVideo } from "ui"
import { Spinner } from "@/components/ui/spinner";
import axios from "axios";

const BibleDetail = () => {
  const { push } = useRouter();
  const params = useParams();
  const bibleId = params?.id as string;
  const { data, isPending } = useGetBible({ bibleId });

  const { mutate } = useDeleteBible();

  const handleClickDelete = () => {
    mutate(
      { bibleId },
      {
        onSuccess: () => {
          toast("삭제되었습니다.");
          push("/bibles");
        },
        onError: (err: unknown) => {
          if (axios.isAxiosError(err)) {
            alert(err.response?.data?.result ?? "삭제 중 오류가 발생했습니다.");
          } else {
            alert("알 수 없는 오류가 발생했습니다.");
          }
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
        <ConfirmDialog
          trigger={<Button variant="destructive">삭제</Button>}
          onConfirm={handleClickDelete}
        />
      </div>
      <div className="mb-10">
        <SafeHTML html={data?.content} />
      </div>
      <div className="grid grid-cols-2 gap-5">
        {data?.links.map((link) => (
          <YoutubeVideo
            isFullLink={false}
            className="h-[250px]"
            videoId={link.url}
            key={link.url}
            isPlaylist={link.playlist}
          />
        ))}
      </div>
    </div>
  );
};

export default BibleDetail;
