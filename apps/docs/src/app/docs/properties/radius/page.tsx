import { Box, Container, Text } from "locus-ui";

export default function BoxPage() {
  const numbers = ["1", "2", "3", "4", "5", "6"] as const;
  const radii = ["none", "xs", "sm", "md", "lg", "xl", "full"] as const;

  return (
    <Container className="flex flex-col gap-4 p-4 w-full min-h-full">
      <Text className="text-2xl font-bold mb-4">Radius Property</Text>

      <Box p="2" m="4" className="border">
        <Text>This box uses the default theme</Text>
      </Box>

      <Text>All Radii/Roundness</Text>

      <Box p="4" className="flex flex-col gap-2">
        {numbers.map((number) => (
          <Box key={number} className="flex gap-2">
            {radii.map((radius) => (
              <Box
                p="2"
                key={radius}
                radius={radius}
                roundness={number}
                className="border"
              >
                <Text>
                  {radius}, {number}
                </Text>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <Text>Inheritance</Text>

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
      </Box>

      <Box
        p="2"
        my="4"
        radius={{ initial: "xs", sm: "xl", md: "full" }}
        className="border"
      >
        <Text>
          This box has breakpoint-specific radii (sm on sm, 10px on lg)
        </Text>
      </Box>

      <Text>Individual Corner Radii</Text>

      <Box my="4" p="2" className="flex gap-2">
        <Box p="2" radius-t="xl" radius="none" className="border">
          <Text>This box has xl top radius only</Text>
        </Box>

        <Box p="2" radius-l="xl" radius="none" className="border">
          <Text>This box has xl left radius only</Text>
        </Box>

        <Box p="2" radius-b="xl" radius="none" className="border">
          <Text>This box has xl bottom radius only</Text>
        </Box>

        <Box p="2" radius-r="xl" radius="none" className="border">
          <Text>This box has xl right radius only</Text>
        </Box>
      </Box>

      <Box my="4" p="2" className="flex gap-2">
        <Box p="2" radius-tl="xl" radius="none" className="border">
          <Text>This box has xl top radius only</Text>
        </Box>

        <Box p="2" radius-tr="xl" radius="none" className="border">
          <Text>This box has xl left radius only</Text>
        </Box>

        <Box p="2" radius-br="xl" radius="none" className="border">
          <Text>This box has xl bottom radius only</Text>
        </Box>

        <Box p="2" radius-bl="xl" radius="none" className="border">
          <Text>This box has xl right radius only</Text>
        </Box>
      </Box>
    </Container>
  );
}
