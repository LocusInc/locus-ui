import { GetPropDefTypes, PropDef } from "../../props/prop-def";

const PanelVariants = ["solid", "outlined", "muted"] as const;

const PanelPropsDefs = {
  /**
   * Sets the variant style of the panel ("solid", "outlined", or "muted").
   */
  variant: {
    type: "enum",
    values: PanelVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof PanelVariants)[number]>,

  /**
   * The blur amount applied to the panel.
   *
   * @example blur="4px" // Sets the backdrop blur to 4 pixels
   * @default "2px"
   */
  blur: {
    type: "string",
    default: "2px",
    cssProperty: "--panel-blur",
  } satisfies PropDef<string>,
} as const;

type PanelInternalProps = GetPropDefTypes<typeof PanelPropsDefs>;

export { PanelInternalProps, PanelPropsDefs, PanelVariants };
