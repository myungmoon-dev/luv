import usePagination from "@/hooks/usePagination";
import { useGetMissions } from "@/query/news";
import { useRouter } from "next/navigation";
import { Pagination, Spinner, Table } from "ui";

const Mission = () => {
  const { push } = useRouter();
  const { data, isFetching } = useGetMissions();
  const { onSetPaginationQuery, page } = usePagination();

  if (isFetching)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-10 px-3 md:px-20 2xl:mx-auto 2xl:max-w-screen-lg">
      <div className="flex flex-col gap-7">
        <Table
          data={
            data?.missionNewsList.map((missionNews) => ({
              id: missionNews._id,
              date: missionNews.date,
              title: missionNews.title,
              writer: missionNews.userName,
            })) || []
          }
          onClickRow={(rowId) => push(`/news/mission-news/${rowId}`)}
        />
      </div>
      <Pagination
        currentPage={page}
        onSetPage={onSetPaginationQuery}
        totalQuantity={data?.totalMissionNewsCount || 0}
      />
    </div>
  );
};

export default Mission;
