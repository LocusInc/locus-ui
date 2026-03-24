import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const ProgressBarFillPropsDefs = {
  /**
   * The value of the progress bar (filled state).
   * Should be a number between 0 and 1 representing the percentage of completion.
   */
  value: {
    type: "number",
  } satisfies PropDef<number>,
} as const;

type ProgressBarFillInternalProps = GetPropDefTypes<
  typeof ProgressBarFillPropsDefs
>;

export { ProgressBarFillInternalProps, ProgressBarFillPropsDefs };
