import { PropsWithChildren } from "react";

const PromiseCard = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-[#001f54]/15 px-4 pb-5 pt-7 sm:px-5 sm:py-8">{children}</div>
  );
};

export default PromiseCard;
