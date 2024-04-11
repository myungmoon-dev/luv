import React from "react";
import { YoutubeVideo } from "ui";
import Section from ".";
import { useGetYoutubeList } from "@/query/youtube";

const WordsSection = () => {
  const { data: main } = useGetYoutubeList({ videoType: "main" });
  const { data: shorts } = useGetYoutubeList({ videoType: "shorts" });
  return (
    <Section title="생명의 말씀">
      <div className="flex flex-col gap-5 md:flex-row">
        <YoutubeVideo
          className="h-[200px] w-full sm:h-[300px] md:w-[70%] lg:h-[270px] xl:h-[500px]"
          videoId={main && main.length > 0 ? main[0].videoId : undefined}
        />
        <YoutubeVideo
          className="h-[200px] w-full sm:h-[300px] md:w-[30%] lg:h-[270px] xl:h-[500px]"
          videoId={shorts && shorts.length > 0 ? shorts[0].videoId : undefined}
        />
      </div>
    </Section>
  );
};

export default WordsSection;
