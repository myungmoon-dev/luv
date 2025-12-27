import usePagination from "@/hooks/usePagination";
import { useGetHomeWorships } from "@/query/homeWorship";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Pagination, Spinner } from "ui";

const HomeWorships = () => {
  const { push } = useRouter();
  const { data, isLoading } = useGetHomeWorships();
  const { onSetPaginationQuery, page } = usePagination();

  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 헤더 */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
        <button onClick={() => push("/discipleship")} className="flex items-center gap-2 text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-base">뒤로</span>
        </button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">가정예배</h1>
        <div className="w-16"></div>
      </div>

      {/* 컨텐츠 */}
      <div className="flex flex-col gap-4 p-4 pb-24">
        {data?.homeworships.map((homeWorship) => (
          <div
            key={homeWorship._id}
            onClick={() => push(`/discipleship/homeworship/${homeWorship._id}`)}
            className="flex cursor-pointer flex-col gap-2 rounded-lg border border-gray-200 p-4 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">
                {homeWorship.title}
                {homeWorship?.comments && homeWorship.comments.length > 0 && (
                  <span className="ml-2 text-sm text-blue-600">[{homeWorship.comments.length}]</span>
                )}
              </h3>
              {homeWorship.isPinned && (
                <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-600">고정</span>
              )}
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>{homeWorship.userName}</span>
              <span>•</span>
              <span>{format(new Date(homeWorship.date), "yyyy년 M월 d일", { locale: ko })}</span>
            </div>
          </div>
        ))}

        {data?.homeworships.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mb-4 h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-base">아직 작성된 예배 인증이 없습니다</p>
          </div>
        )}

        {/* 페이지네이션 */}
        {data && data.totalHomeworships > 0 && (
          <div className="mt-4">
            <Pagination currentPage={page} onSetPage={onSetPaginationQuery} totalQuantity={data.totalHomeworships} />
          </div>
        )}
      </div>

      {/* 하단 고정 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
        <button
          onClick={() => push("/discipleship/homeworship/create")}
          className="w-full rounded-md bg-[#1e3a5f] py-3 text-base font-medium text-white transition-colors hover:bg-[#2d4a6f]"
        >
          예배 인증하기
        </button>
      </div>
    </div>
  );
};

export default HomeWorships;
