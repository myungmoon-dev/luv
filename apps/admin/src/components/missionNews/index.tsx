import usePagination from "@/hooks/usePagination";
import { useGetMissionNewsList } from "@/query/missionNews";
import { useRouter } from "next/router";
import { Spinner, Table } from "ui";
import { Button } from "../ui/button";

const MissionNewsList = () => {
  const { push } = useRouter();
  const { data, fetchNextPage } = useGetMissionNewsList();

  const { hasNextPage, setNextPage } = usePagination({
    totalCount: data?.pages[0].totalMissionNewsListCount || 0,
    pageSize: 5,
  });

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
    <div className="flex flex-col gap-5">
      <Table
        data={data.pages.map((page) => page.missionNewsList).flat()}
        onClickRow={(rowId) => push(`/mission-news/${rowId}`)}
      />
      {hasNextPage && (
        <div className="flex justify-end">
          <Button onClick={handleClickNextPage}>더보기</Button>
        </div>
      )}
    </div>
  );
};

export default MissionNewsList;
