import { GetPropDefTypes, PropDef } from "./prop-def";

const Colors = [
  "primary",
  "secondary",
  "tertiary",
  "accent",
  "success",
  "warning",
  "danger",
  "info",
] as const;

const ColorPropDef = {
  /**
   * Sets the color of the component.
   *
   * @example color="primary" // primary color
   */
  color: {
    type: "enum | string",
    values: Colors,
    dataAttr: "color",
    className: "color",
  } satisfies PropDef<(typeof Colors)[number]>,
};

type ColorProp = GetPropDefTypes<typeof ColorPropDef>;

export { ColorProp, ColorPropDef, Colors };
