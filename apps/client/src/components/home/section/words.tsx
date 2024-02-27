import React from "react";
import { Card } from "ui";
import Image from "next/image";
import Section from ".";

const WordsSection = () => {
  return (
    <Section title="생명의 말씀">
      <div className="flex gap-5">
        <Card className="relative h-[300px] w-[70%] lg:h-[450px]">
          <Image src="/images/some.jpg" alt="some" fill className="rounded-lg object-cover" />
        </Card>
        <Card className="relative h-[300px] w-[30%] lg:h-[450px]">
          <Image src="/images/some.jpg" alt="some" fill className="rounded-lg object-cover" />
        </Card>
      </div>
    </Section>
  );
};

export default WordsSection;
