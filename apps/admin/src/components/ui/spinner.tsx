import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-2 text-muted-foreground", className)}>
      <Loader2 className="size-6 animate-spin" />
      <span className="text-sm">데이터를 불러오는 중입니다.</span>
    </div>
  );
};
