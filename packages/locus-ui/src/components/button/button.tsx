"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, FC, useState } from "react";
import {
  ColorProp,
  ColorPropDef,
  MarginPropDefs,
  MarginProps,
  PaddingPropDefs,
  PaddingProps,
  RadiusPropDefs,
  RadiusProps,
  SizeProp,
  SizePropDef,
} from "../../props";
import { getComponentProps } from "../../utils/get-component-props";
import { ButtonRootInternalProps, ButtonRootPropsDefs } from "./button.props";

interface AllButtonRootProps
  extends
    ButtonRootInternalProps,
    ColorProp,
    MarginProps,
    PaddingProps,
    RadiusProps,
    SizeProp {}

type ButtonRootProps = AllButtonRootProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonRootProps> = (props) => {
  const {
    color,
    variant,
    className,
    dataAttrs,
    disabled,
    highContrast,
    readonly,
    children,
    ...rest
  } = getComponentProps(
    props,
    ButtonRootPropsDefs,
    ColorPropDef,
    MarginPropDefs,
    PaddingPropDefs,
    RadiusPropDefs,
    SizePropDef,
  );

  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={clsx("button", className)}
      data-color={color ?? true}
      data-variant={variant}
      data-disabled={disabled ? true : undefined}
      data-high-contrast={highContrast ? true : undefined}
      data-readonly={readonly ? true : undefined}
      data-hovered={hovered ? true : undefined}
      disabled={disabled || readonly}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...dataAttrs}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};

export { AllButtonRootProps, Button, ButtonRootProps };
