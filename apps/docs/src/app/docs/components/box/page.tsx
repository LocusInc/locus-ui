import { Box, Container, Text } from "@locus-ui/components";

export default function BoxPage() {
  const numbers = ["1", "2", "3", "4", "5", "6"] as const;
  const radii = ["none", "xs", "sm", "md", "lg", "xl", "full"] as const;

  return (
    <Container className="flex flex-col gap-4 p-4 w-full min-h-full">
      <Text className="text-2xl font-bold mb-4">Box Component</Text>

      <Box className="p-2 m-4 border">
        <Text>This box uses the default theme</Text>
      </Box>

      <Text>All Radii/Roundness</Text>

      <Box className="flex flex-col gap-2 p-4">
        {numbers.map((number) => (
          <Box key={number} className="flex gap-2">
            {radii.map((radius) => (
              <Box
                key={radius}
                radius={radius}
                roundness={number}
                className="p-2 border"
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

      <Box radius="none" className="p-2 border">
        <Text>No Radius</Text>

        <Box radius="xl" className="p-2 border">
          <Text>XL Radius</Text>

          <Box className="p-2 border">
            <Text>Default/Theme</Text>
          </Box>
        </Box>

        <Box radius="inherit" className="p-2 border mt-2">
          <Text>Inherit</Text>

          <Box className="p-2 border">
            <Text>Default/Theme</Text>
          </Box>
        </Box>
      </Box>

      <Box radius="9px" className="p-2 border mt-4">
        <Text>This box has a custom radius (9px)</Text>

        <Box radius="inherit" className="p-2 border mt-2">
          <Text>Inherit</Text>
        </Box>

        <Box className="p-2 border mt-2">
          <Text>Default/Theme</Text>
        </Box>
      </Box>

      <Box radius={{ initial: "sm", xs: "full" }} className="p-2 border mt-4">
        <Text>
          This box has breakpoint-specific radii (sm on sm, 10px on lg)
        </Text>
      </Box>
    </Container>
  );
}
