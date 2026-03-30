const importSnippet = `import { Box, Text } from "@locus-ui/components";`;

export const indexSnippet = `${importSnippet}

<Box p="2" radius="md" className="border">
  <Text>Medium Radius</Text>
</Box>`;

export const anatomySnippet = `${importSnippet}

<Box radius="md" />
<Box radius="26px" />
<Box radius={{ initial: "none", lg: "full" }} />
`;

export const allRadiiSnippet = `${importSnippet}

const numbers = ["1", "2", "3", "4", "5", "6"];
const radii = ["none", "xs", "sm", "md", "lg", "xl", "full"];

return numbers.map((number) => (
  <Box key={number} className="flex gap-2">
    {radii.map((radius) => (
      <Box p="2" key={radius} radius={radius} roundness={number} className="border">
        <Text>{radius}, {number}</Text>
      </Box>
    ))}
  </Box>
));`;

export const inheritanceSnippet = `${importSnippet}

<Box radius="none" p="2" className="border">
  <Text>No Radius</Text>

  <Box radius="xl" p="2" className="border">
    <Text>XL Radius</Text>

    <Box p="2" className="border">
      <Text>Default/Theme</Text>
    </Box>
  </Box>

  <Box radius="inherit" p="2" className="border mt-2">
    <Text>Inherit</Text>

    <Box p="2" className="border">
      <Text>Default/Theme</Text>
    </Box>
  </Box>
</Box>

<Box radius="9px" p="2" mt="4" className="border">
  <Text>This box has a custom radius (9px)</Text>

  <Box radius="inherit" p="2" mt="2" className="border">
    <Text>Inherit</Text>
  </Box>

  <Box p="2" mt="2" className="border">
    <Text>Default/Theme</Text>
  </Box>
</Box>`;

export const responsiveSnippet = `${importSnippet}

<Box p="2" my="4" radius={{ initial: "xs", sm: "xl", md: "full" }} className="border">
  <Text>This box has breakpoint-specific radii (xs initial, xl on sm, full on md)</Text>
</Box>`;

export const cornerRadiiSnippet = `${importSnippet}

<Box p="2" radius-t="xl" radius="none" className="border">
  <Text>XL top radius only</Text>
</Box>

<Box p="2" radius-l="xl" radius="none" className="border">
  <Text>XL left radius only</Text>
</Box>

<Box p="2" radius-b="xl" radius="none" className="border">
  <Text>XL bottom radius only</Text>
</Box>

<Box p="2" radius-r="xl" radius="none" className="border">
  <Text>XL right radius only</Text>
</Box>`;

export const individualCornerSnippet = `${importSnippet}

<Box p="2" radius-tl="xl" radius="none" className="border">
  <Text>XL top-left radius only</Text>
</Box>

<Box p="2" radius-tr="xl" radius="none" className="border">
  <Text>XL top-right radius only</Text>
</Box>

<Box p="2" radius-br="xl" radius="none" className="border">
  <Text>XL bottom-right radius only</Text>
</Box>

<Box p="2" radius-bl="xl" radius="none" className="border">
  <Text>XL bottom-left radius only</Text>
</Box>`;
