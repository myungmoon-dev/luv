import usePagination from "@/hooks/usePagination";
import { useGetMissions } from "@/query/news";
import { useRouter } from "next/navigation";
import { Pagination, Spinner, Table } from "ui";
import NewsNavigation from "../Navigation";

const Mission = () => {
  const { push } = useRouter();
  const { data, isFetching } = useGetMissions();
  const { onSetPaginationQuery, page } = usePagination();

  return (
    <div className="flex flex-col gap-16 pb-60 pt-8">
      <NewsNavigation />
      <div className="flex flex-col gap-10 px-3 md:px-20 2xl:mx-auto 2xl:max-w-screen-lg">
        {isFetching ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <Table
            data={
              data?.missionNewsList.map((mission) => ({
                id: mission._id,
                date: mission.date,
                title: mission.title,
                writer: mission.userName,
              })) || []
            }
            onClickRow={(rowId) => push(`/news/mission-news/${rowId}`)}
          />
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
