import usePagination from "@/hooks/usePagination";
import { useGetHomeWorships } from "@/query/homeWorship";
import { useRouter } from "next/navigation";
import { Pagination, Spinner, Table } from "ui";

const HomeWorships = () => {
  const { push } = useRouter();
  const { data, isLoading } = useGetHomeWorships();
  const { onSetPaginationQuery, page } = usePagination();

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col gap-10 px-3 md:px-20 2xl:mx-auto 2xl:max-w-screen-lg">
      <div className="flex justify-end">
        <button
          onClick={() => push("/homeworship/create")}
          className="rounded-md bg-blue-500 px-3 py-2 font-SCoreDream text-white"
        >
          인증하기
        </button>
      </div>
      <div className="flex flex-col gap-7">
        <Table
          data={
            data?.homeworships.map((homeWorship) => ({
              id: homeWorship._id,
              date: homeWorship.date,
              title: `${homeWorship.title} ${homeWorship?.comments ? `[${homeWorship.comments.length}]` : ""}`,
              writer: homeWorship.userName,
              isPinned: homeWorship.isPinned,
            })) || []
          }
          onClickRow={(rowId) => push(`/homeworship/${rowId}`)}
        />
      </div>
      <Pagination currentPage={page} onSetPage={onSetPaginationQuery} totalQuantity={data?.totalHomeworships || 0} />
    </div>
  );
};

export default HomeWorships;
