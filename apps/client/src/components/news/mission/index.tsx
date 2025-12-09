import usePagination from "@/hooks/usePagination";
import { useGetMissions } from "@/query/news";
import useMissionNewsStore from "@/store/News/mission";
import { useRouter } from "next/navigation";
import { Pagination, Spinner } from "ui";
import NewsNavigation from "../Navigation";
import MissionNewsFilter from "./Filter";
import MissionItem from "./Item";

const Mission = () => {
  const { push } = useRouter();
  const selectedLocation = useMissionNewsStore((state) => state.selectedLocation);
  const location = selectedLocation === "all" ? undefined : selectedLocation;
  const { data, isFetching } = useGetMissions(location);
  const { onSetPaginationQuery, page } = usePagination();

  return (
    <div className="flex flex-col gap-16 pb-60 pt-8">
      <NewsNavigation />
      <MissionNewsFilter />
      <div className="flex flex-col gap-6 px-3 sm:gap-8 sm:px-5 md:gap-10 md:px-10 lg:px-20 2xl:mx-auto 2xl:max-w-screen-lg">
        {isFetching ? (
          <div className="flex justify-center py-10 sm:py-12 md:py-16">
            <Spinner />
          </div>
        ) : data?.missionNewsList && data.missionNewsList.length > 0 ? (
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
            {data.missionNewsList.map((mission) => (
              <MissionItem
                key={mission._id}
                mission={mission}
                onClick={() => push(`/news/mission-news/${mission._id}`)}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-10 text-sm text-[#666666] sm:py-12 sm:text-base md:py-16 md:text-lg">
            <p>선교지 소식이 없습니다.</p>
          </div>
        )}
        <Pagination
          currentPage={page}
          onSetPage={onSetPaginationQuery}
          totalQuantity={data?.totalMissionNewsCount || 0}
        />
      </div>
    </div>
  );
};

export default Mission;
