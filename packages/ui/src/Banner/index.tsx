import { Chip, Header } from "..";

interface BannerProps {
  image?: string;
  video?: string;
  title?: string;
  description?: string;
  innerMenus?: { label: string; path: string }[];
  pathname?: string;
  push: (url: string) => void;
  onClickChip: (path: string) => void;
}

export const Banner = ({ description, image, title, innerMenus, video, pathname, onClickChip, push }: BannerProps) => {
  return (
    <div className="ui-relative ui-h-[750px]">
      <Header push={push} />
      <div className="absolute ui-top-0">
        {image ? (
          <>
            <img src={image} className="ui-h-[750px] ui-w-full ui-object-cover" />
            <div className="ui-w-full ui-h-[200px] ui-bottom-0 ui-absolute ui-bg-gradient-to-b ui-from-transparent ui-to-white" />
          </>
        ) : (
          <video
            src={video}
            autoPlay={true}
            muted={true}
            loop={true}
            className="ui-w-full ui-h-[750px] ui-object-cover"
          />
        )}
        <div className="ui-absolute ui-flex ui-flex-col ui-gap-5 ui-items-center ui-px-24 ui-w-full ui-bottom-[100px] ui-left-1/2 -ui-translate-x-1/2 ui-text-white">
          <div className="ui-flex ui-flex-col ui-gap-2 ui-items-center">
            <h1 className="ui-text-2xl ui-font-bold">{title}</h1>
            <p className="ui-font-thin">{description}</p>
          </div>
          {title && <hr className="ui-w-full" />}
          {/* FIXME: Chip 컴포넌트 만들어지면 적용 */}
          <div className="flex gap-4">
            {innerMenus?.map((menu) => (
              <Chip
                onClick={() => onClickChip(menu.path)}
                selected={pathname === menu.path}
                text={menu.label}
                size="sm"
                key={menu.label}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
