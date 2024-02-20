import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/twMerge";

export const ChipVariants = cva(
  `
  flex-shrink-0 text-center font-semibold rounded-[2.2rem]
  `,
  {
    variants: {
      color: {
        default: "bg-[#dfc7c7] text-white",
        red: "bg-white text-[#892122]",
      },
      selected: {
        select: "",
        unselect: "",
      },
      // FIXME: sm,lg,xl 임시 값
      size: {
        sm: "p-[0.6rem] px-7 text-lg",
        md: "p-[0.6rem] px-7 text-2xl",
        lg: "p-[0.8rem] px-10 text-4xl",
        xl: "p-[0.9rem] px-11 text-5xl",
      },
    },
    defaultVariants: {
      color: "default",
      size: "md",
      selected: "unselect",
    },
    compoundVariants: [
      {
        color: "red",
        selected: "select",
        className: "bg-[#892122] text-white",
      },
    ],
  }
);

interface ChipProps extends VariantProps<typeof ChipVariants> {
  text: string;
}
export const Chip = ({ color, size, text, selected }: ChipProps) => {
  return (
    <div className={cn(ChipVariants({ color, size, selected }))}>{text}</div>
  );
};
