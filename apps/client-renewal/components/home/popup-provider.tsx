"use client";

import { useQuery } from "@tanstack/react-query";
import { type ReactNode, useEffect } from "react";

import { getPopups } from "@/lib/api-popup";

export function PopupProvider({ children }: { children: ReactNode }) {
  const { data } = useQuery({
    queryKey: ["popups"],
    queryFn: getPopups,
  });

  useEffect(() => {
    if (!data?.popups?.length) return;

    data.popups.forEach((popup) => {
      window.open(`/popup?src=${encodeURIComponent(popup.imageUrl)}`, "_blank", "width=800,height=600");
    });
  }, [data]);

  return <>{children}</>;
}
