"use client";

import clsx from "clsx";
import {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { AlignProp, AlignPropDef } from "../../../props";
import { getComponentProps } from "../../../utils/get-component-props";
import { themeColorsToStyle } from "../../theme/theme-colors";
import { ThemeContext } from "../../theme/theme-context";
import { usePortalContext } from "../portal-context";
import {
  AnchorAlign,
  AnchorSide,
  useAnchorPosition,
} from "../utils/use-anchor-position";
import {
  PortalContentInternalProps,
  PortalContentPropsDefs,
} from "./portal-content.props";

interface AllPortalContentProps extends PortalContentInternalProps, AlignProp {}

type PortalContentProps = AllPortalContentProps &
  HTMLAttributes<HTMLDivElement>;

/** The content displayed within a portal. */
const PortalContent = forwardRef<HTMLDivElement, PortalContentProps>(
  (props, ref) => {
    const portalContext = usePortalContext();
    const themeContext = useContext(ThemeContext);
    const contentRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const {
      side = "bottom",
      align = "center",
      sideOffset = "0",
      alignOffset = "0",
      anchored = false,
      children,
      className,
      dataAttrs,
      style,
    } = getComponentProps(props, PortalContentPropsDefs, AlignPropDef);

    // Determine anchor element (custom anchorRef or triggerRef)
    const anchorRef = portalContext.anchorRef ?? portalContext.triggerRef;

    // Calculate anchor position when anchored mode is enabled
    const anchorPosition = useAnchorPosition({
      anchorRef,
      contentRef,
      side: side as AnchorSide,
      align: align as AnchorAlign,
      sideOffset: parseInt(sideOffset, 10) || 0,
      alignOffset: parseInt(alignOffset, 10) || 0,
      enabled: anchored && portalContext.open,
    });

    // Compose refs
    const setRefs = useCallback(
      (node: HTMLDivElement | null) => {
        contentRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    useEffect(() => {
      if (!portalContext.open) return;

      function onKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
          portalContext.onOpenChange?.(false);
        }
      }

      document.addEventListener("keydown", onKeyDown);

      return () => {
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [portalContext.open, portalContext.onOpenChange]);

    // Click outside listener for anchored portals
    useEffect(() => {
      if (!portalContext.open || !anchored) return;

      function onClickOutside(e: MouseEvent) {
        const target = e.target as Node;
        const content = contentRef.current;
        const trigger = (portalContext.anchorRef ?? portalContext.triggerRef)
          ?.current;

        // Don't close if clicking inside the content or the trigger
        if (content?.contains(target) || trigger?.contains(target)) {
          return;
        }

        portalContext.onOpenChange?.(false);
      }

      // Use setTimeout to avoid the click that opened the portal from immediately closing it
      const timeoutId = setTimeout(() => {
        document.addEventListener("click", onClickOutside);
      }, 0);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("click", onClickOutside);
      };
    }, [
      portalContext.open,
      portalContext.onOpenChange,
      portalContext.anchorRef,
      portalContext.triggerRef,
      anchored,
    ]);

    // Resolve theme color overrides as inline styles
    const colorStyle = useMemo(() => {
      if (!themeContext) return {};
      const appearance =
        themeContext.appearance === "inherit"
          ? "light"
          : themeContext.appearance;
      return themeColorsToStyle(
        appearance,
        themeContext.colors,
        themeContext.primary,
        themeContext.secondary,
        themeContext.tertiary,
      );
    }, [
      themeContext?.colors,
      themeContext?.appearance,
      themeContext?.primary,
      themeContext?.secondary,
      themeContext?.tertiary,
    ]);

    const container =
      portalContext.open && mounted && globalThis?.document?.body;
    if (!container) return null;

    // Build style for anchored positioning
    const combinedStyle: CSSProperties = {
      ...colorStyle,
      ...style,
      ...(anchored && anchorPosition
        ? {
            position: "absolute",
            top: anchorPosition.top,
            left: anchorPosition.left,
          }
        : {}),
    };

    const portalContent = (
      <div
        ref={setRefs}
        className={clsx("portal", className)}
        data-appearance={themeContext?.appearance}
        data-radius={themeContext?.radius}
        data-roundness={themeContext?.roundness ?? "theme"}
        data-spacing={themeContext?.spacing ?? "theme"}
        data-theme-radius={themeContext?.radius}
        data-theme-roundness={themeContext?.roundness}
        data-theme-spacing={themeContext?.spacing}
        onClick={
          anchored ? undefined : () => portalContext.onOpenChange?.(false)
        }
        style={combinedStyle}
        {...dataAttrs}
      >
        <div className="portal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );

    // Wrap with ThemeContext if available to pass theme through
    const content = themeContext ? (
      <ThemeContext.Provider value={themeContext}>
        {portalContent}
      </ThemeContext.Provider>
    ) : (
      portalContent
    );

    return ReactDOM.createPortal(content, container);
  },
);
PortalContent.displayName = "Portal.Content";

export { AllPortalContentProps, PortalContent, PortalContentProps };
