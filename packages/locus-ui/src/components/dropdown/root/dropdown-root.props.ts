import {
  FunctionPropDef,
  GetPropDefTypes,
  PropDef,
} from "../../../props/prop-def";
import { DropdownVariant } from "../dropdown-context";

const DropdownVariants = ["solid", "outlined", "muted"] as const;

const DropdownRootPropsDefs = {
  /**
   * Sets the variant style inherited by dropdown content, items, and separators.
   */
  variant: {
    type: "enum",
    values: DropdownVariants,
  } satisfies PropDef<DropdownVariant>,

  /**
   * Controls the open state of the dropdown.
   *
   * When using an uncontrolled dropdown, use `defaultOpen` instead.
   */
  open: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Sets the initial open state of an uncontrolled dropdown.
   */
  defaultOpen: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Callback fired when the dropdown open state changes.
   */
  onOpenChange: {
    type: "function",
  } satisfies FunctionPropDef<(open: boolean) => void> as FunctionPropDef<
    (open: boolean) => void
  >,
} as const;

type DropdownRootInternalProps = GetPropDefTypes<
  typeof DropdownRootPropsDefs
>;

export {
  DropdownRootInternalProps,
  DropdownRootPropsDefs,
  DropdownVariants,
};
