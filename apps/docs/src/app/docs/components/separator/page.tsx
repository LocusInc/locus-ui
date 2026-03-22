import { Box, Container, Separator, Text } from "@locus-ui/components";

export default function SeparatorPage() {
  const variants = ["solid", "dashed", "dotted"];

  const five = [...Array(5).keys()];

  return (
    <Container className="flex flex-col gap-4 p-4 w-full min-h-full">
      <Text className="text-2xl font-bold mb-4">Separator Component</Text>

      <Text className="font-bold">Positions</Text>

      <Box className="flex gap-4 flex-wrap">
        <Box className="flex flex-col gap-2">
          <Text>Horizontal</Text>

          <Box className="flex-1 flex flex-col gap-2 min-h-20 w-20">
            {five.map((_, index) => (
              <Separator
                key={index}
                className="flex-1"
                direction="horizontal"
              />
            ))}
          </Box>
        </Box>

        <Box className="flex flex-col gap-2">
          <Text>Vertical</Text>

          <Box className="flex-1 flex gap-2 min-h-20 w-20">
            {five.map((_, index) => (
              <Separator className="flex-1" key={index} direction="vertical" />
            ))}
          </Box>
        </Box>
      </Box>

      <Box className="flex flex-col gap-2">
        <Text className="font-bold">Variants</Text>

        <Box className="flex gap-4 flex-wrap">
          {variants.map((variant) => (
            <Box key={variant} className="flex-1 flex items-center gap-4">
              <Text className="capitalize">{variant}</Text>

              <Separator variant={variant as "solid" | "dashed" | "dotted"} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
