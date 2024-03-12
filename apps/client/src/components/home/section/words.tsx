import React from "react";
import { Card } from "ui";
import Section from ".";
import YoutubeVideo from "@/components/youtubeVideo";
import { useGetYoutubeLink } from "@/query/youtube";

const WordsSection = () => {
  // FIXME: liveLink 추가해야 함
  const { data: youtubeLink } = useGetYoutubeLink({
    apiUrl: "api/youtube",
    type: "youtube",
  });
  const { data: shortsLink } = useGetYoutubeLink({
    apiUrl: "api/youtube",
    type: "shorts",
  });

  return youtubeLink && shortsLink ? (
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
  ) : null;
};

export default WordsSection;
