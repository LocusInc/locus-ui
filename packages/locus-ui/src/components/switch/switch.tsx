import { SwitchIndicator } from "./indicator/switch-indicator";
import { SwitchLabel } from "./label/switch-label";
import { SwitchRoot } from "./root/switch-root";

export const Switch = Object.assign(SwitchRoot, {
  Root: SwitchRoot,
  Label: SwitchLabel,
  Indicator: SwitchIndicator,
});
