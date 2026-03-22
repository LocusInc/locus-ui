import clsx from "clsx";
import React, { FC, useEffect, useMemo } from "react";
import { filterChildren } from "../../../utils/filter-children";
import { getComponentProps } from "../../../utils/get-component-props";
import { useAccordionContext } from "../accordion-context";
import { AccordionContent } from "../content/accordion-content";
import { AccordionHeader } from "../header/accordion-header";
import {
  AccordionItemInternalProps,
  AccordionItemPropDefs,
} from "./accordion-item.props";

interface AllAccordionItemProps extends AccordionItemInternalProps {}

const ALLOWED_CHILDREN = [
  AccordionHeader.displayName!,
  AccordionContent.displayName!,
];

/**
 * An individual item within an accordion. Contains the header and content for a single section of the accordion.
 */
type AccordionItemProps = AllAccordionItemProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: React.ReactNode;
  };

const AccordionItem: FC<AccordionItemProps> = (props) => {
  const context = useAccordionContext();
  const { open, value, className, dataAttrs, ...rest } = getComponentProps(
    props,
    AccordionItemPropDefs,
  );

  const itemOpen =
    open ??
    (context.multiple
      ? context.value?.includes(value ?? "")
      : context.value === value);

  const validChildren = filterChildren(props.children, ALLOWED_CHILDREN, {
    parentDisplayName: AccordionItem.displayName,
  }) as React.ReactElement[];

  const { header, content } = useMemo(() => {
    const header = validChildren.find(
      (child) =>
        (child.type as React.FC).displayName === AccordionHeader.displayName,
    );

    const content = validChildren.find(
      (child) =>
        (child.type as React.FC).displayName === AccordionContent.displayName,
    );

    return { header, content };
  }, [validChildren]);

  useEffect(() => {
    if (!value) return;

    return () => {
      const values = context.itemValues.current;
      const index = values.indexOf(value);
      if (index > -1) values.splice(index, 1);
    };
  }, [value]);

  const headerWithValue = header
    ? React.cloneElement(header as React.ReactElement<{ value?: string }>, {
        value,
      })
    : null;

  return (
    <div
      data-variant={context.variant}
      className={clsx("accordion-item", className)}
      {...rest}
      data-open={itemOpen}
    >
      {headerWithValue}
      {content}
    </div>
  );
};
AccordionItem.displayName = "Accordion.Item";

export { AccordionItem, AccordionItemProps, AllAccordionItemProps };
