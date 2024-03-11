import React from "react";
import { Card } from "ui";
import Section from ".";
import YoutubeVideo from "@/components/youtubeVideo";

import { useGetLivelink, useGetShorts } from "@/query/youtube";

const WordsSection = () => {
  const { data: livelink, isLoading: livelinkLoading } = useGetLivelink({
    apiUrl: "api/youtube",
  });
  const { data: shorts, isLoading: shortsLoading } = useGetShorts({
    apiUrl: "api/shorts",
  });

  return livelink && shorts ? (
    <Section title="생명의 말씀">
      <div className="flex flex-col gap-5 sm:flex-row">
        <Card className="relative h-[300px] w-[100%] sm:w-[70%] lg:h-[450px]">
          <YoutubeVideo videoId={livelink} />
        </Card>
        <Card className="relative h-[300px] w-[100%] sm:w-[30%] lg:h-[450px]">
          <YoutubeVideo videoId={shorts} />
        </Card>
      </div>
    </Section>
  ) : null;
};

export default WordsSection;
