import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const InputVariants = ["outlined", "solid", "muted", "clear"] as const;

const InputRootPropsDefs = {
  /** Sets the visual style of the field. */
  variant: {
    type: "enum",
    values: InputVariants,
    default: "outlined",
    dataAttr: "variant",
  } satisfies PropDef<(typeof InputVariants)[number]>,
} as const;

type InputRootInternalProps = GetPropDefTypes<typeof InputRootPropsDefs>;

export { InputRootPropsDefs, InputVariants };
export type { InputRootInternalProps };
