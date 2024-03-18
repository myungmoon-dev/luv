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
        red: "",
        pink: "",
      },
      selected: {
        true: "",
        false: "",
      },
      size: {
        xs: "ui-p-[0.4rem] ui-px-5 ui-text-md",
        sm: "ui-p-[0.5rem] ui-px-5 ui-text-lg",
        md: "ui-p-[0.6rem] ui-px-7 ui-text-2xl",
        lg: "ui-p-[0.8rem] ui-px-10 ui-text-4xl",
        xl: "ui-p-[0.9rem] ui-px-11 ui-text-5xl",
      },
    },
    defaultVariants: {
      color: "pink",
      size: "md",
      selected: false,
    },
    compoundVariants: [
      {
        color: "red",
        selected: true,
        className: "ui-bg-[#892122] ui-text-white",
      },
      {
        color: "red",
        selected: false,
        className: "ui-bg-white ui-text-[#892122]",
      },
      {
        color: "pink",
        selected: true,
        className: "ui-bg-[#dfc7c7] ui-text-white",
      },
      {
        color: "pink",
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
