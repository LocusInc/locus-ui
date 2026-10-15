import { GetPropDefTypes, PropDef } from "../../../props/prop-def";
import { DropdownContentMode, DropdownVariant } from "../dropdown-context";

const DropdownContentModes = ["menu", "custom"] as const;
const DropdownContentSides = ["top", "right", "bottom", "left"] as const;
const DropdownContentAlignments = ["start", "center", "end"] as const;

const DropdownContentPropsDefs = {
  /**
   * Sets whether the dropdown content should use menu keyboard behavior.
   */
  mode: {
    type: "enum",
    values: DropdownContentModes,
    default: "menu",
  } satisfies PropDef<DropdownContentMode>,

  /**
   * Overrides the variant inherited from Dropdown.Root.
   */
  variant: {
    type: "enum",
    values: ["solid", "outlined", "muted"] as const,
  } satisfies PropDef<DropdownVariant>,

  /**
   * Sets the preferred side of the trigger to render against.
   */
  side: {
    type: "enum",
    values: DropdownContentSides,
  } satisfies PropDef<(typeof DropdownContentSides)[number]>,

  /**
   * Sets content alignment against the trigger.
   */
  align: {
    type: "enum",
    values: DropdownContentAlignments,
    default: "start",
  } satisfies PropDef<(typeof DropdownContentAlignments)[number]>,

  /**
   * Sets the distance from the trigger on the selected side.
   */
  sideOffset: {
    type: "string",
    default: "4",
  } satisfies PropDef<string>,

  /**
   * Sets the alignment offset along the selected side.
   */
  alignOffset: {
    type: "string",
    default: "0",
  } satisfies PropDef<string>,
} as const;

type DropdownContentInternalProps = GetPropDefTypes<
  typeof DropdownContentPropsDefs
>;

export {
  DropdownContentAlignments,
  DropdownContentInternalProps,
  DropdownContentModes,
  DropdownContentPropsDefs,
  DropdownContentSides,
};
