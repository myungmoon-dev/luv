import HomeAlbumSection from "./section/album";
import NavSection from "./section/nav";
import VideosSection from "./section/videos";

const HomePage = () => {
  return (
    <div className="flex flex-col pb-12 md:pb-20 lg:pb-40">
      <NavSection />
      <VideosSection />
      {/* <div className="h-[8px] w-full bg-[#E6E6E6]" />
      <HomeAlbumSection /> */}
    </div>
  );
};

export default HomePage;
