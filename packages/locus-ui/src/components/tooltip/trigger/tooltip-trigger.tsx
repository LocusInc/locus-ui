"use client";

import {
  HTMLAttributes,
  MouseEvent,
  RefObject,
  forwardRef,
  useCallback,
  useRef,
} from "react";
import { useTooltipContext } from "../tooltip-context";

export interface TooltipTriggerProps extends HTMLAttributes<HTMLDivElement> {}

const TooltipTrigger = forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ children, onClick, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const context = useTooltipContext();
    const internalRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        internalRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        (context.triggerRef as RefObject<HTMLElement | null>).current = node;
      },
      [ref, context.triggerRef],
    );

    const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
      if (context.openOnHover) {
        timeoutRef.current = setTimeout(() => {
          context.onOpenChange(true);
        }, context.delay);
      }
      onMouseEnter?.(event);
    };

    const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (context.openOnHover) {
        context.onOpenChange(false);
      }
      onMouseLeave?.(event);
    };

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      if (context.openOnClick) {
        context.onOpenChange(!context.open);
      }
      onClick?.(event);
    };

    return (
      <div
        ref={setRefs}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...props}
      >
        {children}
      </div>
    );
  },
);
TooltipTrigger.displayName = "Tooltip.Trigger";

export { TooltipTrigger };
