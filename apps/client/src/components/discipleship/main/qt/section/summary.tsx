import { useState } from "react";
import QtSummaryTabBar from "../summary/tabBar";
import QtTitle from "../title";

interface IQtSummarySectionProps {
  contents: { id: string; text: string }[];
}

const QtSummarySection = ({ contents }: IQtSummarySectionProps) => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <div className="flex w-full max-w-screen-md flex-col justify-start gap-5">
      <QtTitle titleEn="SUMMARY" titleKr="개요" />
      <div className="flex w-full max-w-screen-lg flex-col gap-3">
        <nav className="flex gap-3">
          {contents.map((content, idx) => (
            <QtSummaryTabBar
              key={content.id}
              label={content.id}
              currnetIndex={idx}
              selectedIndex={tabIndex}
              onClick={(selectedIndex) => setTabIndex(selectedIndex)}
            />
          ))}
        </nav>
        <div data-aos="fade-right" className="break-keep bg-blue-700 px-2 py-5 font-semibold">
          <p>{contents[tabIndex].text}</p>
        </div>
      </div>
    </div>
  );
};

export default QtSummarySection;
