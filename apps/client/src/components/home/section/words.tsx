import React from "react";
import { Card } from "ui";
import Section from ".";
import YoutubeVideo from "@/components/youtubeVideo";

const WordsSection = () => {
  return (
    <Section title="생명의 말씀">
      <div className="flex flex-col gap-5 sm:flex-row">
        <Card className="relative h-[300px] w-[100%] sm:w-[70%] lg:h-[450px]">
          <YoutubeVideo type="youtube" />
        </Card>
        <Card className="relative h-[300px] w-[100%] sm:w-[30%] lg:h-[450px]">
          <YoutubeVideo type="shorts" />
        </Card>
      </div>
    </Section>
  );
};

export default WordsSection;
