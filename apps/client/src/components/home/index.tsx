import React from "react";

import WordsSection from "./section/words";
import AlbumSection from "./section/album";
import MapSection from "./section/map";
import NewsSection from "./section/news";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <WordsSection />
      <NewsSection />
      <AlbumSection />
      <MapSection />
    </div>
  );
};

export default HomePage;
