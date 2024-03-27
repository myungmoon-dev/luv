import React from "react";
import { Card } from "ui";
import Section from ".";
import { useGetYoutubeLink } from "@/query/youtube";
import YoutubeVideo from "@/components/youtubeVideo";

const WordsSection = () => {
  const { data: youtubeLink } = useGetYoutubeLink("youtube");
  const { data: shortsLink } = useGetYoutubeLink("shorts");
  const { data: liveLink } = useGetYoutubeLink("live");

  return (
    <Section title="생명의 말씀">
      <div className="flex flex-col gap-5 sm:flex-row">
        <Card className="relative h-[300px] w-[100%] sm:w-[70%] lg:h-[450px]">
          <YoutubeVideo videoId={youtubeLink} />
        </Card>
        <Card className="relative h-[300px] w-[100%] sm:w-[30%] lg:h-[450px]">
          <YoutubeVideo videoId={shortsLink} />
        </Card>
      </div>
    </Section>
  );
};

export default WordsSection;
