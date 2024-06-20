import { useRouter } from "next/router";
import HomeSection from "./section";

const HomeAlbumSection = () => {
  const { push } = useRouter();

  return (
    <HomeSection title="앨범 업로드">
      <button
        onClick={() => push("/album")}
        className="flex justify-center items-center bg-blue-500 text-white rounded-md p-2 px-3 font-bold"
      >
        업로드하기
      </button>
    </HomeSection>
  );
};
export default HomeAlbumSection;
