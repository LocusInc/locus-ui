import { PropDef } from "../../props";
import { radii } from "../../props/radius.prop";
import { roundness } from "../../props/roundness.prop";
import { spacingValues } from "../../props/spacing.prop";

const appearances = ["inherit", "light", "dark"] as const;
const Colors = [
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

const ThemePropsDefs = {
  appearance: {
    type: "enum",
    values: appearances,
    default: "inherit",
  } satisfies PropDef<(typeof appearances)[number]>,

  radius: {
    type: "enum",
    values: radii,
    default: "md",
  } satisfies PropDef<(typeof radii)[number]>,

  roundness: {
    type: "enum",
    values: roundness,
    default: "3",
  } satisfies PropDef<(typeof roundness)[number]>,

  spacing: {
    type: "enum",
    values: spacingValues,
    default: "md",
  } satisfies PropDef<(typeof spacingValues)[number]>,

  primary: {
    type: "enum",
    values: Colors,
  } satisfies PropDef<(typeof Colors)[number] | string>,

  secondary: {
    type: "enum",
    values: Colors,
  } satisfies PropDef<(typeof Colors)[number] | string>,

  tertiary: {
    type: "enum",
    values: Colors,
  } satisfies PropDef<(typeof Colors)[number] | string>,
};

export { Colors, ThemePropsDefs };
