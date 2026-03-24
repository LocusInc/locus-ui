import clsx from "clsx";
import * as React from "react";
import {
  MarginPropDefs,
  MarginProps,
  PaddingPropDefs,
  PaddingProps,
  RadiusPropDefs,
  RadiusProps,
  RoundnessProp,
  RoundnessPropDef,
  SpacingProp,
  SpacingPropDef,
} from "../../props";
import { getComponentProps } from "../../utils/get-component-props";
import { PanelInternalProps, PanelPropsDefs } from "./panel.props";

interface PanelExternalProps
  extends MarginProps, PaddingProps, SpacingProp, RadiusProps, RoundnessProp {}

type PanelProps = PanelInternalProps &
  PanelExternalProps &
  React.HTMLAttributes<HTMLDivElement>;

/**
 * A versatile container used to provide layout and styling capabilities.
 */
const Panel = React.forwardRef<HTMLDivElement, PanelProps>((props, ref) => {
  const { className, dataAttrs, children, ...rest } = getComponentProps(
    props,
    PanelPropsDefs,
    MarginPropDefs,
    PaddingPropDefs,
    SpacingPropDef,
    RadiusPropDefs,
    RoundnessPropDef,
  );

  return (
    <div
      ref={ref}
      className={clsx("panel", className)}
      {...dataAttrs}
      {...rest}
    >
      {children}
    </div>
  );
});
Panel.displayName = "Panel";

export { Panel };
