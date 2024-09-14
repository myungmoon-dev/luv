import Layout from "@/components/layout";
import { generateBlurDataURL } from "@/utils/generateBlurDataURL";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import path from "path";
import { useEffect, useState } from "react";

interface IFileList {
  name: string;
  url: string;
}

interface IData {
  id: string;
  date: string;
  title: string;
  writer: string;
  fileList: IFileList[];
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps() {
  const imagePath = path.resolve("public/images/news/banner3.jpg");

  const blurDataURL = await generateBlurDataURL(imagePath);

  return {
    props: {
      bannerBlurDataURL: blurDataURL,
    },
  };
}

interface INewsResourceDetailPageProps {
  bannerBlurDataURL: string;
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
        url: "https://firebasestorage.googleapis.com/v0/b/myungmoon-dev.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%E1%84%80%E1%85%AD%E1%84%92%E1%85%AC%20%E1%84%8E%E1%85%AE%E1%84%89%E1%85%A5%E1%86%A8%20%E1%84%80%E1%85%A1%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%8B%E1%85%A8%E1%84%87%E1%85%A2%20%E1%84%89%E1%85%AE%E1%86%AB%E1%84%89%E1%85%A5%E1%84%8C%E1%85%B5(2024).pdf?alt=media&token=ed75b8a7-c97d-405d-9ad7-6604bf623f3a",
      },
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
        url: "https://firebasestorage.googleapis.com/v0/b/myungmoon-dev.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%2030%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%AF%20part1(%E1%84%83%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B3).pdf?alt=media&token=eac5bfc4-7a88-477b-b661-90c274a2790a",
      },
      {
        name: "명문교회 30구절 PART-1",
        url: "https://firebasestorage.googleapis.com/v0/b/myungmoon-dev.appspot.com/o/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%86%E1%85%AE%E1%86%AB%2030%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A5%E1%86%AF%20part%201.pdf?alt=media&token=4f3ac4a5-b762-4c52-b647-1336bacdb9c0",
      },
    ],
  },
];

const NewsResourceDetailPage = ({ bannerBlurDataURL }: INewsResourceDetailPageProps) => {
  const [data, setData] = useState<IData>();
  const params = useParams();

  useEffect(() => {
    const resourcesId = params?.id as string;
    setData(list[+resourcesId - 1]);
  }, [params?.id]);

  return (
    <Layout
      pageTitle={data?.title ?? ""}
      title="자료함"
      bannerImage="/images/education/banner.jpg"
      bannerBlurDataURL={bannerBlurDataURL}
    >
      <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center justify-center gap-5 overflow-x-hidden px-5 sm:px-10 md:px-20 lg:px-28 xl:px-36 2xl:mx-auto 2xl:px-40">
        <h1 className="mb-2 w-full border-b-[1px] border-t-gray-500 p-3 text-center font-SCoreDream text-lg md:text-3xl">
          {data?.title}
        </h1>
        <div className="flex w-full justify-between px-5">
          <p className="text-sm">{data?.writer}</p>
          <p className="text-sm">{dayjs(data?.date).format("YYYY-MM-DD")}</p>
        </div>
        <div className="my-10 flex w-full flex-col items-center justify-center gap-5">
          {data?.fileList.map((file) => (
            <a href={file.url}>
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
      </div>
    </Layout>
  );
};

export default NewsResourceDetailPage;
