import { cn } from "..";
import InstagramIcon from "./instagram";
import YoutubeIcon from "./youtube";

interface IFooterProps {
  push: (url: { pathname: string; query?: Record<string, any> }) => void;
}

export const Footer = ({ push }: IFooterProps) => {
  const handleNotPreparedClick = () => {
    alert("아직 준비되지 않았습니다.");
  };

  return (
    <div>
      <div
        className={cn(
          "ui-bg-white ui-flex ui-justify-between ui-items-center lg:ui-hidden",
          "ui-pb-[24px] ui-pl-[22px] ui-pr-[30px] ui-pt-[28px] sm:ui-py-[23px] sm:ui-pl-[40px] sm:ui-pr-[50px] md:ui-py-[40px] md:ui-px-[60px]",
        )}
      >
        <p className="ui-text-[22px] ui-font-bold ui-text-[#222222] sm:ui-text-[25px]">
          명문교회 SNS채널
        </p>
        <div className="ui-flex ui-gap-[11px] sm:ui-gap-[25px]">
          <a
            href="https://www.youtube.com/channel/UC1v4PcaTti7luD1pYj_AgDg"
            target="_blank"
            className="ui-bg-[#F5F5F5] ui-p-[13px] ui-rounded-full sm:ui-p-[15px]"
          >
            <YoutubeIcon />
          </a>
          <a
            href="https://www.instagram.com/myungmoonchurch?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="ui-bg-[#F5F5F5] ui-p-[13px] ui-rounded-full sm:ui-p-[15px]"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
      <footer
        className={cn(
          "ui-bg-[#00163B] ui-text-white ui-flex ui-flex-col ui-items-center ui-justify-between",
          "ui-pb-[30px] ui-px-[29px] ui-pt-[27px] sm:ui-pb-[34px] sm:ui-pt-[30px] sm:ui-px-[44px] md:ui-px-[74px] lg:ui-pt-[171px] lg:ui-pl-[78px] lg:ui-pb-[37px]",
          "ui-text-[13px] sm:ui-text-[15px]",
          "ui-h-[254px] sm:ui-h-[319px] lg:ui-h-[391px]",
        )}
      >
        <div className="ui-flex ui-flex-col ui-items-center ui-gap-[26px] sm:ui-gap-[52px] lg:ui-w-full lg:ui-items-start lg:ui-gap-[30px]">
          <div className="ui-flex ui-items-center ui-gap-5 sm:ui-gap-[43px] md:ui-gap-[100px] lg:ui-gap-[30px]">
            <p
              onClick={() =>
                push({
                  pathname: "/policy",
                  query: { idx: 1 },
                })
              }
              className="ui-font-medium ui-cursor-pointer lg:ui-font-bold"
            >
              개인정보처리방침
            </p>
            <span className="ui-w-[1px] ui-h-[13px] ui-bg-white lg:ui-hidden" />
            <p
              onClick={() =>
                push({
                  pathname: "/policy",
                  query: { idx: 0 },
                })
              }
              className="ui-cursor-pointer lg:ui-font-medium"
            >
              이용약관
            </p>
            <span className="ui-w-[1px] ui-h-[13px] ui-bg-white lg:ui-hidden" />
            <p onClick={handleNotPreparedClick} className="ui-cursor-pointer lg:ui-font-medium">
              이메일무단수집거부
            </p>
          </div>
          <p className=" ui-w-full">
            서울특별시 금천구 남부순환로 1406
            <br />
            TEL. 02-86-5071
          </p>
        </div>
        <p>Copyright © 2024 명문교회 All rights reserved.</p>
      </footer>
    </div>
  );
};
