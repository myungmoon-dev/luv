import HomeAlbumSection from "./section/album";
import MapOfferingSection from "./section/mapOffering";
import NavSection from "./section/nav";
import VideosSection from "./section/videos";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <NavSection />
      <VideosSection />
      <div className="h-[8px] w-full bg-[#E6E6E6]" />
      <HomeAlbumSection />
      <div className="h-[8px] w-full bg-[#E6E6E6]" />
      <MapOfferingSection />
    </div>
  );
};

export default HomePage;
