import clsx from "clsx";
import * as React from "react";
import { getComponentProps } from "../../../utils/get-component-props";
import { Text } from "../../text/text";
import {
  SelectGroupInternalProps,
  SelectGroupsPropDefs,
} from "./select-group.props";

interface AllSelectGroupProps extends SelectGroupInternalProps {}

type SelectGroupProps = AllSelectGroupProps &
  React.HTMLAttributes<HTMLDivElement>;

const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  (props, ref) => {
    const { className, children, dataAttrs, ...rest } = getComponentProps(
      props,
      SelectGroupsPropDefs
    );

    return (
      <div
        ref={ref}
        role="group"
        className={clsx("select-group", className)}
        {...rest}
      >
        <Text className="select-group-label" disabled>
          {props.title}
        </Text>

        {children}
      </div>
    );
  }
);
SelectGroup.displayName = "Select.Group";

export { AllSelectGroupProps, SelectGroup, SelectGroupProps };
