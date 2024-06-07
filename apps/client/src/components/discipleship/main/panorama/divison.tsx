import { cn } from "ui";

interface IPanoramaDivisionComponentProps {
  text: string;
  type: "oldPanorama" | "newPanorama" | "date" | "place";
  className?: string;
}

const PanoramaDivisionComponent = ({ text, type, className }: IPanoramaDivisionComponentProps) => {
  const title = () => {
    switch (type) {
      case "oldPanorama":
        return "구약의 파노라마 | ";
      case "newPanorama":
        return "신약의 파노라마 | ";
      case "date":
        return "4주 과정 | ";
      case "place":
        return "독산동 비전 채플 | ";
      default:
        return "";
    }
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <p className="text-lg font-bold md:text-xl lg:text-2xl">{title()}</p>
      <p className="md:text-lg lg:text-xl">{text}</p>
    </div>
  );
};

export default PanoramaDivisionComponent;
