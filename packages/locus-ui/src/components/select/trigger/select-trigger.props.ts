import { GetPropDefTypes } from "../../../props/prop-def";

type SelectTriggerVariant = "outlined" | "solid" | "clear";

const SelectTriggerPropsDefs = {} as const;

type SelectTriggerInternalProps = GetPropDefTypes<
  typeof SelectTriggerPropsDefs
>;

export {
  SelectTriggerInternalProps,
  SelectTriggerPropsDefs,
  SelectTriggerVariant,
};
