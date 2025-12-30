import { useDeleteHomeWorshipComment, useGetHomeWorship } from "@/query/homeWorship";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { useParams } from "next/navigation";
import HomeWorshipDetailCommentForm from "./form";
import { useQueryClient } from "@tanstack/react-query";
import homeWorshipKeys from "@/query/homeWorship/keys";

const HomeWorshipDetailComments = () => {
  const params = useParams();
  const homeWorshipId = params?.id as string;
  const queryClient = useQueryClient();

  const { data } = useGetHomeWorship({ homeWorshipId });
  const { mutate } = useDeleteHomeWorshipComment();

  const comments = data?.comments || [];

  const handleClickDelete = (commentId: string) => {
    const password = prompt("비밀번호를 입력해주세요.");
    if (!password) return alert("비밀번호를 입력해주세요.");
    mutate(
      { homeWorshipId, password, commentId },
      {
        onSuccess: () => {
          alert("삭제되었습니다.");
          queryClient.invalidateQueries({ queryKey: homeWorshipKeys.detail(homeWorshipId) });
        },
        onError: () => {
          alert("비밀번호가 일치하지 않습니다.");
        },
      },
    );
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="border-t border-gray-200 pt-3 sm:pt-4">
        <p className="text-base font-semibold text-gray-900 sm:text-lg">댓글 {comments?.length}</p>
      </div>
      <HomeWorshipDetailCommentForm />
      <div className="flex flex-col gap-2 sm:gap-3">
        {comments.map((comment) => (
          <div
            className="flex flex-col gap-1.5 rounded-lg border border-gray-200 bg-gray-50 p-2.5 sm:gap-2 sm:p-3"
            key={comment._id}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
                <p className="truncate text-xs font-medium text-gray-900 sm:text-sm">
                  {comment.userName}
                </p>
                <p className="text-[10px] text-gray-500 sm:text-xs">
                  {format(new Date(comment.createdAt), "yyyy년 M월 d일 HH:mm", { locale: ko })}
                </p>
              </div>
              <button
                onClick={() => handleClickDelete(comment._id)}
                className="shrink-0 text-[10px] text-red-500 hover:text-red-700 sm:text-xs"
              >
                삭제
              </button>
            </div>
            <p className="whitespace-pre-wrap break-keep text-xs text-gray-700 sm:text-sm">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeWorshipDetailComments;
