"use client";

import clsx from "clsx";
import {
  Children,
  forwardRef,
  InputHTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
  useId,
} from "react";
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
} from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { InputRootInternalProps, InputRootPropsDefs } from "./input-root.props";
import { InputContext } from "../input-context";
import type { InputLabel, InputLabelProps } from "../label/input-label";

type InputRootProps = InputRootInternalProps &
  ColorProp &
  MarginProps &
  PaddingProps &
  RadiusProps &
  SizeProp &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color" | "children"> & {
    /** Content before the native input, such as an icon or prefix. */
    startSlot?: ReactNode;
    /** Content after the native input, such as a badge or button. */
    endSlot?: ReactNode;
    /** Native input size in characters; use size for the visual size. */
    htmlSize?: number;
    /** An Input.Label child, positioned relative to the field. */
    children?: ReactElement<InputLabelProps, typeof InputLabel>;
  };

const InputRoot = forwardRef<HTMLInputElement, InputRootProps>((props, ref) => {
  const {
    className,
    style,
    dataAttrs,
    color,
    variant = "outlined",
    size,
    startSlot,
    endSlot,
    htmlSize,
    disabled,
    readOnly,
    children,
    id,
    type = "text",
    ...rest
  } = getComponentProps(
    props,
    InputRootPropsDefs,
    ColorPropDef,
    MarginPropDefs,
    PaddingPropDefs,
    RadiusPropDefs,
    SizePropDef,
  );

  const generatedId = useId();
  const inputId = id ?? generatedId;
  const label = Children.toArray(children).find(
    (child): child is ReactElement<InputLabelProps> =>
      isValidElement<InputLabelProps>(child),
  );
  const labelPosition = label?.props.position ?? "top";
  const insideLabel = labelPosition === "inside";

  const field = (
    <div
      className={clsx("input", className)}
      style={style}
      {...dataAttrs}
      data-color={color ?? true}
      data-size={size}
      data-variant={variant}
      data-disabled={disabled ? true : undefined}
      data-readonly={readOnly ? true : undefined}
      data-invalid={
        rest["aria-invalid"] === true || rest["aria-invalid"] === "true"
          ? true
          : undefined
      }
    >
      {startSlot != null && (
        <div className="input-slot" data-side="start">
          {startSlot}
        </div>
      )}
      {insideLabel && label}
      <input
        {...rest}
        ref={ref}
        id={inputId}
        className="input-field"
        type={type}
        size={htmlSize}
        disabled={disabled}
        readOnly={readOnly}
      />
      {endSlot != null && (
        <div className="input-slot" data-side="end">
          {endSlot}
        </div>
      )}
    </div>
  );

  return (
    <InputContext.Provider value={{ inputId, disabled, variant }}>
      {label && !insideLabel ? (
        <div className="input-layout" data-label-position={labelPosition}>
          {label}
          {field}
        </div>
      ) : (
        field
      )}
    </InputContext.Provider>
  );
});
InputRoot.displayName = "Input.Root";

export { InputRoot };
type InputProps = InputRootProps;

export type { InputProps, InputRootProps };
