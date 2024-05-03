import { ReactNode } from "react";
import { Chip, Icon, cn } from "..";

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
  customTitle?: ReactNode;
  imageClassName?: string;
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
  customTitle,
  push,
  imageClassName,
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
        <div className="ui-relative ui-w-full ui-flex ui-flex-col ui-justify-center ui-items-center ui-gap-10">
          <div className={cn("ui-w-full ui-brightness-90 ui-h-[400px]", imageClassName)}>{image}</div>
          {customTitle ? (
            <div className="ui-absolute ">{customTitle}</div>
          ) : (
            <div className="ui-absolute ui-h-3/5 ui-w-3/4 gap-3 ui-flex ui-justify-end ui-items-center ui-flex-col">
              <div className="ui-flex ui-justify-center">
                <h1 className="ui-text-blue-600 ui-font-SCoreDream ui-italic ui-text-xl">MYUNGMOON CHURCH.</h1>
              </div>
              <div className="ui-justify-center ui-flex ui-pb-10 ui-mb-20">
                <p className="ui-font-bold ui-text-5xl ui-font-SCoreDream ui-text-white">{title}</p>
              </div>
            </div>
          )}
          {innerMenus && (
            <div className="ui-gap-4 ui-flex ui-flex-wrap ui-justify-center ui-items-center ui-border-b-2 ui-border-gray-200 ui-pb-4">
              {innerMenus.map((innerMenu) => (
                <Chip
                  onClick={() => onClickChip(innerMenu.path)}
                  selected={
                    pathname === innerMenu.path ||
                    (detailMenus && detailMenus.some((detailMenu) => detailMenu.path === innerMenu.path))
                  }
                  text={innerMenu.label}
                  size="sm"
                  color="blue"
                  key={innerMenu.label}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {iconList}
    </div>
  );
};
