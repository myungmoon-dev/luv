import { cn } from "ui";

interface IDiscipleshipTabBarContentCardProps {
  title: string;
  text: string;
  className?: string;
}

const DiscipleshipTabBarContentCard = ({ title, text, className }: IDiscipleshipTabBarContentCardProps) => {
  return (
    <div className={cn("my-2 flex gap-3 md:my-3", className)}>
      <div className="w-fit rounded-lg bg-white p-3 font-SCoreDream text-gray-800 shadow-md md:text-lg 2xl:p-5 2xl:text-2xl">
        {title}
      </div>
      <p className="lg:text-lg">{text}</p>
    </div>
  );
};

export default DiscipleshipTabBarContentCard;
