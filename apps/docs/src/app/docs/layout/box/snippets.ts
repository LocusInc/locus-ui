const importSnippet = `import { Box, Text } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Box p="4" radius="md" className="border">
  <Text>Content inside a Box</Text>
</Box>`;

export const styleSnippet = `.lcs-box {
  /* border-color: rgb(var(--border-color)); */
}`;

export const anatomySnippet = `${importSnippet}

<Box />
`;

export const radiiSnippet = `${importSnippet}

const radii = ["none", "xs", "sm", "md", "lg", "xl", "full"];

return radii.map((radius) => (
  <Box key={radius} radius={radius} p="2" className="border">
    <Text>{radius}</Text>
  </Box>
));`;

export const roundnessSnippet = `${importSnippet}

const numbers = ["1", "2", "3", "4", "5", "6"];

return numbers.map((number) => (
  <Box key={number} radius="md" roundness={number} p="2" className="border">
    <Text>{number}</Text>
  </Box>
));`;

export const paddingSnippet = `${importSnippet}

const paddings = ["0", "1", "2", "3", "4", "5", "6", "8"];

return paddings.map((p) => (
  <Box key={p} p={p} className="border">
    <Text>{p}</Text>
  </Box>
));`;

export const marginSnippet = `${importSnippet}

const margins = ["0", "1", "2", "3", "4", "5", "6", "8"];

return margins.map((m) => (
  <Box key={m} m={m} className="border" p="2">
    <Text>{m}</Text>
  </Box>
));`;
