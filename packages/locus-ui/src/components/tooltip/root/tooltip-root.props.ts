import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const TooltipVariants = ["solid", "outlined", "muted"] as const;
const TooltipSides = ["top", "right", "bottom", "left"] as const;

const TooltipRootPropsDefs = {
  /**
   * The side of the anchor element to position the portal content on.
   *
   * @default "bottom"
   */
  side: {
    type: "enum",
    values: TooltipSides,
    default: "bottom",
  } satisfies PropDef<(typeof TooltipSides)[number]>,

  /**
   * Sets the delay time (in milliseconds) before the tooltip appears on hover or focus.
   *
   * @default 300ms
   */
  delay: {
    type: "number",
    default: 300,
  } satisfies PropDef<number>,

  /**
   * Sets wether the tooltip should be opened on hover or focus.
   *
   * @default true
   */
  openOnHover: {
    type: "boolean",
    default: true,
  } satisfies PropDef<boolean>,

  /**
   * Sets wether the tooltip should be opened on click.
   *
   * @default false
   */
  openOnClick: {
    type: "boolean",
    default: false,
  } satisfies PropDef<boolean>,
} as const;

type TooltipRootInternalProps = GetPropDefTypes<typeof TooltipRootPropsDefs>;

export { TooltipRootInternalProps, TooltipRootPropsDefs, TooltipVariants };
