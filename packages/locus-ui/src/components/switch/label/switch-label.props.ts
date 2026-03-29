import { GetPropDefTypes, PropDef } from "../../../props";

const labelPositions = ["top", "left", "right", "bottom"] as const;
type LabelPosition = (typeof labelPositions)[number];

const SwitchLabelPropDefs = {
  /**
   * Sets the position of the label relative to the switch.
   *
   * @example position="left" // positions the label to the left of the switch
   * @example position="top" // positions the label above the switch
   */
  position: {
    type: "enum",
    values: labelPositions,
    dataAttr: "position",
  } satisfies PropDef<LabelPosition>,
} as const;

type SwitchLabelInternalProps = GetPropDefTypes<typeof SwitchLabelPropDefs>;

export {
  LabelPosition,
  labelPositions,
  SwitchLabelInternalProps,
  SwitchLabelPropDefs,
};
