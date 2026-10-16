"use client";

import clsx from "clsx";
import { forwardRef, LabelHTMLAttributes } from "react";
import { getComponentProps } from "../../../utils/get-component-props";
import { Text } from "../../text";
import { useInputContext } from "../input-context";
import { InputLabelInternalProps, InputLabelPropDefs } from "./input-label.props";

type InputLabelProps = InputLabelInternalProps &
  Omit<LabelHTMLAttributes<HTMLLabelElement>, "htmlFor">;

const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>((props, ref) => {
  const { inputId, disabled } = useInputContext();
  const { className, children, position, dataAttrs, ...rest } = getComponentProps(
    props,
    InputLabelPropDefs,
  );

  return (
    <label
      {...rest}
      {...dataAttrs}
      ref={ref}
      htmlFor={inputId}
      className={clsx("input-label", className)}
      data-position={position}
    >
      <Text disabled={disabled}>{children}</Text>
    </label>
  );
});
InputLabel.displayName = "Input.Label";

export { InputLabel };
export type { InputLabelProps };
