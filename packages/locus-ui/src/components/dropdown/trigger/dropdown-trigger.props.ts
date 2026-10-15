import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const DropdownTriggerPropsDefs = {
  /**
   * Uses the child element as the trigger instead of rendering a button.
   */
  asChild: {
    type: "boolean",
    default: false,
  } satisfies PropDef<boolean>,
} as const;

type DropdownTriggerInternalProps = GetPropDefTypes<
  typeof DropdownTriggerPropsDefs
>;

export { DropdownTriggerInternalProps, DropdownTriggerPropsDefs };
