import useModalStore from "@/store/modal";
import dayjs from "dayjs";
import { useGetLive } from "@/query/youtube";

const HomeBannerLive = () => {
  const { data } = useGetLive();

  const handleClickLive = () => {
    open(data?.url);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-center text-4xl font-extrabold text-white sm:text-[3.75rem] sm:leading-[4.5rem]">
        <span data-aos="fade-up">{dayjs(data?.updatedAt).format("YYYY.MM.DD")}</span>
      </h1>
      <button onClick={handleClickLive} data-aos="fade-up" className="text-2xl font-bold text-white hover:underline">
        예배생중계 바로가기 {">"}
      </button>
    </div>
  );
};

export default HomeBannerLive;
