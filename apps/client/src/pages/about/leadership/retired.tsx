import Layout from "@/components/layout";
import React from "react";
import { aboutInnerMenus, aboutLeaderMenus } from "@/constants/innerMenus/about";
import { Chip, Line } from "ui";
import { useRouter } from "next/router";
import ProfileList from "@/components/about/profileList";

const LeadershipRetiredPage = () => {
  const { asPath, push } = useRouter();
  return (
    <Layout
      pageTitle="섬기는 분들"
      title="섬기는 분들"
      bannerDescription="교회여 일어나 세상으로 흘러가라!"
      bannerImage="/images/introduce.jpeg"
      innerMenus={aboutInnerMenus}
      detailMenus={aboutLeaderMenus}
    >
      <div className="flex w-full flex-col gap-20">
        <div className="relative flex flex-wrap items-center justify-center gap-4">
          {aboutLeaderMenus.map((menu) => (
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
        <ProfileList tabType="retired" />
      </div>
    </Layout>
  );
};

export default LeadershipRetiredPage;
