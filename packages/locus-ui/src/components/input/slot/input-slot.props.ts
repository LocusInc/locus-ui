import { GetPropDefTypes, PropDef } from "../../../props";
import { InputVariants } from "../root/input-root.props";

const InputSlotPropDefs = {
  /** Overrides the field's variant for this slot. Inherits when omitted. */
  variant: {
    type: "enum",
    values: InputVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof InputVariants)[number]>,
} as const;

type InputSlotInternalProps = GetPropDefTypes<typeof InputSlotPropDefs>;

export { InputSlotPropDefs };
export type { InputSlotInternalProps };
