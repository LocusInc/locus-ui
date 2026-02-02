import clsx from "clsx";
import * as React from "react";

interface SelectSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectSeparator = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(
  (props, ref) => {
    const { className, ...rest } = props;

    return (
      <div
        ref={ref}
        className={clsx("select-separator", className)}
        {...rest}
      />
    );
  }
);
SelectSeparator.displayName = "Select.Separator";

export { SelectSeparator, SelectSeparatorProps };
