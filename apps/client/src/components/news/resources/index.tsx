import { IResource } from "@/types/news/common";
import ResourceItem from "./Item";

const MOCK_DATA: IResource[] = [
  {
    id: "1",
    createdAt: 1715769600000,
    updatedAt: 1715769600000,
    title: "2024 명문교회 추석 가정예배 순서지",
  },
  {
    id: "2",
    createdAt: 1715769600000,
    updatedAt: 1715769600000,
    title: "명문교회 30구절 PART-1",
  },
];

const Resources = () => {
  return (
    <div className="flex flex-col pb-32 pt-2.5">
      <div className="flex flex-col gap-4 px-5">
        <p className="text-2xl font-bold text-[#001F54] md:text-3xl lg:text-4xl">자료함</p>
        <div className="flex flex-col border-t border-[#BBBBBB]">
          {MOCK_DATA.map((resource) => (
            <ResourceItem key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
