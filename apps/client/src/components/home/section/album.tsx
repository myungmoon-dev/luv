import React from "react";
import Section from ".";
import SectionCard from "../sectionCard";

const AlbumSection = () => {
  return (
    <Section title="명문 앨범">
      <div className="mx-auto mt-10 grid grid-cols-1 gap-y-5 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
        <SectionCard
          url="news/photos"
          text="명문 앨범"
          image="balance.jpg"
          className="h-[180px] sm:h-[230px] lg:h-[300px]"
        />
        <SectionCard
          url="discipleship/new/photos"
          text="새가족 앨범"
          image="discipleship.jpg"
          className="h-[180px] sm:h-[230px] lg:h-[300px]"
        />
        <SectionCard
          url="discipleship/newlyweds/photos"
          text="신혼가정 앨범"
          image="sketch-3.jpg"
          className="h-[180px] sm:h-[230px] lg:h-[300px]"
        />
        <SectionCard
          url="education/infants"
          text="다음세대 앨범"
          image="sketch-4.jpg"
          className="h-[180px] sm:h-[230px] lg:h-[300px]"
        />
      </div>
    </Section>
  );
};

export default AlbumSection;
