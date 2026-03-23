import { Box, Text } from "@locus-ui/components";

export default function Docs() {
  return (
    <Box px="2" py="4" className="flex gap-4 flex-col w-full h-screen">
      <Text className="text-4xl font-bold"> Locus UI</Text>

      <Text>
        Locus UI is an (optionally) unstyled React component library for
        building accessible and customizable user interfaces. It provides a set
        of components that can be easily styled and composed to create unique
        designs while ensuring accessibility and usability.
      </Text>

      <Text>
        Our goal is to provide optional theme capabilities for out of the box
        use, while also allowing for complete customization and control over the
        components. We believe that by providing a solid foundation of
        accessible components, developers can focus on creating great user
        experiences without worrying about the underlying implementation
        details.
      </Text>
    </Box>
  );
}
