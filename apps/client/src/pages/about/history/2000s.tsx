import HistoryList from "@/components/about/historyList";
import Layout from "@/components/layout";
import { aboutHistoryMenus, aboutInnerMenus } from "@/constants/innerMenus/about";
import { useRouter } from "next/router";
import { Chip, Line } from "ui";

const History2000sPage = () => {
  const { asPath, push } = useRouter();

  return (
    <Layout
      pageTitle="연혁"
      title="연혁"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/introduce.jpeg"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutHistoryMenus}
    >
      <div className="flex w-full flex-col gap-20">
        <div className="relative flex flex-wrap items-center justify-center gap-4">
          {aboutHistoryMenus.map((menu) => (
            <Chip
              onClick={() => push(menu.path)}
              selected={menu.path === asPath}
              text={menu.label}
              size="xs"
              color="pink"
              key={menu.label}
              shadow="md"
              className="z-[1]"
            />
          ))}
          <Line className="absolute left-0 right-0 hidden h-[0.15rem] sm:flex" />
        </div>
        <HistoryList decade="2000년대" />
      </div>
    </Layout>
  );
};

export default History2000sPage;
