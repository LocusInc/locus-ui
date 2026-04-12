import { GetPropDefTypes, PropDef } from "../../props/prop-def";

const GridGapValues = ["0", "1", "2", "3", "4", "5", "6", "8"] as const;

const GridColumnsValues = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
] as const;

const GridRowsValues = ["1", "2", "3", "4", "5", "6"] as const;

const GridFlowValues = [
  "row",
  "column",
  "dense",
  "row-dense",
  "column-dense",
] as const;

const GridJustifyValues = [
  "start",
  "end",
  "center",
  "between",
  "around",
  "evenly",
] as const;

const GridAlignValues = [
  "start",
  "end",
  "center",
  "stretch",
  "baseline",
] as const;

const GridPropsDefs = {
  /**
   * Sets the gap between grid items.
   */
  gap: {
    type: "enum | string",
    values: GridGapValues,
    dataAttr: "gap",
    responsive: true,
  } satisfies PropDef<(typeof GridGapValues)[number] | string>,

  /**
   * Sets the number of columns in the grid.
   */
  columns: {
    type: "enum | string",
    values: GridColumnsValues,
    dataAttr: "columns",
    responsive: true,
  } satisfies PropDef<(typeof GridColumnsValues)[number] | string>,

  /**
   * Sets the number of rows in the grid.
   */
  rows: {
    type: "enum | string",
    values: GridRowsValues,
    dataAttr: "rows",
    responsive: true,
  } satisfies PropDef<(typeof GridRowsValues)[number] | string>,

  /**
   * Sets the auto flow direction of grid items.
   */
  flow: {
    type: "enum",
    values: GridFlowValues,
    dataAttr: "flow",
    responsive: true,
  } satisfies PropDef<(typeof GridFlowValues)[number]>,

  /**
   * Sets the justification of grid items along the inline axis.
   */
  justify: {
    type: "enum",
    values: GridJustifyValues,
    dataAttr: "justify",
    responsive: true,
  } satisfies PropDef<(typeof GridJustifyValues)[number]>,

  /**
   * Sets the alignment of grid items along the block axis.
   */
  align: {
    type: "enum",
    values: GridAlignValues,
    dataAttr: "align",
    responsive: true,
  } satisfies PropDef<(typeof GridAlignValues)[number]>,
} as const;

type GridInternalProps = GetPropDefTypes<typeof GridPropsDefs>;

export { GridInternalProps, GridPropsDefs };
