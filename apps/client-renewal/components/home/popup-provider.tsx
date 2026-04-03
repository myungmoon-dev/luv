"use client";

import { useQuery } from "@tanstack/react-query";
import { type ReactNode, useEffect, useRef } from "react";

import { getPopups } from "@/lib/api-popup";

export function PopupProvider({ children }: { children: ReactNode }) {
  const openedRef = useRef(false);
  const { data: popups } = useQuery({
    queryKey: ["popups", { onlyShow: true }],
    queryFn: getPopups,
  });

  useEffect(() => {
    if (!popups?.length || openedRef.current) return;
    openedRef.current = true;

    popups.forEach((popup) => {
      if (!popup.show || !popup.imageUrl) return;
      window.open(
        `/popup?src=${encodeURIComponent(popup.imageUrl)}`,
        "_blank",
        "width=800,height=600",
      );
    });
  }, [popups]);

  return <>{children}</>;
}
