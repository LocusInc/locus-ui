"use client";

import clsx from "clsx";
import React from "react";
import { getComponentProps } from "../../../utils/get-component-props";
import { Text } from "../../text";
import { useSwitchContext } from "../switch-context";
import {
  SwitchLabelInternalProps,
  SwitchLabelPropDefs,
} from "./switch-label.props";

interface AllSwitchLabelProps extends SwitchLabelInternalProps {}

type SwitchLabelProps = AllSwitchLabelProps &
  Omit<React.HTMLAttributes<HTMLLabelElement>, "children"> & {
    children?: React.ReactNode;
  };

/** Label for a switch component. */
const SwitchLabel = React.forwardRef<HTMLLabelElement, SwitchLabelProps>(
  (props, ref) => {
    const context = useSwitchContext();
    const { className, children, position } = getComponentProps(
      props,
      SwitchLabelPropDefs,
    );

    React.useLayoutEffect(() => {
      context.setLabelPosition?.(position ?? "right");
    }, [position, context.setLabelPosition]);

    return (
      <label
        ref={ref}
        htmlFor={context.labelId}
        className={clsx("switch-label", className)}
        {...(position && { [`data-position`]: position })}
      >
        <Text>{children}</Text>
      </label>
    );
  },
);
SwitchLabel.displayName = "Switch.Label";

export { AllSwitchLabelProps, SwitchLabel, SwitchLabelProps };
