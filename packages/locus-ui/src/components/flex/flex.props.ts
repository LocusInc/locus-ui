import { GetPropDefTypes, PropDef } from "../../props/prop-def";

const FlexGapValues = ["0", "1", "2", "3", "4", "5", "6", "8"] as const;

const FlexDirectionValues = [
  "row",
  "row-reverse",
  "column",
  "column-reverse",
] as const;

const FlexJustifyValues = [
  "start",
  "end",
  "center",
  "between",
  "around",
  "evenly",
] as const;

const FlexAlignValues = [
  "start",
  "end",
  "center",
  "stretch",
  "baseline",
] as const;

const FlexWrapValues = ["nowrap", "wrap", "wrap-reverse"] as const;

const FlexPropsDefs = {
  /**
   * Sets the gap between flex items.
   */
  gap: {
    type: "enum | string",
    values: FlexGapValues,
    dataAttr: "gap",
    responsive: true,
  } satisfies PropDef<(typeof FlexGapValues)[number] | string>,

  /**
   * Sets the justification of flex items along the main axis.
   */
  justify: {
    type: "enum",
    values: FlexJustifyValues,
    dataAttr: "justify",
    responsive: true,
  } satisfies PropDef<(typeof FlexJustifyValues)[number]>,

  /**
   * Sets the direction of flex items.
   */
  direction: {
    type: "enum",
    values: FlexDirectionValues,
    dataAttr: "direction",
    responsive: true,
  } satisfies PropDef<(typeof FlexDirectionValues)[number]>,

  /**
   * Sets the alignment of flex items along the cross axis.
   */
  align: {
    type: "enum",
    values: FlexAlignValues,
    dataAttr: "align",
    responsive: true,
  } satisfies PropDef<(typeof FlexAlignValues)[number]>,

  /**
   * Sets the wrapping behavior of flex items.
   */
  wrap: {
    type: "enum",
    values: FlexWrapValues,
    dataAttr: "wrap",
    responsive: true,
  } satisfies PropDef<(typeof FlexWrapValues)[number]>,
} as const;

type FlexInternalProps = GetPropDefTypes<typeof FlexPropsDefs>;

export { FlexInternalProps, FlexPropsDefs };
