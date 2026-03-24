import React from "react";

export interface ProgressBarContextValue {
  color?: string;
  variant?: string;
  totalValue?: number;
}

export const ProgressBarContext =
  React.createContext<ProgressBarContextValue | null>(null);

export function useProgressBarContext() {
  const context = React.useContext(ProgressBarContext);
  if (!context) {
    throw new Error(
      "ProgressBar components must be used within a ProgressBar.Root",
    );
  }
  return context;
}
