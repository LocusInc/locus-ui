const importSnippet = `import { Box, Text } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Box p="4" className="border">
  <Text>Padding of 4</Text>
</Box>`;

export const paddingScaleSnippet = `${importSnippet}

const paddingValues = [0, 1, 2, 3, 4, 5, 6, 8];

return paddingValues.map((num) => (
  <Box key={num} className="border h-fit" p={\`\${num}\`}>
    {num}
  </Box>
));`;

export const paddingDirectionsSnippet = `${importSnippet}

<Box p="2" className="border">p = 2</Box>
<Box pt="2" className="border">pt = 2</Box>
<Box pb="2" className="border">pb = 2</Box>
<Box pl="2" className="border">pl = 2</Box>
<Box pr="2" className="border">pr = 2</Box>
<Box px="2" className="border">px = 2</Box>
<Box py="2" className="border">py = 2</Box>`;

export const customPaddingSnippet = `${importSnippet}

<Box className="border w-fit" p="17px">
  p = 17px
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

export const spacingPropertySnippet = `${importSnippet}

const spacingValues = ["xs", "sm", "md", "lg", "xl"];

return spacingValues.map((size) => (
  <Box p="4" key={size} className="border" spacing={size}>
    {size}
  </Box>
));`;

export const spacingInheritanceSnippet = `${importSnippet}

<Box spacing="xl" className="border" p="2" m="2">
  Parent Box (XL Spacing, p=2, m=2)
  <Box className="border" p="2" m="2">
    Child 1 (Default Spacing, p=2, m=2)
  </Box>
</Box>`;
