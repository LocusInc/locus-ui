"use client";

import clsx from "clsx";
import {
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
  ColorPropDef,
  MarginPropDefs,
  MarginProps,
  SizeProp,
  SizePropDef,
} from "../../../props";
import {
  filterChildren,
  matchesComponent,
  WithStrictChildren,
} from "../../../utils/filter-children";
import { getComponentProps } from "../../../utils/get-component-props";
import { useControllableState } from "../../../utils/use-controllable-state";
import {
  SwitchIndicator,
  SwitchIndicatorProps,
} from "../indicator/switch-indicator";
import { SwitchLabel, SwitchLabelProps } from "../label/switch-label";
import { LabelPosition } from "../label/switch-label.props";
import { SwitchContext } from "../switch-context";
import {
  SwitchRootInternalProps,
  SwitchRootPropsDefs,
} from "./switch-root.props";

interface AllSwitchRootProps
  extends
    SwitchRootInternalProps,
    AlignProp,
    ColorProp,
    MarginProps,
    SizeProp {}

const ALLOWED_CHILDREN = [
  SwitchLabel.displayName!,
  SwitchIndicator.displayName!,
];

/**
 * A versatile Switch, managing state, context, and styling.
 */
type SwitchRootProps = AllSwitchRootProps &
  WithStrictChildren<
    HTMLAttributes<HTMLDivElement>,
    SwitchLabelProps | SwitchIndicatorProps
  >;

const SwitchRoot: FC<SwitchRootProps> = (props) => {
  const {
    name,
    size,
    color,
    variant,
    checked,
    dataAttrs,
    style,
    className,
    onCheckedChange,
    value: valueProp,
    disabled = false,
    required = false,
    readonly = false,
    defaultChecked = false,
  } = getComponentProps(
    props,
    SwitchRootPropsDefs,
    AlignPropDef,
    MarginPropDefs,
    SizePropDef,
    ColorPropDef,
  );

  const [value, setValue] = useControllableState<boolean>({
    value: valueProp || checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });

  const labelId = useId();
  const [labelPosition, setLabelPosition] = useState<LabelPosition>("right");

  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const validChildren = filterChildren(props.children, ALLOWED_CHILDREN, {
    parentDisplayName: SwitchRoot.displayName,
    allowedTypes: [SwitchLabel, SwitchIndicator],
  });

  const { restDataAttrs } = useMemo(() => {
    const { ["data-color"]: _, ...restDataAttrs } = dataAttrs || {};
    return { restDataAttrs };
  }, [dataAttrs]);

  const { indicator, otherChildren } = useMemo(() => {
    const indicatorIndex = validChildren.findIndex(
      (child) =>
        isValidElement(child) && matchesComponent(child.type, SwitchIndicator),
    );

    if (indicatorIndex > -1) {
      return {
        indicator: validChildren[indicatorIndex],
        otherChildren: validChildren.filter((_, i) => i !== indicatorIndex),
      };
    }

    return {
      indicator: <SwitchIndicator size={size} />,
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
      focused,
      setFocused,
      disabled,
      readonly,
      required,
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
      focused,
      disabled,
      readonly,
      required,
    ],
  );

  const handleClick = () => {
    if (disabled || readonly) return;
    setValue(!value);
  };

  return (
    <SwitchContext.Provider value={contextValue}>
      <div
        className={clsx("switch-root", className)}
        onClick={() => handleClick()}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...restDataAttrs}
      >
        {otherChildren}

        <div
          className={clsx("switch-container", className)}
          data-size={size}
          data-color={color}
          data-checked={value}
          data-hovered={hovered}
          data-focused={focused}
          data-variant={variant}
          style={style}
        >
          {indicator}
        </div>

        {name && <input type="hidden" name={name} value={String(value)} />}
      </div>
    </SwitchContext.Provider>
  );
};
SwitchRoot.displayName = "Switch";

export { AllSwitchRootProps, SwitchRoot, SwitchRootProps };
