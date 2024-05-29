import { useGetMissions } from "@/query/news";
import { useRouter } from "next/navigation";
import React from "react";
import { Pagination, Spinner, Table } from "ui";

const Mission = () => {
  const { push } = useRouter();
  const { data } = useGetMissions();

  if (!data)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-10 px-3 md:px-20 2xl:mx-auto 2xl:max-w-screen-lg">
      <div className="flex justify-end">
        <button
          onClick={() => push("/news/mission-news/create")}
          className="rounded-md bg-blue-500 px-3 py-2 font-SCoreDream text-white"
        >
          작성하기
        </button>
      </div>
      <div className="flex flex-col gap-7">
        <Table
          data={data.missions.map((mission) => ({
            id: mission.id,
            date: mission.date,
            title: mission.title,
            writer: mission.userName,
          }))}
          onClickRow={(rowId) => push(`/news/mission-news/${rowId}`)}
        />
        {/* FIXME: api에서 페이지네이션 정보 보내주도록 수정 */}
        <Pagination currentPage={1} onSetPage={() => {}} totalQuantity={data.missions.length} />
      </div>
    </div>
  );
};

export default Mission;
