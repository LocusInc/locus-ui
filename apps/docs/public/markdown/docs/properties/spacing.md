# Spacing Property

Controls the overall spacing scale for elements. Supports scaled values and inheritance from parent elements.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function SpacingExample() {
  return (
    <Box spacing="lg" p="4" className="border">
      <Text>Large Spacing</Text>
    </Box>
  );
}
```

## Examples

### Spacing Scale

The `spacing` prop sets the overall spacing scale for an element: `xs`, `sm`, `md`, `lg`, or `xl`.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function SpacingSpacingPropertyExample() {
  const spacingValues = ["xs", "sm", "md", "lg", "xl"];

  return spacingValues.map((size) => (
    <Box p="4" key={size} className="border" spacing={size}>
      {size}
    </Box>
  ));
}
```

### Spacing Inheritance

Child elements use the theme spacing unless they are given `spacing="inherit"`.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function SpacingSpacingInheritanceExample() {
  return (
    <Box
      p="2"
      m="2"
      spacing="xl"
      className="border border-[rgb(var(--border-1))]"
    >
      Parent Box (XL Spacing, p=2, m=2)
      <Box
        p="2"
        m="2"
        spacing="inherit"
        className="border border-[rgb(var(--border-1))]"
      >
        Child 1 (Inherited Spacing, p=2, m=2)
      </Box>
      <Box p="2" m="2" className="border border-[rgb(var(--border-1))]">
        Child 2 (Default Spacing, p=2, m=2)
      </Box>
    </Box>
  );
}
```
