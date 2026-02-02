import clsx from "clsx";
import * as React from "react";
import { Text } from "../../text";
import { useSelectContext } from "../select-context";

export interface SelectValueProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  placeholder?: string;
}

export const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  (props, ref) => {
    const { className, placeholder: placeholderProp, ...rest } = props;
    const context = useSelectContext();
    const placeholder = placeholderProp ?? context.placeholder;

    return (
      <span
        ref={ref}
        className={clsx("select-value", className)}
        data-placeholder={!context.value ? "" : undefined}
        {...rest}
      >
        <Text disabled={context.disabled}>
          {context.displayValue || placeholder}
        </Text>
      </span>
    );
  }
);
SelectValue.displayName = "Select.Value";
