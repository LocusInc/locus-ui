import {
  FunctionPropDef,
  GetPropDefTypes,
  PropDef,
} from "../../../props/prop-def";

const selectVariants = ["outlined", "solid", "clear"] as const;
type SelectVariant = (typeof selectVariants)[number];

const SelectRootPropsDefs = {
  variant: {
    type: "enum",
    values: selectVariants,
    dataAttr: "variant",
  } satisfies PropDef<SelectVariant>,

  value: {
    type: "string",
  } satisfies PropDef<string>,

  defaultValue: {
    type: "string",
  } satisfies PropDef<string>,

  disabled: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  required: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  placeholder: {
    type: "string",
  } satisfies PropDef<string>,

  name: {
    type: "string",
  } satisfies PropDef<string>,

  onValueChange: {
    type: "function",
  } satisfies FunctionPropDef<(value: string) => void> as FunctionPropDef<
    (value: string) => void
  >,
} as const;

type SelectRootInternalProps = GetPropDefTypes<typeof SelectRootPropsDefs>;

export { SelectRootInternalProps, SelectRootPropsDefs, SelectVariant };
