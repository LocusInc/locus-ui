import { CSSProperties } from "react";
import { parseColor } from "../../utils/parse-color";

export interface ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;

  success: string;
  danger: string;
  warning: string;
  info: string;

  text: string;
  textLight: string;
  textDark: string;

  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;

  background1: string;
  background2: string;
  background3: string;

  surface1: string;
  surface2: string;
  surface3: string;

  border1: string;
  border2: string;
  border3: string;
}

export interface ThemeColorConfig {
  light?: Partial<ThemeColors>;
  dark?: Partial<ThemeColors>;
}

export type ThemeColorProp = Partial<ThemeColors> | ThemeColorConfig;

const baseColors = {
  red: "#ff0000",
  orange: "#ff7f00",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  purple: "#8b00ff",
  gray: "#808080",
  maroon: "#800000",
  cyan: "#00ffff",
  navy: "#000080",
  teal: "#008080",
  lime: "#00ff00",
  magenta: "#ff00ff",
  white: "#ffffff",
} as const;

const defaultColors: ThemeColorConfig = {
  light: {
    primary: "#fc7f0a",
    secondary: "#0b50e3",
    tertiary: "#d602ed",

    success: "#00c70d",
    danger: "#e80927",
    warning: "#e08e09",
    info: "#14adfa",

    text: "#000000",
    textLight: "#424242",
    textDark: "#000000",

    gray1: "#f8f8f8",
    gray2: "#e0e0e0",
    gray3: "#c8c8c8",
    gray4: "#a0a0a0",
    gray5: "#787878",

    background1: "#ffffff",
    background2: "#fefefe",
    background3: "#eeeeee",

    surface1: "#dadde3",
    surface2: "#e3dcd5",
    surface3: "#e3dcd5",

    border1: "#3a3f47",
    border2: "#424242",
    border3: "#424242",
  },
  dark: {
    primary: "#fc7f0a",
    secondary: "#0b50e3",
    tertiary: "#d602ed",

    success: "#00c70d",
    danger: "#e80927",
    warning: "#e08e09",
    info: "#14adfa",

    text: "#ffffff",
    textLight: "#919191",
    textDark: "#ffffff",

    gray1: "#f8f8f8",
    gray2: "#e0e0e0",
    gray3: "#c8c8c8",
    gray4: "#a0a0a0",
    gray5: "#787878",

    background1: "#121212",
    background2: "#282828",
    background3: "#3f3f3f",

    surface1: "#2b2831",
    surface2: "#686059",
    surface3: "#5a575f",

    border1: "#423f47",
    border2: "#423f47",
    border3: "#423f47",
  },
};

const colorToCssVar: Record<keyof ThemeColors, string> = {
  primary: "--primary",
  secondary: "--secondary",
  tertiary: "--tertiary",

  success: "--success",
  danger: "--danger",
  warning: "--warning",
  info: "--info",

  text: "--text",
  textLight: "--text-light",
  textDark: "--text-dark",

  gray1: "--gray-1",
  gray2: "--gray-2",
  gray3: "--gray-3",
  gray4: "--gray-4",
  gray5: "--gray-5",

  background1: "--bg-1",
  background2: "--bg-2",
  background3: "--bg-3",

  surface1: "--surface-1",
  surface2: "--surface-2",
  surface3: "--surface-3",

  border1: "--border-1",
  border2: "--border-2",
  border3: "--border-3",
};

function resolveColors(
  appearance: "light" | "dark",
  colors?: ThemeColorProp,
): Partial<ThemeColors> {
  const base = defaultColors[appearance] ?? {};
  const resolved: Partial<ThemeColors> = {};

  if (!colors) {
    return base;
  }

  if (!("light" in colors) && !("dark" in colors)) {
    for (const key of Object.keys(base) as (keyof ThemeColors)[]) {
      resolved[key] = (colors as Partial<ThemeColors>)[key] ?? base[key];
    }
  } else {
    const light = colors["light"] ?? {};
    const dark = colors["dark"] ?? {};

    for (const key of Object.keys(base) as (keyof ThemeColors)[]) {
      if (appearance === "light") {
        resolved[key] = light?.[key] ?? dark?.[key] ?? base[key];
      } else {
        resolved[key] = dark?.[key] ?? light?.[key] ?? base[key];
      }
    }
  }

  return resolved;
}

export function themeColorsToStyle(
  appearance: "light" | "dark",
  colors?: ThemeColorProp,
  primary?: string,
  secondary?: string,
  tertiary?: string,
): CSSProperties & Record<`--${string}`, string> {
  const resolved = resolveColors(appearance, colors);
  const style: Record<`--${string}`, string> = {};

  for (const key of Object.keys(resolved) as (keyof ThemeColors)[]) {
    const value = resolved[key];
    if (value !== undefined) {
      style[colorToCssVar[key] as `--${string}`] = parseColor(value);
    }
  }

  if (primary) {
    style["--primary"] = parseColor(
      baseColors[primary as keyof typeof baseColors] ?? primary,
    );
  }
  if (secondary) {
    style["--secondary"] = parseColor(
      baseColors[secondary as keyof typeof baseColors] ?? secondary,
    );
  }
  if (tertiary) {
    style["--tertiary"] = parseColor(
      baseColors[tertiary as keyof typeof baseColors] ?? tertiary,
    );
  }

  return style;
}
