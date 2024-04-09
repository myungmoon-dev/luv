import React from "react";
import WordsSection from "./section/words";
import AlbumSection from "./section/album";
import MapSection from "./section/map";
import ShortCutsSection from "./section/shortcuts";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <ShortCutsSection />
      <WordsSection />
      <AlbumSection />
      <MapSection />
    </div>
  );
};

export default HomePage;
