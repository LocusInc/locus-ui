import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const ProgressBarVariants = ["solid", "outlined", "muted"] as const;

const ProgressBarRootPropsDefs = {
  /**
   * Sets the variant style of the progress bar ("solid", "outlined", or "muted").
   */
  variant: {
    type: "enum",
    values: ProgressBarVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof ProgressBarVariants)[number]>,

  /**
   * The value of the progress bar (filled state).
   * Should be a number between 0 and 1 representing the percentage of completion.
   */
  value: {
    type: "number",
  } satisfies PropDef<number>,
} as const;

type ProgressBarRootInternalProps = GetPropDefTypes<
  typeof ProgressBarRootPropsDefs
>;

export {
  ProgressBarRootInternalProps,
  ProgressBarRootPropsDefs,
  ProgressBarVariants,
};
