import Link from "next/link";
import { IIconPropsType, Icon, cn } from "ui";

interface IBannerIconProps {
  text: string;
  url?: string;
  className?: string;
  iconType: IIconPropsType;
}

const BannerIcon = ({ url, text, iconType, className }: IBannerIconProps) => {
  return (
    <Link href={url ?? ""}>
      <div className={cn("flex cursor-pointer items-center justify-center", className)}>
        <Icon
          name={iconType.name}
          size={iconType.size}
          backgroundColor={iconType.backgroundColor}
          strokeColor={iconType.strokeColor}
        />
        <p className="text-sm font-bold sm:text-lg">{text}</p>
      </div>
    </Link>
  );
};

export default BannerIcon;
