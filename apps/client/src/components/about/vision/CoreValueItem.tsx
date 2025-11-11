import { PropsWithChildren } from "react";

interface CoreValueItemProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
}

const CoreValueItem = ({ title, subtitle, children }: CoreValueItemProps) => {
  return (
    <details>
      <summary className="flex h-[66px] items-center justify-between border-b border-b-[#BBBBBB] lg:h-[114px]">
        <div className="flex flex-col font-medium sm:px-5 lg:px-12">
          <p className="text-lg md:text-xl lg:text-2xl">{title}</p>
          {subtitle ? <p className="md:text-lg lg:text-xl">{subtitle}</p> : null}
        </div>
        <p>화살표 아이콘</p>
      </summary>
      <div className="border-b border-b-[#BBBBBB] bg-[#F7F7F7] p-5 text-[#6E6E6E] md:px-2.5 md:py-6 md:text-lg lg:text-xl lg:px-12">{children}</div>
    </details>
  );
};

export default CoreValueItem;
