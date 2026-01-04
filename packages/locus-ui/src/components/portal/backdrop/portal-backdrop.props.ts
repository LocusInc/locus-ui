import { PropDef } from "../../../props";

const variants = ["clear", "shadow", "blurred"] as const;

const PortalBackdropPropsDefs = {
  /**
   * The visual style variant of the backdrop.
   *
   * @example variant="blurred" // Applies a blurred effect to the backdrop
   * @default "clear"
   */
  variant: {
    type: "enum",
    values: variants,
    default: "clear",
    dataAttr: "variant",
  } satisfies PropDef<(typeof variants)[number]>,

  /**
   * The opacity level of the backdrop.
   *
   * @example opacity="0.5" // Sets the backdrop opacity to 50%
   * @default "0.3"
   */
  opacity: {
    type: "string",
    default: "0.3",
    cssProperty: "--backdrop-opacity",
  } satisfies PropDef<string>,

  /**
   * The blur amount applied to the backdrop when the "blurred" variant is used.
   *
   * @example blur="4px" // Sets the backdrop blur to 4 pixels
   * @default "2px"
   */
  blur: {
    type: "string",
    default: "2px",
    cssProperty: "--backdrop-blur",
  } satisfies PropDef<string>,
};

type PortalBackdropInternalProps = {
  /**
   * The visual style variant of the backdrop.
   *
   * @example variant="blurred" // Applies a blurred effect to the backdrop
   * @default "clear"
   */
  variant?: (typeof variants)[number];

  /**
   * The opacity level of the backdrop.
   *
   * @example opacity="0.5" // Sets the backdrop opacity to 50%
   * @default "0.3"
   */
  opacity?: string;

  /**
   * The blur amount applied to the backdrop when the "blurred" variant is used.
   *
   * @example blur="4px" // Sets the backdrop blur to 4 pixels
   * @default "2px"
   */
  blur?: string;
};

export { PortalBackdropInternalProps, PortalBackdropPropsDefs };
