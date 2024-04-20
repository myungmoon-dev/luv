import HomePage from "@/components/home";
import Layout from "@/components/layout";
import { useGetYoutubeList } from "@/query/youtube";
import { IBannerIcon } from "@/types/banner/type";
import { useEffect, useState } from "react";

// FIXME: 관리자페이지에서 다룰 수 있게 변경해야 함
const BANNER_ICON_DATA: IBannerIcon[] = [
  {
    text: "예배생중계",
    className: "bg-blue-500 text-white hover:brightness-125 duration-500",
    iconType: {
      name: "Youtube",
      size: "lg",
      backgroundColor: "white",
      strokeColor: "white",
    },
  },
  {
    text: "성경통독",
    url: "discipleship/main/bible",
    className: "bg-white font-semibold text-blue-500 hover:brightness-125 duration-500",
    iconType: {
      name: "OpenBook",
      size: "lg",
      backgroundColor: "#3490DE",
      strokeColor: "#3490DE",
    },
  },
];

export default function Home() {
  const { data: liveLink } = useGetYoutubeList({ videoType: "live", videoCount: 1 });
  const [bannerIcons, setBannerIcons] = useState<IBannerIcon[]>(BANNER_ICON_DATA);

  useEffect(() => {
    // 아이콘 리스트에서 "예배생중계"인 객체의 URL에 라이브 링크를 삽입
    if (liveLink && liveLink.length > 0) {
      setBannerIcons((prevIcons) => {
        return prevIcons.map((prevIcon) => {
          if (prevIcon.text === "예배생중계") {
            return {
              ...prevIcon,
              url: `https://www.youtube.com/live/${liveLink[0].videoId}`,
            };
          }
          return prevIcon;
        });
      });
    }
  }, [liveLink]);

  return (
    <Layout pageTitle="메인" bannerVideo="/videos/banner.mp4" bannerIcons={bannerIcons}>
      <HomePage />
    </Layout>
  );
}
