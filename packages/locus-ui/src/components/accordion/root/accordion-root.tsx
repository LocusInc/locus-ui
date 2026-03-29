"use client";

import clsx from "clsx";
import { FC, HTMLAttributes, ReactElement, useMemo, useRef } from "react";
import { SizeProp, SizePropDef } from "../../../props";
import {
  filterChildren,
  WithStrictChildren,
} from "../../../utils/filter-children";
import { getComponentProps } from "../../../utils/get-component-props";
import { useControllableState } from "../../../utils/use-controllable-state";
import { AccordionContext } from "../accordion-context";
import { AccordionItem, AccordionItemProps } from "../item/accordion-item";
import {
  AccordionRootInternalProps,
  AccordionRootPropsDefs,
} from "./accordion-root.props";

interface AllAccordionRootProps extends AccordionRootInternalProps, SizeProp {}

const ALLOWED_CHILDREN = [AccordionItem.displayName!];

/**
 * A versatile Accordion component, managing state, context, and styling.
 */
type AccordionRootProps = AllAccordionRootProps &
  WithStrictChildren<HTMLAttributes<HTMLDivElement>, AccordionItemProps>;

const AccordionRoot: FC<AccordionRootProps> = (props) => {
  const {
    variant,
    multiple,
    size,
    value: propValue,
    onValueChange,
    className,
    dataAttrs,
    ...rest
  } = getComponentProps(props, AccordionRootPropsDefs, SizePropDef);

  const [value, setValue] = useControllableState({
    value: propValue,
    defaultValue: propValue ?? null,
    onChange: onValueChange,
  });

  const validChildren = filterChildren(props.children, ALLOWED_CHILDREN, {
    parentDisplayName: AccordionRoot.displayName,
  }) as ReactElement<{ value?: string; children?: React.ReactNode }>[];

  const itemsRef = useRef<Map<string, HTMLDivElement>>(new Map());
  const itemValues = useRef<string[]>([]);

  const contextValue = useMemo(
    () => ({
      variant,
      multiple,
      value,
      setValue,
      onValueChange,
      itemsRef,
      itemValues,
    }),
    [variant, multiple, value, setValue, onValueChange],
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        className={clsx("accordion-root", className)}
        {...dataAttrs}
        {...rest}
      >
        {validChildren.map((child, index) => (
          <AccordionItem
            key={index}
            value={child.props.value ?? String(index)}
            {...child.props}
          >
            {child.props.children}
          </AccordionItem>
        ))}
      </div>
    </AccordionContext.Provider>
  );
};
AccordionRoot.displayName = "Accordion";

export { AccordionRoot, AccordionRootProps, AllAccordionRootProps };
