import { useGetYoutubeLink, usePostYoutubeLink } from "@/query/youtube";
import { useForm } from "react-hook-form";
import HomeSection from "./section";
import getYoutubeId from "@/utils/getYoutubeId";
import { IYoutubeForm, YoutubeType } from "type";
import { YoutubeVideo } from "ui";

interface IYoutubeSectionProps {
  sectionTitle: string;
  type: YoutubeType;
}

// FIXME: CustomInput 컴포넌트 만들기

const YoutubeSection = ({ sectionTitle, type }: IYoutubeSectionProps) => {
  const showAllFields = type !== "live" && type !== "shorts";
  const hideMainText = type !== "video";

  const { data: youtubeLink } = useGetYoutubeLink(type);
  const { register, handleSubmit, reset } = useForm<IYoutubeForm>();
  const { mutate } = usePostYoutubeLink(type);

  const onSubmit = (data: IYoutubeForm) => {
    const { mainText, preacher, title, url, date } = data;
    const id = getYoutubeId({ url });

    if (!id) return alert("유튜브 링크를 다시 확인해주세요.");
    mutate(
      {
        url: id,
        mainText,
        title,
        preacher,
        type,
        date,
      },
      {
        onSuccess: ({ result }) => {
          reset();
          return result === "success"
            ? alert("변경되었습니다.")
            : alert("API 요청 중 오류가 발생하였습니다.");
        },
        onError: (error) => console.log(error),
      }
    );
  };

  const onInValid = () => {
    alert("유튜브 링크는 필수입니다. 입력해주세요.");
  };

  return (
    <HomeSection title={sectionTitle}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <p>현재 주소:&nbsp;</p>
          <a
            href={`https://www.youtube.com/embed/${youtubeLink}`}
            className="text-blue-500"
          >
            {youtubeLink}
          </a>
        </div>
        <YoutubeVideo className="h-[200px]" videoId={youtubeLink} />
        <form
          onSubmit={handleSubmit(onSubmit, onInValid)}
          className="mt-4 flex flex-col gap-3"
        >
          <label className="grid grid-flow-col place-items-center gap-3">
            <p className="w-20">유튜브 링크</p>
            <input
              {...register("url", {
                required: true,
              })}
              placeholder="유튜브 링크를 입력해주세요."
              className="border rounded px-4 py-2 text-black"
            />
          </label>
          {/* 라이브/쇼츠 링크에는 보이지 않음 */}
          {showAllFields && (
            <>
              <label className="grid grid-flow-col place-items-center gap-3">
                <p className="w-20">제목</p>
                <input
                  {...register("title")}
                  placeholder="제목을 입력해주세요."
                  className="border rounded px-4 py-2 text-black"
                />
              </label>
              <label className="grid grid-flow-col place-items-center gap-3">
                <p className="w-20">날짜</p>
                <input
                  {...register("date")}
                  placeholder="ex) 2024-01-01"
                  className="border rounded px-4 py-2 text-black"
                />
              </label>
              {hideMainText && (
                <label className="grid grid-flow-col place-items-center gap-3">
                  <p className="w-20">본문말씀</p>
                  <input
                    {...register("mainText")}
                    placeholder="ex) 마태복음 1장 1절"
                    className="border rounded px-4 py-2 text-black"
                  />
                </label>
              )}
              <label className="grid grid-flow-col place-items-center gap-3">
                <p className="w-20">설교자</p>
                <input
                  {...register("preacher")}
                  placeholder="ex) 김지혁 담임목사"
                  className="border rounded px-4 py-2 text-black"
                />
              </label>
            </>
          )}
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            등록
          </button>
        </form>
      </div>
    </HomeSection>
  );
};

export default YoutubeSection;
