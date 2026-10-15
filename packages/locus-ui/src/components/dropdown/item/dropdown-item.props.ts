import * as React from "react";
import {
  FunctionPropDef,
  GetPropDefTypes,
  PropDef,
  ReactNodePropDef,
} from "../../../props/prop-def";

const DropdownItemPropsDefs = {
  /**
   * Disables the dropdown item.
   */
  disabled: {
    type: "boolean",
    default: false,
  } satisfies PropDef<boolean>,

  /**
   * Applies destructive item styling.
   */
  destructive: {
    type: "boolean",
    default: false,
  } satisfies PropDef<boolean>,

  /**
   * Closes the dropdown tree when the item is selected.
   */
  closeOnSelect: {
    type: "boolean",
    default: true,
  } satisfies PropDef<boolean>,

  /**
   * Renders an icon before the item content.
   */
  leadingIcon: {
    type: "reactNode",
  } satisfies ReactNodePropDef<React.ReactNode>,

  /**
   * Renders an icon after the item content.
   */
  trailingIcon: {
    type: "reactNode",
  } satisfies ReactNodePropDef<React.ReactNode>,

  /**
   * Callback fired when the item is selected.
   */
  onSelect: {
    type: "function",
  } satisfies FunctionPropDef<
    (event: React.MouseEvent<HTMLElement>) => void
  > as FunctionPropDef<(event: React.MouseEvent<HTMLElement>) => void>,
} as const;

type DropdownItemInternalProps = GetPropDefTypes<typeof DropdownItemPropsDefs>;

export { DropdownItemInternalProps, DropdownItemPropsDefs };
