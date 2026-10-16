# Radius Property

Controls the border-radius of elements. Supports scaled values, custom values, responsive breakpoints, inheritance, and individual corner control.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function RadiusExample() {
  return (
    <Box p="2" radius="md" className="border">
      <Text>Medium Radius</Text>
    </Box>
  );
}
```

## Examples

### All Radii / Roundness

The `radius` prop accepts values `none`, `xs`, `sm`, `md`, `lg`, `xl`, and `full`. Combined with the `roundness` multiplier (`1`–`6`), this creates a full matrix of border-radius options.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function RadiusAllRadiiExample() {
  const numbers = ["1", "2", "3", "4", "5", "6"];
  const radii = ["none", "xs", "sm", "md", "lg", "xl", "full"];

  return numbers.map((number) => (
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
  ));
}
```

### Inheritance

Radius values can be inherited from parent elements using `radius="inherit"`, or fall back to the theme default.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function RadiusInheritanceExample() {
  return (
    <>
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
    </>
  );
}
```

### Responsive

Radius supports responsive values using breakpoint objects.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function RadiusResponsiveExample() {
  return (
    <Box
      p="2"
      my="4"
      radius={{ initial: "xs", sm: "xl", md: "full" }}
      className="border"
    >
      <Text>
        This box has breakpoint-specific radii (xs initial, xl on sm, full on
        md)
      </Text>
    </Box>
  );
}
```

### Side Radii

Use `radius-t`, `radius-r`, `radius-b`, and `radius-l` to set radius on specific sides.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function RadiusCornerRadiiExample() {
  return (
    <>
      <Box p="2" radius-t="xl" radius="none" className="border">
        <Text>XL top radius only</Text>
      </Box>

      <Box p="2" radius-l="xl" radius="none" className="border">
        <Text>XL left radius only</Text>
      </Box>

      <Box p="2" radius-b="xl" radius="none" className="border">
        <Text>XL bottom radius only</Text>
      </Box>

      <Box p="2" radius-r="xl" radius="none" className="border">
        <Text>XL right radius only</Text>
      </Box>
    </>
  );
}
```

### Individual Corner Radii

Use `radius-tl`, `radius-tr`, `radius-br`, and `radius-bl` to set radius on individual corners.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function RadiusIndividualCornerExample() {
  return (
    <>
      <Box p="2" radius-tl="xl" radius="none" className="border">
        <Text>XL top-left radius only</Text>
      </Box>

      <Box p="2" radius-tr="xl" radius="none" className="border">
        <Text>XL top-right radius only</Text>
      </Box>

      <Box p="2" radius-br="xl" radius="none" className="border">
        <Text>XL bottom-right radius only</Text>
      </Box>

      <Box p="2" radius-bl="xl" radius="none" className="border">
        <Text>XL bottom-left radius only</Text>
      </Box>
    </>
  );
}
```
