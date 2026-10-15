"use client";

import * as React from "react";

/**
 * Controls whether dropdown content behaves like a keyboard-navigable menu or
 * arbitrary custom overlay content.
 */
export type DropdownContentMode = "menu" | "custom";

/**
 * Visual variants shared by dropdown roots and content.
 */
export type DropdownVariant = "solid" | "outlined" | "muted";

/**
 * Registration data used by menu content to manage item focus and keyboard
 * navigation.
 */
export interface DropdownItemRegistration {
  id: string;
  ref: React.RefObject<HTMLElement | null>;
  disabled?: boolean;
}

/**
 * Internal dropdown state shared between Root, Trigger, Content, Item, and
 * Separator.
 */
export interface DropdownContextValue {
  treeId: string;
  variant?: DropdownVariant;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  close: () => void;
  closeTree: () => void;
  parentDropdown?: DropdownContextValue | null;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  highlightedId: string | null;
  setHighlightedId: React.Dispatch<React.SetStateAction<string | null>>;
  itemsRef: React.RefObject<DropdownItemRegistration[]>;
  registerItem: (item: DropdownItemRegistration) => () => void;
}

export const DropdownContext =
  React.createContext<DropdownContextValue | null>(null);

/**
 * Returns the nearest dropdown context, throwing when a dropdown part is used
 * outside of Dropdown.Root.
 */
export function useDropdownContext() {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used within a Dropdown.Root");
  }
  return context;
}

/**
 * Returns the nearest dropdown context when one exists. Used to connect nested
 * dropdowns to their parent dropdown tree.
 */
export function useOptionalDropdownContext() {
  return React.useContext(DropdownContext);
}
