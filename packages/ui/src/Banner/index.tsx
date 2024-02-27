import { Header } from "..";

interface BannerProps {
  image: string;
  title?: string;
  description?: string;
  innerMenus?: { label: string; path: string }[];
}

export const Banner = ({ description, image, title, innerMenus }: BannerProps) => {
  return (
    <div className="ui-relative ui-h-[750px]">
      <img src={image} className="ui-h-[750px] ui-w-full ui-object-cover" />
      <div className="ui-w-full ui-h-[200px] ui-bottom-0 ui-absolute ui-bg-gradient-to-b ui-from-transparent ui-to-white" />
      <div className="ui-absolute ui-flex ui-flex-col ui-gap-5 ui-items-center ui-px-24 ui-w-full ui-bottom-[100px] ui-left-1/2 -ui-translate-x-1/2 ui-text-white">
        <div className="ui-flex ui-flex-col ui-gap-2 ui-items-center">
          <h1 className="ui-text-2xl ui-font-bold">{title}</h1>
          <p className="ui-font-thin">{description}</p>
        </div>
        {title && <hr className="ui-w-full" />}
        {/* FIXME: Chip 컴포넌트 만들어지면 적용 */}
        {innerMenus?.map((menu) => <div key={menu.label}>{menu.label}</div>)}
      </div>
      <Header />
    </div>
  );
};
