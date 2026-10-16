import { GetPropDefTypes, PropDef } from "../../../props";

const labelPositions = ["top", "left", "right", "bottom", "inside"] as const;
type InputLabelPosition = (typeof labelPositions)[number];

const InputLabelPropDefs = {
  position: {
    type: "enum",
    values: labelPositions,
    default: "top",
    dataAttr: "position",
  } satisfies PropDef<InputLabelPosition>,
} as const;

type InputLabelInternalProps = GetPropDefTypes<typeof InputLabelPropDefs>;

export { InputLabelPropDefs };
export type { InputLabelInternalProps, InputLabelPosition };
