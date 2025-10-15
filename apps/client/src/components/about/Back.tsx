import Link from "next/link";

interface IAboutBackProps {
  title: string;
}

const AboutBack = ({ title }: IAboutBackProps) => {
  return (
    <div className="flex items-center justify-between px-1 py-3 shadow-sm">
      <Link href="/about" className="flex size-[35px] items-center justify-center">
        {"<"}
      </Link>
      <p className="font-bold text-[#5B5B5B]">{title}</p>
      <p className="invisible size-[35px]">{">"}</p>
    </div>
  );
};

export default AboutBack;
