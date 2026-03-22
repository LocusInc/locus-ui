import { GetPropDefTypes, PropDef } from "../../../props/prop-def";

const AccordionHeaderPropDefs = {
  /** The value of the parent AccordionItem — injected automatically */
  value: {
    type: "string",
  } satisfies PropDef<string>,
};

type AccordionHeaderInternalProps = GetPropDefTypes<
  typeof AccordionHeaderPropDefs
>;

export { AccordionHeaderInternalProps, AccordionHeaderPropDefs };
