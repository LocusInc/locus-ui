import { GetPropDefTypes, PropDef } from "../../props/prop-def";

const ButtonVariants = ["solid", "outlined", "muted", "clear"] as const;

const ButtonRootPropsDefs = {
  /**
   * Sets the variant style of the button ("solid", "outlined", "muted", or "clear").
   */
  variant: {
    type: "enum",
    values: ButtonVariants,
    dataAttr: "variant",
  } satisfies PropDef<(typeof ButtonVariants)[number]>,

  /**
   * Enables high contrast mode for better visibility.
   * @default undefined
   */
  highContrast: {
    type: "boolean",
    dataAttr: "high-contrast",
  } satisfies PropDef<boolean>,

  /**
   * Disables the button component.
   * @default undefined
   */
  disabled: {
    type: "boolean",
    dataAttr: "disabled",
  } satisfies PropDef<boolean>,

  /**
   * Makes the button read-only.
   * @default undefined
   */
  readonly: {
    type: "boolean",
    dataAttr: "readonly",
  } satisfies PropDef<boolean>,
} as const;

type ButtonRootInternalProps = GetPropDefTypes<typeof ButtonRootPropsDefs>;

export { ButtonRootInternalProps, ButtonRootPropsDefs, ButtonVariants };
