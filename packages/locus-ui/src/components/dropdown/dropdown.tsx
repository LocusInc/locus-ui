import { DropdownContent } from "./content/dropdown-content";
import { DropdownItem } from "./item/dropdown-item";
import { DropdownRoot } from "./root/dropdown-root";
import { DropdownSeparator } from "./separator/dropdown-separator";
import { DropdownTrigger } from "./trigger/dropdown-trigger";

/**
 * Compound dropdown component namespace.
 */
export const Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
  Separator: DropdownSeparator,
};
