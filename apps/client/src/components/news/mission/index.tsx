import usePagination from "@/hooks/usePagination";
import { useGetMissions } from "@/query/news";
import { useRouter } from "next/navigation";
import { Spinner, Table } from "ui";

const Mission = () => {
  const { push } = useRouter();
  const { data, fetchNextPage } = useGetMissions();

  const { hasNextPage, setNextPage } = usePagination({
    totalCount: data?.pages[0].totalMissionsCount || 0,
    pageSize: 5,
  });

  const missions = data?.pages.map((page) => page.missions).flat();

  const handleClickNextPage = () => {
    setNextPage();
    fetchNextPage();
  };

  if (!data)
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
            missions?.map((mission) => ({
              id: mission.id,
              date: mission.date,
              title: mission.title,
              writer: mission.writer,
            })) || []
          }
          onClickRow={(rowId) => push(`/news/mission-news/${rowId}`)}
        />
        {hasNextPage && (
          <button
            className="w-full rounded-3xl border border-gray-600 py-1 font-bold md:py-2 md:text-lg lg:py-3 lg:text-xl"
            onClick={handleClickNextPage}
          >
            더보기
          </button>
        )}
      </div>
    </div>
  );
};

export default Mission;
