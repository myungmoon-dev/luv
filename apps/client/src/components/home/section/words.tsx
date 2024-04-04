import React from "react";
import { YoutubeVideo } from "ui";
import Section from ".";
import { useGetYoutubeList } from "@/query/youtube";

const WordsSection = () => {
  const { data: live } = useGetYoutubeList({ videoType: "live" });
  const { data: shorts } = useGetYoutubeList({ videoType: "shorts" });
  return (
    <Section title="생명의 말씀">
      <div className="flex flex-col gap-5 sm:flex-row">
        <YoutubeVideo
          className="h-[300px] w-full sm:w-[70%] lg:h-[450px]"
          videoId={live && live.length > 0 ? live[0].videoId : undefined}
        />
        <YoutubeVideo
          className="h-[300px] w-full sm:w-[30%] lg:h-[450px]"
          videoId={shorts && shorts.length > 0 ? shorts[0].videoId : undefined}
        />
      </div>
    </Section>
  );
};

export default WordsSection;
