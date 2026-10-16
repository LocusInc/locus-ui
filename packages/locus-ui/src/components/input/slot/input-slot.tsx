"use client";

import clsx from "clsx";
import { forwardRef, HTMLAttributes, useContext } from "react";
import {
  ColorProp,
  ColorPropDef,
  MarginPropDefs,
  MarginProps,
  PaddingPropDefs,
  PaddingProps,
} from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { InputContext } from "../input-context";
import { InputSlotInternalProps, InputSlotPropDefs } from "./input-slot.props";

type InputSlotProps = InputSlotInternalProps &
  ColorProp &
  MarginProps &
  PaddingProps &
  Omit<HTMLAttributes<HTMLDivElement>, "color">;

const InputSlot = forwardRef<HTMLDivElement, InputSlotProps>((props, ref) => {
  const context = useContext(InputContext);
  const { className, style, dataAttrs, color, variant, ...rest } = getComponentProps(
    props,
    InputSlotPropDefs,
    ColorPropDef,
    MarginPropDefs,
    PaddingPropDefs,
  );

  return (
    <div
      {...rest}
      {...dataAttrs}
      ref={ref}
      className={clsx("input-slot-content", className)}
      style={style}
      data-color={color ?? undefined}
      data-variant={variant ?? context?.variant ?? "clear"}
    />
  );
});
InputSlot.displayName = "Input.Slot";

export { InputSlot };
export type { InputSlotProps };
