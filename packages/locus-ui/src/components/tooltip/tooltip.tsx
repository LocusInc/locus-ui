import { TooltipContent } from "./content/tooltip-content";
import { TooltipRoot } from "./root/tooltip-root";
import { TooltipTrigger } from "./trigger/tooltip-trigger";

/**
 * A Tooltip component to display additional information on hover or focus.
 */
export const Tooltip = {
  /**
   * The root component for the Tooltip.
   */
  Root: TooltipRoot,
  /**
   * The trigger component that wraps the element activating the tooltip.
   */
  Trigger: TooltipTrigger,
  /**
   * The content component for the Tooltip, representing the tooltip's content.
   */
  Content: TooltipContent,
};
