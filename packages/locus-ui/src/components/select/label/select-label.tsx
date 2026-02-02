import clsx from "clsx";
import * as React from "react";
import { getComponentProps } from "../../../utils/get-component-props";
import { Text } from "../../text";
import { useSelectContext } from "../select-context";
import {
  SelectLabelInternalProps,
  SelectLabelPropDefs,
} from "./select-label.props";

interface AllSelectLabelProps extends SelectLabelInternalProps {}

type SelectLabelProps = AllSelectLabelProps &
  Omit<React.HTMLAttributes<HTMLLabelElement>, "children"> & {
    children?: React.ReactNode;
  };

/** Label for a select component. */
const SelectLabel = React.forwardRef<HTMLLabelElement, SelectLabelProps>(
  (props, ref) => {
    const context = useSelectContext();
    const { className, children, position, dataAttrs } = getComponentProps(
      props,
      SelectLabelPropDefs
    );

    React.useLayoutEffect(() => {
      context.setLabelPosition?.(position ?? "top");
    }, [position, context.setLabelPosition]);

    return (
      <label
        ref={ref}
        htmlFor={context.labelId}
        className={clsx("select-label", className)}
        {...dataAttrs}
      >
        <Text disabled={context.disabled}>{children}</Text>
      </label>
    );
  }
);
SelectLabel.displayName = "Select.Label";

export { AllSelectLabelProps, SelectLabel, SelectLabelProps };
