# Box Component

A versatile container used to provide layout and styling capabilities with configurable padding, margin, radius, and roundness.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function BoxExample() {
  return (
    <Box p="4" radius="md" className="border">
      <Text>Content inside a Box</Text>
    </Box>
  );
}
```

```css
.lcs-box {
  /* border-color: rgb(var(--border-color)); */
}
```

## Anatomy

Import the component:

```typescript
import { Box, Text } from "@locus-ui/components";

<Box />;
```

## Examples

Box components are used to provide a styled wrapper for other components. Boxes use the theme settings by default, and can be specified as needed.

### Radii

The `radius` prop controls the border-radius of the element using predefined scale values: `none`, `xs`, `sm`, `md`, `lg`, `xl`, `full`.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function BoxRadiiExample() {
  const radii = ["none", "xs", "sm", "md", "lg", "xl", "full"];

  return radii.map((radius) => (
    <Box key={radius} radius={radius} p="2" className="border">
      <Text>{radius}</Text>
    </Box>
  ));
}
```

### Roundness

The `roundness` prop sets a multiplier for the element's radius: `1` through `6`.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function BoxRoundnessExample() {
  const numbers = ["1", "2", "3", "4", "5", "6"];

  return numbers.map((number) => (
    <Box key={number} radius="md" roundness={number} p="2" className="border">
      <Text>{number}</Text>
    </Box>
  ));
}
```

### Padding

The `p` prop controls padding on all sides using predefined scale values `0` through `8`.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function BoxPaddingExample() {
  const paddings = ["0", "1", "2", "3", "4", "5", "6", "8"];

  return paddings.map((p) => (
    <Box key={p} p={p} className="border">
      <Text>{p}</Text>
    </Box>
  ));
}
```

### Margin

The `m` prop controls margin on all sides using predefined scale values `0` through `8`.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function BoxMarginExample() {
  const margins = ["0", "1", "2", "3", "4", "5", "6", "8"];

  return margins.map((m) => (
    <Box key={m} m={m} className="border" p="2">
      <Text>{m}</Text>
    </Box>
  ));
}
```
