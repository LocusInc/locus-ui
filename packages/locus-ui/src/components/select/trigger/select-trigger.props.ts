import { GetPropDefTypes } from "../../../props/prop-def";

const SelectTriggerPropsDefs = {} as const;

type SelectTriggerInternalProps = GetPropDefTypes<
  typeof SelectTriggerPropsDefs
>;

export { SelectTriggerInternalProps, SelectTriggerPropsDefs };
