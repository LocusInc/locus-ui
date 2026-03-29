import React from "react";
import { LabelPosition } from "./label/switch-label.props";

export interface SwitchContextValue {
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
  variant?: string;
  name?: string;
  hovered?: boolean;
  setHovered?: (hovered: boolean) => void;
  focused?: boolean;
  setFocused?: (focused: boolean) => void;
}

export const SwitchContext = React.createContext<SwitchContextValue | null>(
  null,
);

export function useSwitchContext() {
  const context = React.useContext(SwitchContext);
  if (!context) {
    throw new Error("Switch components must be used within a Switch.Root");
  }
  return context;
}
