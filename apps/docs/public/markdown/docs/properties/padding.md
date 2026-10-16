# Padding Property

Controls padding for elements. Supports scaled values, custom values, and directional control.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function PaddingExample() {
  return (
    <Box p="4" className="border">
      <Text>Padding of 4</Text>
    </Box>
  );
}
```

## Examples

### Padding Scale

The `p` prop accepts scale values `0`–`8` for consistent spacing.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function PaddingPaddingScaleExample() {
  const paddingValues = [0, 1, 2, 3, 4, 5, 6, 8];

  return paddingValues.map((num) => (
    <Box key={num} className="border h-fit" p={`${num}`}>
      {num}
    </Box>
  ));
}
```

### Padding Directions

Use `p`, `pt`, `pb`, `pl`, `pr`, `px`, and `py` for directional padding control.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function PaddingPaddingDirectionsExample() {
  return (
    <>
      <Box p="2" className="border">
        p = 2
      </Box>
      <Box pt="2" className="border">
        pt = 2
      </Box>
      <Box pb="2" className="border">
        pb = 2
      </Box>
      <Box pl="2" className="border">
        pl = 2
      </Box>
      <Box pr="2" className="border">
        pr = 2
      </Box>
      <Box px="2" className="border">
        px = 2
      </Box>
      <Box py="2" className="border">
        py = 2
      </Box>
    </>
  );
}
```

### Custom Padding

Padding also accepts custom CSS values.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function PaddingCustomPaddingExample() {
  return (
    <Box className="border w-fit" p="17px">
      p = 17px
    </Box>
  );
}
```
