import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const labelPositions = ["top", "left", "inside"] as const;
type LabelPosition = (typeof labelPositions)[number];

const SelectLabelPropDefs = {
  position: {
    type: "enum",
    values: labelPositions,
    default: "top",
    dataAttr: "position",
  } satisfies PropDef<LabelPosition>,
} as const;

type SelectLabelInternalProps = GetPropDefTypes<typeof SelectLabelPropDefs>;

export {
  LabelPosition,
  labelPositions,
  SelectLabelInternalProps,
  SelectLabelPropDefs,
};
