import usePagination from "@/hooks/usePagination";
import { useGetHomeWorships } from "@/query/homeWorship";
import { useRouter } from "next/navigation";
import { Spinner, Table } from "ui";

const HomeWorships = () => {
  const { push } = useRouter();
  const { data, fetchNextPage } = useGetHomeWorships();

  const { hasNextPage, setNextPage } = usePagination({ totalCount: data?.pages[0].notPinnedCount || 0 });

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
          data={data.pages
            .map((page) =>
              page.homeWorships.map((homeWorship) => ({
                id: homeWorship.id,
                date: homeWorship.date,
                title: homeWorship.title,
                writer: homeWorship.userName,
                isPinned: homeWorship.isPinned,
              })),
            )
            .flat()}
          onClickRow={(rowId) => push(`/homeworship/${rowId}`)}
        />
        {hasNextPage && (
          <div className="flex justify-end">
            <button className="rounded-md bg-blue-500 px-2 py-1 text-lg text-white" onClick={handleClickNextPage}>
              다음
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeWorships;
