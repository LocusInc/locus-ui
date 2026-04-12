"use client";

import clsx from "clsx";
import { FC, HTMLAttributes, useContext } from "react";
import { ColorProp, MarginProps, SizeProp } from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { TooltipContext } from "../tooltip-context";
import {
  TooltipContentInternalProps,
  TooltipContentPropsDefs,
} from "./tooltip-content.props";

interface AllTooltipContentProps
  extends TooltipContentInternalProps, ColorProp, MarginProps, SizeProp {}

/**
 * A TooltipContent.
 */
type TooltipContentProps = AllTooltipContentProps &
  HTMLAttributes<HTMLDivElement>;

const TooltipContent: FC<TooltipContentProps> = (props) => {
  const context = useContext(TooltipContext);
  const { variant, style, className, dataAttrs, ...rest } = getComponentProps(
    props,
    TooltipContentPropsDefs,
  );

  const arrowSide =
    context?.side === "top"
      ? "bottom"
      : context?.side === "bottom"
        ? "top"
        : context?.side === "left"
          ? "right"
          : "left";

  return (
    <div
      data-variant={variant}
      data-side={context?.side}
      className={clsx("tooltip-content", className)}
      {...dataAttrs}
      {...rest}
    >
      {rest.children}
      <div className="tooltip-arrow" data-side={arrowSide} />
    </div>
  );
};
TooltipContent.displayName = "Tooltip.Content";

export { AllTooltipContentProps, TooltipContent, TooltipContentProps };
