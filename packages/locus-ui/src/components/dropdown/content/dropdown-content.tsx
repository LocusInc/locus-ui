"use client";

import clsx from "clsx";
import {
  forwardRef,
  HTMLAttributes,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
} from "react";
import { PaddingPropDefs, PaddingProps } from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { Portal } from "../../portal/portal";
import { DropdownVariant, useDropdownContext } from "../dropdown-context";
import {
  DropdownContentInternalProps,
  DropdownContentPropsDefs,
} from "./dropdown-content.props";

/**
 * Props shared by Dropdown.Content, including positioning, menu mode, variant,
 * and padding options.
 */
interface AllDropdownContentProps
  extends DropdownContentInternalProps, PaddingProps {}

/**
 * Props for the portal-backed dropdown content container.
 */
type DropdownContentProps = AllDropdownContentProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: ReactNode;
  };

/**
 * Renders dropdown content in a portal, anchored to the trigger. In menu mode it
 * manages item focus and keyboard navigation.
 */
const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (props, forwardedRef) => {
    const {
      mode = "menu",
      variant,
      side,
      align = "start",
      sideOffset = "4",
      alignOffset = "0",
      className,
      dataAttrs,
      style,
      children,
      onKeyDown,
      ...rest
    } = getComponentProps(props, DropdownContentPropsDefs, PaddingPropDefs);
    const context = useDropdownContext();
    const resolvedVariant = variant ?? context.variant;
    const contentSide = side ?? (context.parentDropdown ? "right" : "bottom");

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        context.contentRef.current = node;

        if (typeof forwardedRef === "function") {
          forwardedRef(node);
        } else if (forwardedRef) {
          forwardedRef.current = node;
        }
      },
      [context.contentRef, forwardedRef],
    );

    useEffect(() => {
      if (!context.open) return;

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;

        if (
          context.contentRef.current?.contains(target) ||
          context.triggerRef.current?.contains(target) ||
          (target instanceof Element &&
            target.closest(`[data-dropdown-tree="${context.treeId}"]`))
        ) {
          return;
        }

        context.close();
      };

      const timeoutId = setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [context]);

    const moveHighlight = useCallback(
      (direction: 1 | -1) => {
        const items = context.itemsRef.current.filter((item) => !item.disabled);
        if (!items.length) return;

        const currentEnabledIndex = context.highlightedId
          ? items.findIndex((item) => item.id === context.highlightedId)
          : -1;
        const nextEnabledIndex =
          currentEnabledIndex < 0
            ? direction === 1
              ? 0
              : items.length - 1
            : (currentEnabledIndex + direction + items.length) % items.length;
        const nextItem = items[nextEnabledIndex];

        context.setHighlightedId(nextItem.id);
        nextItem.ref.current?.focus();
      },
      [context],
    );

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLDivElement>) => {
        if (mode === "menu") {
          switch (event.key) {
            case "ArrowDown":
              event.preventDefault();
              moveHighlight(1);
              break;
            case "ArrowUp":
              event.preventDefault();
              moveHighlight(-1);
              break;
            case "Tab":
              event.preventDefault();
              moveHighlight(event.shiftKey ? -1 : 1);
              break;
            case "Home":
              event.preventDefault();
              {
                const firstItem = context.itemsRef.current.find(
                  (item) => !item.disabled,
                );
                context.setHighlightedId(firstItem?.id ?? null);
                firstItem?.ref.current?.focus();
              }
              break;
            case "End": {
              event.preventDefault();
              const enabledItems = context.itemsRef.current.filter(
                (item) => !item.disabled,
              );
              const lastItem = enabledItems[enabledItems.length - 1];
              context.setHighlightedId(lastItem?.id ?? null);
              lastItem?.ref.current?.focus();
              break;
            }
            case "Escape":
              event.preventDefault();
              context.close();
              context.triggerRef.current?.focus();
              break;
            case "ArrowLeft":
              if (context.parentDropdown) {
                event.preventDefault();
                context.close();
                context.parentDropdown.triggerRef.current?.focus();
              }
              break;
          }
        } else if (event.key === "Escape") {
          event.preventDefault();
          context.close();
          context.triggerRef.current?.focus();
        }

        onKeyDown?.(event);
      },
      [context, mode, moveHighlight, onKeyDown],
    );

    if (!context.open) {
      return (
        <div style={{ display: "none" }} aria-hidden="true">
          {children}
        </div>
      );
    }

    return (
      <Portal.Root
        open={context.open}
        onOpenChange={context.onOpenChange}
        anchorRef={context.triggerRef}
      >
        <Portal.Content
          anchored
          side={contentSide}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
        >
          <div
            ref={setRefs}
            role={mode === "menu" ? "menu" : undefined}
            data-dropdown-tree={context.treeId}
            data-mode={mode}
            data-variant={resolvedVariant}
            data-state={context.open ? "open" : "closed"}
            data-side={contentSide}
            data-align={align}
            className={clsx("dropdown-content", className)}
            style={style}
            onKeyDown={handleKeyDown}
            {...dataAttrs}
            {...rest}
          >
            {children}
          </div>
        </Portal.Content>
      </Portal.Root>
    );
  },
);
DropdownContent.displayName = "Dropdown.Content";

export {
  AllDropdownContentProps,
  DropdownContent,
  DropdownContentProps,
  DropdownVariant as DropdownContentVariant,
};
