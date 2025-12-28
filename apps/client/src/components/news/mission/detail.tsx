import { useGetMission } from "@/query/news";
import dayjs from "dayjs";
import { useParams, useRouter } from "next/navigation";
import { SafeHTML, Spinner, Icon } from "ui";
import { MISSION_LOCATION_MAP } from "./config";

const MissionDetail = () => {
  const params = useParams();
  const router = useRouter();
  const missionId = params?.id as string;

  const { data, isPending } = useGetMission({ missionId });

  if (isPending)
    return (
      <div className="flex justify-center py-10 sm:py-12 md:py-16">
        <Spinner />
      </div>
    );

  if (!data) return null;

  const formattedDate = dayjs(data.date).format("YYYY.MM.DD");

  return (
    <div className="flex flex-col gap-6 px-3 pb-16 pt-6 sm:gap-8 sm:px-5 sm:pb-20 sm:pt-8 md:gap-10 md:px-10 md:pb-24 md:pt-12 lg:px-20 lg:pb-32 lg:pt-16 xl:pb-40 xl:pt-20 2xl:mx-auto 2xl:max-w-screen-lg 2xl:pb-48 2xl:pt-24">
      {/* 뒤로 버튼 */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-[#666666] transition-colors hover:text-[#222222] sm:text-base md:text-lg"
      >
        <Icon name="CaretLeft" cursor="ui-cursor-pointer" />
        <span>뒤로</span>
      </button>

      {/* 헤더 영역 - 목록 아이템과 비슷한 스타일 */}
      <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
        <div className="flex items-start justify-between gap-3 sm:gap-4 md:gap-6">
          <div className="flex flex-1 flex-col gap-1.5 sm:gap-2 md:gap-2.5">
            <p className="text-xs font-light text-[#9B9B9B] sm:text-sm md:text-base">
              {formattedDate}
            </p>
            <h1 className="text-base font-bold text-[#222222] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              {data.title}
            </h1>
          </div>
          <div className="flex flex-shrink-0 items-center">
            <span className="rounded-md bg-[#F5F5F5] px-2.5 py-1 text-xs text-[#222222] sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base">
              {MISSION_LOCATION_MAP[data.location]}
            </span>
          </div>
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
        <div className="rounded-md bg-[#F9F9F9] p-4 sm:p-6 md:p-8 lg:p-10">
          <SafeHTML html={data.content} />
        </div>
        {data.imageUrls.length > 0 && (
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            {data.imageUrls.map((imageUrl, index) => (
              <div key={imageUrl} className="relative w-full">
                <img
                  src={imageUrl}
                  alt={`${data.title}_이미지_${index + 1}`}
                  className="h-auto w-full rounded-md object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionDetail;
