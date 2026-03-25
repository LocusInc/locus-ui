import { Box, Container, Panel, Text } from "@locus-ui/components";

export default function PanelPage() {
  const variants = ["solid", "outlined", "muted"] as const;
  const blurs = ["0px", "2px", "4px"] as const;
  const colors = [
    "primary",
    "secondary",
    "tertiary",
    "accent",
    "success",
    "danger",
    "warning",
    "info",
  ] as const;

  return (
    <Container className="flex flex-col gap-4 p-4 w-full min-h-full">
      <Text className="text-2xl font-bold mb-4">Panel Component</Text>

      <Text>Variants</Text>
      <Box className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Panel key={variant} variant={variant} p="4">
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Panel
          </Panel>
        ))}
      </Box>

      <Text>Blurring</Text>
      <Box className="flex flex-wrap gap-4">
        <Box className="absolute">
          <Text>Test Text Test Text Test Text Test Text Test Test Text</Text>
        </Box>

        {blurs.map((blur) => (
          <Panel key={blur} blur={blur} p="4" variant="muted">
            Blur: {blur}
          </Panel>
        ))}
      </Box>

      <Text>Colors</Text>
      <Box className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <Panel key={color} color={color} px="4" py="2" variant="muted">
            <Text color={color}>
              {color.charAt(0).toUpperCase() + color.slice(1)} Panel
            </Text>
          </Panel>
        ))}
      </Box>
    </Container>
  );
}
