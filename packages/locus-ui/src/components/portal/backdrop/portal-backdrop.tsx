"use client";

import clsx from "clsx";
import * as React from "react";
import { getComponentProps } from "../../../utils/get-component-props";
import { usePortalContext } from "../portal-context";
import {
  PortalBackdropInternalProps,
  PortalBackdropPropsDefs,
} from "./portal-backdrop.props";

interface AllPortalBackdropProps extends PortalBackdropInternalProps {}

type PortalBackdropProps = AllPortalBackdropProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "children">;

/** A backdrop optionally displayed behind portal content when open. */
const PortalBackdrop = React.forwardRef<HTMLDivElement, PortalBackdropProps>(
  (props, ref) => {
    const context = usePortalContext();

    const { className, dataAttrs, ...rest } = getComponentProps(
      props,
      PortalBackdropPropsDefs
    );

    if (!context.open) return null;

    return (
      <div
        ref={ref}
        className={clsx("portal-backdrop", className)}
        {...dataAttrs}
        {...rest}
      />
    );
  }
);
PortalBackdrop.displayName = "Portal.Backdrop";

export { AllPortalBackdropProps, PortalBackdrop, PortalBackdropProps };
