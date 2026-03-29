"use client";

import clsx from "clsx";
import React, { FC, HTMLAttributes, isValidElement, useMemo } from "react";
import {
  ColorProp,
  MarginPropDefs,
  MarginProps,
  SizeProp,
  SizePropDef,
} from "../../../props";
import {
  filterChildren,
  matchesComponent,
  WithOptionalStrictChildren,
} from "../../../utils/filter-children";
import { getComponentProps } from "../../../utils/get-component-props";
import {
  ProgressBarFill,
  ProgressBarFillProps,
} from "../fill/progress-bar-fill";
import { ProgressBarContext } from "../progress-bar-context";
import {
  ProgressBarRootInternalProps,
  ProgressBarRootPropsDefs,
} from "./progress-bar-root.props";

interface AllProgressBarRootProps
  extends ProgressBarRootInternalProps, ColorProp, MarginProps, SizeProp {}

const ALLOWED_CHILDREN = [ProgressBarFill.displayName!];

type ProgressBarRootProps = AllProgressBarRootProps &
  WithOptionalStrictChildren<
    HTMLAttributes<HTMLDivElement>,
    ProgressBarFillProps
  >;

const ProgressBarRoot: FC<ProgressBarRootProps> = (props) => {
  const { value, size, color, variant, className, dataAttrs, ...rest } =
    getComponentProps(
      props,
      ProgressBarRootPropsDefs,
      MarginPropDefs,
      SizePropDef,
    );

  const validChildren = filterChildren(props.children, ALLOWED_CHILDREN, {
    parentDisplayName: ProgressBarRoot.displayName,
    allowedTypes: [ProgressBarFill],
  });

  const { fills, totalValue } = useMemo(() => {
    const fills = validChildren.filter(
      (child) =>
        isValidElement(child) && matchesComponent(child.type, ProgressBarFill),
    );

    if (fills.length > 0) {
      const totalValue = fills.reduce<number>(
        (sum, child) =>
          sum +
          (isValidElement(child)
            ? ((child.props as ProgressBarFillProps).value ?? 0)
            : 0),
        0,
      );

      return {
        fills,
        totalValue,
      };
    }

    return {
      fills: [<ProgressBarFill color={color} value={value} />],
      totalValue: value ?? 0,
    };
  }, [validChildren, color, value]);

  return (
    <ProgressBarContext.Provider value={{ color, variant, totalValue }}>
      <div
        data-size={size}
        data-color={color}
        data-variant={variant}
        className={clsx("progress-bar-root", className)}
        {...dataAttrs}
        {...rest}
      >
        {fills.map((fill, index) => (
          <React.Fragment key={index}>{fill}</React.Fragment>
        ))}
      </div>
    </ProgressBarContext.Provider>
  );
};
ProgressBarRoot.displayName = "ProgressBar.Root";

export { AllProgressBarRootProps, ProgressBarRoot, ProgressBarRootProps };
