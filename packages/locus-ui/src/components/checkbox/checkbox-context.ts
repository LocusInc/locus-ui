"use client";

import React from "react";
import { LabelPosition } from "./label/checkbox-label.props";

export interface CheckboxContextValue {
  value: boolean;
  setValue: (value: boolean) => void;
  onCheckedChange?: (value: boolean) => void;
  color?: string;
  labelId: string;
  labelPosition?: LabelPosition;
  setLabelPosition?: (position: LabelPosition) => void;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  indeterminate?: boolean;
  variant?: string;
  highContrast?: boolean;
  name?: string;
  hovered?: boolean;
  setHovered?: (hovered: boolean) => void;
}

export const CheckboxContext = React.createContext<CheckboxContextValue | null>(
  null,
);

export function useCheckboxContext() {
  const context = React.useContext(CheckboxContext);
  if (!context) {
    throw new Error("Checkbox components must be used within a Checkbox.Root");
  }
  return context;
}
