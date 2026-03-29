"use client";

import * as React from "react";
import { LabelPosition } from "./label/select-label.props";
import { SelectTriggerVariant } from "./trigger/select-trigger.props";

export interface SelectContextValue {
  open: boolean;
  value: string;
  displayValue: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  onValueChange: (value: string) => void;
  setDisplayValue: (displayValue: React.ReactNode) => void;
  rootRef: React.RefObject<HTMLDivElement | HTMLButtonElement | null>;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  labelPosition?: LabelPosition;
  setLabelPosition?: (position: LabelPosition) => void;
  triggerVariant?: SelectTriggerVariant;
  setTriggerVariant?: (variant: SelectTriggerVariant) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  placeholder?: string;
  labelId: string;
  highlightedIndex: number;
  setHighlightedIndex: React.Dispatch<React.SetStateAction<number>>;
  itemsRef: React.RefObject<Map<string, HTMLDivElement>>;
  itemValues: React.RefObject<string[]>;
}

export const SelectContext = React.createContext<SelectContextValue | null>(
  null,
);

export function useSelectContext() {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("Select components must be used within a Select.Root");
  }
  return context;
}
