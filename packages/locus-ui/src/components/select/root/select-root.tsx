"use client";

import clsx from "clsx";
import {
  FC,
  HTMLAttributes,
  ReactNode,
  RefObject,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  MarginPropDefs,
  MarginProps,
  RadiusPropDefs,
  RadiusProps,
  RoundnessPropDef,
} from "../../../props";
import {
  filterChildren,
  WithStrictChildren,
} from "../../../utils/filter-children";
import { getComponentProps } from "../../../utils/get-component-props";
import { useControllableState } from "../../../utils/use-controllable-state";
import { Box } from "../../box";
import { SelectContent, SelectContentProps } from "../content/select-content";
import { SelectLabel, SelectLabelProps } from "../label/select-label";
import { LabelPosition } from "../label/select-label.props";
import { SelectContext } from "../select-context";
import { SelectTrigger, SelectTriggerProps } from "../trigger/select-trigger";
import {
  SelectRootInternalProps,
  SelectRootPropsDefs,
  SelectVariant,
} from "./select-root.props";

interface AllSelectRootProps
  extends SelectRootInternalProps,
    MarginProps,
    RadiusProps {}

const ALLOWED_CHILDREN = [
  SelectLabel.displayName!,
  SelectTrigger.displayName!,
  SelectContent.displayName!,
];

type SelectRootProps = AllSelectRootProps &
  WithStrictChildren<
    HTMLAttributes<HTMLSelectElement>,
    SelectLabelProps | SelectTriggerProps | SelectContentProps
  >;

const SelectRoot: FC<SelectRootProps> = (props) => {
  const {
    children,
    className,
    dataAttrs,
    value: valueProp,
    defaultValue = "",
    onValueChange,
    disabled = false,
    required = false,
    placeholder,
    variant,
    name,
  } = getComponentProps(
    props,
    SelectRootPropsDefs,
    MarginPropDefs,
    RadiusPropDefs,
    RoundnessPropDef
  );

  const [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue,
    onChange: onValueChange,
  });

  const [open, setOpen] = useState(false);

  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [labelPosition, setLabelPosition] = useState<LabelPosition>("top");
  const [triggerVariant, setTriggerVariant] =
    useState<SelectVariant>("outlined");
  const [displayValue, setDisplayValue] = useState<ReactNode>(null);

  const labelId = useId();

  const rootRef = useRef<HTMLDivElement | HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const itemValues = useRef<string[]>([]);

  const contextValue = useMemo(
    () => ({
      open,
      value,
      displayValue,
      onOpenChange: setOpen,
      onValueChange: setValue,
      setDisplayValue,
      rootRef,
      triggerRef,
      contentRef,
      labelPosition,
      setLabelPosition,
      triggerVariant,
      setTriggerVariant,
      disabled,
      required,
      placeholder,
      name,
      labelId,
      highlightedIndex,
      setHighlightedIndex,
      itemsRef,
      itemValues,
    }),
    [
      open,
      value,
      displayValue,
      disabled,
      required,
      name,
      placeholder,
      labelId,
      highlightedIndex,
      labelPosition,
      triggerVariant,
    ]
  );

  useLayoutEffect(() => {
    setTriggerVariant?.(variant ?? "outlined");
  }, [variant, setTriggerVariant]);

  const validChildren = filterChildren(children, ALLOWED_CHILDREN, {
    parentDisplayName: SelectRoot.displayName,
    allowedTypes: [SelectLabel, SelectTrigger, SelectContent],
  });

  const labelInside = labelPosition === "inside";

  const handleClick = () => {
    if (!disabled) {
      setOpen(!open);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    switch (event.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault();
        setOpen(true);
        break;
    }
  };

  if (labelInside) {
    return (
      <SelectContext.Provider value={contextValue}>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-disabled={disabled}
          disabled={disabled}
          ref={rootRef as RefObject<HTMLButtonElement>}
          data-state={open ? "open" : "closed"}
          data-disabled={disabled ? "" : undefined}
          className={clsx("select-root", className)}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          {...dataAttrs}
        >
          {validChildren}
          {name && <input type="hidden" name={name} value={value} />}
        </button>
      </SelectContext.Provider>
    );
  }

  return (
    <SelectContext.Provider value={contextValue}>
      <Box
        ref={rootRef as RefObject<HTMLDivElement>}
        className={clsx("select-root", className)}
        {...dataAttrs}
      >
        {validChildren}
        {name && <input type="hidden" name={name} value={value} />}
      </Box>
    </SelectContext.Provider>
  );
};
SelectRoot.displayName = "Select.Root";

export { AllSelectRootProps, SelectRoot, SelectRootProps };
