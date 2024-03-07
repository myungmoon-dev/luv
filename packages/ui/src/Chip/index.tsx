import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/twMerge";
import { HTMLAttributes } from "react";

export const ChipVariants = cva(
  `
  ui-flex-shrink-0 ui-text-center ui-font-semibold ui-rounded-[2.2rem] ui-cursor-pointer
  `,
  {
    variants: {
      color: {
        default: "",
        red: "",
      },
      selected: {
        true: "",
        false: "",
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
      selected: false,
    },
    compoundVariants: [
      {
        color: "default",
        selected: true,
        className: "ui-bg-[#dfc7c7] ui-text-white",
      },
      {
        color: "default",
        selected: false,
        className: "ui-bg-white ui-text-[#892122]",
      },
    ],
  }
);

interface ChipProps
  extends VariantProps<typeof ChipVariants>,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  text: string;
}
export const Chip = ({
  color,
  size,
  text,
  selected,
  className,
  ...props
}: ChipProps) => {
  return (
    <div
      className={cn(ChipVariants({ color, size, selected }), className)}
      {...props}
    >
      {text}
    </div>
  );
};
