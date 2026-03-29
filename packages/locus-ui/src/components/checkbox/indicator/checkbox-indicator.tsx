"use client";

import clsx from "clsx";
import React from "react";
import { CheckMark, Minus } from "../../../icons";
import { SizeProp, SizePropDef } from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { useCheckboxContext } from "../checkbox-context";
import {
  CheckboxIndicatorInternalProps,
  CheckboxIndicatorPropDefs,
} from "./checkbox-indicator.props";

interface AllCheckboxIndicatorProps
  extends CheckboxIndicatorInternalProps, SizeProp {}

type CheckboxIndicatorProps = AllCheckboxIndicatorProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;

/**
 * Indicator for a checkbox component.
 * Supports checked, indeterminate, disabled, readonly, and high contrast states.
 */
const CheckboxIndicator: React.FC<CheckboxIndicatorProps> = React.forwardRef<
  HTMLSpanElement,
  CheckboxIndicatorProps
>((props, ref) => {
  const {
    value,
    setValue,
    hovered,
    color,
    disabled,
    readonly,
    highContrast,
    indeterminate,
    variant: contextVariant,
  } = useCheckboxContext();
  const { size, variant, className, style, dataAttrs } = getComponentProps(
    props,
    CheckboxIndicatorPropDefs,
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
    ...(highContrast && { "data-high-contrast": true }),
    ...(indeterminate && { "data-indeterminate": true }),
    ...((variant || contextVariant) && { "data-variant": indicatorVariant }),
  };

  return (
    <span
      ref={ref}
      style={style}
      role="checkbox"
      data-color={color}
      data-hovered={hovered}
      aria-disabled={disabled}
      aria-readonly={readonly}
      aria-checked={indeterminate ? "mixed" : value}
      onKeyDown={handleKeyDown}
      tabIndex={disabled || readonly ? -1 : 0}
      className={clsx("checkbox-indicator", className)}
      {...indicatorProps}
      {...dataAttrs}
    >
      {indeterminate && !value && (
        <Minus
          color={
            highContrast && indicatorVariant === "solid" ? "black" : "white"
          }
        />
      )}

      {value && (
        <CheckMark
          color={
            highContrast && indicatorVariant === "solid" ? "black" : "white"
          }
        />
      )}
    </span>
  );
});
CheckboxIndicator.displayName = "Checkbox.Indicator";

export { AllCheckboxIndicatorProps, CheckboxIndicator, CheckboxIndicatorProps };
