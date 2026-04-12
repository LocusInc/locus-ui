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
