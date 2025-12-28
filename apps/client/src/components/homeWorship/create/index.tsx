import { usePostHomeWorship } from "@/query/homeWorship";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IHomeWorshipForm } from "type";
import { Spinner } from "ui";
import HomeworshipFormDate from "../form/date";
import HomeworshipFormEditor from "../form/editor";
import HomeworshipFormImgUpload from "../form/imageUpload";
import HomeworshipFormInput from "../form/writer";

const HomeWorshipCreate = () => {
  const { push } = useRouter();
  const { register, handleSubmit, watch, setValue } = useForm<IHomeWorshipForm>();

  const { mutate, isPending } = usePostHomeWorship();

  const [content, setContent] = useState("");

  const onSubmit: SubmitHandler<IHomeWorshipForm> = async (data) => {
    const formData = new FormData();

    if (data.image.length === 0 || !data.date || !data.title || !data.password || !data.userName || !content)
      return alert("모든 정보를 입력해주세요.");
    if (data.image.length !== 1) return alert("사진은 한 장 업로드 가능합니다.");

    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("content", content);
    formData.append("password", data.password);
    formData.append("userName", data.userName);

    Array.from(data.image).forEach((image) => {
      formData.append("images", image);
    });

    mutate(formData, {
      onSuccess: (res) => {
        alert("추가되었습니다.");
        push("/discipleship/homeworship");
      },
      onError: (err) => {
        alert("에러가 발생했습니다. 다시 시도해주세요.");
      },
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 헤더 */}
      <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
        <button onClick={() => push("/discipleship/homeworship")} className="flex items-center gap-2 text-gray-700">
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
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">예배 인증하기</h1>
        <div className="w-16"></div>
      </div>

      {/* 폼 */}
      <form className="flex flex-col gap-6 p-4" onSubmit={handleSubmit(onSubmit)}>
        {/* 예배 날짜 */}
        <HomeworshipFormDate register={register("date")} />

        {/* 작성자 */}
        <HomeworshipFormInput register={register("userName")} label="작성자" />

        {/* 제목 */}
        <HomeworshipFormInput register={register("title")} label="제목" />

        {/* 글 */}
        <HomeworshipFormEditor setValue={setContent} />

        {/* 사진 첨부 */}
        <HomeworshipFormImgUpload register={register("image")} watch={watch} setValue={setValue} />

        {/* 비밀번호 */}
        <HomeworshipFormInput
          label="비밀번호"
          register={register("password")}
          type="password"
          placeholder="수정/삭제 시 필요합니다"
        />

        {/* 하단 고정 버튼을 위한 여백 */}
        <div className="h-20"></div>
      </form>

      {/* 하단 고정 저장 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4">
        <button
          onClick={handleSubmit(onSubmit)}
          disabled={isPending}
          className="w-full rounded-md bg-[#1e3a5f] py-3 text-base font-medium text-white transition-colors hover:bg-[#2d4a6f] disabled:opacity-50"
        >
          저장
        </button>
      </div>

      {/* 로딩 스피너 */}
      {isPending && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default HomeWorshipCreate;
