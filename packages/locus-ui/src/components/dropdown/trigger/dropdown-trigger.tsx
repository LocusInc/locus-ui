"use client";

import {
  ButtonHTMLAttributes,
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  useCallback,
} from "react";
import { getComponentProps } from "../../../utils/get-component-props";
import { useDropdownContext } from "../dropdown-context";
import {
  DropdownTriggerInternalProps,
  DropdownTriggerPropsDefs,
} from "./dropdown-trigger.props";

/**
 * Props shared by Dropdown.Trigger, including support for rendering the trigger
 * behavior onto a child element.
 */
interface AllDropdownTriggerProps
  extends
    DropdownTriggerInternalProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Props for the dropdown trigger button or child trigger element.
 */
type DropdownTriggerProps = AllDropdownTriggerProps;

/**
 * Toggles the dropdown open state and anchors portal content to the trigger.
 */
const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  (props, forwardedRef) => {
    const {
      asChild,
      children,
      dataAttrs,
      style,
      onClick,
      onKeyDown,
      onMouseEnter,
      ...rest
    } = getComponentProps(props, DropdownTriggerPropsDefs);

    const context = useDropdownContext();
    const isNested = Boolean(context.parentDropdown);
    const child = Children.toArray(children).find(isValidElement) as
      | ReactElement<any>
      | undefined;

    const setRefs = useCallback(
      (node: HTMLElement | null) => {
        context.triggerRef.current = node;

        if (typeof forwardedRef === "function") {
          forwardedRef(node as HTMLButtonElement | null);
        } else if (forwardedRef) {
          forwardedRef.current = node as HTMLButtonElement | null;
        }
      },
      [context.triggerRef, forwardedRef],
    );

    const handleClick = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        context.triggerRef.current = event.currentTarget;
        context.onOpenChange(!context.open);
        onClick?.(event as MouseEvent<HTMLButtonElement>);
      },
      [context, onClick],
    );

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLElement>) => {
        context.triggerRef.current = event.currentTarget;

        switch (event.key) {
          case "Tab": {
            if (!context.open || event.shiftKey) break;

            const firstItem = context.itemsRef.current.find(
              (item) => !item.disabled,
            );

            if (firstItem) {
              event.preventDefault();
              context.setHighlightedId(firstItem.id);
              firstItem.ref.current?.focus();
            }

            break;
          }
          case "Enter":
          case " ":
          case "ArrowDown":
          case "ArrowUp":
          case "ArrowRight":
            event.preventDefault();
            context.onOpenChange(true);
            break;
          case "Escape":
            event.preventDefault();
            context.close();
            context.parentDropdown?.triggerRef.current?.focus();
            break;
        }

        onKeyDown?.(event as KeyboardEvent<HTMLButtonElement>);
      },
      [context, onKeyDown],
    );

    const handleMouseEnter = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        context.triggerRef.current = event.currentTarget;
        if (isNested) context.onOpenChange(true);
        onMouseEnter?.(event as MouseEvent<HTMLButtonElement>);
      },
      [context, isNested, onMouseEnter],
    );

    if (asChild && child) {
      return cloneElement(child, {
        ref: setRefs,
        "aria-expanded": context.open,
        "aria-haspopup": "menu",
        "data-dropdown-trigger": true,
        "data-dropdown-tree": context.treeId,
        "data-state": context.open ? "open" : "closed",
        style,
        ...dataAttrs,
        ...rest,
        onClick: (event: MouseEvent<HTMLElement>) => {
          handleClick(event);
          child.props.onClick?.(event);
        },
        onKeyDown: (event: KeyboardEvent<HTMLElement>) => {
          handleKeyDown(event);
          child.props.onKeyDown?.(event);
        },
        onMouseEnter: (event: MouseEvent<HTMLElement>) => {
          handleMouseEnter(event);
          child.props.onMouseEnter?.(event);
        },
      });
    }

    return (
      <button
        ref={setRefs}
        type="button"
        aria-expanded={context.open}
        aria-haspopup="menu"
        data-dropdown-tree={context.treeId}
        data-state={context.open ? "open" : "closed"}
        style={style}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        {...dataAttrs}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
DropdownTrigger.displayName = "Dropdown.Trigger";

export { AllDropdownTriggerProps, DropdownTrigger, DropdownTriggerProps };
