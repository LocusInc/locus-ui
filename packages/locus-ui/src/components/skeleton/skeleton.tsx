import clsx from "clsx";
import * as React from "react";
import {
  MarginPropDefs,
  MarginProps,
  PaddingPropDefs,
  PaddingProps,
  SpacingProp,
} from "../../props";
import { getComponentProps } from "../../utils/get-component-props";
import { SkeletonInternalProps, SkeletonPropsDefs } from "./skeleton.props";

interface SkeletonExternalProps
  extends MarginProps, PaddingProps, SpacingProp {}

type SkeletonProps = SkeletonInternalProps &
  SkeletonExternalProps &
  React.HTMLAttributes<HTMLDivElement>;

/**
 * A versatile container used to provide layout and styling capabilities.
 */
const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const { loading, variant, className, dataAttrs, children, ...rest } =
      getComponentProps(
        props,
        SkeletonPropsDefs,
        MarginPropDefs,
        PaddingPropDefs,
      );

    if (loading === false) {
      return children;
    }

    return (
      <div
        ref={ref}
        className={clsx("skeleton", className)}
        {...dataAttrs}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
Skeleton.displayName = "Skeleton";

export { Skeleton };
