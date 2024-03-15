import React from "react";
import { Card } from "ui";
import Image from "next/image";

import Section from ".";

const AlbumSection = () => {
  return (
    <Section title="명문 앨범">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-3">
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">주일 스케치</p>
          <Card className="relative h-[250px] w-full">
            <Image src="/images/sketch-1.jpg" alt="sketch1" fill className="rounded-lg object-cover" />
          </Card>
          <Card className="relative h-[250px] w-full">
            <Image src="/images/sketch-2.jpg" alt="sketch2" fill className="rounded-lg object-cover" />
          </Card>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="font-bold">다음 세대</p>
          <Card className="relative h-[250px] w-full">
            <Image src="/images/sketch-3.jpg" alt="sketch3" fill className="rounded-lg object-cover" />
          </Card>
          <Card className="relative h-[250px] w-full">
            <Image src="/images/sketch-4.jpg" alt="sketch4" fill className="rounded-lg object-cover" />
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default AlbumSection;
