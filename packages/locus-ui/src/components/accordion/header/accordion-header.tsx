import clsx from "clsx";
import { FC } from "react";
import { ChevronDown } from "../../../icons/chevron-down.icon";
import { PaddingProps } from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { useAccordionContext } from "../accordion-context";
import {
  AccordionHeaderInternalProps,
  AccordionHeaderPropDefs,
} from "./accordion-header.props";

interface AllAccordionHeaderProps
  extends AccordionHeaderInternalProps, PaddingProps {}

type AccordionHeaderProps = AllAccordionHeaderProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: React.ReactNode;
  };

/** Header for an accordion item */
const AccordionHeader: FC<AccordionHeaderProps> = (props) => {
  const context = useAccordionContext();
  const { className, children, value, dataAttrs, ...rest } = getComponentProps(
    props,
    AccordionHeaderPropDefs,
  );

  const handleClick = () => {
    if (!value) return;

    if (context.multiple) {
      const current = (context.value as string[]) ?? [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      context.setValue(next.length ? next : null);
    } else {
      context.setValue(context.value === value ? null : value);
    }
  };

  return (
    <div
      data-variant={context.variant}
      className={clsx("accordion-header", className)}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      {...rest}
    >
      <span>{children}</span>

      <span className="accordion-header-indicator" aria-hidden="true">
        <ChevronDown />
      </span>
    </div>
  );
};
AccordionHeader.displayName = "Accordion.Header";

export { AccordionHeader, AccordionHeaderProps, AllAccordionHeaderProps };
