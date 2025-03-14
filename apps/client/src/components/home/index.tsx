import HomeAlbumSection from "./section/album";
import MapSection from "./section/map";
import NavSection from "./section/nav";
import OfferingSection from "./section/offering";
import VideosSection from "./section/videos";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <NavSection />
      <VideosSection />
      <div className="h-[8px] w-full bg-[#E6E6E6]" />
      <HomeAlbumSection />
      <MapSection />
      <OfferingSection />
    </div>
  );
};

export default HomePage;
