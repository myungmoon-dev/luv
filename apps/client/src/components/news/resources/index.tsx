import { IResource } from "@/types/news/common";
import ResourceItem from "./Item";

const MOCK_RESOURCE_LIST: IResource[] = [
  {
    id: "1",
    createdAt: 1726243200000,
    updatedAt: 1726243200000,
    title: "2024 명문교회 추석 가정예배 순서지",
    fileList: [
      {
        name: "2024 명문교회 추석 가정예배 순서지",
        download:
          "https://firebasestorage.googleapis.com/v0/b/myungmoon-dev.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%AD%E1%84%92%E1%85%AC%20%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A5%E1%86%A8%20%E1%84%80%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%A8%E1%84%87%E1%85%A2%20%E1%84%89%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%84%8C%E1%85%B5(2024).pdf?alt=media&token=ed75b8a7-c97d-405d-9ad7-6604bf623f3a",
      },
    ],
  },
  {
    id: "2",
    createdAt: 1726243200000,
    updatedAt: 1726243200000,
    title: "명문교회 30구절 PART-1",
    fileList: [
      {
        name: "(데일리카드)명문교회 30구절 PART-1",
        download:
          "https://firebasestorage.googleapis.com/v0/b/myungmoon-dev.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%2030%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%AF%20part1(%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B3).pdf?alt=media&token=eac5bfc4-7a88-477b-b661-90c274a2790a",
      },
      {
        name: "명문교회 30구절 PART-1",
        download:
          "https://firebasestorage.googleapis.com/v0/b/myungmoon-dev.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%2030%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%AF%20part%201.pdf?alt=media&token=4f3ac4a5-b762-4c52-b647-1336bacdb9c0",
      },
    ],
  },
];

const Resources = () => {
  return (
    <div className="flex flex-col pb-32 pt-2.5">
      <div className="flex flex-col gap-4 px-5">
        <p className="text-2xl font-bold text-[#001F54] md:text-3xl lg:text-4xl">자료함</p>
        <div className="flex flex-col border-t border-[#BBBBBB]">
          {MOCK_RESOURCE_LIST.map((resource) => (
            <ResourceItem key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
