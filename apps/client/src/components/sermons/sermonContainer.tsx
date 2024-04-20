import { IYoutube } from "type";
import Sermon from "./sermon";

interface ISermonContainerProps {
  title: string;
  list: IYoutube[];
}

const SermonContainer = ({ list, title }: ISermonContainerProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-full flex-col gap-5">
<<<<<<< HEAD
        <h3 className="text-3xl font-bold">{title}</h3>
        <hr className="border-gray-400/60" />
        <div className="flex gap-5 overflow-scroll">
          {list.map((sermon) => (
            <div key={sermon.id} className="min-w-[calc(100%+5rem)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)]">
              <Sermon sermon={sermon} />
            </div>
          ))}
        </div>
=======
        <SectionHeader text="2024년" selected={true} size="sm" hasLine={true} />
        <DateTab
          tabs={list.map((youtube) => (youtube.date && dayjs(youtube.date).format("M월 D일")) ?? "none")}
          selectedTabIndex={selectedTabIndex}
          onClickTab={onClickTab}
        >
          <Sermon sermon={list[selectedTabIndex]} />
        </DateTab>
>>>>>>> fc0e980 (design: 나머지 페이지 수정)
      </div>
    </div>
  );
};

export default SermonContainer;
