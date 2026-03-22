import { GetPropDefTypes, PropDef } from "../../../props";

const AccordionItemPropDefs = {
  /**
   * Sets the accordion item to be open by default.
   */
  open: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * The value of the accordion item. Automatically generated if not provided.
   */
  value: {
    type: "string",
  } satisfies PropDef<string>,
} as const;

type AccordionItemInternalProps = GetPropDefTypes<typeof AccordionItemPropDefs>;

export { AccordionItemInternalProps, AccordionItemPropDefs };
