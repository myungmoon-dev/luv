"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { ArrowLeft, Loader2, PencilLine, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { DiscipleshipNavStrip } from "@/components/discipleship/discipleship-section-nav";
import { deleteHomeWorship, deleteHomeWorshipComment, getHomeWorship, postHomeWorshipComment } from "@/lib/api-homeworship";
import { cn } from "@/lib/utils";

function HtmlContent({ html }: { html: string }) {
  return <div className="prose prose-sm max-w-none break-words [&_p]:mb-2" dangerouslySetInnerHTML={{ __html: html }} />;
}

export function FamilyWorshipDetail() {
  const router = useRouter();
  const params = useParams();
  const homeWorshipId = params?.id as string;

  const queryClient = useQueryClient();

  const { data, isPending } = useQuery({
    queryKey: ["homeworship", homeWorshipId],
    queryFn: () => getHomeWorship(homeWorshipId),
    enabled: !!homeWorshipId,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteHomeWorship,
  });

  const commentMutation = useMutation({
    mutationFn: postHomeWorshipComment,
  });

  const commentDeleteMutation = useMutation({
    mutationFn: deleteHomeWorshipComment,
  });

  const comments = useMemo(() => data?.comments ?? [], [data?.comments]);

  const [commentContent, setCommentContent] = useState("");
  const [commentName, setCommentName] = useState("");
  const [commentPassword, setCommentPassword] = useState("");

  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingCommentContent, setEditingCommentContent] = useState("");

  const handleDeleteHomeWorship = () => {
    const password = prompt("비밀번호를 입력해주세요.");
    if (!password) return alert("비밀번호를 입력해주세요.");

    deleteMutation.mutate(
      { homeWorshipId, password },
      {
        onSuccess: () => {
          alert("삭제되었습니다.");
          router.push("/discipleship/family-worship");
        },
        onError: () => {
          alert("비밀번호가 일치하지 않습니다.");
        },
      },
    );
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentContent || !commentName || !commentPassword) return alert("모든 정보를 입력해 주세요.");

    commentMutation.mutate(
      {
        homeWorshipId,
        content: commentContent,
        userName: commentName,
        password: commentPassword,
      },
      {
        onSuccess: () => {
          alert("추가되었습니다.");
          setCommentContent("");
          setCommentPassword("");
          queryClient.invalidateQueries({ queryKey: ["homeworship", homeWorshipId] });
        },
        onError: () => alert("에러가 발생했습니다. 다시 시도해주세요."),
      },
    );
  };

  const handleDeleteComment = async (commentId: string) => {
    const password = prompt("비밀번호를 입력해주세요.");
    if (!password) return alert("비밀번호를 입력해주세요.");

    commentDeleteMutation.mutate(
      { homeWorshipId, commentId, password },
      {
        onSuccess: () => {
          alert("삭제되었습니다.");
          queryClient.invalidateQueries({ queryKey: ["homeworship", homeWorshipId] });
        },
        onError: () => alert("비밀번호가 일치하지 않습니다."),
      },
    );
  };

  const handleSaveCommentEdit = async () => {
    if (!editingCommentId) return;
    const password = prompt("비밀번호를 입력해주세요.");
    if (!password) return alert("비밀번호를 입력해주세요.");

    const target = comments.find((c) => c._id === editingCommentId);
    if (!target) return;

    try {
      await commentDeleteMutation.mutateAsync({ homeWorshipId, commentId: editingCommentId, password });
      await commentMutation.mutateAsync({
        homeWorshipId,
        content: editingCommentContent,
        userName: target.userName,
        password,
      });
      setEditingCommentId(null);
      setEditingCommentContent("");
      queryClient.invalidateQueries({ queryKey: ["homeworship", homeWorshipId] });
    } catch {
      alert("비밀번호가 일치하지 않거나 처리 중 오류가 발생했습니다.");
    }
  };

  if (isPending || !data) {
    return (
      <>
        <DiscipleshipNavStrip />
        <div className="flex min-h-[50vh] items-center justify-center px-4 sm:px-6 lg:px-8">
          <Loader2 className="size-10 animate-spin text-[#1e2a4a]" aria-hidden />
        </div>
      </>
    );
  }

  return (
    <>
      <DiscipleshipNavStrip />
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="sticky top-0 z-10 -mx-4 bg-white/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
          <div className="flex items-center justify-between gap-2 border-b border-[#E6E6E6] pb-3">
            <button
              type="button"
              onClick={() => router.push("/discipleship/family-worship")}
              className="flex items-center gap-1.5 text-gray-700 sm:gap-2"
            >
              <ArrowLeft className="size-5" aria-hidden />
              <span className="text-sm sm:text-base">뒤로</span>
            </button>
            <h1 className="line-clamp-1 text-base font-semibold text-gray-900 sm:text-lg">{data.title}</h1>
            <div className="w-10" />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          {/* 정보 및 버튼 */}
          <div className="rounded-2xl border border-[#E6E6E6] bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="rounded-full bg-[#f8fafc] px-3 py-1 text-sm font-medium text-[#496674]">
                  {data.date ? dayjs(data.date).format("YYYY MM DD") : dayjs(data.createdAt).format("YYYY MM DD")}
                </span>
                <span className="font-semibold text-[#1e2a4a]">{data.userName}</span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => router.push(`/discipleship/family-worship/${data._id}/edit`)}
                  className="flex items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  <PencilLine className="size-4" aria-hidden />
                  수정
                </button>
                <button
                  type="button"
                  onClick={handleDeleteHomeWorship}
                  className="flex items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:px-4 sm:py-2.5 sm:text-sm"
                >
                  <Trash2 className="size-4" aria-hidden />
                  삭제
                </button>
              </div>
            </div>

            {/* 이미지 */}
            {data.imageUrls?.length ? (
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {data.imageUrls.map((imageUrl) => (
                  <div key={imageUrl} className="overflow-hidden rounded-lg border border-gray-200 bg-white">
                    <div className="relative aspect-[4/3] w-full">
                      <Image src={imageUrl} alt="예배 이미지" fill className="object-contain" unoptimized />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {/* 내용 */}
            <div className="mt-5">
              <HtmlContent html={data.content} />
            </div>
          </div>

          {/* 댓글 */}
          <div className="rounded-2xl border border-[#E6E6E6] bg-white p-5 shadow-sm sm:p-6">
            <div className="border-t border-[#E6E6E6] pt-4">
              <p className="text-base font-semibold text-gray-900 sm:text-lg">댓글 {comments.length}</p>
            </div>

            <form onSubmit={handleSubmitComment} className="mt-4 flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3 sm:p-4">
              <textarea
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="내용을 입력하세요"
                className="min-h-[90px] w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end sm:gap-3">
                <input
                  value={commentName}
                  onChange={(e) => setCommentName(e.target.value)}
                  placeholder="이름"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none sm:w-auto"
                />
                <input
                  value={commentPassword}
                  onChange={(e) => setCommentPassword(e.target.value)}
                  placeholder="비밀번호"
                  type="password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none sm:w-auto"
                />
                <button
                  type="submit"
                  className="rounded-md bg-[#1e3a5f] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2d4a6f]"
                >
                  등록
                </button>
              </div>
            </form>

            <div className="mt-4 flex flex-col gap-3">
              {comments.map((comment) => (
                <div
                  key={comment._id}
                  className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-gray-50 p-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex flex-col gap-0.5">
                      <p className="truncate text-sm font-medium text-gray-900">{comment.userName}</p>
                      <p className="text-xs text-gray-500">{dayjs(comment.createdAt).format("YYYY MM DD HH:mm")}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      {editingCommentId === comment._id ? null : (
                        <button
                          type="button"
                          onClick={() => {
                            setEditingCommentId(comment._id);
                            setEditingCommentContent(comment.content);
                          }}
                          className="text-xs font-medium text-[#1e2a4a] hover:text-[#0f2b52]"
                        >
                          수정
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDeleteComment(comment._id)}
                        className="text-xs font-medium text-red-500 hover:text-red-700"
                      >
                        삭제
                      </button>
                    </div>
                  </div>

                  {editingCommentId === comment._id ? (
                    <div className="flex flex-col gap-2">
                      <textarea
                        value={editingCommentContent}
                        onChange={(e) => setEditingCommentContent(e.target.value)}
                        className="min-h-[70px] w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                      />
                      <div className="flex flex-wrap items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingCommentId(null);
                            setEditingCommentContent("");
                          }}
                          className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                        >
                          취소
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveCommentEdit}
                          className="rounded-md bg-[#1e3a5f] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#2d4a6f]"
                        >
                          저장
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap break-keep text-sm text-gray-700">{comment.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

