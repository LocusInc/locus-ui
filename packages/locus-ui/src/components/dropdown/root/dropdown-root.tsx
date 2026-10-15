"use client";

import {
  FC,
  HTMLAttributes,
  ReactElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { MarginPropDefs, MarginProps } from "../../../props";
import {
  filterChildren,
  WithStrictChildren,
} from "../../../utils/filter-children";
import { getComponentProps } from "../../../utils/get-component-props";
import { useControllableState } from "../../../utils/use-controllable-state";
import {
  DropdownContent,
  DropdownContentProps,
} from "../content/dropdown-content";
import {
  DropdownContext,
  DropdownItemRegistration,
  useOptionalDropdownContext,
} from "../dropdown-context";
import {
  DropdownTrigger,
  DropdownTriggerProps,
} from "../trigger/dropdown-trigger";
import {
  DropdownRootInternalProps,
  DropdownRootPropsDefs,
} from "./dropdown-root.props";

/**
 * Props shared by Dropdown.Root, including controlled state and inherited
 * styling options.
 */
interface AllDropdownRootProps extends DropdownRootInternalProps, MarginProps {}

const ALLOWED_CHILDREN = [
  DropdownTrigger.displayName!,
  DropdownContent.displayName!,
];

/**
 * Props for Dropdown.Root. A root should contain a Dropdown.Trigger and
 * Dropdown.Content as direct children.
 */
type DropdownRootProps = AllDropdownRootProps &
  WithStrictChildren<
    HTMLAttributes<HTMLDivElement>,
    DropdownTriggerProps | DropdownContentProps
  >;

/**
 * Provides state, styling inheritance, item registration, and close bubbling for
 * a dropdown tree.
 */
const DropdownRoot: FC<DropdownRootProps> = (props) => {
  const {
    variant,
    open: openProp,
    defaultOpen,
    onOpenChange,
  } = getComponentProps(props, DropdownRootPropsDefs, MarginPropDefs);

  const parentDropdown = useOptionalDropdownContext();
  const generatedTreeId = useId();
  const treeId = parentDropdown?.treeId ?? generatedTreeId;
  const inheritedVariant = variant ?? parentDropdown?.variant;

  const [open, setOpen] = useControllableState<boolean>({
    value: openProp,
    defaultValue: defaultOpen ?? false,
    onChange: onOpenChange,
  });

  const triggerRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<DropdownItemRegistration[]>([]);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const closeTree = useCallback(() => {
    setOpen(false);
    parentDropdown?.closeTree();
  }, [parentDropdown, setOpen]);

  const registerItem = useCallback((item: DropdownItemRegistration) => {
    const existingIndex = itemsRef.current.findIndex(
      (registeredItem) => registeredItem.id === item.id,
    );

    if (existingIndex >= 0) {
      itemsRef.current[existingIndex] = item;
    } else {
      itemsRef.current.push(item);
    }

    return () => {
      itemsRef.current = itemsRef.current.filter(
        (registeredItem) => registeredItem.id !== item.id,
      );
    };
  }, []);

  useEffect(() => {
    if (!open) setHighlightedId(null);
  }, [open]);

  const validChildren = filterChildren(props.children, ALLOWED_CHILDREN, {
    parentDisplayName: DropdownRoot.displayName,
    allowedTypes: [DropdownTrigger, DropdownContent],
  }) as ReactElement[];

  const contextValue = useMemo(
    () => ({
      treeId,
      variant: inheritedVariant,
      open,
      onOpenChange: setOpen,
      close,
      closeTree,
      parentDropdown,
      triggerRef,
      contentRef,
      highlightedId,
      setHighlightedId,
      itemsRef,
      registerItem,
    }),
    [
      close,
      closeTree,
      highlightedId,
      open,
      parentDropdown,
      registerItem,
      setOpen,
      treeId,
      inheritedVariant,
    ],
  );

  return (
    <DropdownContext.Provider value={contextValue}>
      {validChildren}
    </DropdownContext.Provider>
  );
};
DropdownRoot.displayName = "Dropdown.Root";

export { AllDropdownRootProps, DropdownRoot, DropdownRootProps };
