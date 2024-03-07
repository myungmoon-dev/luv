import React from "react";
import { Card } from "ui";
import Image from "next/image";

import Section from ".";

const AlbumSection = () => {
  return (
    <Section title="명문 앨범">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-4">
          <p>주일 스케치</p>
          <Card className="relative h-[180px] w-full lg:h-[235px]">
            <Image src="/images/sketch_1.jpg" alt="sketch_1" fill className="rounded-lg object-cover" />
          </Card>
          <Card className="relative h-[180px] w-full lg:h-[235px]">
            <Image src="/images/sketch_2.jpg" alt="sketch_2" fill className="rounded-lg object-cover" />
          </Card>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p>다음 세대</p>
          <Card className="relative h-[180px] w-full lg:h-[235px]">
            <Image src="/images/sketch_3.jpg" alt="sketch_3" fill className="rounded-lg object-cover" />
          </Card>
          <Card className="relative h-[180px] w-full lg:h-[235px]">
            <Image src="/images/sketch_4.jpg" alt="sketch_4" fill className="rounded-lg object-cover" />
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default AlbumSection;
