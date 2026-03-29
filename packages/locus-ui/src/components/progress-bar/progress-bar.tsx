import { ProgressBarFill } from "./fill/progress-bar-fill";
import { ProgressBarRoot } from "./root/progress-bar-root";

/**
 * A Progress Bar component to display single or stacked progress bars.
 */
export const ProgressBar = {
  /**
   * The root component for the Progress Bar.
   */
  Root: ProgressBarRoot,
  /**
   * The fill component for the Progress Bar, representing the filled portion.
   */
  Fill: ProgressBarFill,
};
