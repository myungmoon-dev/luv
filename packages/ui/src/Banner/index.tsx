import { Header } from "..";

interface BannerProps {
  image: string;
  title: string;
  description: string;
  innerMenus?: { label: string; path: string }[];
}

export const Banner = ({ description, image, title, innerMenus }: BannerProps) => {
  return (
    <div className="relative h-[750px]">
      <img src={image} className="h-[750px] w-full object-cover" />
      <div className="w-full h-[200px] bottom-0 absolute bg-gradient-to-b from-transparent to-white" />
      <div className="absolute flex flex-col gap-5 items-center px-24 w-full bottom-[100px] left-1/2 -translate-x-1/2 text-white">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="font-thin">{description}</p>
        </div>
        <hr className="w-full" />
        {/* FIXME: Chip 컴포넌트 만들어지면 적용 */}
        {innerMenus?.map((menu) => <div key={menu.label}>{menu.label}</div>)}
      </div>
      <Header />
    </div>
  );
};
