import { useGetMission } from "@/query/news";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { SafeHTML, Spinner } from "ui";

const MissionDetail = () => {
  const params = useParams();
  const missionId = params?.id as string;

  const { data, isPending } = useGetMission({ missionId });

  if (isPending)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:mx-auto 2xl:max-w-screen-lg 2xl:px-40">
      <h1 className="mb-2 font-SCoreDream text-3xl">{data?.title}</h1>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <p className="mb-10 text-sm text-slate-500">예배일: {dayjs(data?.date).format("YYYY-MM-DD")}</p>
          <p className="mb-10 text-sm text-slate-500">|</p>
          <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(data?.createdAt).format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div className="mb-10">
        <SafeHTML html={data?.content} />
        {data?.imageUrls.map((imageUrl) => (
          <div key={imageUrl} className="relative h-full w-full">
            <img src={imageUrl} alt="이미지" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionDetail;
