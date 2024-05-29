import { useDeleteMission, useGetMission } from "@/query/news";
import useAuthStore from "@/store/auth";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";
import { SafeHTML, Spinner } from "ui";

const MissionDetail = () => {
  const { push } = useRouter();
  const params = useParams();
  const missionId = params?.id as string;
  const userId = useAuthStore((state) => state.uid);

  const { data } = useGetMission({ missionId });
  const { mutate } = useDeleteMission();

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  const mission = data.mission;

  const isUsersMission = userId === mission.userId;

  const handleClickDelete = () => {
    if (!userId) return;
    if (!confirm("삭제하시겠습니까?")) return;
    mutate(
      { missionId, userId },
      {
        onSuccess: () => {
          alert("삭제되었습니다.");
          push("/news/mission-news");
        },
        onError: (err: any) => {
          alert(err.response.data.result);
        },
      },
    );
  };

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:mx-auto 2xl:max-w-screen-lg 2xl:px-40">
      <h1 className="mb-2 font-SCoreDream text-3xl">{mission.title}</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="mb-10 text-sm text-slate-500">예배일: {dayjs(mission.date).format("YYYY-MM-DD")}</p>
          <p className="mb-10 text-sm text-slate-500">|</p>
          <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(mission.createdAt).format("YYYY-MM-DD")}</p>
        </div>
        {isUsersMission && (
          <button onClick={handleClickDelete} className="mb-10 text-sm text-red-500">
            삭제
          </button>
        )}
      </div>
      <div className="mb-10">
        <SafeHTML html={mission.content} />
        <div className="relative h-full w-full">
          <img src={`${mission.image}/full`} alt="이미지" />
        </div>
      </div>
    </div>
  );
};

export default MissionDetail;
