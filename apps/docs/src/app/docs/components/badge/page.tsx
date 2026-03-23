import { Badge, Box, Container, Text } from "@locus-ui/components";

export default function BadgePage() {
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
      <Text className="text-2xl font-bold mb-4">Badge Component</Text>

      <Text>Variants</Text>
      <Box className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Badge key={variant} variant={variant}>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Badge
          </Badge>
        ))}
      </Box>

      <Text>Colors</Text>
      <Box className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <Badge key={color} color={color} variant="muted">
            {color.charAt(0).toUpperCase() + color.slice(1)} Badge
          </Badge>
        ))}
      </Box>

      <Text>Sizes</Text>
      <Box className="flex flex-wrap gap-4">
        {sizes.map((size) => (
          <Badge key={size} size={size} variant="muted">
            {size.toUpperCase()} Badge
          </Badge>
        ))}
      </Box>
    </Container>
  );
}
