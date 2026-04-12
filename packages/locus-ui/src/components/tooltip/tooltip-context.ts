"use client";

import { createContext, useContext } from "react";

export interface TooltipContextValue {
  variant?: string;
  side: "top" | "right" | "bottom" | "left";
  open: boolean;
  onOpenChange: (open: boolean) => void;
  delay: number;
  openOnHover: boolean;
  openOnClick: boolean;
  triggerRef: React.RefObject<HTMLElement | null>;
}

export const TooltipContext = createContext<TooltipContextValue | null>(null);

export function useTooltipContext() {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("Tooltip components must be used within a Tooltip.Root");
  }
  return context;
}
