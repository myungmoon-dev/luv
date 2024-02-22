import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/twMerge";

export const ChipVariants = cva(
  `
  ui-flex-shrink-0 ui-text-center ui-font-semibold ui-rounded-[2.2rem]
  `,
  {
    variants: {
      color: {
        default: "ui-bg-[#dfc7c7] ui-text-white",
        red: "ui-bg-white ui-text-[#892122]",
      },
      selected: {
        select: "",
        unselect: "",
      },
      // FIXME: sm,lg,xl 임시 값
      size: {
        sm: "ui-p-[0.6rem] ui-px-7 ui-text-lg",
        md: "ui-p-[0.6rem] ui-px-7 ui-text-2xl",
        lg: "ui-p-[0.8rem] ui-px-10 ui-text-4xl",
        xl: "ui-p-[0.9rem] ui-px-11 ui-text-5xl",
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
        className: "ui-bg-[#892122] ui-text-white",
      },
    ],
  }
);

interface ChipProps extends VariantProps<typeof ChipVariants> {
  text: string;
}
export const Chip = ({ color, size, text, selected }: ChipProps) => {
  return <div className={cn(ChipVariants({ color, size, selected }))}>{text}</div>;
};
