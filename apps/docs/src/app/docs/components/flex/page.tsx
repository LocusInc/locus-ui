import { Box, Container, Flex, Text } from "@locus-ui/components";

export default function FlexPage() {
  const gaps = ["0", "1", "2", "3", "4", "5", "6", "7", "8"] as const;
  const directions = [
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ] as const;
  const justifies = [
    "start",
    "end",
    "center",
    "between",
    "around",
    "evenly",
  ] as const;
  const aligns = ["start", "end", "center", "stretch", "baseline"] as const;
  const wraps = ["nowrap", "wrap", "wrap-reverse"] as const;

  return (
    <Container className="flex flex-col gap-4 p-4 w-full min-h-full">
      <Text className="text-2xl font-bold mb-4">Panel Component</Text>

      <Text>Gaps</Text>
      <Flex wrap="wrap" gap="4">
        {gaps.map((gap) => (
          <Box key={gap} px="2" py="1" className="border">
            <Text>{gap}</Text>
            <Flex gap={gap}>
              <Box px="2" py="1" className="border">
                Item 1
              </Box>
              <Box px="2" py="1" className="border">
                Item 2
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>

      <Text>Directions</Text>
      <Flex wrap="wrap" gap="4">
        {directions.map((direction) => (
          <Box key={direction} px="2" py="1" className="border">
            <Text>{direction}</Text>
            <Flex direction={direction} gap="2">
              <Box px="2" py="1" className="border">
                Item 1
              </Box>
              <Box px="2" py="1" className="border">
                Item 2
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>

      <Text>Justify</Text>
      <Flex wrap="wrap" gap="4">
        {justifies.map((justify) => (
          <Box key={justify} px="2" py="1" className="border w-full">
            <Text>{justify}</Text>
            <Flex justify={justify} gap="2" className="w-full">
              <Box px="2" py="1" className="border">
                Item 1
              </Box>
              <Box px="2" py="1" className="border">
                Item 2
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>

      <Text>Align</Text>
      <Flex wrap="wrap" gap="4">
        {aligns.map((align) => (
          <Box key={align} px="2" py="1" className="border">
            <Text>{align}</Text>
            <Flex align={align} gap="2" style={{ height: "100px" }}>
              <Box px="2" py="1" className="border">
                Item 1
              </Box>
              <Box px="2" py="1" className="border">
                Item 2
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>

      <Text>Wrap</Text>
      <Flex wrap="wrap" gap="4">
        {wraps.map((wrap) => (
          <Box key={wrap} px="2" py="1" className="border">
            <Text>{wrap}</Text>
            <Flex wrap={wrap} gap="2" style={{ width: "200px" }}>
              <Box px="2" py="1" className="border">
                Item 1
              </Box>
              <Box px="2" py="1" className="border">
                Item 2
              </Box>
              <Box px="2" py="1" className="border">
                Item 3
              </Box>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Container>
  );
}
