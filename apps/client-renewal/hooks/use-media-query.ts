"use client";

import { useEffect, useState } from "react";

/** `apps/client`의 md 브레이크포인트(820px)와 동일 */
export function useMinWidthMd() {
  const query = "(min-width: 820px)";
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
