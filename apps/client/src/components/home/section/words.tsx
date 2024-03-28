import React, { Suspense } from "react";
import { Card, Spinner } from "ui";
import Section from ".";
import YoutubeVideo from "@/components/youtubeVideo";

const Loading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent">
      <Spinner loading={true} />
    </div>
  );
};

const WordsSection = () => {
  return (
    <Section title="생명의 말씀">
      <div className="flex flex-col gap-5 sm:flex-row">
        <Card className="relative h-[300px] w-[100%] sm:w-[70%] lg:h-[450px]">
          <Suspense fallback={<Loading />}>
            <YoutubeVideo type="youtube" />
          </Suspense>
        </Card>
        <Card className="relative h-[300px] w-[100%] sm:w-[30%] lg:h-[450px]">
          <Suspense fallback={<Loading />}>
            <YoutubeVideo type="shorts" />
          </Suspense>
        </Card>
      </div>
    </Section>
  );
};

export default WordsSection;
