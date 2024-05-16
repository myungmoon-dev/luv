import { useGetHomeWorship } from "@/query/homeWorship";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { Spinner } from "ui";

const HomeWorshipDetail = () => {
  const params = useParams();
  const homeWorshipId = params?.id as string;
  const { data } = useGetHomeWorship({ homeWorshipId });

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  const homeWorship = data.homeWorship;

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:px-40">
      <h1 className="mb-2 text-3xl font-bold">{homeWorship.title}</h1>
      <div className="flex gap-2">
        <p className="mb-10 text-sm text-slate-500">예배일: {dayjs(homeWorship.date).format("YYYY-MM-DD")}</p>
        <p className="mb-10 text-sm text-slate-500">|</p>
        <p className="mb-10 text-sm text-slate-500">생성일: {dayjs(homeWorship.createdAt).format("YYYY-MM-DD")}</p>
      </div>
      <div className="mb-10">
        <div className="relative h-full w-full">
          <img src={`${homeWorship.content}/bgHorizontal`} alt="이미지" />
        </div>
      </div>
    </div>
  );
};

export default HomeWorshipDetail;
