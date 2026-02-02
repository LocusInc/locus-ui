import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const SelectItemPropDefs = {
  value: {
    type: "string",
  } satisfies PropDef<string>,

  disabled: {
    type: "boolean",
    default: false,
  } satisfies PropDef<boolean>,
} as const;

type SelectItemInternalProps = GetPropDefTypes<typeof SelectItemPropDefs>;

export { SelectItemInternalProps, SelectItemPropDefs };
