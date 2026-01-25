import clsx from "clsx";
import React, { FC } from "react";
import { MarginProps, PaddingProps } from "../../props";
import { getComponentProps } from "../../utils/get-component-props";
import { SeparatorInternalProps, SeparatorPropsDefs } from "./separator.props";

interface AllSeparatorProps
  extends SeparatorInternalProps,
    MarginProps,
    PaddingProps {}

type SeparatorProps = AllSeparatorProps & React.HTMLAttributes<HTMLDivElement>;

/**
 * A component for visually separating content with a line
 */
const Separator: FC<SeparatorProps> = (props) => {
  const { className, dataAttrs, style } = getComponentProps(
    props,
    SeparatorPropsDefs
  );

  return (
    <div
      className={clsx("separator", className)}
      style={style}
      {...dataAttrs}
    />
  );
};
Separator.displayName = "Separator";

export { AllSeparatorProps, Separator, SeparatorProps };
