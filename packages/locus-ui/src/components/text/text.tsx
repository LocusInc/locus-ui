import clsx from "clsx";
import React from "react";
import {
  ColorProp,
  ColorPropDef,
  MarginPropDefs,
  MarginProps,
  PaddingPropDefs,
  PaddingProps,
} from "../../props";
import { getComponentProps } from "../../utils/get-component-props";
import { TextInternalProps, TextPropsDefs } from "./text.props";

interface TextExternalProps extends MarginProps, PaddingProps, ColorProp {}

type TextProps = TextInternalProps &
  TextExternalProps &
  React.HTMLAttributes<HTMLParagraphElement>;

/**
 * A component for displaying text with customizable styling and layout.
 */
export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (props, ref) => {
    const { className, dataAttrs, children, ...rest } = getComponentProps(
      props,
      TextPropsDefs,
      MarginPropDefs,
      PaddingPropDefs,
      ColorPropDef,
    );

    return (
      <p ref={ref} {...dataAttrs} className={clsx("text", className)} {...rest}>
        {children}
      </p>
    );
  },
);
