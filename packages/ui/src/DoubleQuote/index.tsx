import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/twMerge";
import { HTMLAttributes } from "react";

export const DoubleQuoteVariants = cva(`ui-font-bold`, {
  variants: {
    color: {
      pink: "",
    },
    size: {
      sm: "ui-text-2xl sm:ui-text-4xl md:ui-text-6xl",
      md: "ui-text-4xl sm:ui-text-6xl md:ui-text-8xl",
      lg: "ui-text-5xl sm:ui-text-7xl md:ui-text-9xl",
      xl: "ui-text-6xl sm:ui-text-7xl md:ui-text-9xl",
    },
  },
  defaultVariants: {
    color: "pink",
    size: "md",
  },
  compoundVariants: [
    {
      color: "pink",
      size: "md",
      className: "ui-text-[#c8b3b3]",
    },
  ],
});

interface IDoubleQuoteProps
  extends VariantProps<typeof DoubleQuoteVariants>,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {}
const DoubleQuote = ({
  color,
  size,
  className,
  ...props
}: IDoubleQuoteProps) => {
  return (
    <div className={cn(DoubleQuoteVariants({ color, size }), className)}>"</div>
  );
};

export default DoubleQuote;
