import { SelectContent } from "./content/select-content";
import { SelectGroup } from "./group/select-group";
import { SelectItem } from "./item/select-item";
import { SelectLabel } from "./label/select-label";
import { SelectRoot } from "./root/select-root";
import { SelectSeparator } from "./separator/select-separator";
import { SelectTrigger } from "./trigger/select-trigger";
import { SelectViewport } from "./viewport/select-viewport";

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Viewport: SelectViewport,
  Group: SelectGroup,
  Label: SelectLabel,
  Item: SelectItem,
  Separator: SelectSeparator,
};
