import { DiscipleshipNavStrip } from "@/components/discipleship/discipleship-section-nav";
import { cn } from "@/lib/utils";

type DiscipleshipSubPageProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
  contentMaxWidth?: "max-w-3xl" | "max-w-5xl";
  className?: string;
};

export function DiscipleshipSubPage({
  title,
  description,
  children,
  contentMaxWidth = "max-w-3xl",
  className,
}: DiscipleshipSubPageProps) {
  return (
    <>
      <DiscipleshipNavStrip />
      <div
        className={cn(
          "mx-auto px-4 pb-16 sm:px-6 lg:px-8",
          contentMaxWidth,
          className,
        )}
      >
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-[#1e2a4a] sm:text-3xl">{title}</h1>
          <p className="mt-2 text-sm text-[#496674]">{description}</p>
        </header>
        {children}
      </div>
    </>
  );
}
