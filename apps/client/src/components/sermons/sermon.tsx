import { IYoutube } from "type";
import { Card, SectionHeader } from "ui";
import { useEffect, useState } from "react";
import YoutubeVideo from "../youtubeVideo";
import DateTabs from "../dateTabs";

interface ISermonComponentProps {
  list: IYoutube[];
}
interface IHandleTabClick {
  youtube: IYoutube;
  index: number;
}

const SermonComponent = ({ list }: ISermonComponentProps) => {
  const [selectedYoutube, setSelectedYoutube] = useState<IYoutube | null>(null);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = ({ youtube, index }: IHandleTabClick) => {
    setSelectedYoutube(youtube);
    setSelectedTabIndex(index);
  };

  // 렌더링 시, 탭 초기화
  useEffect(() => {
    if (list.length > 0) {
      setSelectedYoutube(list[0]);
    }
  }, [list]);

  // FIXME: layout-page merge되면 custom color 적용 예정
  return (
    <div className="flex w-full flex-col gap-5">
      <SectionHeader text="2024년" color="pink" selected={true} size="sm" hasLine={true} />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="mb-10 grid min-h-[50px] w-full max-w-3xl grid-cols-4 items-center gap-5 rounded-md bg-gray-200 px-3">
          {list.map((youtube, index) => (
            <DateTabs
              key={youtube.id}
              date={youtube.date ? youtube.date : ""}
              className={index === selectedTabIndex ? "font-bold text-[#892122]" : ""}
              onClick={() => handleTabClick({ youtube, index })}
            />
          ))}
        </div>
        {selectedYoutube && (
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="font-HSBombaram3 text-lg sm:text-2xl">{`"${selectedYoutube.title}"`}</h1>
            <p className="text-sm text-gray-700">{`${selectedYoutube.preacher} | ${selectedYoutube.mainText}`}</p>
            <Card className="relative mt-10 flex h-[300px] w-[100%] items-center justify-center sm:w-[70%] lg:h-[450px]">
              <YoutubeVideo videoId={selectedYoutube.videoId} />
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default SermonComponent;
