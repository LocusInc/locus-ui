import clsx from "clsx";
import * as React from "react";
import {
  MarginPropDefs,
  MarginProps,
  PaddingPropDefs,
  PaddingProps,
  SpacingProp,
  SpacingPropDef,
} from "../../props";
import { getComponentProps } from "../../utils/get-component-props";
import { FlexInternalProps, FlexPropsDefs } from "./flex.props";

interface FlexExternalProps extends MarginProps, PaddingProps, SpacingProp {}

type FlexProps = FlexInternalProps &
  FlexExternalProps &
  React.HTMLAttributes<HTMLDivElement>;

/**
 * A versatile container used to provide layout and styling capabilities.
 */
const Flex = React.forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  const { className, dataAttrs, children, ...rest } = getComponentProps(
    props,
    FlexPropsDefs,
    MarginPropDefs,
    PaddingPropDefs,
    SpacingPropDef,
  );

  return (
    <div ref={ref} className={clsx("flex", className)} {...dataAttrs} {...rest}>
      {children}
    </div>
  );
});
Flex.displayName = "Flex";

export { Flex };
