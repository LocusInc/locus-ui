"use client";

import {
  forwardRef,
  HTMLAttributes,
  useContext,
  useMemo,
  useState,
} from "react";
import { GetProps } from "../../utils/get-props";
import { ThemeColorProp, themeColorsToStyle } from "./theme-colors";
import {
  ThemeAppearance,
  ThemeContext,
  ThemeContextProps,
  ThemeRadius,
  ThemeRoundness,
} from "./theme-context";
import { ThemePropsDefs } from "./theme.props";

export type ThemeProps = GetProps<typeof ThemePropsDefs> &
  HTMLAttributes<HTMLDivElement> & {
    colors?: ThemeColorProp;
  };

const Theme = forwardRef<HTMLDivElement, ThemeProps>((props, ref) => {
  const context = useContext(ThemeContext);
  const isRoot = context === undefined;

  if (isRoot) return <ThemeRoot {...props} ref={ref} />;

  return <ThemeSub {...props} ref={ref} />;
});
Theme.displayName = "Theme";

const ThemeRoot = forwardRef<HTMLDivElement, ThemeProps>((props, ref) => {
  const {
    appearance: themeAppearance,
    radius: themeRadius,
    roundness: themeRoundness,
    spacing: themeSpacing,
    primary: themePrimary,
    secondary: themeSecondary,
    tertiary: themeTertiary,
    colors,

    children,
    style,
    ...rest
  } = props;

  const [appearance, setAppearance] = useState<ThemeAppearance>(
    themeAppearance ?? "light",
  );
  const [radius, setRadius] = useState<ThemeRadius>(themeRadius ?? "md");
  const [roundness, setRoundness] = useState<ThemeRoundness>(
    themeRoundness ?? "3",
  );
  const [spacing, setSpacing] = useState(themeSpacing ?? "md");
  const [primary, setPrimary] = useState(themePrimary);
  const [secondary, setSecondary] = useState(themeSecondary);
  const [tertiary, setTertiary] = useState(themeTertiary);

  const currentAppearance = appearance === "inherit" ? "light" : appearance;

  const colorStyle = useMemo(
    () =>
      themeColorsToStyle(
        currentAppearance,
        colors,
        primary,
        secondary,
        tertiary,
      ),
    [colors, currentAppearance, primary, secondary, tertiary],
  );

  const value = useMemo(
    () => ({
      appearance,
      radius,
      roundness,
      spacing,
      primary,
      secondary,
      tertiary,
      colors,
      onAppearanceChange: setAppearance,
      onRadiusChange: setRadius,
      onRoundnessChange: setRoundness,
      onSpacingChange: setSpacing,
      onPrimaryChange: setPrimary,
      onSecondaryChange: setSecondary,
      onTertiaryChange: setTertiary,
    }),
    [
      appearance,
      radius,
      roundness,
      spacing,
      primary,
      secondary,
      tertiary,
      colors,
    ],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        ref={ref}
        data-appearance={appearance}
        data-theme-radius={radius}
        data-theme-roundness={roundness}
        data-theme-spacing={spacing}
        style={{ colorScheme: currentAppearance, ...colorStyle, ...style }}
        {...rest}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
});
ThemeRoot.displayName = "ThemeRoot";

const ThemeSub = forwardRef<
  HTMLDivElement,
  Partial<ThemeContextProps> &
    HTMLAttributes<HTMLDivElement> & {
      isRoot?: boolean;
      colors?: ThemeColorProp;
    }
>((props, ref) => {
  const context = useContext(ThemeContext)!;

  const {
    appearance,
    radius,
    roundness,
    spacing,
    colors,
    primary,
    secondary,
    tertiary,
    onAppearanceChange,
    onRadiusChange,
    onRoundnessChange,
    onSpacingChange,
    onPrimaryChange,
    onSecondaryChange,
    onTertiaryChange,

    children,
    style,
    ...rest
  } = props;

  const currentAppearance =
    (appearance ?? context.appearance) === "inherit"
      ? "light"
      : ((appearance ?? context.appearance) as "light" | "dark");

  const mergedColors = useMemo(
    () => ({ ...context.colors, ...colors }),
    [context.colors, colors],
  );

  const colorStyle = useMemo(
    () =>
      themeColorsToStyle(
        currentAppearance,
        colors,
        primary,
        secondary,
        tertiary,
      ),
    [colors, currentAppearance, primary, secondary, tertiary],
  );

  const contextProps: ThemeContextProps = {
    appearance: appearance ?? context.appearance,
    radius: radius ?? context.radius,
    roundness: roundness ?? context.roundness,
    spacing: spacing ?? context.spacing,
    colors: mergedColors,
    primary: primary ?? context.primary,
    secondary: secondary ?? context.secondary,
    tertiary: tertiary ?? context.tertiary,

    onAppearanceChange: context.onAppearanceChange,
    onRadiusChange: context.onRadiusChange,
    onRoundnessChange: context.onRoundnessChange,
    onSpacingChange: context.onSpacingChange,
    onPrimaryChange: context.onPrimaryChange,
    onSecondaryChange: context.onSecondaryChange,
    onTertiaryChange: context.onTertiaryChange,
  };

  return (
    <ThemeContext.Provider value={contextProps}>
      <div
        ref={ref}
        data-appearance={appearance}
        data-theme-radius={radius}
        data-theme-roundness={roundness}
        data-theme-spacing={spacing}
        style={{ colorScheme: currentAppearance, ...colorStyle, ...style }}
        {...rest}
        className="flex"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
});
ThemeSub.displayName = "ThemeSub";

export { Theme };
