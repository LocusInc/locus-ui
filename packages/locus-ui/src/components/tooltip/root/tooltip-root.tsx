"use client";

import {
  Children,
  FC,
  HTMLAttributes,
  isValidElement,
  useMemo,
  useRef,
  useState,
} from "react";
import { MarginPropDefs, SizeProp, SizePropDef } from "../../../props";
import {
  matchesComponent,
  WithOptionalStrictChildren,
} from "../../../utils/filter-children";
import { getComponentProps } from "../../../utils/get-component-props";
import { Portal } from "../../portal";
import {
  TooltipContent,
  TooltipContentProps,
} from "../content/tooltip-content";
import { TooltipContext } from "../tooltip-context";
import {
  TooltipRootInternalProps,
  TooltipRootPropsDefs,
} from "./tooltip-root.props";

interface AllTooltipRootProps extends TooltipRootInternalProps, SizeProp {}

type TooltipRootProps = AllTooltipRootProps &
  WithOptionalStrictChildren<
    HTMLAttributes<HTMLDivElement>,
    TooltipContentProps
  >;

const TooltipRoot: FC<TooltipRootProps> = (props) => {
  const {
    side,
    delay,
    openOnHover,
    openOnClick,
    size,
    children,
    className,
    dataAttrs,
    ...rest
  } = getComponentProps(
    props,
    TooltipRootPropsDefs,
    MarginPropDefs,
    SizePropDef,
  );

  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  const { content, otherChildren } = useMemo(() => {
    const childArray = Children.toArray(children);
    const contentIndex = childArray.findIndex(
      (child) =>
        isValidElement(child) && matchesComponent(child.type, TooltipContent),
    );

    if (contentIndex > -1) {
      return {
        content: childArray[contentIndex],
        otherChildren: childArray.filter((_, i) => i !== contentIndex),
      };
    }

    return {
      content: null,
      otherChildren: childArray,
    };
  }, [children, size]);

  return (
    <TooltipContext.Provider
      value={{
        open,
        onOpenChange: setOpen,
        side: side ?? "bottom",
        delay: delay ?? 300,
        openOnHover: openOnHover ?? true,
        openOnClick: openOnClick ?? false,
        triggerRef,
      }}
    >
      {otherChildren}

      <Portal.Root anchorRef={triggerRef} open={open} onOpenChange={setOpen}>
        <Portal.Content anchored side={side}>
          {content}
        </Portal.Content>
      </Portal.Root>
    </TooltipContext.Provider>
  );
};

export { AllTooltipRootProps, TooltipRoot, TooltipRootProps };
