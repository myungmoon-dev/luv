import { useGetYoutubeLink, usePostYoutubeLink } from "@/query/youtube";
import { useForm } from "react-hook-form";
import HomeSection from "./section";
import getYoutubeId from "@/utils/getYoutubeId";
import { IYoutubeForm, YoutubeType } from "type";
import { YoutubeVideo } from "ui";
import YoutubeInput from "../youtube/input";
import YoutubeDropDown, { IYoutubeDropDownOptions } from "../youtube/dropdown";
import { useState } from "react";

interface IYoutubeSectionProps {
  sectionTitle: string;
  type?: YoutubeType;
}

const YOUTUBE_OPTIONS_DATA: IYoutubeDropDownOptions[] = [
  { label: "주일예배", value: "main" },
  { label: "주일청년", value: "youth" },
  { label: "주일찬양", value: "afternoon" },
  { label: "금요기도회", value: "firday" },
  { label: "수요예배", value: "wednesday" },
  { label: "명문영상", value: "video" },
];

const YoutubeSection = ({ sectionTitle, type }: IYoutubeSectionProps) => {
  const [selectedType, setSelectedType] = useState<YoutubeType>("main");
  const isShowAllFields = type !== "shorts" && type !== "live";
  const isShowMainText = type !== "video";

  const { data: youtubeLink } = useGetYoutubeLink(selectedType);
  const { register, handleSubmit, reset } = useForm<IYoutubeForm>();
  const { mutate } = usePostYoutubeLink(selectedType);

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
        type: selectedType,
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
    <HomeSection
      title={
        `${YOUTUBE_OPTIONS_DATA.find((option) => option.value === selectedType)
          ?.label} 링크` ?? ""
      }
    >
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
          {isShowAllFields && (
            <>
              <YoutubeDropDown
                label="유튜브 타입"
                options={YOUTUBE_OPTIONS_DATA}
                onSelect={(selected) => setSelectedType(selected)}
              />
              <YoutubeInput
                label="제목"
                name="title"
                placeholder="제목을 입력해주세요."
                register={register}
                required
              />
              <YoutubeInput
                label="날짜"
                name="date"
                placeholder="ex) 2024-01-01"
                register={register}
                required
              />
              {isShowMainText && (
                <YoutubeInput
                  label="본문말씀"
                  name="mainText"
                  placeholder="ex) 마태복음 1장 1절"
                  register={register}
                  required
                />
              )}
              <YoutubeInput
                label={type === "video" ? "이름" : "설교자"}
                name="date"
                placeholder={
                  type === "video"
                    ? "ex) WITH EL(위드엘 주일찬양팀)"
                    : "ex) 김지혁 담임목사"
                }
                register={register}
                required
              />
            </>
          )}
          <YoutubeInput
            label="유튜브 링크"
            name="url"
            placeholder="유튜브 링크를 입력해주세요."
            register={register}
            required
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
            등록
          </button>
        </form>
      </div>
    </HomeSection>
  );
};

export default YoutubeSection;
