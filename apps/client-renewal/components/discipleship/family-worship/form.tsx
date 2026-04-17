"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Loader2, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { DiscipleshipNavStrip } from "@/components/discipleship/discipleship-section-nav";
import { postHomeWorship, putHomeWorship, getHomeWorship } from "@/lib/api-homeworship";

type Mode = "create" | "edit";

export function FamilyWorshipForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const params = useParams();
  const homeWorshipId = params?.id as string | undefined;

  const queryClient = useQueryClient();

  // 달력 선택은 네이티브 `type="date"`를 그대로 사용합니다.
  // 값은 서버가 기대하는 `YYYY-MM-DD`(연-월-일) 포맷으로 유지합니다.
  const [date, setDate] = useState<string>(dayjs().format("YYYY-MM-DD"));
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  const [isNewImage, setIsNewImage] = useState<boolean>(mode === "create");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const { data: homeWorship, isPending } = useQuery({
    queryKey: ["homeworship", homeWorshipId],
    queryFn: () => getHomeWorship(homeWorshipId!),
    enabled: mode === "edit" && !!homeWorshipId,
  });

  useEffect(() => {
    if (mode !== "edit" || !homeWorship) return;
    setDate(homeWorship.date ? dayjs(homeWorship.date).format("YYYY-MM-DD") : dayjs(homeWorship.createdAt).format("YYYY-MM-DD"));
    setUserName(homeWorship.userName ?? "");
    setTitle(homeWorship.title ?? "");
    setContent(homeWorship.content ?? "");
    setIsNewImage(false);
    setImageFile(null);
    setImagePreview(homeWorship.imageUrls?.[0] ?? null);
  }, [mode, homeWorship]);

  const postMutation = useMutation({ mutationFn: postHomeWorship });
  const putMutation = useMutation({ mutationFn: putHomeWorship });

  useEffect(() => {
    if (!imageFile) {
      if (mode === "edit" && !isNewImage) return;
      setImagePreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(imageFile);
    setImagePreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile, isNewImage, mode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !title || !password || !userName || !content) {
      return alert("모든 정보를 입력해주세요.");
    }

    if (isNewImage && !imageFile) {
      return alert("사진은 한 장 업로드 가능합니다.");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("date", date);
    formData.append("content", content);
    formData.append("password", password);
    formData.append("userName", userName);

    if (isNewImage && imageFile) {
      formData.append("images", imageFile);
    }

    if (mode === "create") {
      postMutation.mutate(formData, {
        onSuccess: () => {
          alert("추가되었습니다.");
          queryClient.invalidateQueries({ queryKey: ["homeworships"] });
          router.push("/discipleship/family-worship");
        },
        onError: () => alert("에러가 발생했습니다. 다시 시도해주세요."),
      });
      return;
    }

    putMutation.mutate(
      { homeWorship: formData, homeWorshipId: homeWorshipId! },
      {
        onSuccess: () => {
          alert("수정되었습니다.");
          queryClient.invalidateQueries({ queryKey: ["homeworship", homeWorshipId] });
          router.push("/discipleship/family-worship");
        },
        onError: () => alert("에러가 발생했습니다. 다시 시도해주세요."),
      },
    );
  };

  if (mode === "edit" && isPending) {
    return (
      <>
        <DiscipleshipNavStrip />
        <div className="flex min-h-[60vh] items-center justify-center px-4 sm:px-6 lg:px-8">
          <Loader2 className="size-10 animate-spin text-[#1e2a4a]" aria-hidden />
        </div>
      </>
    );
  }

  return (
    <>
      <DiscipleshipNavStrip />
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 border-b border-[#E6E6E6] pb-4 pt-6">
          <button
            type="button"
            onClick={() => router.push("/discipleship/family-worship")}
            className="flex items-center gap-1.5 text-gray-700 sm:gap-2"
          >
            <ArrowLeft className="size-5" aria-hidden />
            <span className="text-sm sm:text-base">뒤로</span>
          </button>
          <h1 className="ml-auto text-base font-semibold text-gray-900 sm:text-lg">
            {mode === "create" ? "예배 인증하기" : "예배 수정하기"}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-700">
                예배 날짜 <span className="text-red-500">*</span>
              </span>
              <input
                value={date}
                type="date"
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-md border border-gray-400 px-4 py-2.5 text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-gray-700">
                작성자 <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="작성자"
                className="w-full rounded-md border border-gray-400 px-4 py-2.5 focus:border-blue-500 focus:outline-none"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">
              제목 <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목"
              className="w-full rounded-md border border-gray-400 px-4 py-2.5 focus:border-blue-500 focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">
              내용 <span className="text-red-500">*</span>
            </span>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요. (HTML을 붙여넣어도 됩니다)"
              className="min-h-[220px] w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none"
            />
          </label>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                사진 첨부 {mode === "create" ? <span className="text-red-500">*</span> : isNewImage ? <span className="text-red-500">*</span> : null}
              </span>
              {mode === "edit" && !isNewImage ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsNewImage(true);
                    setImageFile(null);
                    setImagePreview(null);
                  }}
                  className="text-sm font-medium text-red-600 hover:text-red-700"
                >
                  사진 변경
                </button>
              ) : null}
            </div>

            {!imagePreview ? (
              <label className="flex h-24 w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-gray-50 hover:bg-gray-100">
                <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)} className="hidden" />
                <span className="text-sm font-medium text-gray-700">이미지 선택</span>
              </label>
            ) : (
              <div className="relative h-48 w-full overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                <Image
                  src={imagePreview}
                  alt="예배 이미지 미리보기"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">
              비밀번호 <span className="text-red-500">*</span>
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="수정/삭제 시 필요합니다"
              className="w-full rounded-md border border-gray-400 px-4 py-2.5 focus:border-blue-500 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={postMutation.isPending || putMutation.isPending}
            className="mt-2 w-full rounded-md bg-[#1e3a5f] py-3 text-base font-medium text-white transition-colors hover:bg-[#2d4a6f] disabled:opacity-50"
          >
            {mode === "create" ? "저장" : "수정"}
          </button>
        </form>

        {(postMutation.isPending || putMutation.isPending) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
            <Loader2 className="size-10 animate-spin text-white" aria-hidden />
          </div>
        )}
      </div>
    </>
  );
}

