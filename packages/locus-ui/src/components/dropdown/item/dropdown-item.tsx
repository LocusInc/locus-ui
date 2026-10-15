"use client";

import clsx from "clsx";
import {
  FocusEvent,
  FocusEventHandler,
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { getComponentProps } from "../../../utils/get-component-props";
import { Box } from "../../box";
import { Text } from "../../text";
import { useDropdownContext } from "../dropdown-context";
import {
  DropdownItemInternalProps,
  DropdownItemPropsDefs,
} from "./dropdown-item.props";

/**
 * Props shared by Dropdown.Item, including disabled, destructive, icon, and
 * selection behavior.
 */
interface AllDropdownItemProps extends DropdownItemInternalProps {
  "data-dropdown-trigger"?: boolean;
}

/**
 * Props for a keyboard-focusable dropdown menu item.
 */
type DropdownItemProps = AllDropdownItemProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "onSelect"> & {
    children?: ReactNode;
  };

/**
 * Renders a menu item that can be selected, highlighted, focused, or used as a
 * nested dropdown trigger.
 */
const DropdownItem = forwardRef<HTMLElement, DropdownItemProps>(
  (props, forwardedRef) => {
    const {
      disabled = false,
      destructive = false,
      closeOnSelect = true,
      leadingIcon,
      trailingIcon,
      onSelect,
      className,
      dataAttrs,
      style,
      children,
      onBlur,
      onClick,
      onFocus,
      onKeyDown,
      onMouseEnter,
      onMouseLeave,
      "data-dropdown-trigger": dropdownTrigger,
      ...rest
    } = getComponentProps(props, DropdownItemPropsDefs);

    const context = useDropdownContext();
    const id = useId();
    const itemRef = useRef<HTMLElement | null>(null);
    const [focused, setFocused] = useState(false);
    const isDropdownTrigger = Boolean(dropdownTrigger);
    const itemLeadingIcon = leadingIcon as ReactNode;
    const itemTrailingIcon = trailingIcon as ReactNode;
    const itemChildren = children as ReactNode;

    const setRefs = useCallback(
      (node: HTMLElement | null) => {
        itemRef.current = node;

        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [forwardedRef],
    );

    useEffect(() => {
      return context.registerItem({ id, ref: itemRef, disabled });
    }, [context, disabled, id]);

    const highlighted = context.highlightedId === id;

    const handleClick = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        if (disabled) {
          event.preventDefault();
          return;
        }

        if (!isDropdownTrigger) {
          onSelect?.(event);
          if (!event.defaultPrevented && closeOnSelect) {
            context.closeTree();
          }
        }

        onClick?.(event);
      },
      [closeOnSelect, context, disabled, isDropdownTrigger, onClick, onSelect],
    );

    const handleMouseEnter = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        if (!disabled) context.setHighlightedId(id);
        onMouseEnter?.(event);
      },
      [context, disabled, id, onMouseEnter],
    );

    const handleMouseLeave = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        if (context.highlightedId === id) context.setHighlightedId(null);
        onMouseLeave?.(event);
      },
      [context, id, onMouseLeave],
    );

    const handleFocus = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        if (!disabled) {
          setFocused(true);
          context.setHighlightedId(id);
        }
        onFocus?.(event);
      },
      [context, disabled, id, onFocus],
    );

    const handleBlur = useCallback(
      (event: FocusEvent<HTMLElement>) => {
        setFocused(false);
        onBlur?.(event);
      },
      [onBlur],
    );

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLElement>) => {
        if (disabled) return;

        if (
          !isDropdownTrigger &&
          (event.key === "Enter" || event.key === " ")
        ) {
          event.preventDefault();
          itemRef.current?.click();
        }

        onKeyDown?.(event);
      },
      [disabled, isDropdownTrigger, onKeyDown],
    );

    return (
      <Box
        ref={setRefs as Ref<HTMLDivElement>}
        role="menuitem"
        tabIndex={disabled ? undefined : 0}
        aria-disabled={disabled}
        data-highlighted={highlighted ? "" : undefined}
        data-focused={focused ? "" : undefined}
        data-disabled={disabled ? "" : undefined}
        data-destructive={destructive ? "" : undefined}
        data-dropdown-trigger={dropdownTrigger ? true : undefined}
        data-dropdown-tree={context.treeId}
        className={clsx("dropdown-item", className)}
        style={style}
        onBlur={handleBlur as FocusEventHandler<HTMLDivElement>}
        onClick={handleClick as MouseEventHandler<HTMLDivElement>}
        onFocus={handleFocus as FocusEventHandler<HTMLDivElement>}
        onKeyDown={handleKeyDown as KeyboardEventHandler<HTMLDivElement>}
        onMouseEnter={handleMouseEnter as MouseEventHandler<HTMLDivElement>}
        onMouseLeave={handleMouseLeave as MouseEventHandler<HTMLDivElement>}
        {...dataAttrs}
        {...rest}
      >
        {itemLeadingIcon && (
          <span className="dropdown-item-icon">{itemLeadingIcon}</span>
        )}
        <Text disabled={disabled}>{itemChildren}</Text>
        {itemTrailingIcon && (
          <span className="dropdown-item-icon dropdown-item-trailing-icon">
            {itemTrailingIcon}
          </span>
        )}
      </Box>
    );
  },
);
DropdownItem.displayName = "Dropdown.Item";

export { AllDropdownItemProps, DropdownItem, DropdownItemProps };
