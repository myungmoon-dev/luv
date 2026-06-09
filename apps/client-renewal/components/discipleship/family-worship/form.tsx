"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Loader2, ArrowLeft, ImagePlus, X } from "lucide-react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { FamilyWorshipContentEditor } from "@/components/discipleship/family-worship/content-editor";
import { DiscipleshipNavStrip } from "@/components/discipleship/discipleship-section-nav";
import { compressImages } from "@/hooks/use-image-compress";
import { getHomeWorship, patchHomeWorship, postHomeWorship } from "@/lib/api-homeworship";
import { isRichTextEmpty } from "@/lib/rich-text";

type Mode = "create" | "edit";

const MAX_IMAGES = 5;

export function FamilyWorshipForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const params = useParams();
  const homeWorshipId = params?.id as string | undefined;

  const queryClient = useQueryClient();

  const [date, setDate] = useState<string>(dayjs().format("YYYY-MM-DD"));
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  const [isNewImage, setIsNewImage] = useState<boolean>(mode === "create");
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const revokePreviews = (urls: string[]) => {
    urls.forEach((u) => URL.revokeObjectURL(u));
  };

  useEffect(() => {
    return () => revokePreviews(imagePreviews);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- unmount cleanup only
  }, []);

  const { data: homeWorship, isPending } = useQuery({
    queryKey: ["homeworship", homeWorshipId],
    queryFn: () => getHomeWorship(homeWorshipId!),
    enabled: mode === "edit" && !!homeWorshipId,
  });

  useEffect(() => {
    if (mode !== "edit" || !homeWorship) return;
    setDate(
      homeWorship.date
        ? dayjs(homeWorship.date).format("YYYY-MM-DD")
        : dayjs(homeWorship.createdAt).format("YYYY-MM-DD"),
    );
    setUserName(homeWorship.userName ?? "");
    setTitle(homeWorship.title ?? "");
    setContent(homeWorship.content ?? "");
    setIsNewImage(false);
    revokePreviews(imagePreviews);
    setImageFiles([]);
    setImagePreviews([]);
  }, [mode, homeWorship]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files ?? []);

    // 10MB 초과 파일은 업로드 전 자동 압축
    const compressedFiles = await compressImages(selectedFiles);
    const mergedFiles = [...imageFiles, ...compressedFiles].slice(0, MAX_IMAGES);

    const previewUrls = mergedFiles.map((f) => URL.createObjectURL(f));

    revokePreviews(imagePreviews);
    setImageFiles(mergedFiles);
    setImagePreviews(previewUrls);
    e.target.value = "";
  };

  const handleRemoveImage = (index: number) => {
    URL.revokeObjectURL(imagePreviews[index]);
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const postMutation = useMutation({ mutationFn: postHomeWorship });
  const patchMutation = useMutation({ mutationFn: patchHomeWorship });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !title || !password || !userName || isRichTextEmpty(content)) {
      return alert("모든 정보를 입력해주세요.");
    }

    const formattedDate = dayjs(date).format("YYYY-MM-DD");

    if (mode === "create") {
      if (imageFiles.length === 0) {
        return alert("사진을 최소 1개 업로드해주세요.");
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("date", formattedDate);
      formData.append("content", content);
      formData.append("password", password);
      formData.append("userName", userName);
      formData.append("isPinned", String(false));
      imageFiles.forEach((img) => formData.append("images", img));

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

    const existingImageUrls = isNewImage ? [] : homeWorship?.imageUrls ?? [];
    const newImages = isNewImage ? imageFiles : [];

    if (existingImageUrls.length === 0 && newImages.length === 0) {
      return alert("사진을 최소 1개 업로드해주세요.");
    }

    patchMutation.mutate(
      {
        homeWorshipId: homeWorshipId!,
        title,
        date: formattedDate,
        content,
        password,
        existingImageUrls,
        images: newImages,
      },
      {
        onSuccess: () => {
          alert("수정되었습니다.");
          queryClient.invalidateQueries({ queryKey: ["homeworships"] });
          queryClient.invalidateQueries({ queryKey: ["homeworship", homeWorshipId] });
          router.push(`/discipleship/family-worship/${homeWorshipId}`);
        },
        onError: () => alert("에러가 발생했습니다. 다시 시도해주세요."),
      },
    );
  };

  const showFilePicker = mode === "create" || isNewImage;
  const showExistingImages =
    mode === "edit" && !isNewImage && (homeWorship?.imageUrls?.length ?? 0) > 0;

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

          {(mode === "create" || homeWorship) && (
            <FamilyWorshipContentEditor
              mountKey={mode === "edit" ? homeWorshipId! : "create"}
              setValue={setContent}
              defaultValue={mode === "edit" && homeWorship ? homeWorship.content : content}
            />
          )}

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                사진 첨부 <span className="text-red-500">*</span>
                <span className="font-normal text-gray-500"> (최대 {MAX_IMAGES}장)</span>
              </span>
              {mode === "edit" && !isNewImage ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsNewImage(true);
                    revokePreviews(imagePreviews);
                    setImageFiles([]);
                    setImagePreviews([]);
                  }}
                  className="text-sm font-medium text-red-600 hover:text-red-700"
                >
                  사진 변경
                </button>
              ) : null}
            </div>

            {showExistingImages && homeWorship?.imageUrls ? (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {homeWorship.imageUrls.map((url) => (
                  <div
                    key={url}
                    className="relative aspect-square w-full overflow-hidden rounded-md border border-gray-200 bg-gray-50"
                  >
                    <Image src={url} alt="" fill className="object-cover" unoptimized />
                  </div>
                ))}
              </div>
            ) : null}

            {showFilePicker ? (
              <>
                <input
                  id="family-worship-image-input"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                  disabled={imageFiles.length >= MAX_IMAGES}
                />
                {imageFiles.length < MAX_IMAGES ? (
                  <label
                    htmlFor="family-worship-image-input"
                    className="flex w-full cursor-pointer flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-gray-300 py-5 text-sm text-gray-500 transition-colors hover:bg-gray-50"
                  >
                    <ImagePlus className="size-5 text-gray-600" aria-hidden />
                    <span className="font-medium text-gray-700">클릭하여 사진을 선택하세요</span>
                    <span className="text-xs opacity-70">
                      최소 1개 · 최대 {MAX_IMAGES}개 ({imageFiles.length}/{MAX_IMAGES})
                    </span>
                  </label>
                ) : null}
                {imagePreviews.length > 0 ? (
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {imagePreviews.map((url, i) => (
                      <div key={url} className="relative aspect-square">
                        {/* eslint-disable-next-line @next/next/no-img-element -- blob 미리보기 */}
                        <img
                          src={url}
                          alt={`사진 ${i + 1}`}
                          className="h-full w-full rounded-md border border-gray-200 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(i)}
                          className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-red-600 text-white shadow"
                          aria-label={`사진 ${i + 1} 삭제`}
                        >
                          <X className="size-3" aria-hidden />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : null}
              </>
            ) : null}
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
            disabled={postMutation.isPending || patchMutation.isPending}
            className="mt-2 w-full rounded-md bg-[#1e3a5f] py-3 text-base font-medium text-white transition-colors hover:bg-[#2d4a6f] disabled:opacity-50"
          >
            {mode === "create" ? "저장" : "수정"}
          </button>
        </form>

        {(postMutation.isPending || patchMutation.isPending) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
            <Loader2 className="size-10 animate-spin text-white" aria-hidden />
          </div>
        )}
      </div>
    </>
  );
}
