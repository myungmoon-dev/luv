import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { IYoutubeDropDownOptions } from "../youtube/dropdown";
import LiveForm from "./Form";

const YOUTUBE_OPTIONS_DATA: IYoutubeDropDownOptions[] = [
  { label: "라이브 생방송", type: "live" },
  { label: "쇼츠", type: "shorts" },
  { label: "주일예배", type: "main" },
  { label: "주일청년", type: "youth" },
  { label: "주일찬양", type: "afternoon" },
  { label: "금요기도회", type: "firday" },
  { label: "수요예배", type: "wednesday" },
  { label: "명문영상", type: "video" },
];

const Live = () => {
  return (
    <Tabs defaultValue="live" className="flex flex-col gap-5">
      <TabsList className="w-fit">
        {YOUTUBE_OPTIONS_DATA.map((option) => (
          <TabsTrigger value={option.type} key={option.type}>
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {YOUTUBE_OPTIONS_DATA.map((option) => (
        <TabsContent value={option.type} key={option.type}>
          <LiveForm option={option.type} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Live;
