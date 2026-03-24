import clsx from "clsx";
import { useState } from "react";
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
  extends ButtonRootInternalProps,
    ColorProp,
    MarginProps,
    PaddingProps,
    RadiusProps,
    SizeProp {}

type ButtonRootProps = AllButtonRootProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonRootProps> = (props) => {
  const {
    color,
    variant,
    className,
    dataAttrs,
    disabled,
    highContrast,
    readonly,
    ...rest
  } = getComponentProps(
    props,
    ButtonRootPropsDefs,
    ColorPropDef,
    MarginPropDefs,
    PaddingPropDefs,
    RadiusPropDefs,
    SizePropDef
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
      {...dataAttrs}
      disabled={disabled || readonly}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...rest}
    >
      <span>{props.children}</span>
    </button>
  );
};

export { AllButtonRootProps, Button, ButtonRootProps };
