import clsx from "clsx";
import * as React from "react";
import { getComponentProps } from "../../../utils/get-component-props";
import { Box } from "../../box";
import { Text } from "../../text";
import { useSelectContext } from "../select-context";
import { SelectItemIndicator } from "./select-item-indicator";
import {
  SelectItemInternalProps,
  SelectItemPropDefs,
} from "./select-item.props";

interface AllSelectItemProps extends SelectItemInternalProps {}

type SelectItemProps = AllSelectItemProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: React.ReactNode;
  };

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  (props, ref) => {
    const context = useSelectContext();
    const { value, disabled, children, className, ...rest } = getComponentProps(
      props,
      SelectItemPropDefs
    );

    const selected = context.value === value;

    // Set display value if this item is already selected on mount
    React.useEffect(() => {
      if (selected && children) {
        context.setDisplayValue(children);
      }
    }, [selected]);

    // Register item value
    React.useEffect(() => {
      if (!value) return;

      if (!disabled) {
        const values = context.itemValues.current;
        if (!values.includes(value)) values.push(value);
      }

      return () => {
        const values = context.itemValues.current;
        const index = values.indexOf(value);
        if (index > -1) values.splice(index, 1);
      };
    }, [value, disabled]);

    const itemIndex = value ? context.itemValues.current.indexOf(value) : -1;
    const isHighlighted =
      context.highlightedIndex >= 0 && context.highlightedIndex === itemIndex;

    const handleClick = () => {
      if (!disabled) {
        if (value) {
          context.onValueChange(value);
          context.setDisplayValue(children);
        }
        context.onOpenChange(false);
        context.triggerRef.current?.focus();
      }
    };

    const handleMouseEnter = () => {
      if (!disabled) context.setHighlightedIndex(itemIndex);
    };

    return (
      <Box
        ref={ref}
        role="option"
        radius="none"
        aria-selected={selected}
        aria-disabled={disabled}
        data-variant={context.triggerVariant}
        data-state={selected ? "checked" : "unchecked"}
        data-highlighted={isHighlighted ? "" : undefined}
        data-disabled={disabled ? "" : undefined}
        className={clsx("select-item", className)}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        {...rest}
      >
        <Box
          style={{ width: 24, height: 24, justifyContent: "center" }}
          className="flex items-center"
        >
          {selected && <SelectItemIndicator />}
        </Box>

        <Text disabled={disabled}>{children}</Text>
      </Box>
    );
  }
);
SelectItem.displayName = "Select.Item";

export { AllSelectItemProps, SelectItem, SelectItemProps };
