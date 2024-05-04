import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/twMerge";

export const DoubleQuoteVariants = cva(
  `relative flex items-center justify-center`,
  {
    variants: {
      size: {
        sm: "ui-h-4 ui-w-4 sm:ui-h-12 sm:ui-w-12",
        md: "ui-h-6 ui-w-6 sm:ui-h-16 sm:ui-w-16",
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
  className?: string;
  direction: "up" | "down";
}

export const DoubleQuote = ({
  size,
  className,
  direction,
}: IDoubleQuoteProps) => {
  return (
    <div className={cn(DoubleQuoteVariants({ size }), className)}>
      <img
        src={
          direction === "up"
            ? "/images/common/blue-up-quote.png"
            : "/images/common/blue-down-quote.png"
        }
        alt="쌍따옴표"
        className="ui-object-cover"
      />
    </div>
  );
};
