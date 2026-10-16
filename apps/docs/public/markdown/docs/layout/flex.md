# Flex Component

A flexible layout component for arranging children with configurable gap, direction, justification, alignment, and wrapping.

```tsx
import { Box, Flex } from "@locus-ui/components";

export default function FlexExample() {
  return (
    <Flex gap="4" direction="row" align="center">
      <Box px="2" py="1" className="border">
        Item 1
      </Box>
      <Box px="2" py="1" className="border">
        Item 2
      </Box>
      <Box px="2" py="1" className="border">
        Item 3
      </Box>
    </Flex>
  );
}
```

```css
.flex {
  display: flex;

  /* Gap */
  &[data-gap="0"] { gap: 0; }
  &[data-gap="1"] { gap: calc(4px * var(--lcs-spacing, 1)); }
  &[data-gap="2"] { gap: calc(8px * var(--lcs-spacing, 1)); }
  &[data-gap="3"] { gap: calc(12px * var(--lcs-spacing, 1)); }
  &[data-gap="4"] { gap: calc(16px * var(--lcs-spacing, 1)); }
  &[data-gap="5"] { gap: calc(20px * var(--lcs-spacing, 1)); }
  &[data-gap="6"] { gap: calc(24px * var(--lcs-spacing, 1)); }
  &[data-gap="7"] { gap: calc(28px * var(--lcs-spacing, 1)); }
  &[data-gap="8"] { gap: calc(32px * var(--lcs-spacing, 1)); }

  /* Direction */
  &[data-direction="row"]            { flex-direction: row; }
  &[data-direction="column"]         { flex-direction: column; }
  &[data-direction="row-reverse"]    { flex-direction: row-reverse; }
  &[data-direction="column-reverse"] { flex-direction: column-reverse; }

  /* Justify Content */
  &[data-justify="start"]   { justify-content: flex-start; }
  &[data-justify="end"]     { justify-content: flex-end; }
  &[data-justify="center"]  { justify-content: center; }
  &[data-justify="between"] { justify-content: space-between; }
  &[data-justify="around"]  { justify-content: space-around; }
  &[data-justify="evenly"]  { justify-content: space-evenly; }

  /* Align Items */
  &[data-align-items="flex-start"] { align-items: flex-start; }
  &[data-align-items="flex-end"]   { align-items: flex-end; }
  &[data-align-items="center"]     { align-items: center; }
  &[data-align-items="baseline"]   { align-items: baseline; }
  &[data-align-items="stretch"]    { align-items: stretch; }

  /* Wrap */
  &[data-wrap="wrap"]         { flex-wrap: wrap; }
  &[data-wrap="nowrap"]       { flex-wrap: nowrap; }
  &[data-wrap="wrap-reverse"] { flex-wrap: wrap-reverse; }
}
```

## Anatomy

Import the component:

```typescript
import { Box, Flex } from "@locus-ui/components";

<Flex />;
```

## Examples

### Gaps

The `gap` prop controls the spacing between child elements using predefined scale values `0` through `8`.

```tsx
import { Box, Flex } from "@locus-ui/components";

export default function FlexGapsExample() {
  const gaps = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

  return gaps.map((gap) => (
    <Box key={gap} px="2" py="1">
      <Text>{gap}</Text>
      <Flex gap={gap}>
        <Box px="2" py="1" className="border">
          Item 1
        </Box>
        <Box px="2" py="1" className="border">
          Item 2
        </Box>
      </Flex>
    </Box>
  ));
}
```

### Directions

The `direction` prop sets the flex direction: `row`, `row-reverse`, `column`, or `column-reverse`.

```tsx
import { Box, Flex } from "@locus-ui/components";

export default function FlexDirectionsExample() {
  const directions = ["row", "row-reverse", "column", "column-reverse"];

  return directions.map((direction) => (
    <Box key={direction} px="2" py="1">
      <Text>{direction}</Text>
      <Flex direction={direction} gap="2">
        <Box px="2" py="1" className="border">
          Item 1
        </Box>
        <Box px="2" py="1" className="border">
          Item 2
        </Box>
      </Flex>
    </Box>
  ));
}
```

### Justify

The `justify` prop controls the main-axis alignment: `start`, `end`, `center`, `between`, `around`, or `evenly`.

```tsx
import { Box, Flex } from "@locus-ui/components";

export default function FlexJustifyExample() {
  const justifies = ["start", "end", "center", "between", "around", "evenly"];

  return justifies.map((justify) => (
    <Box key={justify} px="2" py="1">
      <Text>{justify}</Text>
      <Flex justify={justify} gap="2" className="w-full">
        <Box px="2" py="1" className="border">
          Item 1
        </Box>
        <Box px="2" py="1" className="border">
          Item 2
        </Box>
      </Flex>
    </Box>
  ));
}
```

### Align

The `align` prop controls the cross-axis alignment: `start`, `end`, `center`, `stretch`, or `baseline`.

```tsx
import { Box, Flex } from "@locus-ui/components";

export default function FlexAlignExample() {
  const aligns = ["start", "end", "center", "stretch", "baseline"];

  return aligns.map((align) => (
    <Box key={align} px="2" py="1">
      <Text>{align}</Text>
      <Flex align={align} gap="2" style={{ height: "100px" }}>
        <Box px="2" py="1" className="border">
          Item 1
        </Box>
        <Box px="2" py="1" className="border">
          Item 2
        </Box>
      </Flex>
    </Box>
  ));
}
```

### Wrap

The `wrap` prop controls flex wrapping: `nowrap`, `wrap`, or `wrap-reverse`.

```tsx
import { Box, Flex } from "@locus-ui/components";

export default function FlexWrapExample() {
  const wraps = ["nowrap", "wrap", "wrap-reverse"];

  return wraps.map((wrap) => (
    <Box key={wrap} px="2" py="1">
      <Text>{wrap}</Text>
      <Flex wrap={wrap} gap="2" style={{ width: "200px" }}>
        <Box px="2" py="1" className="border">
          Item 1
        </Box>
        <Box px="2" py="1" className="border">
          Item 2
        </Box>
        <Box px="2" py="1" className="border">
          Item 3
        </Box>
      </Flex>
    </Box>
  ));
}
```
