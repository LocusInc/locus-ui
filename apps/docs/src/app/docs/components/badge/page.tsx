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

      <Text className="mt-4 -mb-4">Color Inheritance</Text>
      <Text>
        Works with any svg with <code>fill=&quot;currentColor&quot;</code>
      </Text>
      <Box className="flex flex-wrap gap-4">
        {variants.map((variant) => (
          <Badge key={variant} variant={variant} color="success">
            Verified
            <CheckMark />
          </Badge>
        ))}
      </Box>
    </Container>
  );
}

const CheckMark = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};
