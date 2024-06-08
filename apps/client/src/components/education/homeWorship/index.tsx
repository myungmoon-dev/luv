import { useGetHomeWorships } from "@/query/homeWorship";
import { useRouter } from "next/navigation";
import { Spinner, Table } from "ui";

const HomeWorships = () => {
  const { push } = useRouter();
  const { data } = useGetHomeWorships();

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
          onClick={() => push("/education/home-worship/create")}
          className="font-SCoreDream rounded-md bg-blue-500 px-3 py-2 text-white"
        >
          인증하기
        </button>
      </div>
      <div className="flex flex-col gap-7">
        <Table
          data={data.homeWorships.map((homeWorship) => ({
            id: homeWorship.id,
            date: homeWorship.date,
            title: homeWorship.title,
            writer: homeWorship.userName,
            isPinned: homeWorship.isPinned,
          }))}
          onClickRow={(rowId) => push(`/education/home-worship/${rowId}`)}
        />
        {/* FIXME: api에서 페이지네이션 정보 보내주도록 수정 */}
        {/* <Pagination currentPage={1} onSetPage={() => {}} totalQuantity={data.homeWorships.length} /> */}
      </div>
    </div>
  );
};

export default HomeWorships;
