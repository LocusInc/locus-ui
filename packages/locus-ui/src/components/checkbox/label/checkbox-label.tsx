"use client";

import clsx from "clsx";
import React from "react";
import { getComponentProps } from "../../../utils/get-component-props";
import { Text } from "../../text";
import { useCheckboxContext } from "../checkbox-context";
import {
  CheckboxLabelInternalProps,
  CheckboxLabelPropDefs,
} from "./checkbox-label.props";

interface AllCheckboxLabelProps extends CheckboxLabelInternalProps {}

type CheckboxLabelProps = AllCheckboxLabelProps &
  Omit<React.HTMLAttributes<HTMLLabelElement>, "children"> & {
    children?: React.ReactNode;
  };

/** Label for a checkbox component. */
const CheckboxLabel = React.forwardRef<HTMLLabelElement, CheckboxLabelProps>(
  (props, ref) => {
    const context = useCheckboxContext();
    const { className, children, position } = getComponentProps(
      props,
      CheckboxLabelPropDefs,
    );

    React.useLayoutEffect(() => {
      context.setLabelPosition?.(position ?? "right");
    }, [position, context.setLabelPosition]);

    return (
      <label
        ref={ref}
        htmlFor={context.labelId}
        className={clsx("checkbox-label", className)}
        {...(position && { [`data-position`]: position })}
      >
        <Text>{children}</Text>
      </label>
    );
  },
);
CheckboxLabel.displayName = "Checkbox.Label";

export { AllCheckboxLabelProps, CheckboxLabel, CheckboxLabelProps };
