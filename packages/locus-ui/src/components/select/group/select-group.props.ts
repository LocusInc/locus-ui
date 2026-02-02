import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const SelectGroupsPropDefs = {
  title: {
    type: "string",
  } satisfies PropDef<string>,
} as const;

type SelectGroupInternalProps = GetPropDefTypes<typeof SelectGroupsPropDefs>;

export { SelectGroupInternalProps, SelectGroupsPropDefs };
