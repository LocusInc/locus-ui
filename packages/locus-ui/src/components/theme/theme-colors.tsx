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
  colors: ThemeColorProp,
  appearance: "light" | "dark",
): Partial<ThemeColors> {
  if (!("light" in colors) && !("dark" in colors)) {
    return colors as Partial<ThemeColors>;
  }

  const current = colors[appearance] ?? {};
  const other = colors[appearance === "light" ? "dark" : "light"] ?? {};

  const resolved: Partial<ThemeColors> = {};
  for (const key of Object.keys(other) as (keyof ThemeColors)[]) {
    if (!(key in current)) {
      resolved[key] = other[key];
    }
  }

  return { ...resolved, ...current };
}

export function themeColorsToStyle(
  colors: ThemeColorProp,
  appearance: "light" | "dark",
): CSSProperties & Record<`--${string}`, string> {
  const resolved = resolveColors(colors, appearance);
  const style: Record<`--${string}`, string> = {};

  for (const key of Object.keys(resolved) as (keyof ThemeColors)[]) {
    const value = resolved[key];
    if (value !== undefined) {
      style[colorToCssVar[key] as `--${string}`] = parseColor(value);
    }
  }

  return style;
}
