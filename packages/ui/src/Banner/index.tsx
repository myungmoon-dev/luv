import { ReactNode } from "react";
import { Chip, Icon } from "..";

interface BannerProps {
  iconList: ReactNode;
  image?: ReactNode;
  video?: string;
  title?: string;
  description?: string;
  innerMenus?: { label: string; path: string }[];
  detailMenus?: { label: string; path: string }[];
  pathname: string;
  push: (url: string) => void;
  onClickChip: (path: string) => void;
}

export const Banner = ({
  iconList,
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
    <div className="ui-w-full ui-relative ui-flex ui-justify-center ui-flex-col ui-items-center">
      {video ? (
        <video
          src={video}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline
          className="ui-w-full ui-h-[550px] sm:ui-h-[750px] ui-object-cover"
        />
      ) : (
        <>
          <div className="w-full ui-absolute ui-brightness-75 ui-h-[80%] md:ui-h-[88%]">
            {image}
          </div>
          <div className="ui-z-[1] ui-h-[450px] ui-w-3/4 gap-3 ui-flex ui-justify-end ui-items-center ui-flex-col">
            <div className="ui-flex ui-justify-center">
              <h1 className="ui-text-blue-500 ui-font-SCoreDream ui-italic ui-text-xl">
                MYUNGMOON CHURCH.
              </h1>
            </div>
            <div className="ui-justify-center ui-flex ui-pb-10 ui-mb-20">
              <p className="ui-font-bold ui-text-5xl ui-font-SCoreDream ui-text-white ">
                {title}
              </p>
            </div>
          </div>
          <div className="ui-z-[1] ui-gap-4 ui-flex ui-flex-wrap ui-justify-center ui-items-center ui-border-b-2 ui-border-gray-200 ui-pb-4">
            {innerMenus &&
              innerMenus.map((innerMenu) => (
                <Chip
                  onClick={() => onClickChip(innerMenu.path)}
                  selected={
                    pathname === innerMenu.path ||
                    (detailMenus &&
                      detailMenus.some(
                        (detailMenu) => detailMenu.path === innerMenu.path
                      ))
                  }
                  text={innerMenu.label}
                  size="sm"
                  color="blue"
                  key={innerMenu.label}
                />
              ))}
          </div>
        </>
      )}

      {iconList}
    </div>
  );
};
