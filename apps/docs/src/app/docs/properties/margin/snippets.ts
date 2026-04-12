const importSnippet = `import { Box, Text } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Box m="4" className="border">
  <Text>Margin of 4</Text>
</Box>`;

export const marginScaleSnippet = `${importSnippet}

const marginValues = [0, 1, 2, 3, 4, 5, 6, 8, "auto"];

return marginValues.map((num) => (
  <Box key={num} className="border h-fit" m={\`\${num}\`}>
    {num}
  </Box>
));`;

export const negativeMarginSnippet = `${importSnippet}

const negativeMarginValues = [-8, -6, -5, -4, -3, -2, -1];

return negativeMarginValues.map((num) => (
  <Box key={num} className="border h-fit" mb={\`\${num}\`}>
    {num}
  </Box>
));`;

export const marginDirectionsSnippet = `${importSnippet}

<Box m="2" className="border">m = 2</Box>
<Box mt="2" className="border">mt = 2</Box>
<Box mb="2" className="border">mb = 2</Box>
<Box ml="2" className="border">ml = 2</Box>
<Box mr="2" className="border">mr = 2</Box>
<Box mx="2" className="border">mx = 2</Box>
<Box my="2" className="border">my = 2</Box>`;

export const customMarginSnippet = `${importSnippet}

<Box className="border w-fit" m="17px">
  m = 17px
</Box>`;
