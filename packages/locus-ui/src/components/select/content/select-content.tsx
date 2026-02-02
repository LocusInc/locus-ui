import clsx from "clsx";
import * as React from "react";
import { RadiusProps, SpacingProp } from "../../../props";
import { Portal } from "../../portal/portal";
import { useSelectContext } from "../select-context";
import { useComposedRefs } from "../utils/user-composed-refs";
import { SelectViewport } from "../viewport/select-viewport";
import { SelectContentInternalProps } from "./select-content.props";

interface AllSelectContentProps
  extends SelectContentInternalProps,
    RadiusProps,
    SpacingProp {}

type SelectContentProps = AllSelectContentProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: React.ReactNode;
  };

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  (props, forwardedRef) => {
    const {
      className,
      children,
      position = "popper",
      side = "bottom",
      offset,
      align = "center",
      ...rest
    } = props;
    const context = useSelectContext();

    const composedRef = useComposedRefs(forwardedRef, context.contentRef);

    // Reset item values on mount
    React.useEffect(() => {
      context.itemValues.current = [];
    }, [context.open]);

    // Handle click outside
    React.useEffect(() => {
      if (!context.open) return;

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          context.contentRef.current &&
          !context.contentRef.current.contains(target) &&
          context.triggerRef.current &&
          !context.triggerRef.current.contains(target)
        ) {
          context.onOpenChange(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [context.open]);

    // Handle keyboard navigation
    React.useEffect(() => {
      if (!context.open) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        const items = context.itemValues.current;
        const itemCount = items.length;

        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            context.setHighlightedIndex((prev) =>
              prev < itemCount - 1 ? prev + 1 : 0
            );
            break;
          case "ArrowUp":
            event.preventDefault();
            context.setHighlightedIndex((prev) =>
              prev > 0 ? prev - 1 : itemCount - 1
            );
            break;
          case "Tab":
            event.preventDefault();
            if (event.shiftKey) {
              context.setHighlightedIndex((prev) =>
                prev > 0 ? prev - 1 : itemCount - 1
              );
            } else {
              context.setHighlightedIndex((prev) =>
                prev < itemCount - 1 ? prev + 1 : 0
              );
            }
            break;
          case "Enter":
          case " ":
            event.preventDefault();
            if (context.highlightedIndex >= 0) {
              const selectedValue = items[context.highlightedIndex];
              if (selectedValue) {
                context.onValueChange(selectedValue);
                const displayText = children;
                if (displayText) context.setDisplayValue(displayText);
                context.onOpenChange(false);
              }
            }
            break;
          case "Escape":
            event.preventDefault();
            context.onOpenChange(false);
            context.triggerRef.current?.focus();
            break;
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [context.open, context.highlightedIndex]);

    const [contentWidth, setContentWidth] = React.useState<
      number | undefined
    >();
    const labelInside = context.labelPosition === "inside";
    const anchorRef = labelInside ? context.rootRef : context.triggerRef;

    React.useLayoutEffect(() => {
      if (context.open && anchorRef.current) {
        setContentWidth(anchorRef.current.getBoundingClientRect().width);
      }
    }, [context.open, context.labelPosition, anchorRef]);

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
        anchorRef={anchorRef}
      >
        <Portal.Content anchored side={side} align={align} sideOffset={offset}>
          <div
            ref={composedRef}
            role="listbox"
            data-state={context.open ? "open" : "closed"}
            data-side={side}
            data-align={align}
            data-trigger-variant={context.triggerVariant}
            className={clsx("select-content", className)}
            style={{ width: contentWidth }}
            {...rest}
          >
            <SelectViewport>{children}</SelectViewport>
          </div>
        </Portal.Content>
      </Portal.Root>
    );
  }
);
SelectContent.displayName = "Select.Content";

export { AllSelectContentProps, SelectContent, SelectContentProps };
