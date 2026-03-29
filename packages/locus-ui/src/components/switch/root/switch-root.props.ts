import {
  FunctionPropDef,
  GetPropDefTypes,
  PropDef,
} from "../../../props/prop-def";

const SwitchVariants = ["solid", "outlined", "muted"] as const;

const SwitchRootPropsDefs = {
  /**
   * Sets the variant style of the switch ("solid" or "outlined").
   */
  variant: {
    type: "enum",
    values: SwitchVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof SwitchVariants)[number]>,

  /**
   * Sets the checked state of the switch.
   *
   * When using an uncontrolled switch, use `defaultChecked` instead.
   * @default undefined
   */
  checked: {
    type: "boolean",
    dataAttr: "checked",
  } satisfies PropDef<boolean>,

  /**
   * The value of the switch (checked state).
   */
  value: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Sets the default checked state of the switch.
   * @default undefined
   */
  defaultChecked: {
    type: "boolean",
  } satisfies PropDef<boolean>,

  /**
   * Disables the switch component.
   * @default undefined
   */
  disabled: {
    type: "boolean",
    dataAttr: "disabled",
  } satisfies PropDef<boolean>,

  /**
   * Makes the switch read-only.
   * @default undefined
   */
  readonly: {
    type: "boolean",
    dataAttr: "readonly",
  } satisfies PropDef<boolean>,

  /**
   * Marks the switch as required.
   * @default undefined
   */
  required: {
    type: "boolean",
    dataAttr: "required",
  } satisfies PropDef<boolean>,

  /**
   * Sets the name attribute of the switch input for form control.
   * @default undefined
   */
  name: {
    type: "string",
  } satisfies PropDef<string>,

  /**
   * Callback fired when the checked state changes.
   *
   * @param value - The new checked state.
   */
  onCheckedChange: {
    type: "function",
  } satisfies FunctionPropDef<(value: boolean) => void> as FunctionPropDef<
    (value: boolean) => void
  >,
} as const;

type SwitchRootInternalProps = GetPropDefTypes<typeof SwitchRootPropsDefs>;

export { SwitchRootInternalProps, SwitchRootPropsDefs, SwitchVariants };
