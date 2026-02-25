import { Box, Button, Container, Text } from "locus-ui";

export default function ButtonPage() {
  const variants = ["solid", "outlined", "muted", "clear"] as const;
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
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

  return (
    <Container className="flex flex-col gap-4 p-4 w-full min-h-full">
      <Text className="text-2xl font-bold mb-4">Button Component</Text>

      <Text>Variants</Text>
      <Box className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Button key={variant} variant={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Button
          </Button>
        ))}
      </Box>

      <Text>Colors</Text>
      <Box className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <Button key={color} color={color} variant="muted">
            {color.charAt(0).toUpperCase() + color.slice(1)} Button
          </Button>
        ))}
      </Box>

      <Text>Sizes</Text>
      <Box className="flex flex-wrap gap-4">
        {sizes.map((size) => (
          <Button key={size} size={size} variant="muted">
            {size.toUpperCase()} Button
          </Button>
        ))}
      </Box>

      <Text>States</Text>
      <Box className="flex flex-wrap gap-4">
        <Button variant="solid">Default</Button>
        <Button variant="solid" disabled>
          Disabled
        </Button>
        <Button variant="solid" readonly>
          Readonly
        </Button>
      </Box>
      <Box className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Button disabled key={variant} variant={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Disabled
          </Button>
        ))}
      </Box>

      <Text>High Contrast</Text>
      <Box className="flex flex-wrap gap-4">
        <Button highContrast variant="solid">
          Solid
        </Button>
      </Box>
    </Container>
  );
}
