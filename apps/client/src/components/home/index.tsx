import MapSection from "./section/map";
import NavSection from "./section/nav";
import VideosSection from "./section/videos";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <VideosSection />
      <NavSection />
      <MapSection />
    </div>
  );
};

export default HomePage;
