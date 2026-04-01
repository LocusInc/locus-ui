"use client";

import { createContext, useContext } from "react";
import { ThemeColorProp } from "./theme-colors";
import { ThemePropsDefs } from "./theme.props";

export type ThemeAppearance = (typeof ThemePropsDefs.appearance.values)[number];
export type ThemeRadius = (typeof ThemePropsDefs.radius.values)[number];
export type ThemeRoundness = (typeof ThemePropsDefs.roundness.values)[number];
export type ThemeSpacing = (typeof ThemePropsDefs.spacing.values)[number];
export type ThemeColor = (typeof ThemePropsDefs.primary.values)[number];

interface ThemeChangeHandlers {
  onAppearanceChange?: (appearance: ThemeAppearance) => void;
  onRadiusChange?: (radius: ThemeRadius) => void;
  onRoundnessChange?: (roundness: ThemeRoundness) => void;
  onSpacingChange?: (spacing: ThemeSpacing) => void;
  onPrimaryChange?: (primary: ThemeColor) => void;
  onSecondaryChange?: (secondary: ThemeColor) => void;
  onTertiaryChange?: (tertiary: ThemeColor) => void;
}

interface ThemeContextValue extends ThemeChangeHandlers {
  appearance: ThemeAppearance;
  radius: ThemeRadius;
  roundness: ThemeRoundness;
  spacing: ThemeSpacing;
  primary?: ThemeColor;
  secondary?: ThemeColor;
  tertiary?: ThemeColor;
  colors?: ThemeColorProp;
}

interface ThemeContextProps extends ThemeContextValue, ThemeChangeHandlers {}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("`useTheme` must be used within a `Theme`");
  }
  return context;
}

export { ThemeContext, ThemeContextProps, useTheme };
