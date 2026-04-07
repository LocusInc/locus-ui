import { parseColor } from "../utils/parse-color";
import { GetPropDefTypes, PropDef } from "./prop-def";

const Colors = [
  "primary",
  "secondary",
  "tertiary",
  "success",
  "warning",
  "danger",
  "info",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "gray",
  "maroon",
  "cyan",
  "navy",
  "teal",
  "lime",
  "magenta",
  "white",
] as const;

const ColorPropDef = {
  /**
   * Sets the color of the component.
   *
   * Uses predefined theme colors ("primary", "secondary", etc.) or accepts custom color values in hex, rgb, or raw rgb formats.
   *
   * @example color="primary" // primary color
   * @example color="#7BEB34" // hex color
   * @example color="rgb(125, 235, 52)" // rgb color
   * @example color="125, 235, 52" // raw rgb values
   */
  color: {
    type: "enum | string",
    values: Colors,
    dataAttr: "color",
    className: "color",
    transform: parseColor,
  } satisfies PropDef<(typeof Colors)[number]>,
};

type ColorProp = GetPropDefTypes<typeof ColorPropDef>;

export { ColorProp, ColorPropDef, Colors };
