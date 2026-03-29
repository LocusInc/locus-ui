import { GetPropDefTypes, PropDef } from "../../../props";
import { SwitchVariants } from "../root/switch-root.props";

const SwitchIndicatorPropDefs = {
  /**
   * Sets the variant style of the switch ("solid" or "outlined").
   */
  variant: {
    type: "enum",
    values: SwitchVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof SwitchVariants)[number]>,
} as const;

type SwitchIndicatorInternalProps = GetPropDefTypes<
  typeof SwitchIndicatorPropDefs
>;

export { SwitchIndicatorInternalProps, SwitchIndicatorPropDefs };
