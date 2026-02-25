"use client";

import clsx from "clsx";
import React, {
  FC,
  HTMLAttributes,
  isValidElement,
  useId,
  useMemo,
  useState,
} from "react";
import {
  AlignProp,
  AlignPropDef,
  ColorProp,
  MarginPropDefs,
  MarginProps,
  SizeProp,
  SizePropDef,
} from "../../../props";
import {
  filterChildren,
  WithStrictChildren,
} from "../../../utils/filter-children";
import { getComponentProps } from "../../../utils/get-component-props";
import { useControllableState } from "../../../utils/use-controllable-state";
import { CheckboxContext } from "../checkbox-context";
import {
  CheckboxIndicator,
  CheckboxIndicatorProps,
} from "../indicator/checkbox-indicator";
import { CheckboxLabel, CheckboxLabelProps } from "../label/checkbox-label";
import { LabelPosition } from "../label/checkbox-label.props";
import {
  CheckboxRootInternalProps,
  CheckboxRootPropsDefs,
} from "./checkbox-root.props";

interface AllCheckboxRootProps
  extends CheckboxRootInternalProps,
    AlignProp,
    ColorProp,
    MarginProps,
    SizeProp {}

const ALLOWED_CHILDREN = [
  CheckboxLabel.displayName!,
  CheckboxIndicator.displayName!,
];

/**
 * A versatile Checkbox, managing state, context, and styling.
 */
type CheckboxRootProps = AllCheckboxRootProps &
  WithStrictChildren<
    HTMLAttributes<HTMLDivElement>,
    CheckboxLabelProps | CheckboxIndicatorProps
  >;

const CheckboxRoot: FC<CheckboxRootProps> = (props) => {
  const {
    name,
    size,
    color,
    variant,
    checked,
    dataAttrs,
    onCheckedChange,
    value: valueProp,
    disabled = false,
    required = false,
    readonly = false,
    highContrast = false,
    indeterminate = false,
    defaultChecked = false,
  } = getComponentProps(
    props,
    CheckboxRootPropsDefs,
    AlignPropDef,
    MarginPropDefs,
    SizePropDef
  );

  const [value, setValue] = useControllableState<boolean>({
    value: valueProp || checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });

  const labelId = useId();
  const [labelPosition, setLabelPosition] = useState<LabelPosition>("right");

  const [hovered, setHovered] = useState(false);

  const validChildren = filterChildren(props.children, ALLOWED_CHILDREN, {
    parentDisplayName: CheckboxRoot.displayName,
  });

  const { indicator, otherChildren } = useMemo(() => {
    const indicatorIndex = validChildren.findIndex(
      (child) =>
        isValidElement(child) &&
        (child.type as React.FC).displayName === CheckboxIndicator.displayName
    );

    if (indicatorIndex > -1) {
      return {
        indicator: validChildren[indicatorIndex],
        otherChildren: validChildren.filter((_, i) => i !== indicatorIndex),
      };
    }

    return {
      indicator: <CheckboxIndicator size={size} />,
      otherChildren: validChildren,
    };
  }, [validChildren, size]);

  const contextValue = useMemo(
    () => ({
      name,
      value,
      color,
      setValue,
      onCheckedChange,
      labelId,
      labelPosition,
      setLabelPosition,
      variant,
      hovered,
      setHovered,
      disabled,
      readonly,
      required,
      indeterminate,
      highContrast,
    }),
    [
      name,
      value,
      color,
      onCheckedChange,
      setValue,
      labelId,
      labelPosition,
      hovered,
      disabled,
      readonly,
      required,
      indeterminate,
      highContrast,
    ]
  );

  const handleClick = () => {
    if (disabled || readonly) return;
    setValue(!value);
  };

  return (
    <CheckboxContext.Provider value={contextValue}>
      <div
        className={clsx("checkbox-root", props.className)}
        onClick={() => handleClick()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...dataAttrs}
      >
        {indicator}
        {otherChildren}
        {name && <input type="hidden" name={name} value={String(value)} />}
      </div>
    </CheckboxContext.Provider>
  );
};
CheckboxRoot.displayName = "Checkbox";

export { AllCheckboxRootProps, CheckboxRoot, CheckboxRootProps };
