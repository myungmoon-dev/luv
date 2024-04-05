import HomePage from "@/components/home";
import Layout from "@/components/layout";
import { useGetYoutubeList } from "@/query/youtube";
import { IBannerIcon } from "@/types/banner/type";

// FIXME: 관리자페이지에서 다룰 수 있게 변경해야 함
const bannerIcons: IBannerIcon[] = [
  {
    text: "예배생중계",
    className: "bg-pink-200 text-white",
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
    className: "bg-white text-pink-200",
    iconType: {
      name: "OpenBook",
      size: "lg",
      backgroundColor: "#892122",
      strokeColor: "#892122",
    },
  },
];

export default function Home() {
  const { data: liveLink } = useGetYoutubeList({ videoType: "live", videoCount: 1 });

  if (liveLink) {
    bannerIcons[0].url = `https://www.youtube.com/live/${liveLink[0].videoId}`;
  }

  return (
    <Layout pageTitle="메인" bannerVideo="/videos/banner.mp4" bannerIcons={bannerIcons}>
      <HomePage />
    </Layout>
  );
}
