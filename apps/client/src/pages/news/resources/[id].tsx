import Layout from "@/components/layout";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IFileList {
  name: string;
  download: string;
}

interface IData {
  id: string;
  date: string;
  title: string;
  writer: string;
  fileList: IFileList[];
  imgs: string[];
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

// FIXME: 임시데이터
const list: IData[] = [
  {
    id: "1",
    date: "2024-09-14",
    title: "2024 명문교회 추석 가정예배 순서지",
    writer: "관리자",
    fileList: [
      {
        name: "2024 명문교회 추석 가정예배 순서지",
        download:
          "https://firebasestorage.googleapis.com/v0/b/myungmoon-dev.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%AD%E1%84%92%E1%85%AC%20%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A5%E1%86%A8%20%E1%84%80%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%A8%E1%84%87%E1%85%A2%20%E1%84%89%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%84%8C%E1%85%B5(2024).pdf?alt=media&token=ed75b8a7-c97d-405d-9ad7-6604bf623f3a",
      },
    ],
    imgs: [
      "https://imagedelivery.net/XBJ9Uf9wqjQ5z1gg-GjLDw/98006bfc-44f8-4538-93f9-df28f2699600",
      "https://imagedelivery.net/XBJ9Uf9wqjQ5z1gg-GjLDw/706fbdd8-645c-46e3-6d1b-840a3b519900",
    ],
  },
  {
    id: "2",
    date: "2024-09-14",
    title: "명문교회 30구절 PART-1",
    writer: "관리자",
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
    imgs: [
      "https://imagedelivery.net/XBJ9Uf9wqjQ5z1gg-GjLDw/c63db722-4aeb-4cee-1ea9-eea4122c8300",
      "https://imagedelivery.net/XBJ9Uf9wqjQ5z1gg-GjLDw/8237cfb4-5360-4591-97cb-7cad52639400",
    ],
  },
];

const NewsResourceDetailPage = () => {
  const [data, setData] = useState<IData>();
  const params = useParams();

  useEffect(() => {
    const resourcesId = params?.id as string;
    setData(list[+resourcesId - 1]);
  }, [params?.id]);

  return (
    <Layout pageTitle={data?.title ?? ""} title="자료함" bannerImage="/images/news/banner3.jpg">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-center gap-5 overflow-x-hidden px-5 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:mx-auto 2xl:px-40">
        <h1 className="mb-2 w-full border-b-[1px] border-t-gray-500 p-3 text-center font-SCoreDream text-lg md:text-3xl">
          {data?.title}
        </h1>
        <div className="flex w-full justify-between px-5">
          <p className="text-sm">{data?.writer}</p>
          <p className="text-sm">{dayjs(data?.date).format("YYYY-MM-DD")}</p>
        </div>
        {/* 다운로드 링크 */}
        <div className="flex w-full flex-col items-center justify-center gap-5">
          {data?.fileList.map((file) => (
            <a href={file.download}>
              <div className="flex max-w-md items-center justify-between gap-3 rounded-md border p-5">
                <p className="text-sm">{file.name}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
        {/* 이미지 */}
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          {data?.imgs.map((img) => <img src={`${img}/full`} alt="이미지" />)}
        </div>
      </div>
    </Layout>
  );
};

export default NewsResourceDetailPage;
