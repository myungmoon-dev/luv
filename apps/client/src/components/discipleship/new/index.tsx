import AboutHeaderSection from "@/components/about/section/header";
import CustomImage from "@/components/customImage";
import DiscipleshipTabBar from "../tabs/tabBar";
import ForNewCommersGuide from "./contents/guide";
import ForNewCommersDate from "./contents/date";
import ForNewCommersProcess from "./contents/process";
import ForNewCommersApply from "./contents/apply";
import { useState } from "react";
import AlbumList from "@/components/albums";

const NEWCOMMERS_TAB_DATA = [
  {
    label: "새가족대상",
    content: <ForNewCommersGuide />,
  },
  {
    label: "교육일시",
    content: <ForNewCommersDate />,
  },
  {
    label: "접수방법",
    content: <ForNewCommersApply />,
  },
  {
    label: "단계별\n절차안내",
    content: <ForNewCommersProcess />,
  },
];
const DiscipleshipNew = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <div className="mb-20 flex w-full flex-col items-center justify-center gap-10 overflow-x-hidden">
      <AboutHeaderSection texts={["명문교회에", "새롭게 찾아오신 여러분을", "주님의 이름으로 환영합니다!"]} />
      <CustomImage
        src="/images/discipleship/welcome.jpg"
        alt="새신자 교육 이미지"
        className="h-[300px] xl:h-[600px]"
        imgClass="brightness-75"
      >
        <div className="absolute flex h-full w-full flex-col items-center justify-end gap-1 pb-10 lg:gap-3 2xl:gap-5 2xl:pb-14">
          <p
            data-aos="fade-up"
            className="2xl: break-keep text-center font-SCoreDream text-xl text-white lg:text-3xl 2xl:text-5xl"
          >
            은혜를 사모하여 찾아오신 여러분께
          </p>
          <div
            data-aos="fade-up"
            className="flex flex-col text-center font-semibold leading-tight text-white lg:text-xl 2xl:text-3xl"
          >
            <p>첫 방문부터 등록과정과 양육, 정착과정을</p>
            <p>잘 밟을 수 있도록 안내해드리겠습니다.</p>
          </div>
        </div>
      </CustomImage>
      <div className="flex w-full max-w-screen-lg flex-col">
        <nav className="flex h-[70px] w-full items-center justify-center gap-1">
          {NEWCOMMERS_TAB_DATA.map((menu, idx) => (
            <DiscipleshipTabBar
              key={menu.label}
              label={menu.label}
              currnetIndex={idx}
              selectedIndex={tabIndex}
              onClick={(selectedIndex) => setTabIndex(selectedIndex)}
            />
          ))}
        </nav>
        {NEWCOMMERS_TAB_DATA[tabIndex].content}
      </div>
      <AlbumList albumType="newFamilly" />
    </div>
  );
};

export default DiscipleshipNew;
