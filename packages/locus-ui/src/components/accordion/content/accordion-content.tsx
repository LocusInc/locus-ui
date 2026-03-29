"use client";

import clsx from "clsx";
import { FC } from "react";
import { PaddingProps } from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { useAccordionContext } from "../accordion-context";
import {
  AccordionContentInternalProps,
  AccordionContentPropDefs,
} from "./accordion-content.props";

interface AllAccordionContentProps
  extends AccordionContentInternalProps, PaddingProps {}

type AccordionContentProps = AllAccordionContentProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: React.ReactNode;
  };

/** Content for an accordion item */
const AccordionContent: FC<AccordionContentProps> = (props) => {
  const context = useAccordionContext();
  const { className, children, dataAttrs, ...rest } = getComponentProps(
    props,
    AccordionContentPropDefs,
  );

  return (
    <div
      data-variant={context.variant}
      className={clsx("accordion-content", className)}
      {...rest}
    >
      <div className="accordion-content-inner">
        <div>{children}</div>
      </div>
    </div>
  );
};
AccordionContent.displayName = "Accordion.Content";

export { AccordionContent, AccordionContentProps, AllAccordionContentProps };
