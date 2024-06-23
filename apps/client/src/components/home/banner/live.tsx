import { useGetYoutubeList } from "@/query/youtube";
import useModalStore from "@/store/modal";
import dayjs from "dayjs";
import YoutubeError from "../youtubeError";

const HomeBannerLive = () => {
  const { data } = useGetYoutubeList({ videoType: "live" });
  const liveVideo = data?.[0];

  const openModal = useModalStore((state) => state.open);

  const handleClickLive = () => {
    openModal(<YoutubeError />);
    return; // FIXME: 에러 풀릴 시 삭제
    open(`https://youtu.be/${liveVideo?.videoId}`);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-center text-4xl font-extrabold text-white sm:text-[3.75rem] sm:leading-[4.5rem]">
        <span data-aos="fade-up">{dayjs(liveVideo?.date).format("YYYY.MM.DD")}</span>
        <br />
        <span data-aos="fade-up" className="font-SCoreDream">
          {liveVideo?.title} LIVE
        </span>
      </h1>
      <button onClick={handleClickLive} data-aos="fade-up" className="text-2xl font-bold text-white hover:underline">
        예배생중계 바로가기 {">"}
      </button>
    </div>
  );
};

export default HomeBannerLive;
