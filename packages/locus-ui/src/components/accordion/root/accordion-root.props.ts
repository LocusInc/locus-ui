import {
  FunctionPropDef,
  GetPropDefTypes,
  PropDef,
  ValueOrArrayPropDef,
} from "../../../props/prop-def";

const AccordionVariants = ["solid", "outlined", "muted"] as const;

const AccordionRootPropsDefs = {
  /**
   * Sets the variant style of the accordion ("solid", "outlined", or "muted").
   */
  variant: {
    type: "enum",
    values: AccordionVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof AccordionVariants)[number]>,

  /**
   * Allows multiple accordion items to be expanded simultaneously when set to true.
   */
  multiple: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * The value of the accordion.
   */
  value: {
    type: "value | array",
  } satisfies PropDef<string> as ValueOrArrayPropDef<string>,

  /**
   * Callback fired when the value of the accordion changes.
   */
  onValueChange: {
    type: "function",
  } satisfies FunctionPropDef<
    (value: string | string[] | null) => void
  > as FunctionPropDef<(value: string | string[] | null) => void>,
};

type AccordionRootInternalProps = GetPropDefTypes<
  typeof AccordionRootPropsDefs
>;

export {
  AccordionRootInternalProps,
  AccordionRootPropsDefs,
  AccordionVariants,
};
