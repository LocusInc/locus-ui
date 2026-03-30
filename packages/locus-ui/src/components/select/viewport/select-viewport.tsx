"use client";

import clsx from "clsx";
import * as React from "react";

interface SelectViewportProps extends React.HTMLAttributes<HTMLDivElement> {}

const SelectViewport = React.forwardRef<HTMLDivElement, SelectViewportProps>(
  (props, ref) => {
    const { className, children, ...rest } = props;

    return (
      <div ref={ref} className={clsx("select-viewport", className)} {...rest}>
        {children}
      </div>
    );
  },
);
SelectViewport.displayName = "Select.Viewport";

export { SelectViewport, SelectViewportProps };
