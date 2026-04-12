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
import { GridInternalProps, GridPropsDefs } from "./grid.props";

interface GridExternalProps extends MarginProps, PaddingProps, SpacingProp {}

type GridProps = GridInternalProps &
  GridExternalProps &
  React.HTMLAttributes<HTMLDivElement>;

/**
 * A layout component that uses CSS Grid for two-dimensional layouts.
 */
const Grid = React.forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const { className, dataAttrs, children, ...rest } = getComponentProps(
    props,
    GridPropsDefs,
    MarginPropDefs,
    PaddingPropDefs,
    SpacingPropDef,
  );

  return (
    <div ref={ref} className={clsx("grid", className)} {...dataAttrs} {...rest}>
      {children}
    </div>
  );
});
Grid.displayName = "Grid";

export { Grid };
