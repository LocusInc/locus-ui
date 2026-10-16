"use client";

import { createContext, useContext } from "react";
import type { InputRootInternalProps } from "./root/input-root.props";

const InputContext = createContext<{
  inputId: string;
  disabled?: boolean;
  variant: NonNullable<InputRootInternalProps["variant"]>;
} | null>(null);

function useInputContext() {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("Input.Label must be used within an Input.Root");
  }
  return context;
}

export { InputContext, useInputContext };
