"use client";

import * as React from "react";
import {
  filterChildren,
  WithStrictChildren,
} from "../../../utils/filter-children";
import { getComponentProps } from "../../../utils/get-component-props";
import { useControllableState } from "../../../utils/use-controllable-state";
import {
  PortalBackdrop,
  PortalBackdropProps,
} from "../backdrop/portal-backdrop";
import { PortalContent, PortalContentProps } from "../content/portal-content";
import { PortalContext } from "../portal-context";
import { PortalTrigger, PortalTriggerProps } from "../trigger/portal-trigger";
import {
  PortalRootInternalProps,
  PortalRootPropsDefs,
} from "./portal-root.props";

const ALLOWED_CHILDREN = [
  PortalTrigger.displayName!,
  PortalBackdrop.displayName!,
  PortalContent.displayName!,
];

interface AllPortalRootProps extends PortalRootInternalProps {}

type PortalRootProps = AllPortalRootProps &
  WithStrictChildren<
    React.HTMLAttributes<HTMLDivElement>,
    PortalTriggerProps | PortalBackdropProps | PortalContentProps
  >;

/** The root component of a portal used to provide context and styling to its children. */
const PortalRoot: React.FC<PortalRootProps> = (props) => {
  const {
    defaultOpen = false,
    open: portalOpen,
    onOpenChange,
    anchorRef,
    children,
  } = getComponentProps(props, PortalRootPropsDefs);

  const [open, setOpen] = useControllableState<boolean>({
    value: portalOpen,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  });

  const triggerRef = React.useRef<HTMLElement | null>(null);

  const value = React.useMemo(
    () => ({
      open,
      onOpenChange: setOpen,
      triggerRef,
      anchorRef,
    }),
    [open, setOpen, anchorRef]
  );

  const validChildren = filterChildren(children, ALLOWED_CHILDREN, {
    parentDisplayName: PortalRoot.displayName,
    allowedTypes: [PortalTrigger, PortalBackdrop, PortalContent],
  });

  return (
    <PortalContext.Provider value={value}>
      {validChildren}
    </PortalContext.Provider>
  );
};
PortalRoot.displayName = "Portal.Root";

export { AllPortalRootProps, PortalRoot, PortalRootProps };
