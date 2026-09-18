"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

function hostnameOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function LinkPreview({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const canHoverRef = useRef(false);
  const hoveringRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- portal target (document.body) only exists client-side, must run after mount
    setMounted(true);
    canHoverRef.current = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    // Attached once, always on: a synchronous ref guard (not the pos state)
    // decides whether to act, so a leave event in the same native dispatch
    // cycle can't be raced by this handler re-setting a stale position.
    const handleMove = (e: MouseEvent) => {
      if (hoveringRef.current) setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <span
      className="inline-flex"
      onMouseEnter={(e) => {
        if (!canHoverRef.current) return;
        hoveringRef.current = true;
        setPos({ x: e.clientX, y: e.clientY });
      }}
      onMouseLeave={() => {
        hoveringRef.current = false;
        setPos(null);
      }}
    >
      {children}
      {mounted &&
        pos &&
        createPortal(
          <span
            className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-full rounded-md border border-border bg-surface px-2 py-1 text-xs text-muted shadow-lg"
            style={{ left: pos.x, top: pos.y - 10 }}
          >
            Opens {hostnameOf(href)} ↗
          </span>,
          document.body
        )}
    </span>
  );
}
