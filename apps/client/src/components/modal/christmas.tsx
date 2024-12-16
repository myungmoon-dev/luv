import React from "react";
import { YoutubeVideo } from "ui";

const ChristmasModal = () => {
  return (
    <div>
      <YoutubeVideo
        className="h-[200px] w-full sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px]"
        isFullLink
        videoId="https://youtu.be/WGRt0rvou4o"
      />
    </div>
  );
};

export default ChristmasModal;
