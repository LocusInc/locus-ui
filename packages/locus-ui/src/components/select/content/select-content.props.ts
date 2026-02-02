import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const variants = ["popper", "inline"] as const;
const positions = ["top", "bottom"] as const;
const alignments = ["start", "center", "end"] as const;

const SelectContentPropDefs = {
  position: {
    type: "enum",
    values: variants,
    default: "popper",
    dataAttr: "position",
  } satisfies PropDef<(typeof variants)[number]>,

  side: {
    type: "enum",
    values: positions,
    default: "bottom",
    dataAttr: "side",
  } satisfies PropDef<(typeof positions)[number]>,

  offset: {
    type: "string",
  } satisfies PropDef<string>,

  align: {
    type: "enum",
    values: alignments,
    default: "center",
    dataAttr: "align",
  } satisfies PropDef<(typeof alignments)[number]>,
} as const;

type SelectContentInternalProps = GetPropDefTypes<typeof SelectContentPropDefs>;

export { SelectContentInternalProps, SelectContentPropDefs };
