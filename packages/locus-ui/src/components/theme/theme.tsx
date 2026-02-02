"use client";

import * as React from "react";
import { GetProps } from "../../utils/get-props";
import {
  ThemeAppearance,
  ThemeContext,
  ThemeContextProps,
  ThemeRadius,
  ThemeRoundness,
} from "./theme-context";
import { ThemePropsDefs } from "./theme.props";

export type ThemeProps = GetProps<typeof ThemePropsDefs> &
  React.HTMLAttributes<HTMLDivElement>;

const Theme = React.forwardRef<HTMLDivElement, ThemeProps>((props, ref) => {
  const context = React.useContext(ThemeContext);
  const isRoot = context === undefined;

  if (isRoot) return <ThemeRoot {...props} ref={ref} />;

  return <ThemeSub {...props} ref={ref} />;
});
Theme.displayName = "Theme";

const ThemeRoot = React.forwardRef<HTMLDivElement, ThemeProps>((props, ref) => {
  const {
    appearance: themeAppearance,
    radius: themeRadius,
    roundness: themeRoundness,
    spacing: themeSpacing,

    children,
    ...rest
  } = props;

  const [appearance, setAppearance] = React.useState<ThemeAppearance>(
    themeAppearance ?? "light"
  );
  const [radius, setRadius] = React.useState<ThemeRadius>(themeRadius ?? "md");
  const [roundness, setRoundness] = React.useState<ThemeRoundness>(
    themeRoundness ?? "3"
  );
  const [spacing, setSpacing] = React.useState(themeSpacing ?? "md");

  const value = React.useMemo(
    () => ({
      appearance,
      radius,
      roundness,
      spacing,
      onAppearanceChange: setAppearance,
      onRadiusChange: setRadius,
      onRoundnessChange: setRoundness,
      onSpacingChange: setSpacing,
    }),
    [appearance, radius, roundness, spacing]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div
        ref={ref}
        data-appearance={appearance}
        data-theme-radius={radius}
        data-theme-roundness={roundness}
        data-theme-spacing={spacing}
        {...rest}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
});
ThemeRoot.displayName = "ThemeRoot";

const ThemeSub = React.forwardRef<
  HTMLDivElement,
  Partial<ThemeContextProps> &
    React.HTMLAttributes<HTMLDivElement> & { isRoot?: boolean }
>((props, ref) => {
  const context = React.useContext(ThemeContext)!;

  const {
    appearance,
    radius,
    roundness,
    spacing,
    onAppearanceChange,
    onRadiusChange,
    onRoundnessChange,
    onSpacingChange,

    children,
    ...rest
  } = props;

  const contextProps: ThemeContextProps = {
    appearance: appearance ?? context.appearance,
    radius: radius ?? context.radius,
    roundness: roundness ?? context.roundness,
    spacing: spacing ?? context.spacing,

    onAppearanceChange: context.onAppearanceChange,
    onRadiusChange: context.onRadiusChange,
    onRoundnessChange: context.onRoundnessChange,
    onSpacingChange: context.onSpacingChange,
  };

  return (
    <ThemeContext.Provider value={contextProps}>
      <div
        ref={ref}
        data-appearance={appearance}
        data-theme-radius={radius}
        data-theme-roundness={roundness}
        data-theme-spacing={spacing}
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
