const importSnippet = `import { Box, Text } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Box spacing="lg" p="4" className="border">
  <Text>Large Spacing</Text>
</Box>`;

export const spacingPropertySnippet = `${importSnippet}

const spacingValues = ["xs", "sm", "md", "lg", "xl"];

return spacingValues.map((size) => (
  <Box p="4" key={size} className="border" spacing={size}>
    {size}
  </Box>
));`;

export const spacingInheritanceSnippet = `${importSnippet}

<Box
  p="2"
  m="2"
  spacing="xl"
  className="border border-[rgb(var(--border-1))]"
>
  Parent Box (XL Spacing, p=2, m=2)
  <Box 
    p="2" 
    m="2"
    spacing="inherit"
    className="border border-[rgb(var(--border-1))]" 
  >
    Child 1 (Inherited Spacing, p=2, m=2)
  </Box>

  <Box
    p="2"
    m="2"
    className="border border-[rgb(var(--border-1))]"
  >
    Child 2 (Default Spacing, p=2, m=2)
  </Box>
</Box>`;
