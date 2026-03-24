"use client";

import clsx from "clsx";
import { FC, HTMLAttributes, useContext } from "react";
import { ColorProp, MarginProps, SizeProp } from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { ProgressBarContext } from "../progress-bar-context";
import {
  ProgressBarFillInternalProps,
  ProgressBarFillPropsDefs,
} from "./progress-bar-fill.props";

interface AllProgressBarFillProps
  extends ProgressBarFillInternalProps, ColorProp, MarginProps, SizeProp {}

/**
 * A ProgressBarFill.
 */
type ProgressBarFillProps = AllProgressBarFillProps &
  HTMLAttributes<HTMLDivElement>;

const ProgressBarFill: FC<ProgressBarFillProps> = (props) => {
  const context = useContext(ProgressBarContext);
  const { value, color, style, className, dataAttrs, ...rest } =
    getComponentProps(props, ProgressBarFillPropsDefs);

  return (
    <div
      data-color={color ?? context?.color}
      data-variant={context?.variant}
      style={{ ...style, width: `${((value ?? 0) / ((context?.totalValue ?? 0) > 1 ? context!.totalValue! : 1)) * 100}%` }}
      className={clsx("progress-bar-fill", className)}
      {...dataAttrs}
      {...rest}
    />
  );
};
ProgressBarFill.displayName = "ProgressBar.Fill";

export { AllProgressBarFillProps, ProgressBarFill, ProgressBarFillProps };
