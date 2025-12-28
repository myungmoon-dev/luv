import { useGetHomeWorship, usePutHomeWorship } from "@/query/homeWorship";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IHomeWorshipForm } from "type";
import { Spinner } from "ui";
import HomeworshipFormDate from "./form/date";
import HomeworshipFormEditor from "./form/editor";
import HomeworshipFormImgUpload from "./form/imageUpload";
import HomeworshipFormInput from "./form/writer";

const HomeWorshipEdit = () => {
  const { push } = useRouter();
  const params = useParams();
  const homeWorshipId = params?.id as string;

  const { data: homeWorship } = useGetHomeWorship({ homeWorshipId });

  const { register, handleSubmit, reset, watch, setValue } = useForm<IHomeWorshipForm>();

  const { mutate, isPending } = usePutHomeWorship();

  const [content, setContent] = useState("");
  const [isNewImage, setNewImage] = useState(false);

  const onSubmit: SubmitHandler<IHomeWorshipForm> = async (data) => {
    const formData = new FormData();

    if (
      (isNewImage && data.image.length === 0) ||
      !data.date ||
      !data.title ||
      !data.password ||
      !data.userName ||
      !content
    )
      return alert("모든 정보를 입력해주세요.");
    if (isNewImage && data.image.length !== 1) return alert("사진은 한 장 업로드 가능합니다.");

    formData.append("title", data.title);
    formData.append("date", data.date);
    formData.append("content", content);
    formData.append("password", data.password);
    formData.append("userName", data.userName);

    if (isNewImage) {
      Array.from(data.image).forEach((image) => {
        formData.append("images", image);
      });
    }

    mutate(
      { homeWorship: formData, homeWorshipId },
      {
        onSuccess: (res) => {
          alert("수정되었습니다.");
          push("/discipleship/homeworship");
        },
        onError: (err) => {
          alert("에러가 발생했습니다. 다시 시도해주세요.");
        },
      },
    );
  };

  useEffect(() => {
    if (!homeWorship) return;
    reset({
      content: homeWorship.content,
      date: homeWorship.date,
      title: homeWorship.title,
      userName: homeWorship.userName,
    });
    setContent(homeWorship.content);
  }, [homeWorship, reset]);

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
        <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold">예배 수정하기</h1>
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
        <HomeworshipFormEditor setValue={setContent} defaultValue={content} />

        {/* 사진 첨부 */}
        {!isNewImage && homeWorship && (
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">기존 사진</span>
            <div className="relative h-48 w-48">
              <img
                src={homeWorship.imageUrls[0]}
                alt="기존 이미지"
                className="h-full w-full rounded-md border border-gray-300 object-cover"
              />
              <button
                type="button"
                onClick={() => setNewImage(true)}
                className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full text-white shadow-lg ring-2 ring-white"
                style={{ backgroundColor: "#dc2626" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
        {isNewImage && <HomeworshipFormImgUpload register={register("image")} watch={watch} setValue={setValue} />}

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
          수정
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

export default HomeWorshipEdit;
