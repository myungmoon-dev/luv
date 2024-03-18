import { ReactNode } from "react";
import { Chip } from "..";

interface BannerProps {
  image?: ReactNode;
  video?: string;
  title?: string;
  description?: string;
  innerMenus?: { label: string; path: string }[];
  detailMenus?: { label: string; path: string }[];
  pathname?: string;
  push: (url: string) => void;
  onClickChip: (path: string) => void;
}

export const Banner = ({
  description,
  image,
  title,
  innerMenus,
  detailMenus,
  video,
  pathname,
  onClickChip,
  push,
}: BannerProps) => {
  return (
    <div className="ui-w-full ui-relative">
      {image ? (
        <>
          {image}
          <div className="ui-w-full ui-h-[200px] ui-bottom-0 ui-absolute ui-bg-gradient-to-b ui-from-transparent ui-to-white" />
        </>
      ) : (
        <video
          src={video}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline
          className="ui-w-full ui-h-[550px] sm:ui-h-[750px] ui-object-cover"
        />
      )}
      <div className="ui-absolute ui-flex ui-flex-col ui-gap-5 ui-items-center ui-px-8 md:ui-px-16 xl:ui-px-24 ui-w-full ui-bottom-[100px] ui-left-1/2 -ui-translate-x-1/2 ui-text-white">
        <div className="ui-flex ui-flex-col ui-gap-2 ui-items-center">
          <h1 className="ui-text-2xl ui-font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
            {title}
          </h1>
          <p className="ui-font-thin">{description}</p>
        </div>
        {title && <hr className="ui-w-full" />}
        <div className="ui-gap-4 ui-flex ui-flex-wrap ui-justify-center">
          {innerMenus?.map((menu) => (
            <Chip
              onClick={() => onClickChip(menu.path)}
              selected={
                pathname === menu.path ||
                (detailMenus &&
                  detailMenus.some(
                    (detailMenu) => detailMenu.path === menu.path
                  ))
              }
              text={menu.label}
              size="sm"
              color="red"
              key={menu.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
