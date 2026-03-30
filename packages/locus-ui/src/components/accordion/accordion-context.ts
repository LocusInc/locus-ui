"use client";

import React from "react";

export interface AccordionContextValue {
  value: string | string[] | null;
  setValue: (value: string | string[] | null) => void;
  onValueChange?: (value: string | string[] | null) => void;
  variant?: string;
  multiple?: boolean;
  itemsRef: React.RefObject<Map<string, HTMLDivElement>>;
  itemValues: React.RefObject<string[]>;
}

export const AccordionContext =
  React.createContext<AccordionContextValue | null>(null);

export function useAccordionContext() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components must be used within an Accordion.Root",
    );
  }
  return context;
}
