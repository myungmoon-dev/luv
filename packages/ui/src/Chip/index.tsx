import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils/tw-merge";

export const ChipVariants = cva(
  `
  flex-shrink-0 text-center text-gray-50 font-semibold rounded-[2.2rem]
  `,
  {
    variants: {
      variant: {
        default: "bg-[#dfc7c7] ",
        hoverRed: "bg-[#892122]",
        red: "bg-white text-[#892122]",
      },
      // FIXME: sm,md,lg,xlg 임시 값
      size: {
        default: "p-[0.6rem] px-7 text-2xl",
        sm: "p-[0.6rem] px-8 text-xl",
        md: "p-[0.7rem] px-9 text-3xl",
        lg: "p-[0.8rem] px-10 text-4xl",
        xlg: "p-[0.9rem] px-11 text-5xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ChipProps extends VariantProps<typeof ChipVariants> {
  text: string;
  hasLine?: boolean;
}
export const Chip = ({ variant, size, text, hasLine }: ChipProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      {hasLine && <div className="h-[2px] flex-1 rounded-lg bg-[#dfc7c7]" />}
      <h1 className={cn(ChipVariants({ variant, size }))}>{text}</h1>
      {hasLine && <div className="h-[2px] flex-1 rounded-lg bg-[#dfc7c7]" />}
    </div>
  );
};
