import { PropsWithChildren } from "react";

interface CoreValueItemProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
}

const CoreValueItem = ({ title, subtitle, children }: CoreValueItemProps) => {
  return (
    <details>
      <summary className="flex h-[66px] items-center justify-between border-b border-b-[#BBBBBB]">
        <div className="flex flex-col font-medium sm:px-5">
          <p className="text-lg">{title}</p>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <p>화살표 아이콘</p>
      </summary>
      <div className="border-b border-b-[#BBBBBB] bg-[#F7F7F7] p-5 text-[#6E6E6E]">{children}</div>
    </details>
  );
};

export default CoreValueItem;
