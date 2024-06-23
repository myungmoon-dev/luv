import useModalStore from "@/store/modal";
import MapSection from "./section/map";
import NavSection from "./section/nav";
import OfferingSection from "./section/offering";
import VideosSection from "./section/videos";
import { useEffect } from "react";
import YoutubeError from "./youtubeError";

const HomePage = () => {
  const openModal = useModalStore((state) => state.open);

  useEffect(() => {
    openModal(<YoutubeError />);
  }, []);

  return (
    <div className="flex flex-col">
      <VideosSection />
      <NavSection />
      <MapSection />
      <OfferingSection />
    </div>
  );
};

export default HomePage;
