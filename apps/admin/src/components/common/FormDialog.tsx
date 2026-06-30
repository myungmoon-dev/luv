import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  footer: ReactNode;
  children: ReactNode;
}

const FormDialog = ({ open, onClose, title, footer, children }: Props) => {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="flex h-[90dvh] max-h-[90dvh] flex-col gap-0 p-0 sm:max-w-lg">
        <DialogHeader className="shrink-0 border-b px-6 py-4">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="min-h-0 flex-1">
          <div className="flex flex-col gap-5 px-6 py-5">{children}</div>
        </ScrollArea>

        <div className="bg-background shrink-0 border-t px-6 py-4">{footer}</div>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
