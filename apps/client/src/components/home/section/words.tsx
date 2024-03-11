import React, { useEffect, useState } from "react";
import { Card } from "ui";
import Section from ".";
import YoutubeVideo from "@/components/youtubeVideo";
import axios from "axios";

const WordsSection = () => {
  const [livelink, setLivelink] = useState("");

  const fetchLivelink = async () => {
    try {
      const {
        data: { livelink },
      } = await axios.get("api/youtube");
      setLivelink(livelink[0]);
    } catch (error) {
      // FIXME: Handle errors here
    }
  };

  useEffect(() => {
    fetchLivelink();
  }, []);
  return (
    <Section title="생명의 말씀">
      <div className="flex flex-col gap-5 sm:flex-row">
        <Card className="relative h-[300px] w-[100%] sm:w-[70%] lg:h-[450px]">
          <YoutubeVideo videoId={livelink} />
        </Card>
        <Card className="relative h-[300px] w-[100%] sm:w-[30%] lg:h-[450px]">
          <YoutubeVideo videoId="omBT6ttv-Us?si=K3uAXM8MV3ahPf3F" />
        </Card>
      </div>
    </Section>
  );
};

export default WordsSection;
