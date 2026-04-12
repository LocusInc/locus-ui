import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const TooltipVariants = ["solid", "outlined", "muted"] as const;

const TooltipContentPropsDefs = {
  /**
   * The value of the progress bar (filled state).
   * Should be a number between 0 and 1 representing the percentage of completion.
   */
  variant: {
    type: "enum",
    values: TooltipVariants,
  } satisfies PropDef<(typeof TooltipVariants)[number]>,
} as const;

type TooltipContentInternalProps = GetPropDefTypes<
  typeof TooltipContentPropsDefs
>;

export { TooltipContentInternalProps, TooltipContentPropsDefs };
