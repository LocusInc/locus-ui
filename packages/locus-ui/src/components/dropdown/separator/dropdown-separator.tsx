import clsx from "clsx";
import { forwardRef, HTMLAttributes } from "react";
import { MarginPropDefs, MarginProps } from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";

/**
 * Props for Dropdown.Separator, including standard divider attributes and
 * margin options.
 */
interface AllDropdownSeparatorProps
  extends HTMLAttributes<HTMLDivElement>, MarginProps {}

/**
 * Props for a visual separator between dropdown menu item groups.
 */
type DropdownSeparatorProps = AllDropdownSeparatorProps & MarginProps;

/**
 * Renders a separator inside dropdown menu content.
 */
const DropdownSeparator = forwardRef<HTMLDivElement, DropdownSeparatorProps>(
  (props, ref) => {
    const { className, dataAttrs, style, ...rest } = getComponentProps(
      props,
      MarginPropDefs,
    );

    return (
      <div
        ref={ref}
        role="separator"
        className={clsx("dropdown-separator", className)}
        style={style}
        {...dataAttrs}
        {...rest}
      />
    );
  },
);
DropdownSeparator.displayName = "Dropdown.Separator";

export {
  AllDropdownSeparatorProps,
  DropdownSeparator,
  DropdownSeparatorProps,
};
