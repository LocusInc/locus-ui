import clsx from "clsx";
import * as React from "react";
import { RadiusProps, RoundnessProp } from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { useSelectContext } from "../select-context";
import { useComposedRefs } from "../utils/user-composed-refs";
import { SelectValue } from "../value/select-value";
import { SelectTriggerIcon } from "./select-trigger-icon";
import {
  SelectTriggerInternalProps,
  SelectTriggerPropsDefs,
} from "./select-trigger.props";

interface AllSelectTriggerProps
  extends SelectTriggerInternalProps,
    RadiusProps,
    RoundnessProp {}

type SelectTriggerProps = AllSelectTriggerProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    asChild?: boolean;
    children?: React.ReactNode;
  };

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  (props, forwardedRef) => {
    const {
      className,
      disabled: disabledProp,
      dataAttrs,
    } = getComponentProps(props, SelectTriggerPropsDefs);
    const context = useSelectContext();

    const disabled = disabledProp ?? context.disabled;
    const isInsideLabel = context.labelPosition === "inside";

    const composedRef = useComposedRefs(forwardedRef, context.triggerRef);

    const handleClick = () => {
      if (!disabled) {
        context.onOpenChange(!context.open);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (disabled) return;

      switch (event.key) {
        case "Enter":
        case " ":
        case "ArrowDown":
        case "ArrowUp":
          event.preventDefault();
          context.onOpenChange(true);
          break;
      }
    };

    // When label is inside, render as a div since root is the button
    if (isInsideLabel) {
      return (
        <div
          ref={composedRef as React.Ref<HTMLDivElement>}
          data-state={context.open ? "open" : "closed"}
          data-disabled={disabled ? "" : undefined}
          data-variant={context.triggerVariant}
          className={clsx("select-trigger", className)}
          {...dataAttrs}
        >
          <SelectValue />
          <SelectTriggerIcon />
        </div>
      );
    }

    return (
      <button
        ref={composedRef}
        type="button"
        role="combobox"
        aria-expanded={context.open}
        aria-haspopup="listbox"
        aria-disabled={disabled}
        disabled={disabled}
        data-state={context.open ? "open" : "closed"}
        data-disabled={disabled ? "" : undefined}
        className={clsx("select-trigger", className)}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        data-variant={context.triggerVariant}
        {...dataAttrs}
      >
        <SelectValue />

        <SelectTriggerIcon />
      </button>
    );
  }
);
SelectTrigger.displayName = "Select.Trigger";

export { AllSelectTriggerProps, SelectTrigger, SelectTriggerProps };
