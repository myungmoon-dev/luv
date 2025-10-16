import Link from "next/link";

interface IAboutBackProps {
  title: string;
}

const AboutBack = ({ title }: IAboutBackProps) => {
  return (
    <div className="flex items-center justify-between border-b border-[#E6E6E6] shadow-sm">
      <Link href="/about" className="flex size-[35px] items-center justify-center sm:size-[57px]">
        {"<"}
      </Link>
      <p className="sm:text-x font-bold text-[#5B5B5B]">{title}</p>
      <p className="invisible size-[35px] sm:size-[57px]">{">"}</p>
    </div>
  );
};

export default AboutBack;
