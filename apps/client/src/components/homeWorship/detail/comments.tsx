import { useDeleteHomeWorshipComment, useGetHomeWorship } from "@/query/homeWorship";
import dayjs from "dayjs";
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

  const comments = data?.homeWorship.comments || [];

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
        onError: (err: any) => {
          alert(err.response.data.result);
        },
      },
    );
  };

  return (
    <>
      <hr className="my-10" />
      <div className="flex flex-col gap-5">
        <p className="text-2xl">댓글 {comments?.length}</p>
        <HomeWorshipDetailCommentForm />
        <div className="flex flex-col gap-5">
          {comments.map((comment) => (
            <div className="flex flex-col gap-3 rounded-md border border-gray-300 p-5 shadow-md" key={comment.id}>
              <div className="flex justify-between text-sm">
                <div className="flex gap-2">
                  <p>{comment.name}</p>
                  <p>|</p>
                  <p>{dayjs(comment.createdAt).format("YYYY-MM-DD HH:mm")}</p>
                </div>
                <button onClick={() => handleClickDelete(comment.id)} className="text-red-500">
                  삭제
                </button>
              </div>
              <p className="whitespace-pre-wrap">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeWorshipDetailComments;
