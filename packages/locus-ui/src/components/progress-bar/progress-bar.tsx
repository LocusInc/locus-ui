import { ProgressBarFill } from "./fill/progress-bar-fill";
import { ProgressBarRoot } from "./root/progress-bar-root";

export const ProgressBar = Object.assign(ProgressBarRoot, {
  Root: ProgressBarRoot,
  Fill: ProgressBarFill,
});
