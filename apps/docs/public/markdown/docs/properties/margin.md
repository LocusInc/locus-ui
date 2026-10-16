# Margin Property

Controls margin for elements. Supports scaled values, custom values, directional control, and negative margins.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function MarginExample() {
  return (
    <Box m="4" className="border">
      <Text>Margin of 4</Text>
    </Box>
  );
}
```

## Examples

### Margin Scale

The `m` prop accepts scale values `0`–`8` and `auto`.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function MarginMarginScaleExample() {
  const marginValues = [0, 1, 2, 3, 4, 5, 6, 8, "auto"];

  return marginValues.map((num) => (
    <Box key={num} className="border h-fit" m={`${num}`}>
      {num}
    </Box>
  ));
}
```

### Negative Margins

Margin supports negative values for overlapping layouts.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function MarginNegativeMarginExample() {
  const negativeMarginValues = [-8, -6, -5, -4, -3, -2, -1];

  return negativeMarginValues.map((num) => (
    <Box key={num} className="border h-fit" mb={`${num}`}>
      {num}
    </Box>
  ));
}
```

### Margin Directions

Use `m`, `mt`, `mb`, `ml`, `mr`, `mx`, and `my` for directional margin control.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function MarginMarginDirectionsExample() {
  return (
    <>
      <Box m="2" className="border">
        m = 2
      </Box>
      <Box mt="2" className="border">
        mt = 2
      </Box>
      <Box mb="2" className="border">
        mb = 2
      </Box>
      <Box ml="2" className="border">
        ml = 2
      </Box>
      <Box mr="2" className="border">
        mr = 2
      </Box>
      <Box mx="2" className="border">
        mx = 2
      </Box>
      <Box my="2" className="border">
        my = 2
      </Box>
    </>
  );
}
```

### Custom Margin

Margin also accepts custom CSS values.

```tsx
import { Box, Text } from "@locus-ui/components";

export default function MarginCustomMarginExample() {
  return (
    <Box className="border w-fit" m="17px">
      m = 17px
    </Box>
  );
}
```
