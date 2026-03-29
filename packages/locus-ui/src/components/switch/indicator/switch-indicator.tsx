"use client";

import clsx from "clsx";
import React from "react";
import { SizeProp, SizePropDef } from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { useSwitchContext } from "../switch-context";
import {
  SwitchIndicatorInternalProps,
  SwitchIndicatorPropDefs,
} from "./switch-indicator.props";

interface AllSwitchIndicatorProps
  extends SwitchIndicatorInternalProps, SizeProp {}

type SwitchIndicatorProps = AllSwitchIndicatorProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;

/**
 * Indicator for a switch component.
 * Supports checked, indeterminate, disabled, readonly, and high contrast states.
 */
const SwitchIndicator: React.FC<SwitchIndicatorProps> = React.forwardRef<
  HTMLDivElement,
  SwitchIndicatorProps
>((props, ref) => {
  const {
    value,
    setValue,
    hovered,
    color,
    disabled,
    readonly,
    focused,
    variant: contextVariant,
  } = useSwitchContext();
  const { size, variant, className, style, dataAttrs } = getComponentProps(
    props,
    SwitchIndicatorPropDefs,
    SizePropDef,
  );

  const indicatorVariant = variant || contextVariant;

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (disabled || readonly) return;

    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      setValue(!value);
    }
  };

  const indicatorProps = {
    ...(value && { "data-checked": true }),
    ...(disabled && { "data-disabled": true }),
    ...(readonly && { "data-readonly": true }),
    ...((variant || contextVariant) && { "data-variant": indicatorVariant }),
  };

  return (
    <div
      ref={ref}
      style={style}
      role="switch"
      data-size={size}
      data-color={color}
      data-hovered={hovered}
      aria-disabled={disabled}
      data-focused={focused}
      aria-readonly={readonly}
      onKeyDown={handleKeyDown}
      tabIndex={disabled || readonly ? -1 : 0}
      className={clsx("switch-indicator", className)}
      {...indicatorProps}
      {...dataAttrs}
    />
  );
});
SwitchIndicator.displayName = "Switch.Indicator";

export { AllSwitchIndicatorProps, SwitchIndicator, SwitchIndicatorProps };
