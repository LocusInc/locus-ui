import { PropDef } from "../../../props";
import { GetPropDefTypes } from "../../../props/prop-def";

const positions = [
  "tl",
  "top",
  "tr",
  "left",
  "center",
  "right",
  "bl",
  "bottom",
  "br",
] as const;

const anchorSides = ["top", "right", "bottom", "left"] as const;

const PortalContentPropsDefs = {
  /**
   * The position of the portal content relative to the screen if no anchor is used.
   *
   * @example position="bl" // Portal renders at bottom-left of the screen
   */
  position: {
    type: "enum",
    values: positions,
    default: "center",
    dataAttr: "position",
  } satisfies PropDef<(typeof positions)[number]>,

  /**
   * Whether the portal content is anchored to an element.
   *
   * When anchored, the portal content is positioned relative to the trigger element unless a custom anchorRef is provided.
   */
  anchored: {
    type: "boolean",
    dataAttr: "anchored",
  } satisfies PropDef<boolean>,

  /**
   * The side of the anchor element to position the portal content on.
   *
   * @default "bottom"
   */
  side: {
    type: "enum",
    values: anchorSides,
    default: "bottom",
  } satisfies PropDef<(typeof anchorSides)[number]>,

  /** Offset in pixels from the anchor element along the side axis. */
  sideOffset: {
    type: "string",
  } satisfies PropDef<string>,

  /** Offset in pixels along the alignment axis. */
  alignOffset: {
    type: "string",
  } satisfies PropDef<string>,
};

type PortalContentInternalProps = GetPropDefTypes<
  typeof PortalContentPropsDefs
>;

export { PortalContentInternalProps, PortalContentPropsDefs };
