const importSnippet = `import { Grid } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Grid columns="3" gap="4" align="center">
  <Box px="2" py="1" className="border">Item 1</Box>
  <Box px="2" py="1" className="border">Item 2</Box>
  <Box px="2" py="1" className="border">Item 3</Box>
</Grid>`;

export const styleSnippet = `.grid {
  display: grid;

  /* Gap */
  &[data-gap="0"] { gap: 0; }
  &[data-gap="1"] { gap: calc(4px * var(--lcs-spacing, 1)); }
  &[data-gap="2"] { gap: calc(8px * var(--lcs-spacing, 1)); }
  &[data-gap="3"] { gap: calc(12px * var(--lcs-spacing, 1)); }
  &[data-gap="4"] { gap: calc(16px * var(--lcs-spacing, 1)); }
  &[data-gap="5"] { gap: calc(20px * var(--lcs-spacing, 1)); }
  &[data-gap="6"] { gap: calc(24px * var(--lcs-spacing, 1)); }
  &[data-gap="7"] { gap: calc(28px * var(--lcs-spacing, 1)); }
  &[data-gap="8"] { gap: calc(32px * var(--lcs-spacing, 1)); }

  /* Columns */
  &[data-columns="1"]  { grid-template-columns: repeat(1, minmax(0, 1fr)); }
  &[data-columns="2"]  { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  &[data-columns="3"]  { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  &[data-columns="4"]  { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  &[data-columns="5"]  { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  &[data-columns="6"]  { grid-template-columns: repeat(6, minmax(0, 1fr)); }
  &[data-columns="7"]  { grid-template-columns: repeat(7, minmax(0, 1fr)); }
  &[data-columns="8"]  { grid-template-columns: repeat(8, minmax(0, 1fr)); }
  &[data-columns="9"]  { grid-template-columns: repeat(9, minmax(0, 1fr)); }
  &[data-columns="10"] { grid-template-columns: repeat(10, minmax(0, 1fr)); }
  &[data-columns="11"] { grid-template-columns: repeat(11, minmax(0, 1fr)); }
  &[data-columns="12"] { grid-template-columns: repeat(12, minmax(0, 1fr)); }

  /* Rows */
  &[data-rows="1"] { grid-template-rows: repeat(1, minmax(0, 1fr)); }
  &[data-rows="2"] { grid-template-rows: repeat(2, minmax(0, 1fr)); }
  &[data-rows="3"] { grid-template-rows: repeat(3, minmax(0, 1fr)); }
  &[data-rows="4"] { grid-template-rows: repeat(4, minmax(0, 1fr)); }
  &[data-rows="5"] { grid-template-rows: repeat(5, minmax(0, 1fr)); }
  &[data-rows="6"] { grid-template-rows: repeat(6, minmax(0, 1fr)); }

  /* Flow */
  &[data-flow="row"]          { grid-auto-flow: row; }
  &[data-flow="column"]       { grid-auto-flow: column; }
  &[data-flow="dense"]        { grid-auto-flow: dense; }
  &[data-flow="row-dense"]    { grid-auto-flow: row dense; }
  &[data-flow="column-dense"] { grid-auto-flow: column dense; }

  /* Justify Content */
  &[data-justify="start"]   { justify-content: start; }
  &[data-justify="end"]     { justify-content: end; }
  &[data-justify="center"]  { justify-content: center; }
  &[data-justify="between"] { justify-content: space-between; }
  &[data-justify="around"]  { justify-content: space-around; }
  &[data-justify="evenly"]  { justify-content: space-evenly; }

  /* Align Items */
  &[data-align="start"]    { align-items: start; }
  &[data-align="end"]      { align-items: end; }
  &[data-align="center"]   { align-items: center; }
  &[data-align="stretch"]  { align-items: stretch; }
  &[data-align="baseline"] { align-items: baseline; }
}`;

export const anatomySnippet = `${importSnippet}

<Grid />
`;

export const gapsSnippet = `${importSnippet}

const gaps = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

return gaps.map((gap) => (
  <Box key={gap} px="2" py="1">
    <Text>{gap}</Text>
    <Grid columns="2" gap={gap}>
      <Box px="2" py="1" className="border">Item 1</Box>
      <Box px="2" py="1" className="border">Item 2</Box>
    </Grid>
  </Box>
));`;

export const columnsSnippet = `${importSnippet}

const columns = ["1", "2", "3", "4", "5", "6"];

return columns.map((col) => (
  <Box key={col} px="2" py="1">
    <Text>{col}</Text>
    <Grid columns={col} gap="2">
      {Array.from({ length: Number(col) }).map((_, i) => (
        <Box key={i} px="2" py="1" className="border">Item {i + 1}</Box>
      ))}
    </Grid>
  </Box>
));`;

export const rowsSnippet = `${importSnippet}

const rows = ["1", "2", "3", "4", "5", "6"];

return rows.map((row) => (
  <Box key={row} px="2" py="1">
    <Text>{row}</Text>
    <Grid rows={row} flow="column" gap="2">
      {Array.from({ length: Number(row) }).map((_, i) => (
        <Box key={i} px="2" py="1" className="border">Item {i + 1}</Box>
      ))}
    </Grid>
  </Box>
));`;

export const flowSnippet = `${importSnippet}

const flows = ["row", "column", "dense", "row-dense", "column-dense"];

return flows.map((flow) => (
  <Box key={flow} px="2" py="1">
    <Text>{flow}</Text>
    <Grid columns="3" rows="2" flow={flow} gap="2">
      <Box px="2" py="1" className="border col-span-2">Item 1</Box>
      <Box px="2" py="1" className="border col-span-2">Item 2</Box>
      <Box px="2" py="1" className="border">Item 3</Box>
      <Box px="2" py="1" className="border">Item 4</Box>
      <Box px="2" py="1" className="border">Item 5</Box>
    </Grid>
  </Box>
));`;

export const justifySnippet = `${importSnippet}

const justifies = ["start", "end", "center", "between", "around", "evenly"];

return justifies.map((justify) => (
  <Box key={justify} px="2" py="1" className="w-full">
    <Text>{justify}</Text>
    <Grid justify={justify} gap="2" style={{ gridTemplateColumns: "auto auto" }}>
      <Box px="2" py="1" className="border">Item 1</Box>
      <Box px="2" py="1" className="border">Item 2</Box>
    </Grid>
  </Box>
));`;

export const alignSnippet = `${importSnippet}

const aligns = ["start", "end", "center", "stretch", "baseline"];

return aligns.map((align) => (
  <Box key={align} px="2" py="1">
    <Text>{align}</Text>
    <Grid columns="2" align={align} gap="2" style={{ height: "100px" }}>
      <Box px="2" py="1" className="border">Item 1</Box>
      <Box px="2" py="1" className="border">Item 2</Box>
    </Grid>
  </Box>
));`;
