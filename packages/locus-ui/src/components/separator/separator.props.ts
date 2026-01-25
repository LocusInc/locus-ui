import { GetPropDefTypes, PropDef } from "../../props/prop-def";

const directions = ["horizontal", "vertical"] as const;
const variants = ["solid", "dashed", "dotted"] as const;

const SeparatorPropsDefs = {
  /**
   * The direction of the separator.
   *
   * @example direction="vertical" // positions the separator vertically
   */
  direction: {
    type: "enum",
    values: directions,
    default: "horizontal",
    dataAttr: "direction",
  } satisfies PropDef<(typeof directions)[number]>,

  /**
   * The variant of the separator.
   *
   * @example variant="dashed" // makes the separator dashed
   */
  variant: {
    type: "enum",
    values: variants,
    default: "solid",
    dataAttr: "variant",
  } satisfies PropDef<(typeof variants)[number]>,
};

type SeparatorInternalProps = GetPropDefTypes<typeof SeparatorPropsDefs>;

export { SeparatorInternalProps, SeparatorPropsDefs };
