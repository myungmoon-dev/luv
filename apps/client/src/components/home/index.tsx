import MapSection from "./section/map";
import NavSection from "./section/nav";
import OfferingSection from "./section/offering";
import VideosSection from "./section/videos";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <NavSection />
      <VideosSection />
      <MapSection />
      <OfferingSection />
    </div>
  );
};

export default HomePage;
