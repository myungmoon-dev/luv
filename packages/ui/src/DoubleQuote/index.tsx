import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/twMerge";
import { ReactNode } from "react";

export const DoubleQuoteVariants = cva(
  `relative flex items-center justify-center`,
  {
    variants: {
      size: {
        sm: "ui-h-6 ui-w-6 sm:ui-h-12 sm:ui-w-12",
        md: "ui-h-10 ui-w-10 sm:ui-h-16 sm:ui-w-16",
        lg: "ui-h-16 ui-w-16 sm:ui-h-24 sm:ui-w-24",
        xl: "ui-h-18 ui-w-18 sm:ui-h-24 sm:ui-w-24",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface IDoubleQuoteProps extends VariantProps<typeof DoubleQuoteVariants> {
  image: ReactNode;
  className?: string;
}

export const DoubleQuote = ({ size, className, image }: IDoubleQuoteProps) => {
  return (
    <div className={cn(DoubleQuoteVariants({ size }), className)}>{image}</div>
  );
};
