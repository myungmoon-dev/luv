import { Button } from "@/components/ui/button";
import { useDeleteMissionNews, useGetMissionNews } from "@/query/missionNews";
import dayjs from "dayjs";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { SafeHTML, Spinner } from "ui";

const MissionNewsDetail = () => {
  const { push } = useRouter();
  const params = useParams();
  const missionNewsId = params?.id as string;

  const { data, isPending } = useGetMissionNews({ missionNewsId });
  const { mutate } = useDeleteMissionNews();

  const handleUpdateMissionNews = () => {
    push(`/mission-news/${missionNewsId}/update`);
  };
  const handleDeleteMissionNews = () => {
    if (!confirm("삭제하시곘습니까?")) return;
    mutate(
      { missionNewsId },
      {
        onSuccess: () => {
          toast("삭제되었습니다.");
          push("/mission-news");
        },
      },
    );
  };

  if (isPending)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">{data?.title}</h1>
      <div className="mb-10 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">날짜: {dayjs(data?.date).format("YYYY년 M월")}</p>
          <p className="text-sm text-slate-500">
            생성일: {dayjs(data?.createdAt).format("YYYY-MM-DD")}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleUpdateMissionNews}>
            수정
          </Button>
          <Button variant="destructive" onClick={handleDeleteMissionNews}>
            삭제
          </Button>
        </div>
      </div>
      <p className="mb-2">작성자: {data?.userName}</p>
      <SafeHTML html={data?.content} />
      <div className="relative mt-10 h-[350px] w-full">
        {data?.imageUrls.map((imageUrl) => (
          <Image
            key={imageUrl}
            src={imageUrl}
            alt={`${data?.title}_이미지`}
            fill={true}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default MissionNewsDetail;
